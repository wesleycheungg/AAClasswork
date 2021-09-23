
require_relative "piece"

class Rook < Piece
  include Slideable

  # attr_accessor :symbol

  def symbol
    :R
  end

  def valid_moves
    all_moves(self.curr_pos).each do |el|

    end
  end

  private
  def moves_dirs
    horizontal_dirs
  end

end