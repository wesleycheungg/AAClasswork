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
    valid_moves = []
    
    
    valid_moves
  end

  def new_move_positions(pos)
    @considered_positions << pos if !@considered_positions.include?(self.valid_moves(pos))
    @considered_positions
  end

end