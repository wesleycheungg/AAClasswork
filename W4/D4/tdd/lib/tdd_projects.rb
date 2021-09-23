def my_uniq(arr)
  new_arr = []
  arr.each do |ele|
    new_arr << ele if !new_arr.include?(ele)
  end
  new_arr
end