// Meal calculator app -- JAB 8-2016
'use strict'

function Diner (firstname,lastname,title,meal) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.title = title,
    this.meal = [];
}

Diner.prototype.orderFood = function(dish)    {
    this.meal.push(dish)
};

Diner.prototype.myBill = function(taxRate,tipRate) {
    var breakdown = {
        subtotal: 0,
        tax: 0,
        tip: 0,
        total: 0
    };

    for(var i = 0; i < this.meal.length; i++) {
        breakdown.subtotal += this.meal[i].price;
    }

    breakdown.tax = breakdown.subtotal * taxRate;
    breakdown.tip  = (breakdown.subtotal + breakdown.tax) * tipRate;
    breakdown.total = breakdown.subtotal + breakdown.tax + breakdown.tip;

    console.log(this.firstname + ' owes: ' + breakdown.subtotal + ' + ' + breakdown.tax + ' for tax and ' +  breakdown.tip + ' for tip.');
    console.log('Total: ' + Math.round(breakdown.total * 100) / 100);
    console.log('----------------------------------------------');

    return breakdown.total;
};

function Dish (name,price) {
    this.name = name,
    this.price = price
}

function Feast (tax,tip,diners,menu,grandtotal) {
    this.tax = tax;
    this.tip = tip;
    this.diners = [];
    this.menu = [];
    this.grandtotal = grandtotal;
}

 // -------------------------------------------------- main program -------------------------------------------------/
var purpleWedding = new Feast();

console.log('----------------------------------------------');
console.log('******** Welcome to the Royal Wedding ********');
console.log('----------------------------------------------');
console.log('The guests are arriving, say hello to:');

var joff = new Diner();
joff.firstname = 'Joffrey';
joff.lastname = 'Baratheon';
joff.title = 'King of Westeros';
purpleWedding.diners.push(joff);

var olenna = new Diner();
olenna.firstname = 'Olenna';
olenna.lastname = 'Tyrell';
olenna.title = 'Queen of Thorns';
purpleWedding.diners.push(olenna);

var oberyn = new Diner();
oberyn.firstname = 'Oberyn';
oberyn.lastname = 'Martell';
oberyn.title = 'The Red Viper';
purpleWedding.diners.push(oberyn);

var tyrion = new Diner();
tyrion.firstname = 'Tyrion';
tyrion.lastname = 'Lannister';
tyrion.title = 'Master of Coin';
purpleWedding.diners.push(tyrion);

var sansa = new Diner();
sansa.firstname = 'Sansa';
sansa.lastname = 'Stark';
sansa.title = 'Lady of Winterfell';
purpleWedding.diners.push(sansa);

for(var i = 0; i<purpleWedding.diners.length; i++){
    console.log(purpleWedding.diners[i].firstname + ' ' +
                purpleWedding.diners[i].lastname + ', ' +
                purpleWedding.diners[i].title);
}

// menu

var wine = new Dish();
wine.name = 'Imp\'s Special Ale';
wine.price = 10;
purpleWedding.menu.push(wine);

var venison = new Dish();
venison.name = 'Stormlands Venison';
venison.price = 10;
purpleWedding.menu.push(venison);

var lemoncakes = new Dish();
lemoncakes.name = 'Lemon Cakes';
lemoncakes.price = 8;
purpleWedding.menu.push(lemoncakes);

var brown = new Dish();
brown.name = 'Flea Bottom Bowl of Brown';
brown.price = 1;
purpleWedding.menu.push(brown);

var pie = new Dish();
pie.name = 'Wedding Pigeon Pie';
pie.price = 20;
purpleWedding.menu.push(pie);


console.log('----------------------------------------------');
console.log('Today\'s Menu is:');
for(var i = 0; i<purpleWedding.menu.length; i++){
    console.log(purpleWedding.menu[i].name + '\t' + purpleWedding.menu[i].price);    // display the menu
}

joff.orderFood(wine);
joff.orderFood(venison);

olenna.orderFood(wine);
olenna.orderFood(pie);

oberyn.orderFood(wine);
oberyn.orderFood(brown);

tyrion.orderFood(wine);
tyrion.orderFood(wine);
tyrion.orderFood(wine);
tyrion.orderFood(wine);

sansa.orderFood(lemoncakes);

console.log('------------------------------');
console.log('Dinner is now served.\r\n');

for(var diner = 0; diner < purpleWedding.diners.length; diner++){
    var status = purpleWedding.diners[diner].firstname + ' is having:\r\n';

    for(var dish = 0; dish < purpleWedding.diners[diner].meal.length; dish++) {
        status += purpleWedding.diners[diner].meal[dish].name + '\r\n';
    }
    console.log(status);
}

console.log('--------------------------------------------------------------');
console.log('Time to pay for this feast and the Master of Coin is drunk.');

purpleWedding.tax = 0.08;
purpleWedding.tip = 0.25;

purpleWedding.grandtotal = 0;

for(var diner = 0; diner < purpleWedding.diners.length; diner++){
    purpleWedding.grandtotal += purpleWedding.diners[diner].myBill(purpleWedding.tax,purpleWedding.tip);
}

console.log('---------------------------------------------------------------------');
console.log('The grand total for this feast is: ' + purpleWedding.grandtotal + ' golden dragons!');
console.log('---------------------------------------------------------------------');
console.log('---------------------------------------------------------------------');
console.log('Where is Lord Tywin? The caterers heard a rumor about him...');
console.log('Oh! Hey! Look! King Joffrey just dropped dead! Such a shame...well not really...');
console.log('Hey Lady Olenna Tyrell, where are you running off to???');
console.log('---------------------------------------------------------------------');
