class UsersController < ApplicationController
  def new
    @user = User.new
    render :new
  end

  def create
    user = User.new(user_params)
    if user.save #no bang bc we want true or false then we handle ourselves
      login(user)
      redirect_to users_url(user)
    else
      render json: user.errors.full_messages,status:422
    end
  end

  private

  def user_params
    params.require(:user).permit(:user_name)
  end

end
