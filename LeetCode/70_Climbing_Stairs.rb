# You are climbing a stair case. It takes n steps to reach to the top.

# Each time you can either climb 1 or 2 steps. In how many distinct ways can you climb to the top?

# Note: Given n will be a positive integer.

def climb_stairs(n)
  p = 1
  q = 1

  (n - 1).times do
    temp = q
    q += p
    p = temp
  end
  q
end

p climb_stairs(5)