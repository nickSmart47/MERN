// 1
console.log(hello);                                   
var hello = 'world';                                 
// var hello = undefined
// console.log(var) // logs undefined
// var hello = 'world'

// 2
var needle = 'haystack';
test();
function test(){
    var needle = 'magnet';
    console.log(needle);
}

// var needle = 'haystack';
// function test(){
//         var needle = 'magnet';
//         console.log(needle);
//     }
//test()
// console logs "magnet"

//3
var brendan = 'super cool';
function print(){
    brendan = 'only okay';
    console.log(brendan);
}
console.log(brendan);

// var brendan = 'super cool';
// function print(){
//     brendan = 'only okay';
//     console.log(brendan);
// }
// console.log(brendan); -> logs 'only okay'

// 4
var food = 'chicken';
console.log(food);
eat();
function eat(){
    food = 'half-chicken';
    console.log(food);
    var food = 'gone';
}

// var food = 'chicken';
// eat();
// function eat(){
//     // var food goes to the top
//     food = 'half-chicken';
//     console.log(food);
//     var food = 'gone';
// }
// console.log(food); -> logs 'chicken
// console.log(food) -> logs 'half chicken'

// 5
// mean();
// console.log(food);
// var mean = function() {
//     food = "chicken";
//     console.log(food);
//     var food = "fish";
//     console.log(food);
// }
// console.log(food);

// var mean = function() {
//         food = "chicken";
//         console.log(food);
//         var food = "fish";
//         console.log(food);
//     }
// mean() - throws error cause mean is not a function
// console.log(food); food is not defined yet
// console.log(food); again, food not defined cause console log outside function

// 6
console.log(genre);
var genre = "disco";
rewind();
function rewind() {
    genre = "rock";
    console.log(genre);
    var genre = "r&b";
    console.log(genre);
}
console.log(genre);

// var genre = "disco";
// function rewind() {
//     genre = "rock";
//     console.log(genre);
//     var genre = "r&b";
//     console.log(genre);
// }
// console.log(genre); -> logs undefined because 'var' goes to top of scope but not defined yet
// rewind(); -> logs 'rock' then 'r&b'
// console.log(genre); -> logs 'disco' cause it's finally been defined outside function

// 7
dojo = "san jose";
console.log(dojo);
learn();
function learn() {
    dojo = "seattle";
    console.log(dojo);
    var dojo = "burbank";
    console.log(dojo);
}
console.log(dojo);

// dojo = "san jose";
// function learn() {
//     dojo = "seattle";
//     console.log(dojo);
//     var dojo = "burbank";
//     console.log(dojo);
// }
// console.log(dojo); -> logs 'san jose'
// learn(); -> logs 'seattle','burbank'
// console.log(dojo); -> logs 'san jose' again...




