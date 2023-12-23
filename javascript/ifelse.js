if(condition){
    // if condition is true this part of logic will work
}else{
    // if condition is false this part of logic will work
}

if(condition){
    // if condition is true this part of logic will work
}else if(condition){

} else{
    // if condition is false this part of logic will work
}

var a = 10
if(a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
VM1363:3 10 is even
undefined
var a = 11
if(a%2 == 0){
    console.log(`${a} is even`)
}else{
    console.log(`${a} is odd`)
}
VM1367:5 11 is odd


var a = 11
if(a%2 ==0){
    console.log(`${a} is even`)
}else if(a%3 == 0){
    console.log(`Number ${a} is divisble by 3`)
}else{
    console.log(`${a} is odd`)
}

// ternory single line if else
condition ? if condition is true : if condition is false

var a = 10;
a > 10 ? "Hii":"Bie"
"Bie"

var a = 11
a > 10 ? "Hii":"Bie"
'Hii'

var a = 10
a>10 ?a+1:a-1
9

var a = 11
a>10 ?a+1:a-1
12