def reverse_list(head)
  prev = nil
      currt = head
      until currt.nil?
         temp = currt.next
          currt.next = prev
          prev = currt
          currt = temp
      end
      prev
end

# Your input
# [1,2,3,4,5]
# Output
# [5,4,3,2,1]
# Expected
# [5,4,3,2,1]