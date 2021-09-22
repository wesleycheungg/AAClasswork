require_relative "slideable.rb"

class Piece
include Slideable

  attr_accessor :curr_pos, :color, :board
  def initialize(curr_pos, color, board)
    @curr_pos = curr_pos
    @color = color
    @board = board
  end

  def to_s

  end

  def empty?
    self.curr_pos.empty?
  end

  def valid_moves

  end

  private

  def move_into_check?(end_pos)

  end

end

