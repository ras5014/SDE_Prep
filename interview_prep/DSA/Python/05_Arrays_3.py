# Unpacking (Assigning each value to elements of array)
a, b, c = [1, 2, 3]
# 1, 2, 3 (no. of elements in left and array should be same)
print(f"{a}, {b}, {c}")


# Loop through array
nums = [1, 2, 3]
print(f"{nums}")

# Using index
for i in range(len(nums)):
    print(nums[i], end=' ')

print()  # New line

# Without Index
for n in nums:
    print(n, end=' ')

print()

# With index & value
for index, num in enumerate(nums):
    print(f"Index: {index}, Value: {num}")

print()  # New line

# Looping through multiple arrays simultaneously
arr1 = [1, 2, 3]
arr2 = [4, 5, 6]

for num1, num2 in zip(arr1, arr2):
    print(f"Num1: {num1}, Num2: {num2}")
