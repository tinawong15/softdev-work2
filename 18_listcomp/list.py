# pythagorean triples on range [1, n)
def pythagorean_triples(n):
    triples = [(a,b,c) for a in range(1,n+1) for b in range(a,n+1) for c in range(b,n+1) if a**2 + b**2 == c**2]
    return triples
print("-------- PYTHAGOREAN TRIPLES --------")
print(pythagorean_triples(17))

# quicksort
def quicksort(l):
    if len(l) <= 1:
        return l
    pivot = l[0]
    less = quicksort([x for x in l[1:] if x < pivot])
    greater = quicksort([x for x in l[1:] if x >= pivot])
    return less + [pivot] + greater
print("-------- QUICKSORT --------")
print(quicksort([1]))
print(quicksort([3,4,5,1,5,7,0,4]))
