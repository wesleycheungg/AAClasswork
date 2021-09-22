require_relative "slideable.rb"

class Piece

  attr_accessor :curr_pos, :color, :board
  def initialize(curr_pos, color, board)
    @curr_pos = curr_pos
    @color = color
    @board = board
  end

  def to_s
    # puts symbol
  end

  def empty?
    self.curr_pos.empty?
  end

  def valid_moves(arr)
    result = []
    arr.each do |ele|
      if ele.any? {|ele| ele > 7 || ele < 0}

      elsif board[ele] != nil && board[ele].color == self.color

      else 
        result << ele
      end
    end
    result
  end

  def symbol
    
  end

  private

  def move_into_check?(end_pos)

  end

end

