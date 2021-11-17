class Api::UsersController < ApplicationController
    # $.ajax({ method: 'GET', url: '/api/users', data: { user: {username: 'example1', email: 'example1@gmail.com' , password: 'password'} }}).then(result => console.log(result))
    def create
        @user = User.new(user_params)
        if @user.save
            login(@user)
            render 'api/users/show'
        else
            render json: @user.errors.full_messages, status: 422
        end
    end

    def show
      @user = User.find(params[:id])
      if @user
        render :show
      else
        render json: ["User not found"], status: 401
      end
    end

    def user_params
        params.require(:user).permit(:username, :password, :email)
    end

end
