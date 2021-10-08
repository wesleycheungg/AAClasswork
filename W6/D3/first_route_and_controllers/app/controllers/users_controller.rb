class UsersController < ApplicationController #controllers are always plural; a controller manages requests that pertain to a collection of resources

  def index # index (GET/users)
    users = User.all
    render json: users
  end

  def create #post POST/users
    user = User.new(user_params)
    if user.save
      render json: user
    else
      render json: user.errors.full_messages, status: :unprocessable_entity
  end
  end

  def show #GET/users/:id
    user = User.find(params[:id])
    render json: user
  end

  def update #PATCH/users/:id
    user = User.find(params[:id])
    if user.update(user_params)
        render json: user #updated user
    else
        render json: user.errors.full_messages, status: 422
    end
  end

  def delete # destroy DELETE/users/:id
    user = User.find(params[:id])
    user.destroy
    render json:user
  end

  private
  def user_params
    params.require(:user).permit(:username)
  end

end