Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

def two_sum(nums, target)
  nums.each_with_index do |el1, idx1|
     nums.each_with_index do |el2, idx2|
        if idx2 > idx1 && el1 + el2 == target
            return [idx1, idx2]
        end
     end
  end
end

puts two_sum([2,7,11,15], 9)

# Output
# [0,1]
# Expected
# [0,1]