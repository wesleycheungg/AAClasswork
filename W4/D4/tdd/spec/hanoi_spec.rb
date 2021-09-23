require "hanoi"
describe Hanoi do
  describe "#initialize" do
    h = Hanoi.new
    it "call stacks" do
      expect{h.stacks}.not_to raise_error
    end
    it "has 3 disks" do
      expect(h.stacks.flatten.length).to eq(3)
    end
  end

  describe "#won?" do
    it "all disks in last stack" do 
      expect(h.stacks[-1].length).to eq(true)
    end
    it "not all disks in last stack"
      expect(h.stacks[-1].length).to eq(false)
    end

  end

end