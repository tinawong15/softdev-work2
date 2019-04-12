UC_LETTERS = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
NUMBERS = "1234567890"
NOT_ALPHA = ".?!&#,;:-_*"

def check_password(password):
    check = [0 if x in UC_LETTERS.lower() else 1 if x in UC_LETTERS else 2 for x in password]
    return sum(check) > 3

def password_strength(password):
    strength = 0
    if len(password) >= 8:
        strength += 3
    if check_password(password):
        strength += 3
    if sum([1 for x in password if x in NOT_ALPHA]) >= 1:
        strength += 4
    total_repeating = sum([1 for x in range(len(password)-1) if password[x] == password[x+1]])
    if strength != 0:
        strength -= total_repeating
    return strength

print(check_password("myNoobPass1234"))
print(check_password("helloworld"))
print(password_strength("hiiwrld"))
print(password_strength("myNoobPass1234"))
print(password_strength("Ab2c*D!?3"))
