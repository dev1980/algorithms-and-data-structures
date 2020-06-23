# Given an integer n, return 1 - n in lexicographical order.

# For example, given 13, return: [1,10,11,12,13,2,3,4,5,6,7,8,9].

# Please optimize your algorithm to use less time and space. The input size may be as large as 5,000,000.

# @param {Integer} n
# @return {Integer[]}
def lexical_order(n)
  p (1..n).sort_by(&:to_s)  
end

lexical_order(13)