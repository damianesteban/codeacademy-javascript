// The Dragon Slayer

// A variable to check if we're still slaying:
var slaying = true;

// A variable to check if we hit the dragon:
var youHit = Math.floor(Math.random() * 2);

// A variable to keep track of how much damage we've
// dealt the dragon this round:
var damageThisRound = Math.floor(Math.random() * 5 + 1);

// A variable to keep track of how much total damage we've done this
// round.
var totalDamage = 0;

// A while loop to see if we are still slaying
while(slaying) {
    slaying = false;
    if (youHit) {
        console.log("Congratulations!  You hit the Dragon!");
        totalDamage += damageThisRound;

        if (totalDamage >= 4) {
            console.log("You slew da Dragon!!!");
            slaying = false;
        }
    } else {
          console.log("The dragon killed you.  You Suck.");
    }
}
