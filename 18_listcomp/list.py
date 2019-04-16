# I'm Driving -- Ray Onishi & Tina Wong
# SoftDev2 pd7
# K18 -- Getting Clever with List Comprehensions
# 2019-04-16

list1 = [1,2,3]
list2 = [2,3,4]
list3 = [7, 9, 2, 0, 5]
list4 = [7.0, 3.5, 4]

# union of sets A and B
def union(l1,l2):
    return [x for x in l1 if x not in l2] + l2

print("-----------------------")
print("UNION")
print(union(list1,list2))
print(union(list2, list3))
print(union(list3, list2))
print(union(list3, list4))

# intersection of sets A and B
def intersection(l1, l2):
    return [x for x in l1 if x in l2]

print("-----------------------")
print("INTERSECTION")
print(intersection(list1,list2))
print(intersection(list2, list3))
print(intersection(list3, list4))

# set difference: all members of U that are not members of A (U / A)
def set_difference(l1, l2):
    return [x for x in l1 if x not in l2]

print("-----------------------")
print("SET DIFFERENCE")
print(set_difference(list1,list2))
print(set_difference(list2, list3))
print(set_difference(list3, list2))

# symmetric difference: set of all objects that are a member of exactly one of A and B
# set ifference of the union and intersection
def symmetric_difference(l1,l2):
    return set_difference(union(l1,l2), intersection(l1,l2))

print("-----------------------")
print("SYMMETRIC DIFFERENCE")
print(symmetric_difference(list1,list2))
print(symmetric_difference(list2, list3))
print(symmetric_difference(list3, list2))

# cartesian product: set whose members are all possible ordered pairs
def cartesian_product(l1,l2):
    return [(x,y) for x in l1 for y in l2]

print("-----------------------")
print("CARTESIAN PRODUCT")
print(cartesian_product(list1,list2))
print(cartesian_product(list2, list3))
print(cartesian_product(list3, list2))
print("-----------------------")

# pythagorean triples on range [1, n)
def pythagorean_triples(n):
    triples = [(a,b,c) for a in range(1,n+1) for b in range(a,n+1) for c in range(b,n+1) if a**2 + b**2 == c**2]
    return triples
print(pythagorean_triples(17))

# quicksort
def quicksort(l):
    if len(l) <= 1:
        return l
    pivot = l[0]
    less = quicksort([x for x in l[1:] if x < pivot])
    greater = quicksort([x for x in l[1:] if x >= pivot])
    return less + [pivot] + greater
print(quicksort([1]))
print(quicksort([3,4,5,1,5,7,0,4]))
