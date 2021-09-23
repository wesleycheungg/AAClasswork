class Hanoi
  attr_reader :stacks
  def initialize
    @stacks = Array.new(3) {[]}
    (1..3).each {|ele| @stacks[0] << ele}
  end
end