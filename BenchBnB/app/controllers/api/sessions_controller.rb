class Api::SessionsController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    @user = User.find_by_credentials(params[:user][:username], params[:user][:password])
    if @user 
      debugger
      login!(@user)
      render :show #???
    else
      render json: @user.errors.full_messages, status: 422
    end
  end 

  def destroy
    if current_user
      logout!()
      render json: {}
    else
      render json: ["You're not logged in"], status: 404 
    end
  end 
end
