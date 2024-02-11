>>> fruits = "apple, mango, banana"
>>> fruits.split(',')
['apple', ' mango', ' banana']
>>> myFruits = fruits.split(',')
>>> myFruits
['apple', ' mango', ' banana']
>>> myFruits[0]
'apple'
>>> myFruits[1]
' mango'
>>> 

>>> a = "Hello World"
>>> a[:3]
'Hel'
>>> a[3:]
'lo World'
>>> a[3:6]
'lo '
>>> a[-2:]
'ld'
>>> a[:-2]
'Hello Wor'
>>> 



>>> a = "Learning Python"
>>> a.upper()
'LEARNING PYTHON'
>>> a.lower()
'learning python'
>>> a = " Learning Python "
>>> a.strip()
'Learning Python'
>>> a = "Learning Python"
>>> a.replace('n','N')
'LearNiNg PythoN'


age = 10
name = "Aakahs"
text = "My name is {} and My age is {}"
output = text.format(name,age)


>>> age = 10
>>> text = "My age is "
>>> text + age
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: can only concatenate str (not "int") to str
>>> text.format(age)
'My age is '
>>> text = "My age is {}"
>>> text.format(age)
'My age is 10'
>>> age = 10
>>> name = "Aakahs"
>>> text = "My name is {} and My age is {}"
>>> output = text.format(name,age)
>>> print(output)
My name is Aakahs and My age is 10
>>> 