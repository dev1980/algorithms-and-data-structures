# @param {Integer[]} nums
# @param {Integer} k
# @return {Integer[]}
def top_k_frequent(nums, k)
  my_hash = Hash.new(0)
  arr = []
nums.each {|ele| my_hash[ele] += 1}
sorted = my_hash.sort{|a1,a2| a2[1].to_i <=> a1[1].to_i }
 i = 0
  while i < k
     arr << sorted[i][0]
      i += 1
  end
return arr
end

# p top_k_frequent([1,1,1,2,2,3], k = 2)
# [1, 2]