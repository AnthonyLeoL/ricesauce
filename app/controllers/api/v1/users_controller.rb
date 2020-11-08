class Api::V1::UsersController < ApplicationController
  def create
    user = User.create!(user_params)
    if user
      render json:user
    else render json: user.errors
    end
  end

  def show
    if user
      render json:user
    else render json: user.errors
    end
  end

  def destroy
  end

  private
  def user_params
    params.permit(:name, :login, :password)
  end 

  def user 
    @user ||= User.find(params[:id])
  end
end
