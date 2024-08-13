# While loop example
num = 3
while num < 5:
    print(num)
    num += 1

# For loop example
for i in range(0, 5):  # for i in range(5) also works
    print(i, end=' ')  # end=' ' is used to print in same line

print()  # To print new line

# To increment by 2
for i in range(0, 10, 2):
    print(i, end=' ')

print()  # To print new line

# To decrement by 1
for i in range(10, 0, -1):
    print(i, end=' ')
