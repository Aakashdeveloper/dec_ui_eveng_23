//es5
//es6
> Ecma Script

DataType
String ="Hii" 'hey' "true" 'false' "10" '11.5' `Hi`
Number = 10 10.11 .22 23534464 33.32
Boolean = true false

//es5
var a = 10
var b = "Hii"
var c = true

typeof(a)
'number'
typeof(b)
'string'
typeof(c)
'boolean'

var d = "10"
typeof(d)
'string'
var e = 10.33
typeof(e)
'number'

var a = 10
var b = 20
a+b (addition)
30
a-b
-10
a*b
200
a/b
0.5
4%2
0
4%3
1
4%5
4
2%3
2
3%2
1

var a = "Hiii"
var b = "JavaScript"

a+b (concat)
'HiiiJavaScript'
a-b
NaN (Not A Number)
a*b
NaN
a/b
NaN

var c = 1
undefined
a+b
'HiiiJavaScript'
a+c
'Hiii1'


string +string = string
string +number = string
number +string = string
number +number = number


10+"20"+30
"1020"+30
"102030"

10+20+"30"
30 + "30"
"3030"

"10"+20+30
"1020"+30
"102030"

10+"20"+30-1
10+20+"30"-1
"10"+20+30-1

var a = "hii"
var b = 1

a-b
NaN
"hii"-1
NaN
10+"20"+30-1
102029
10+20+"30"-1
3029
"10"+20+30-1
102029


"Hi"-1
NaN
"10"-1
9
"10"+1
'101'
20*"2"
40
"18"/"3"
6
"10a"-1
NaN

//es5
var a = "10"
var b = "1"
undefined
a+b
'101'
parseInt(a)+parseInt(b)
11
var a = "10.2"
var b = "1.33"
undefined
parseInt(a)+parseInt(b)
11
parseFloat(a)
10.2
parseFloat(a)+parseFloat(b)
11.53

//es6

Number(a)+Number(b)
11.53

//////

true +true
2
true+false
1
10/false
Infinity
2*true
2

true is equal to 1
false is equal to 0