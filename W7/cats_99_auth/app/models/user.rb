class User < ApplicationRecord
  attr_reader :password
  validates :user_name, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  after_initialize :ensure_session_token

  def self.find_by_credentials(user_name, password)
    user = User.find_by(user_name: user_name) 
    if user && user.is_valid_password?(password)
      return user
    else
      return nil
    end
  end

  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  def is_valid_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64
    self.save!
    self.session_token
  end

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end



end
