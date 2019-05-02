# randomizing greetings in an HTML doc
# separate generation of text from HTML-ification

import random

# def make_HTML_heading(f):
#     txt = f()
#     print(txt)
#     def inner():
#         return '<h1>' + txt + '</h1>'
#     return inner
#
# # equiv to greet = make_HTML_heading(greet)
# @make_HTML_heading
# def greet():
#     greetings = ['Hello', 'Welcome', "AYO", 'Hola', 'Bonjour', 'Word up']
#     return random.choice(greetings)
#
# # greet_heading = make_HTML_heading(greet)
# # print(greet_heading())
# print(greet())

def make_HTML_heading(f):
    txt, h = f()
    print(txt)
    def inner():
        return '<' + h + '>' + txt + '</' + h + '>'
    return inner

# equiv to greet = make_HTML_heading(greet)
@make_HTML_heading
def greet():
    greetings = ['Hello', 'Welcome', "AYO", 'Hola', 'Bonjour', 'Word up']
    headers = ['h1', 'h2', "h3", 'h4', 'h5', 'h6']
    return random.choice(greetings), random.choice(headers)

# greet_heading = make_HTML_heading(greet)
# print(greet_heading())
print(greet())

# memorization: process of storing previously calculated results (i.e., writing 'memos') so as to avoid re-calculation
def memoize():
    memo = {}
    def helper(x):
        print(memo)
        if x in memo.keys():
            return memo[x]
        else:
            memo[x] = fib(x)
            return memo[x]
    return helper

# @memoize
def fib(n):
    if n == 0:
        return 0
    elif n == 1:
        return 1
    else:
        return fib(n-1) + fib(n-2)
# print(fib(20))
test_fib = memoize()
print(test_fib(20))
print(test_fib(19))
print(test_fib(21))
