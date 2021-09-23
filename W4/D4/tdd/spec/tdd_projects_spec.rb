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
    it "" do 
      expect([-1, 0, 2, -2, 1].two_sum).to eq([[[0, 4], [2, 3]]])
    end
  end 
end