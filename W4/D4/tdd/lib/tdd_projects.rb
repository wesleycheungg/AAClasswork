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