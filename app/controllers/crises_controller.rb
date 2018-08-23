class CrisesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    render json: Crisis.create(params["crisis"])
  end

  def index
    render json: Crisis.all
  end

end
