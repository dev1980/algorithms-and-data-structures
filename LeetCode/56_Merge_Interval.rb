# @param {Integer[][]} intervals
# @return {Integer[][]}
def merge(intervals)
  merged_intervals = []
  intervals.sort.each do |curr|
    last = merged_intervals.pop
      if last.nil?
         merged_intervals << curr
      elsif last[1] < curr[0] || curr[1] < last[0]
          merged_intervals << last << curr
      else
          merged_intervals << [(last+curr).min, (last+curr).max]
      end
      
  end
  return merged_intervals
end