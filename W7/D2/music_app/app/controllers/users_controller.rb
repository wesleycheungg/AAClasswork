class UsersController < ApplicationController
  def new 
    @user = User.new
    render :new
  end

  def create
    @user = User.new(user_params)
    if @user.save #runs user.save. if true, then:
      login(@user)
      redirect_to users_url
    else
      render json: user.errors.full_messages, status: 422 #422: unprocessable entity
    end
  end

  def index
    @users = User.all
    render :index
  end

  def show
    @user = User.find(params[:id])
    render :show
  end

  def destroy
    user = User.find(params[:id])
    user.destroy
    redirect_to users_url
  end

  private
  def user_params
    params.require(:user).permit(:email, :password)
    #password_digest and session_token are set by default in our model
  end

end
