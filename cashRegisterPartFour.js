// We need to figure out a way to apply the differenr
// levels of discounts to students
// Create a constructor for the staffMember class
function StaffMember(name, discountPercent) {
  this.name = name;
  this.discountPercent = discountPercent;
}

// Let's make some employees
var sally = new StaffMember("Sally", 15);
var bob = new StaffMember("Bob", 23);
var satan = new StaffMember("Lucifer", 100);

// Create yourself
var me = new StaffMember("Superman", 52);
