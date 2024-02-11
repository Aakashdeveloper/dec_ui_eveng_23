# unchangeable and allow duplicate
cars = ("BMW","AUDI","MERC")
>>> cars[1]
'AUDI'
>>> cars[-1]
'MERC'
>>> cars[1] = "MG"
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'tuple' object does not support item assignment
>>> 


cars = ("BMW","AUDI","MERC")
mycar = list(cars)
mycar[1]= "MG"
cars = tuple(mycar)
>>> cars
('BMW', 'MG', 'MERC')




cars = ("BMW","AUDI","MERC")
test = (1,2,3)
('BMW', 'AUDI', 'MERC', 1, 2, 3)