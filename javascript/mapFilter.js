Map
> Map help to iterate over the Array
> It always return same lenght of output as input Array
> it is use to applt the logics

var a = [4,5,23,12,34,2,7,47]
a.map((data) => {return data*2})
(8) [8, 10, 46, 24, 68, 4, 14, 94]


filter
> help to filter out the values
> it may or may not return same length of output as input array
> it only return those value for which output/condition is true


var a = [4,5,23,12,34,2,7,47]
a.filter((data) => {return data>20})
(3) [23, 34, 47]


var a = [4,5,23,12,34,2,7,47]
a.map((data) => {return data>20})
[false, false, true, false, true, false, false, true]

