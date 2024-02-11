# unchangeable and do not allow duplicate
>>> fruits = {"apple","mango","banana"}
>>> type(fruits)
<class 'set'>

>>> fruits = {"apple","mango","banana",True}
>>> fruits = {"apple","mango","banana",True,1}
>>> fruits
{'apple', 'mango', 'banana', True}
>>> fruits[1]
Traceback (most recent call last):
  File "<stdin>", line 1, in <module>
TypeError: 'set' object is not subscriptable
>>> fruits2 = {"orange","papaya"
... }
>>> fruits.update(fruits2)
>>> fruits
{True, 'orange', 'papaya', 'apple', 'mango', 'banana'}
>>> fruits.discard(True)
>>> fruits
{'orange', 'papaya', 'apple', 'mango', 'banana'}