// Constructors can also define emthods, so as
// soon as the object is instantiated it will have
// its own methods as well
function Rectangle(height, width) {
  this.height = height;
  this.width = width;
  this.calcArea = function() {
    return this.height * this.width;
  };
  this.calcPerimeter = function() {
    return this.height + this.height + this.width + this.width;
  };
}

rex = new Rectangle(4, 9);
console.log(rex.calcArea());
console.log(rex.calcPerimeter());

// And another example:
function Rabbit(adjective) {
  this.adjective = adjective;
  this.describeMyself = function() {
    console.log("I am a " + this.adjective + " rabbbit.");
  };
}

bugsBunny = new Rabbit();
bugsBunny.describeMyself();

// NOTE: This is interesting.  I called my object method above but I forgot to
// instantiate the bugsBunny object with an "adjective".
// However, this was the output:
// "I am a undefined rabbit."
// Research this.
//=========================================================
// What I should have done:
bugsBunny = new Rabbit("wascally");
bugsBunny.describeMyself();         // I am a wascally rabbit
