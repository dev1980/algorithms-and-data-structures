# frozen_string_literal: true

# 21. Merge Two Sorted Lists
# Merge two sorted linked lists and return it as a new sorted list. The new list should be made by splicing together the nodes of the first two lists.

# Example:

# Input: 1->2->4, 1->3->4
# Output: 1->1->2->3->4->4

# Definition for singly-linked list.
# class ListNode
#     attr_accessor :val, :next
#     def initialize(val = 0, _next = nil)
#         @val = val
#         @next = _next
#     end
# end
# @param {ListNode} l1
# @param {ListNode} l2
# @return {ListNode}
def merge_two_lists(l1, l2)
  l3 = ListNode.new(0)
   curr = l3
   
   while l1 && l2
       
       if l1.val <= l2.val
           l3.next = l1
           l1 = l1.next
       else
           l3.next = l2
           l2 = l2.next
       end
       l3 = l3.next
   end
   
   l3.next = l1 || l2 
   
   curr.next
end
