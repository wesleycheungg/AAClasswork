require_relative "piece.rb"

class Rook < Piece

  # attr_accessor :symbol

  def symbol
    :R
  end

  def valid_moves
    all_moves(self.curr_pos).each do |el|
      
    end
  end

  def all_moves(current_pos)
    moves = []
    row, col = current_pos
    (0..7).each do |n|
      moves << [row, n]
      moves << [n, col]
    end
    moves
  end

  private
  def moves_dirs
  end

end