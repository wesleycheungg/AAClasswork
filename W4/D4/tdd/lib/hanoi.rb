require ("byebug")

class Hanoi
  attr_reader :stacks
  def initialize
    @stacks = Array.new(3) {[]}
    (1..3).each {|ele| @stacks[0].unshift(ele)}
  end

  def move(first_stack, second_stack)
    raise "Inputs invalid!" unless [0,1,2].include?(first_stack) && [0,1,2].include?(second_stack)
    # debugger
    raise "Can't put bigger disk on top of smaller disk." if !@stacks[second_stack].empty? && @stacks[second_stack][-1] < @stacks[first_stack][-1]
    disk = @stacks[first_stack].pop
    @stacks[second_stack].push(disk)
    return true
  end

  def won?
    @stacks[-1].length == 3
  end
end