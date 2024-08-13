# Arrays are Dynamic in Python by default
arr = [1, 2, 3]

# Can be used as a stack

# PUSH
arr.append(4)  # [1, 2, 3, 4]
# POP
arr.pop()  # [1, 2, 3]

print(f"Stack: {arr}")

# Insert value at any index -> format (index, value)
arr.insert(1, 10)  # [1, 10, 2, 3]
# But this is O(n), Insert & Shift

print(f"Arr after insert: {arr}")

arr = [1, 2, 3]
# Inserting a value at index O(1) version, Only Insert
arr[1] = 10  # [1, 10, 3]

print(f"Arr after insert at index 1: {arr}")
