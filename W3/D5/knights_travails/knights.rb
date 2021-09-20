require_relative '00_tree_node.rb'
class KnightPathFinder

  def initialize(start_pos)
    @start_pos = start_pos
    @considered_positions = [@start_pos]
    @poly_tree_node = PolyTreeNode.new(start_pos)

  end

  def build_move_tree

  end

  def self.valid_moves(pos) # start pos
    # return array of different possible moves
    # ex: pos = [3,3] x => 3 y => 3
    x = pos[0]
    y = pos[-1]
    valid_moves = [
      [x+1, y-1],
      [x+1, y],
      [x+1, y+1],
      [x, y-1],
      [x, y+1],
      [x-1, y-1],
      [x-1, y],
      [x-1, y+1]
    ]
    
    
    return valid_moves
  end

  def new_move_positions(pos)
    valid_moves = KnightPathFinder.valid_moves(pos)
    valid_moves.each do |ele|
      if !@considered_positions.include?(ele)
        @considered_positions << ele
      end
    end
    @considered_positions
    
    # @considered_positions << pos if @considered_positions.include?(self.valid_moves(pos))
    # @considered_positions
  end

end

knight = KnightPathFinder.new([3,3])
# knight.valid_moves([3,3])
# p knight.new_move_positions([3,3])
p knight