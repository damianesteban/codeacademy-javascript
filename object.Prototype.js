// Remember the hasOwnProperty method?  Let's see where it came from.
// If we have a "plain" object, remember that it inherits from
// Object.prototype...Is there where hasOwnProperty comes from?
var prototypeType = typeof Object.prototype;
console.log(prototypeType);  // object

// Ok, so it's prototype is...an object.  Let's look closer.
var hasOwn = Object.prototype.hasOwnProperty('hasOwnProperty');
console.log(hasOwn);  // true

// So as we can see from the code above, Object.prototype is itself an object!
