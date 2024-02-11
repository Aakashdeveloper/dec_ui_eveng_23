import numbers


String > any thing in quotes("",'')
number > any number like 1,3353,2353,44
boolean > true and false


name = "python"
marks = 20
result = False

random = '3535'

marks = 20
pi = 3.145

>>> marks = 20
>>> pi = 3.145
>>> 
>>> marks + pi
23.145
>>> city = "London"
>>> marks + city
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: unsupported operand type(s) for +: 'int' and 'str'
>>> int(pi)
3
>>> test = '20'
>>> int(test)
20
>>> test = '20.11'
>>> int(test)
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
ValueError: invalid literal for int() with base 10: '20.11'
>>> float(test)
20.11
>>> float(pi)
3.145
>>> 


####
 = is assignment
 == comprasion

 'Hi Python' == "Hi python"


>>> marks = 20
>>> pi = 3.145
>>> marks /pi
6.359300476947536
>>> marks * pi
62.9
>>> marks - pi
16.855
>>> 10 % 2
0
>>> 11 % 2
1
>>> 


name = "Kimo"


>>> marks = 20
>>> marks /pi
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
NameError: name 'pi' is not defined
>>> pi = 3.145
>>> marks /pi
6.359300476947536
>>> marks * pi
62.9
>>> marks - pi
16.855
>>> 10 % 2
0
>>> 11 % 2
1
>>> name = "Kimo"
>>> name.isdigit()
False
>>> name.isalpha()
True
>>> marks.isdigit()
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
AttributeError: 'int' object has no attribute 'isdigit'
>>> marks = "20"
>>> marks.isdigit()
True
>>> 