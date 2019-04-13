#1 ['00', '22', '44', '66', '88']
# loopy way
single = []
for i in range(9):
    if i % 2 == 0:
        single.append(str(i)*2)
# print(single)

# listcompy way
single2 = [str(i)*2 for i in range(9) if i % 2 == 0]
# print(single2)

#2 [7, 17, 27, 37, 47]
# loopy way
seven = []
for i in range(5):
    seven.append(i * 10 + 7)
# print(seven)

# listcompy way
seven2 = [i * 10 + 7 for i in range(5)]
# print(seven2)

#3 [0, 0, 0, 0, 1, 2, 0, 2, 4]
# loopy way

# listcompy way

#4 Composites on range [0, 100], in ascending order
# loopy way
composite = []
for i in range(1,101):
    for x in range(2,i - 1):
        if i % x == 0 and  i != x:
            composite.append(i)
            break
# print(composite)

# listcompy way
composite2 = [i for x in range(2,i + 1) for i in range(1,101) if i % x == 0 and i != x]
# print(composite2)

#5 Primes on range [0,100], in ascending order
# loopy way
prime = []
for i in range(101):
    for x in range(2,i):
        if i % x == 0 and i != x:
            break
        if i == x:
            prime.append(i)
# print(prime)

# listcompy way
prime2 = []

#6 All divisors of a number, listed in ascending order
# loopy way
def divisors_num(num):
    divisor = []
    for i in range(1,num):
        if num % i == 0:
            divisor.append(i)
    return divisor
# print(divisors_num(12))

# listcompy way
def divisors_num2(num):
    divisor = [i for i in range(1,num) if num % i == 0]
    return divisor
# print(divisors_num2(12))

#7 Transpose a matrix
# loopy way
def transpose_matrix(matrix):
    new_matrix = []
    for i in range(len(matrix[0])):
        row = []
        for j in range(len(matrix)):
            row.append(matrix[j][i])
        new_matrix.append(row)
    return new_matrix
print(transpose_matrix([[1,2,3],[4,5,6],[7,8,9]]))

# listcompy way
def transpose_matrix2(matrix):
    return [[matrix[j][i] for j in range(len(matrix))] for i in range(len(matrix[0])) ]
print(transpose_matrix2([[1,2,3],[4,5,6],[7,8,9]]))
