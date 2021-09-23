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


describe "#my_transpose" do
  it "raise error if input is not a square" do
    rows = ([[0, 1, 2],[3, 4, 5]])
    expect{my_transpose(rows)}.to raise_error "ERROR! Not square."
  end

  it "if 3x3 matrix" do
    rows = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8]
  ]
    expect(my_transpose(rows)).to eq ([[0, 3, 6],[1, 4, 7],[2, 5, 8]])
  end
    
  it "1x1 matrix" do
    expect(my_transpose([[0]])).to eq ([[0]])
  end

end

describe "#stock_picker" do
  it "input is empty" do
    expect(stock_picker([])).to eq []
  end

  it "outputs the most profitable pair day" do
    expect(stock_picker([1,2,3])).to eq [0,2]
  end

  it "multiple most profitable pairs, choose first" do
    expect(stock_picker([1,2,3,3])).to eq [0,2]
  end
end