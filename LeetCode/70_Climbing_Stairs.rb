# You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Note: Given n will be a positive integer.

# @param {Integer} n
# @return {Integer}
def climb_stairs(n)
  first = 1
    second = 1
    (n-1).times do
       temp = second
        second += first
        first = temp
    end
    return second
end

p climb_stairs(5)