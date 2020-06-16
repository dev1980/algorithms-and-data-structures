# frozen_string_literal: true

# Create a Queue with the two methods add and remove. Use your LinkedList 
# class to keep track of the elements internally.
# In this challenge, there's one more detail: If remove is called on the empty Queue, return -1.

# Start with your code from LinkedList challenge.

class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class Queue
  def initialize
    @head = Node.new(nil)
  end
  
  def add(number)
    # your code here
    
    if @head.value == nil
      @head.value = number
    elsif @head.next_node == nil
      @tail = Node.new(number)
      @head.next_node = @tail
    else
      node = @tail
      @tail = Node.new(number)
      node.next_node = @tail
    end
  end
  
  def remove
    # your code here
    value = @head.value
    if @head.value == nil
      value = -1
    elsif @head.next_node == nil
      @head.value = nil
    else
     @head = @head.next_node
    end
    return value
  end
  
end

queue = Queue.new
queue.add(3)
queue.add(5)
puts queue.remove
# => 3

queue.add(2)
queue.add(7)
puts queue.remove
# => 5

puts queue.remove
# => 2

puts queue.remove
# => 7

puts queue.remove
# => -1