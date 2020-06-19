def graph(hash_graph)
  # write your code here
  current_node=0
  result =[]
  result << current_node
  
  until current_node==4 do
    current_node = hash_graph[current_node][0]
    result << current_node
  end
  result
end

hash = { 
  0 => [2], 
  1 => [4], 
  2 => [5, 0, 3], 
  3 => [2], 
  4 => [1, 5], 
  5 => [4, 2]
}

p graph(hash)
# => [0, 2, 5, 4]