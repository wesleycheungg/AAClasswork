module Stepable

  def moves(arr)
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

end