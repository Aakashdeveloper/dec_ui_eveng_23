var > we can redeclare and reassign
let > we cannot redeclare but we can reassign
const > we cannot redeclare nor reassign

var a = 10
var a >>> declare
a = 10 >> assignment

> var a = 10
undefined
> var a = 20
undefined
> a
20
> a = 30
30
> a
30
> let b = 10
undefined
> b
10
> let b = 11
Uncaught SyntaxError: Identifier 'b' has already been declared
> b = 12
12
> const c = 10
undefined
> c
10
> const c = 11
Uncaught SyntaxError: Identifier 'c' has already been declared
> c = 11
Uncaught TypeError: Assignment to constant variable.