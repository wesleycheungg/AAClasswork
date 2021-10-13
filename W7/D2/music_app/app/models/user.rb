class User < ApplicationRecord
  attr_reader :password
  validates :email, :session_token, presence: true, uniqueness: true
  validates :password_digest, presence: true
  validates :password, length: {minimum: 6}, allow_nil: true 
  after_initialize :ensure_session_token
  
  def self.generate_session_token
    session_token = SecureRandom::urlsafe_base64
  end

  #SPIRE
  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
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
    self.session_token = User.generate_session_token #resets the session_token of user to diffrent token
    self.save! #if errors out will tell us why
    self.session_token #return session token
  end

  def ensure_session_token
    self.session_token ||= User.generate_session_token #if we don't have one, lets set it to a new urlsafe_base64
  end

  
end
