// Meal calculator app -- JAB 6-2016
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

Diner.prototype.myBill = function(tax,tip) {
    var myBill = 0;

    for(var i = 0; i < this.meal.length; i++) {
        myBill += meal[i].price;
    }

    // myBill = myBill + (myBill * tax);
    // myBill = myBill + (myBill * tip);

    return myBill;
};

function Dish (name,price) {
    this.name = name,
    this.price = price
}

function Feast (tax,tip,diners,menu) {
    this.tax = tax;
    this.tip = tip;
    this.diners = [];
    this.menu = [];
}

Feast.prototype.buildMenu = function() {
    var menu = [];

    // create menu dishes
    var wine = new Dish();
    wine.name = 'Imp\'s Special Ale';
    wine.price = 10;
    menu.push(wine);

    var venison = new Dish();
    venison.name = 'Stormlands Venison';
    venison.price = 10;
    menu.push(venison);

    var lemoncakes = new Dish();
    lemoncakes.name = 'Lemon Cakes';
    lemoncakes.price = 8;
    menu.push(lemoncakes);

    var brown = new Dish();
    brown.name = 'Flea Bottom Bowl of Brown';
    brown.price = 1;
    menu.push(brown);

    var pie = new Dish();
    pie.name = 'Wedding Pigeon Pie';
    pie.price = 20;
    menu.push(pie);

    return menu;    // array of dishes (objects)
};

Feast.prototype.calculateCheck = function() {

};


 // -------------------------------------------------- main program -------------------------------------------------/
var purpleWedding = new Feast();

//  purpleWedding.diners = new purpleWedding.getDiners();     // array of diner objects

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
    console.log(purpleWedding.menu[i].name + ' ' + purpleWedding.menu[i].price);    // display the menu
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
