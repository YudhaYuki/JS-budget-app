
// Module BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();


// Module UI CONTROLLER
UIController =  (function() {

    return {
        // Methhod to return all 3 input
        getInput: function() {
            return {
                type : document.querySelector('.add__type').value, // Will be either inc or exp
                description : document.querySelector('.add__description').value,
                value : document.querySelector('.add__value').value
            };
        }
    };

})();


// Module GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    var ctrlAddItem = function(){

        // 1. Get the filled input data
        // UI controller is the module that we have access to
        var input = UICtrl.getInput();
        console.log(input);

        // 2. Add the items into the budget controller

        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI


    };

    document.querySelector('.add__btn').addEventListener('click',ctrlAddItem);

    document.addEventListener('keypress', function(event) {

        if (event.keyCode === 13 || event.which === 13) {
            ctrlAddItem();            
        } 

    });


})(budgetController, UIController);