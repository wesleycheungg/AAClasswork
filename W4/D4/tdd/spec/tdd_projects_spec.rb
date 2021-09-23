require "tdd_projects"

describe "#my_uniq" do
  it "multiple repeated elements" do
    expect(my_uniq([1, 2, 1, 3, 3])).to eq([1, 2, 3])
  end

  it "if array is empty" do
    expect(my_uniq([])).to eq []
  end

end

describe Array do
  describe "#two_sum" do
    it "find multiple pairs" do 
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[0, 4], [2, 3]])
    end

    it "find single pair" do
      expect([1, 0, 2, -2, 1].two_sum).to eq([[2, 3]])
    end

    it "no pairs" do
      expect([1, 0, 2, 2, 1].two_sum).to eq([])
    end

    it "raises error if pair order reversed" do
      expect([-1, 0, 2, -2, 1].two_sum).not_to include([4,0])
      expect([-1, 0, 2, -2, 1].two_sum).not_to include([3,2])
    end
  end 
end