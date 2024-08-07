num = int(input("Enter a number: "))

if num % 2 == 0:
    print(f"{num} is an even number.")
elif (num < 0 and num - 1 < 0):  # To show multiple conditions
    print(f"{num} is negetive number.")
else:
    print(f"{num} is an odd number.")
