
class Knight < Piece
  include Stepable

  def symbol
    :N
  end

  def move_diffs
    possible_moves = [
      [2,1],
      [2,-1],
      [-2,1],
      [-2,-1],
      [1,2],
      [1,-2],
      [-1,2],
      [-1,-2]
    ]
    result = []
    possible_moves.each do |ele|
      pos = self.curr_pos
      result << [(pos[0] + ele[0]) , (pos[1] + ele[1])]
    end
    result

    
  end

end