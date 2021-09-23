def my_uniq(arr)
  new_arr = []
  arr.each do |ele|
    new_arr << ele if !new_arr.include?(ele)
  end
  new_arr
end

class Array
  def two_sum
    pairs = []
    self.each.with_index do |el1, i|
      (i+1...self.length).each do |j|
        pairs << [i,j] if self[i] + self[j] == 0
      end
    end
    pairs
  end
end

def my_transpose(twoDarray)
  raise "ERROR! Not square." if twoDarray.length != twoDarray[0].length || !twoDarray.map(&:length).all? {twoDarray[0].length}
  new_arr = Array.new(twoDarray.size) {Array.new(twoDarray.size)}
  twoDarray.each_with_index do |row,i|
    row.each_with_index do |ele, j|
      new_arr[j][i] = ele
    end
  end
  return new_arr

end