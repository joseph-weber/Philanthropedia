class CharitiesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def index
    render json: Charity.all(params["query"])
  end

  def show
    render json: Charity.find(params["query"])
  end


end
