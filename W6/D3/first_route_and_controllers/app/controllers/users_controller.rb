class UsersController < ApplicationController #controllers are always plural; a controller manages requests that pertain to a collection of resources

  def index
    users = User.all
    render json: users
  end

  def create
    user = User.new(params.require(:user).permit(:name, :email))
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
  end
  end

  def show
    user = User.find(params[:id])
    render json: user
  end

  def update
    user = User.find(params[:id])
    if user.update(params.require(user).permit(:name, :email))
        render json: user #updated user
    else
        render json: user.errors.full_messages, status: 422
    end
  end

end