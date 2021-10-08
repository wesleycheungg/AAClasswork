class ArtworkShareController < ApplicationController

  def create #POST/artwork_shares
    artwork_share = ArtworkShare.new(artwork_share_params)
    if artwork_share.save 
      render json: artwork_share
    else
      render json: artwork_share.errors.full_messages, status: :unprocessable_entity
    end
  end


  private
  def artwork_share_params
    params.require(:artworks).permit(:artwork_id, :viewer_id)
  end
end