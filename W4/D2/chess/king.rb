require_relative "stepable"

class King < Piece
  include Stepable

  def symbol
    :K
  end

  def move_diffs
    possible_moves = [
      [1,1],
      [1,-1],
      [-1,1],
      [-1,-1],
      [0,1],
      [0,-1],
      [1,0],
      [-1,0]
    ]
    result = []
    possible_moves.each do |ele|
      pos = self.curr_pos
      result << [(pos[0] + ele[0]) , (pos[1] + ele[1])]
    end
    result

    
  end

end