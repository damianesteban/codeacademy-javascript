// Quick Review:
function Dog (breed) {
    this.breed = breed;
}

Dog.prototype.sayHello = function() {
    console.log("Hello this is a " + this.breed + " dog");
};

var yourDog = new Dog("golden retriever");
yourDog.sayHello();

var myDog = new Dog("dachshund");
myDog.sayHello();

// Output:
// Hello this is a golden retriever dog
// Hello this is a dachshund dog
