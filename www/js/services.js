var app = angular.module('starter.services', []);

var cardsBase = function($firebase){
    var ref = new Firebase("https://luminous-fire-844.firebaseio.com/");
    var cards = $firebase(ref).$asArray();

// Add New Card into Firebase
    var add_card = function(a,b,c){
        cards.$add({
            bank: a,
            name: b,
            annual_fee: c
        }); 
    }; 
    
    return {
      add_card: add_card  
    };
    
};

cardsBase.$inject = ['$firebase'];

app.factory('cardsBase',cardsBase);