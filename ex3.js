function calculateSupply(amtPerDay, age) {
    var maxAge = 100;
    var amtperYear = amtPerDay * 365;
    var totalNeed = amtperYear * (maxAge - age);

    console.log("You will need " + totalNeed + " to the ripe of " + maxAge);
}