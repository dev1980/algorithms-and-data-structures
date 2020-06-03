# Lists  

# Create your own LinkedList  class for storing integers which should include two methods:  
# add(number) - Add a new Node to the end of the list with a value of number. Nothing needs to be returned. 
# get(index) - Return the value of the Node at position `index` in the List.   

# Example  

# This is an example of a test case:  

# list = LinkedList.new

# list.add(3)
# list.add(5)
# puts list.get(1)
# => 5

class Node
  attr_accessor :value, :next_node
  
  def initialize(value, next_node = nil)
	  @value = value
    @next_node = next_node
  end
end

class LinkedList
  #setup head and tail
  attr_accessor :head, :tail
  def initialize()
    @head = Node.new(nil)
    @tail = Node.new(nil)
  end
 
  def add(number)
    # your code here
    if @head.value.nil?
       @head.value = number
    elsif @head.next_node.nil?
     @tail.value = number
     @head.next_node = @tail
   else
     @current_node = @tail
     @tail = Node.new(number)
     @current_node.next_node = @tail
  end
end
  def get(index)
    # your code here
    @node = @head
   for i in 0...index
   @node = @node.next_node
    end
    return @node.value
  end
end

list = LinkedList.new

list.add(3)
list.add(5)
list.add(7)
puts list.get(1)
