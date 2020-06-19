def hash_table(arr)
  # write your code here
  obj = []
  arr.each do |item|
    x = (item).abs % 11
    if obj[x].nil?
      obj[x] = [item]
    else
      obj[x].push(item)
    end
  end
  return obj.compact.flatten
  
end

p hash_table([12, 24, 125, 5, 91, 1106, 2, 1021, 29, 3536, 10])
# => [12, 24, 2, 91, 125, 5, 3536, 1106, 29, 1021, 10]