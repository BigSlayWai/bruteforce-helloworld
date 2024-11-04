import string
import time
import random

target = "Hello world"
letters = string.ascii_letters + " "
result = ""


for letter in target:
    while True:
        i = random.choice(letters)
        print (result + i) #Prints current state of result plus random letter

        if i == letter:
            result += i #Concantenating the correct letter to the result
            break
        time.sleep(0.01)
        

