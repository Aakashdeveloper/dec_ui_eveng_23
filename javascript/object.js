var a = [] //array
var b = {} //object

var movieName = "Jab We Met"
var movieRating = 4.7
var movInd = "Bollywood"


var movieName1 = "Avengers"
var movieRating1 = 4.3
var movInd1 = "Hollywood"

var movie = {
    name:"Jab We Met",
    rating:4.7,
    ind:"Bollywood"
}

movie
{name: 'Jab We Met', rating: 4.7, ind: 'Bollywood'}
movie.name
'Jab We Met'
movie.rating
4.7
movie.rating = 4.5
4.5
movie
{name: 'Jab We Met', rating: 4.5, ind: 'Bollywood'}
movie.type="Action"
'Action'
movie
{name: 'Jab We Met', rating: 4.5, ind: 'Bollywood', type: 'Action'}
delete movie.ind
true
movie
{name: 'Jab We Met', rating: 4.5, type: 'Action'}


movie['name']
'Jab We Met'


//JSON > JavaScript Object Notation
var movies = [
    {
        name:"Jab We Met",
        rating:4.7,
        ind:"Bollywood"
    },
    {
        name:"Avengers",
        rating:4.7,
        ind:"Bollywood"
    },
    {
        name:"intersettler",
        rating:4.7,
        ind:"Bollywood"
    }
]