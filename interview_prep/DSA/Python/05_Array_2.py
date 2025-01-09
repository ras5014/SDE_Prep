# Initialize arr of size n with default value = 1

size = 5
arr = [1] * size

print(f"Arr: {arr}")  # [1, 1, 1, 1, 1]

arr = [1, 2, 3, 4, 5]

# To print last value of arr
print(f"Last Value of array: {arr[-1]}")  # 5
# Second to last value of arr
print(f"Second to last value: {arr[-2]}")  # 4

# Sublist of arrays (aks Slicing)
print(arr[1:3])  # [2, 3] # 1st index to 3rd(not inclusive) index
