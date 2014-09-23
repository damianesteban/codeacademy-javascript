// Let's add some stuff to an Array!
var myArray = [];

var number = 52;
var bool = true;
var str = "Superman";
var myCar = {
    model: "Ford",
    color: "blue",
    year: 1993
};

myArray = [number, bool, str, myCar];
console.log(myArray);

// Let's make a 2-dimensional array, with one of the objects...an object!
var newArray = [];
var heroList = ["Superman", "Batman", "Green Lantern"];
var superHero = {
    name: "Aquaman",
    powers: "Super-Strength, Telepathy",
    realName: "Arthur Curry"
};

newArray = [heroList, [superHero]];
