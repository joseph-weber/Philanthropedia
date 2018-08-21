class FavoritesController < ApplicationController
  skip_before_action :verify_authenticity_token

  def create
    render json: Favorite.create(params["favorite"])
  end

  def delete
    render json: Favorite.delete(params["user_id"], params["id"])
  end

end
