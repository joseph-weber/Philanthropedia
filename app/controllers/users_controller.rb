class UsersController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: User.all
  end

  def showName
    render json: User.findByName(params["username"])
  end

  def create
    render json: User.create(params["user"])
  end

end
