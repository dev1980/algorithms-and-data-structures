Given an array of integers, return indices of the two numbers such that they add up to a specific target.

You may assume that each input would have exactly one solution, and you may not use the same element twice.

def two_sum(nums, target)
  nums.each.with_index do |ele, idx|
         nums.each.with_index do |ele1, idx1|
            if ele1 + ele == target && idx1 > idx
                return [idx, idx1]
         end
      end
  end
  end

puts two_sum([2,7,11,15], 9)

# Output
# [0,1]
# Expected
# [0,1]