# frozen_string_literal: true

# Write a short program that prints each number from 1 to 100 on a new line.
# For each multiple of 3, print "Fizz" instead of the number.
# For each multiple of 5, print "Buzz" instead of the number.
# For numbers which are multiples of both 3 and 5, print "FizzBuzz" instead of the number.

(1..100).each do |n|
  if (n % 5).zero? && (n % 3).zero?
    puts 'FizzBuzz'
  elsif (n % 5).zero?
    puts 'Buzz'
  elsif (n % 3).zero?
    puts 'Fizz'
  else
    puts n.to_s
  end
end
