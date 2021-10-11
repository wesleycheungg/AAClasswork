class User < ApplicationRecord
  attr_reader :password
  validates :user_name, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  after_initialize :ensure_session_token


  def password=(password)
    self.password_digest = BCrypt::Password.create(password)
    @password = password
  end

  

  private

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64
  end

end
