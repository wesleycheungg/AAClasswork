class ArtworksController < ApplicationController

  def index #GET/artworks -> returns all instances 
    artworks = Artwork.all
    render json: artworks
  end

  def create #POST/artworks
    artwork = Artwork.new(artwork_params)
    if artwork.save
      render json: artwork 
    else 
      render json: artwork.errors.full_messages, status: :unprocessable_entity
    end
  end

  def show #GET/artworks/:id
    artwork = Artwork.find(params[:id])
    render json: artwork
  end

  def update #PATCH/PUT/artworks/:id,
    artwork = Artwork.find(params[:id])
    if artwork.update(artwork_params)
        render json: artwork
    else
        render json: artwork.errors.full_messages, status: 422
    end
  end

  def destroy #DELETE/artworks/:id
    artwork = Artwork.find(params[:id])
    artwork.destroy
    render json: artwork
  end

  private
  def artwork_params
    params.require(:artworks).permit(:title, :image_url, :artist_id)
  end
end