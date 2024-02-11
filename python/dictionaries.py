# changeable and do not allow duplicate
>>> movies = {
...    "name":"Jab We met",
...    "type":"Romantic",
...    "rating":4.5
... }
>>> movies
{'name': 'Jab We met', 'type': 'Romantic', 'rating': 4.5}
>>> movies['type']
'Romantic'
>>> len(movies)
3
>>> type(movies)
<class 'dict'>
>>> movies['rating']=4.6
>>> movies
{'name': 'Jab We met', 'type': 'Romantic', 'rating': 4.6}
>>> movies["ind"]="Hollywood"
>>> movies
{'name': 'Jab We met', 'type': 'Romantic', 'rating': 4.6, 'ind': 'Hollywood'}
>>> del movies["type"]
>>> movies
{'name': 'Jab We met', 'rating': 4.6, 'ind': 'Hollywood'}
>>> 
