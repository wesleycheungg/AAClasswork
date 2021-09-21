class Board
attr_accessor :rows

  def initialize
    @rows = Array.new(8) {Array.new(8)}
  end

  def [](pos)
    row = pos[0]
    col = pos[-1]
    @rows[row][col]
  end

  def []=(pos, val)
    row, col = pos
    @rows[row][col] = val
  end

  def move_piece(start_pos, end_pos)

  end

end

# board = Board.new
# var = [1, 2]
# p board[1][2] = :X
# p board