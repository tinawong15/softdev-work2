from functools import reduce

# product = reduce( (lambda x, y: x * y), [1,2,3,4])

# lambda in Python
# must return a value

# Pick a book from project gutenberg (www.gutenberg.org)
# 1. Use list comprehensions + reduce to do the following:
# - Find the frequency of a single word
# - Find the total frequency of a group of words
# - Find the most frequently occurring word

file = open("fairytale.txt", "r+") # open file, read only
global text # make text accessible in fxns
text = [line.strip("\r\n ") for line in file if line != "\r\n"]
text = [i for i in reduce((lambda x, y: x + y), text).split(" ") if i != ''] # split into a list, with each word as one element

file.close() # close file
print(text)

def freq_word(word):
    freq = [1 for x in text if x.lower() == word] # make binary list 1 if matches word, 0 if not
    if len(freq) == 0: return 0 # list of frequencies is empty
    return reduce((lambda x,y: x + y), freq) # count up the 1s
print(freq_word("the"))
print(freq_word("tina"))

def freq_group(words):
    words = words.split(" ") # split word into list of words
    # print(words)
    freq = [1 for x in range(len(text)) if text[x:x+len(words)] == words]
    # print(freq)
    if len(freq) == 0: return 0 # list of frequencies is empty
    return reduce((lambda x,y: x + y), freq) # count up the 1s
print(freq_group("in a"))
print(freq_group("hello tina"))

def most_freq():
    unique_words = list(set(text))
    all_freqs = [(x, freq_word(x)) for x in unique_words]
    return reduce((lambda x,y: x if x[1] >= y[1] else y), all_freqs)[0]
print(most_freq())
