module Slideable

    # private
  
  HORIZONTAL_DIRS = [
    [0,1],
    [0,-1],
    [1,0],
    [-1,0]
  ]
  DIAGONAL_DIRS = [
    [1,1],
    [1,-1],
    [-1,1],
    [-1,-1]
]

  def horizontal_dirs
    HORIZONTAL_DIRS
  end


  def moves
    # calls moves_dir
    valid_moves = []
    moves_dir.each do |el|
      valid_moves.concat(grow_unblocked_moves_in_dir(el))
    end
  end

  def grow_unblocked_moves_in_dir(arr)
    result =[]
    enemy = false
    while enemy == false
      if arr.any? {|ele| ele > 7 || ele < 0}
        return result
      elsif board[arr] != nil && board[arr].color == self.color
        return result
      elsif board[arr] != nil && board[arr].color != self.color
        enemy = true
      end
    end
    
  end

  # def left_moves(curr_pos)
  #   row, col = curr_pos
  #   possible_moves = []
  #   i = col
  #   while i > 0
  #     next if board[row][i-1].color == self.color
  #     possible_moves << [row, i-1]b
  #     i -= 1
  #   end
  #   possible_moves
  # end


end