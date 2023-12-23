let a = [1,5,45,34,91,100] >> Array of numbers
let b = ["Hii","Bie","Test"] >> Array of String
let c = [true,false,false,true] >> Array of Boolean

Array is a collection of homogenious data type as well as hetrogenious

let d = [1,4,"dsv","dfsd",true,"dsvsd",3]

let city = ["Delhi","Mumbai","Pune","Venice"];
undefined
city.length
4
city[0]
'Delhi'
city[1]
'Mumbai'
city[city.length-1]
'Venice'
city[city.length-2]
'Pune'
city.push("Amsterdam")
5
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Amsterdam']
city.push("Innsburg")
6
city

city.pop()
'Innsburg'
city
(5) ['Delhi', 'Mumbai', 'Pune', 'Venice', 'Amsterdam']
city.pop(2)
'Amsterdam'

city.unshift('London')
5
city
(5) ['London', 'Delhi', 'Mumbai', 'Pune', 'Venice']
city.shift()
'London'


push > Add value in the end of Array
pop > Remove the last value of Array
shift > remove the first value of array
unshift > Add as a first value in array

//splice(startIndex,deleteCount,value)
let city1 = ['London', 'Delhi', 'Mumbai', 'Pune', 'Venice']
undefined
city1.splice(2,0,'Amsterdam')
[]
city1
(6) ['London', 'Delhi', 'Amsterdam', 'Mumbai', 'Pune', 'Venice']
city1.splice(3,1)
['Mumbai']
city
(4) ['Delhi', 'Mumbai', 'Pune', 'Venice']
city1
(5) ['London', 'Delhi', 'Amsterdam', 'Pune', 'Venice']
city1.splice(1,1,'Boston','Indore')
['Delhi']
city1
(6) ['London', 'Boston', 'Indore', 'Amsterdam', 'Pune', 'Venice']


let city1 =  ['London', 'Boston', 'Indore', 'Amsterdam', 'Pune', 'Venice']

city1.indexOf('London')
0
city1.indexOf('Venice')
5
city1.indexOf('Amsterdam')
3
city1.indexOf('Mumbai')
-1
city1.indexOf('Helsinki')
-1