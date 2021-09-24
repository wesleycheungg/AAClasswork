require "hanoi"
describe Hanoi do
  subject(:hanoi) {Hanoi.new}

  describe "#initialize" do
    h = Hanoi.new
    it "call stacks" do
      expect{h.stacks}.not_to raise_error
    end
    it "has 3 disks" do
      expect(h.stacks.flatten.length).to eq(3)
    end
    it "disks have unique sizes" do
      expect(h.stacks.flatten).to eq(h.stacks.flatten.uniq)
    end
  end

  describe "#move" do
    
    it "raise error if inputs are not valid" do
      expect{hanoi.move(0,4)}.to raise_error ("Inputs invalid!")
    end

    it "successfully moves disk from first to second stack" do
      expect(hanoi.move(0,1)).to eq(true)
    end

    it "does not move a bigger disk on top of a smaller disk" do
      expect{hanoi.move(0,1)}.to raise_error ("Can't put bigger disk on top of smaller disk.")
    end
  end

  describe "#won?" do

    it "all disks in last stack" do 
      allow(:hanoi).to receive (stacks).and_return([[],[], [3,2,1]])
      expect(hanoi.stacks[-1].length).to eq(true)
    end
    it "not all disks in last stack" do
      allow(:hanoi).to receive (stacks).and_return([[],[], [3,2,1]])
      expect(hanoi.stacks[-1].length).to eq(false)
    end

  end

end