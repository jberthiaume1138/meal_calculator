// Meal calculator app -- JAB 6-2016
'use strict'

function Diner (firstname,lastname,title,meal) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.title = title,
    this.meal = [];
}

Diner.prototype.orderFood = function(dish)    {
    this.meal.push(dish);
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
    this.diners = diners;
    this.menu = menu;
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

Feast.prototype.getDiners = function() {
    // code to accept user input for a diner would be here
    // instead, hard code in some data
    var diners = [];

    var joff = new Diner();
    joff.firstname = 'Joffrey';
    joff.lastname = 'Baratheon';
    joff.title = 'King of Westeros';
    diners.push(joff);

    var olenna = new Diner();
    olenna.firstname = 'Olenna';
    olenna.lastname = 'Tyrell';
    olenna.title = 'Queen of Thorns';
    diners.push(olenna);

    var oberyn = new Diner();
    oberyn.firstname = 'Oberyn';
    oberyn.lastname = 'Martell';
    oberyn.title = 'The Red Viper';
    diners.push(oberyn);

    var tyrion = new Diner();
    tyrion.firstname = 'Tyrion';
    tyrion.lastname = 'Lannister';
    tyrion.title = 'Master of Coin';
    diners.push(tyrion);

    var sansa = new Diner();
    sansa.firstname = 'Sansa';
    sansa.lastname = 'Stark';
    sansa.title = 'Lady of Winterfell';
    diners.push(sansa);

    return diners;
};

Feast.prototype.calculateCheck = function() {

};


 // -------------------------------------------------- main program -------------------------------------------------/
var purpleWedding = new Feast();

purpleWedding.diners = new purpleWedding.getDiners();     // array of diner objects

console.log('----------------------------------------------');
console.log('******** Welcome to the Royal Wedding ********');
console.log('----------------------------------------------');
console.log('The guests are arriving, say hello to:');

for(var i = 0; i<purpleWedding.diners.length; i++){
    console.log(purpleWedding.diners[i].firstname + ' ' +
                purpleWedding.diners[i].lastname + ', ' +
                purpleWedding.diners[i].title);
}

purpleWedding.menu = new purpleWedding.buildMenu()    // array of dishes

console.log('------------------------------');
console.log('Today\'s Menu is:');
for(var i = 0; i<purpleWedding.menu.length; i++){
    console.log(purpleWedding.menu[i].name + ' ' + purpleWedding.menu[i].price);    // display the menu
}

console.log('------------------------------');
console.log('Dinner is now served.');

for(var i = 0; i<purpleWedding.diners.length; i++){
    var wine = purpleWedding.diners[i].orderFood(purpleWedding.menu[0]);   // everyone orders wine

    if (purpleWedding.diners[i].firstname == 'Sansa') {
            diner.orderFood(purpleWedding.menu[3])
    }

    for (var q = 0; )

    console.log(purpleWedding.diners[i].firstname + ' is having ' + wine);
}
// loop through each diner
// for each diner, call feedGuest
//     // loop through diner.meal
// for(var i = 0; i<diners.length; i++){
//     if(purpleWedding.diners[i].firstname == 'Sansa'){
//         Sansa.orderFood(purpleWedding.menu.)
//     }
//
//
//                 );
// };
