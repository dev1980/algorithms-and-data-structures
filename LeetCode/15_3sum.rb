# Given an array nums of n integers, are there elements a, b, c in nums such that a + b + c = 0? 
# Find all unique triplets in the array which gives the sum of zero.

def three_sum(nums)
  result = []

  return result if (nums.length < 3)

  return [nums] if (nums.length === 3 && nums.sum === 0)
  nums.sort!
  for i in 0..nums.length - 3
    j = i + 1
    k = nums.length - 1

    while j < k
      sum = nums[i] + nums[j] + nums[k]
      if sum < 0
        j += 1
      elsif sum > 0
        k -=1
      else
        result.push([nums[i],nums[j],nums[k]])
        j += 1
        k -= 1
      end

    end
  end

  return result.uniq
end

p three_sum([-1,0,1,2,-1,-4])