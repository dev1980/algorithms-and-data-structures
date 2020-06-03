# Stack
# Create a Stack with two methods push and pop. Use your LinkedList class to keep track of the elements internally.

# Example

# This is an example of a test case:

# stack = Stack.new
# stack.push(3)
# stack.push(5)
# puts stack.pop
# # => 5

# stack.push(2)
# stack.push(7)
# puts stack.pop
# # => 7

# puts stack.pop
# # => 2

# puts stack.pop
# # => 3

class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node)
    @value = value
    @next_node = next_node
  end
end

class Stack
  def initialize
  @first = nil
  end
  def push(number)
    # your code here
    @first = Node.new(number, @first)
  end
  
  def pop
    # your code here
    @first !=nil
  value = @first.value
  @first = @first.next_node
  value
  end
end

stack = Stack.new
stack.push(3)
stack.push(5)
puts stack.pop
# => 5

stack.push(2)
stack.push(7)
puts stack.pop
# => 7

puts stack.pop
# => 2

puts stack.pop
# => 3