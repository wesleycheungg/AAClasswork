require ("byebug")
require_relative "./piece.rb"
class Board
  attr_accessor :rows

  def initialize
    @rows = Array.new(8) {Array.new(8)}
    place_pieces
  end
  
  def render
    @rows.each do |el|
      puts el.join(" ")
    end
  end

  def place_pieces
    # debugger
    @rows.each_with_index do |row, i|
      if i == 0 || i == 1 || i == 6 || i == 7
        row.each_with_index do |col, j|
          curr_pos = [i,j]
          @rows[i][j] = Piece.new(curr_pos)
        end
      end
    end
  end

  def [](pos)
    row = pos[0]
    col = pos[-1]
    return @rows[row][col]
  end

  def []=(pos, val)
    row = pos[0]
    col = pos[-1]
    return @rows[row][col] = val
  end

  def move_piece(start_pos, end_pos)
    # debugger
    if self[start_pos]== nil
      raise "no piece there!"
    elsif self[end_pos] != nil
      raise "piece cannot move there!"
    end

    self[end_pos] = self[start_pos]
    self[end_pos].curr_pos = end_pos
    self[start_pos] = nil

  end

end
# board = Board.new
# # board.place_pieces
# p board.render
# board.move_piece([0,1] , [4,4])
# p board.render
# var = [0, 1]
# p board[var]
# var = [1, 2]
# p board[1][2] = :X
# p board