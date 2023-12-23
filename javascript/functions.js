var a = 10
var b = 20
a+b
30

keyword nameoffunction(parameter){
    return output
}

//es5
function add(a,b){
    return a+b
}

add(1,2)
3
add(4,88)
92
add(14,88)
102
add("hii","Test")
'hiiTest'
add(1,2,3)
3
add(1)
NaN

//es6
let add = (a,b) => {return a+b}
add(1,2)
3

add(8,1)
9

//rest es6
let add1 = (...args) => {
    console.log(args)
}

add1(1,2,3,4)
VM1663:2 (4) [1, 2, 3, 4]
