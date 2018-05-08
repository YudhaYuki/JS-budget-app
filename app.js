
// Module BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();


// Module UI CONTROLLER
UIController =  (function() {

    // Some code

})();


// Module GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function(){

        // 1. Get the filled input data

        // 2. Add the items into the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

        console.log('It works !');

    };

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();            
        } 

    });


})(budgetController, UIController);