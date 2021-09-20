require "byebug"
require_relative 'queue.rb'

class PolyTreeNode

  attr_reader :pos, :parent, :children

  def initialize(pos, parent = nil, children = [])
    @pos = pos
    @parent = parent
    @children = children
  end

  def parent=(node)
    if self.parent
      self.parent.children.delete(self) if self.parent.children.include?(self)
    end
    @parent = node 
    @parent.children << self if !self.parent.nil?    
  end

  def add_child(child)
    child.parent = self
  end

  def remove_child(child)
    child.parent = nil
    raise "error" if !self.children.include?(child)
  end

  def inspect
		"#<Node: @pos=#{pos}, @children=#{children}>"
	end

  def dfs(val)
    # return nil if self.children.empty?
		return self if self.pos == val

    self.children.each do |child|
      # debugger
      search_result = child.dfs(val)
      return search_result unless search_result.nil?
    end
    nil
  end

  def bfs(val)
    queue = MyQueue.new
    # debugger
    queue.enqueue(self)

    until queue.empty?
      el = queue.dequeue
      # return el if el.value == val
      if el.value != val
        el.children.each do |child|
          queue.enqueue(child)
        end
      else
        return el
      end
    end
  end


end

# poly = Poly.new('A', nil, [])
# p poly.bfs('f')