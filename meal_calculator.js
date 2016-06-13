// Meal calculator app -- JAB 6-2016
'use strict'

//diner object
var Diner = function (firstname,lastname,title) {
    this.firstname = firstname,
    this.lastname = lastname,
    this.title = title,
    this.meal = [];
};
    
// Diner.prototype.orderFood = function(dish)    {     // method to push each chosen dish into the array meal[]
//     this.meal.push(dish);
// };
      
var Dish = function (name,price) {
    this.name = name,
    this.price = price
};
    
var Meal = function () {
    this.taxRate = 0.10;
    this.tip = 0.25;
    this.diners = [];
    this.menu = [];
};

Meal.prototype.getDiners = function() {
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

Meal.prototype.buildMenu = function() {
    var menu = [];
    
    // create menu dishes
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
    
    var wine = new Dish();
    wine.name = 'Imp\'s Special Ale';
    wine.price = 10;
    menu.push(wine);
    
    return menu;    // array of dishes (objects)
};

Meal.prototype.feedGuest = function(diner) {
    // user input here to ask guest what they want to eat from the menu
    // instead, use this data
    
    // populate the chosen meal array to each diner object
    var meal = diner.orderFood();
    
        
    return meal;
};

Meal.prototype.calculateCheck = function() {
    
};


var purpleWedding = new Meal();

purpleWedding.diners = new purpleWedding.getDiners();     // array of diner objects

console.log('------------------------------');
console.log('Welcome to the Royal Wedding');
console.log('------------------------------');
console.log('The guests are arriving, say hello to:');

for(var i = 0; i<purpleWedding.diners.length; i++){
    console.log(purpleWedding.diners[i].firstname + ' ' + 
                purpleWedding.diners[i].lastname + ', ' +
                purpleWedding.diners[i].title);
}

var menu = new purpleWedding.buildMenu()    // array of dishes

console.log('------------------------------');
console.log('Today\'s Menu is:');
for(var i = 0; i<menu.length; i++){     
    console.log(menu[i].name + ' ' + menu[i].price);    // display the menu
}

console.log('------------------------------');
console.log('Dinner is now served.');
// loop through each diner
// for each diner, call feedGuest
    // loop through diner.meal
// for(var i = 0; i<diners.length; i++){
//     var myMeal = meal.feedGuest;
    
//     console.log(diners[i].firstname + ' is having ' + 
                
//                 );
// };