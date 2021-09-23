class Hanoi
  attr_reader :stacks
  def initialize
    @stacks = Array.new(3) {[]}
    (1..3).each {|ele| @stacks[0].unshift(ele)}
  end

  def move(first_stack, second_stack)
    disk = @stacks[first_stack].pop
    @stacks[second_stack].push(disk)
  end

  def won?
    @stacks[-1].length == 3
  end
end