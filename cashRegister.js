// And finally, let's build a cash register for no reason!

// 1 - Create the object called cashRegister
// and initialize its total property
// 2 - add an "add" function to the cashRegister object.
var cashRegister = {
    total: 0,
    add: function(itemCost) {
      this.total += itemCost;
    }
};


// Out items:
var eggs = 0.98;
var milk = 1.23;
var magazine = 4.99;
var chocolate = 0.45;



// call the add method for our items...one at a time.
// TODO:  I understand this is supposed to simulate a cash register...
// but do some research to see if JS has a splat operator like in Ruby.
cashRegister.add(eggs);
cashRegister.add(milk);
cashRegister.add(magazine);
cashRegister.add(chocolate);

console.log('Your bill is $' + cashRegister.total); // Your bill is $7.65
