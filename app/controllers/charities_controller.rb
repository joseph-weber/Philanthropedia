class CharitiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Charity.all
  end

  def show
    render json: Charity.find(params["id"])
  end


end
