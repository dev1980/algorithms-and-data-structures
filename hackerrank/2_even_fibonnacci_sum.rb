# By considering the terms in the Fibonacci sequence whose values do not exceed , find the sum of the even-valued terms.

# frozen_string_literal: true
def fibo(n)
  fib = [1,2]
  while fib[-1] + fib[-2] < n 
    fib << fib[-1] + fib[-2]
  end

end