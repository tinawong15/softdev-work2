def inc(x):
    return x + 1
f=inc
print(f(10))
print(f)
print(inc)

def adder(a, b):
    return a + b

def caller(c):
    print(c(2, 4))
    print(c(3, 5))
caller(adder)

def outer(x):
    def contains(l):
        return x in l
    return contains

contains_15=outer(15)
print(contains_15([1,2,3,4,5]))
print(contains_15([13,14,15,16,17]))
print(contains_15(range(1,20)))

# closure remembers the context in which it was created even if you obliterate the creator fxn
del outer
# outer(42)
print(contains_15(range(14,20)))

# def outer():
#     x = "foo"
#     def inner():
#         x = "bar"
#     inner()
#     return x
#
# print(outer())

def outer():
    x = "foo"
    def inner():
        nonlocal x
        x = "bar"
    inner()
    return x

# print(outer())

# def outer():
#     global x
#     x = "foo"
#     def inner():
#         # nonlocal x
#         x = "bar"
#     inner()
#     return x
#
# print(outer())
# print(x)

# Write a closure with outer function named repeat such that the function calls shown below will yield the outputs shownself
def repeat(word):
    def inner(times):
        return word * times
    return inner
r1 = repeat('hello')
r2 = repeat('goodbye')
print(r1(2)) # hellohello
print(r2(2)) # goodbyegoodbye
print(repeat('cool')(3)) #coolcoolcool

def make_counter():
    x = 0
    def inner(access=False):
        nonlocal x
        if access:
            return x
        x += 1
        return x
    return inner
ctr1 = make_counter()
print(ctr1()) #1
print(ctr1()) #2
ctr2 = make_counter()
print(ctr2()) #1
print(ctr1()) #3
print(ctr2()) #2
print(ctr1(True))
print(ctr2(True))
