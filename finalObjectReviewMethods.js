// Object Methods Review:
// Another Example:
var superMan = {
  name: "Superman",
  superPowers: "flight, super-strength, amazing hair",
  teamMembership: "The Justice League of America",
  speak: function() {
    console.log("My name is " + this.name + " my powers are " + this.superPowers +
                 " and I am a member of " + this.teamMembership);
  }
};

superMan.speak();

// Then, we can change superMan's attributes:
superMan.teamMembership = "The Legion of Superheroes";
superMan.speak();
