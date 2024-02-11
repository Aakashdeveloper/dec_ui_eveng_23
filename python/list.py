# ordered, changeable and allow duplicate
>>> city = ["Delhi","Mumbai","Pune","Amsterdam"]
>>> city
['Delhi', 'Mumbai', 'Pune', 'Amsterdam']
>>> city = [1,1,3,5,6,7]
>>> city = ["Delhi","Mumbai","Pune","Amsterdam"]
>>> type(city)
<class 'list'>
>>> city[3]
'Amsterdam'
>>> city[3:]
['Amsterdam']
>>> city[1:]
['Mumbai', 'Pune', 'Amsterdam']
>>> city[2] = "London"
>>> city
['Delhi', 'Mumbai', 'London', 'Amsterdam']
>>> city[2:4]=["Helsinki","Venice"]
>>> city
['Delhi', 'Mumbai', 'Helsinki', 'Venice']
>>> city.insert(3,'Boston')
>>> city
['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'Venice']
>>> city.append('Indore')
>>> city
['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'Venice', 'Indore']
>>> city1 = ['Keev','Dubai')
  File "<stdin>", line 1
    city1 = ['Keev','Dubai')
                           ^
SyntaxError: closing parenthesis ')' does not match opening parenthesis '['
>>> city1 = ['Keev','Dubai']
>>> city.extend(city1)
>>> city
['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'Venice', 'Indore', 'Keev', 'Dubai']
>>> city.remove('Keev')
>>> city
['Delhi', 'Mumbai', 'Helsinki', 'Boston', 'Venice', 'Indore', 'Dubai']
>>> city.pop()
'Dubai'
>>> 