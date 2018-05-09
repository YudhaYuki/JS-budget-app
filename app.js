
// Module BUDGET CONTROLLER
var budgetController = (function() {

    // Some code

})();


// Module UI CONTROLLER
UIController =  (function() {

    // Storing query string into variable/object, so when we change the name, we just have to change them here
    var DOMstrings = {
        inputType: '.add__type',
        inputDescription: '.add__description',
        inputValue: '.add__value',
        inputBtn: '.add__btn'
    };

    return {
        // Methhod to return all 3 input
        getInput: function() {
            return {
                type : document.querySelector(DOMstrings.inputType).value, // Will be either inc or exp
                description : document.querySelector(DOMstrings.inputDescription).value,
                value : document.querySelector(DOMstrings.inputValue).value
            };
        },

        // Exposing the DOM strings object into the public

        getDOMstrings: function() {
            return DOMstrings;
        }
    };

})();


// Module GLOBAL APP CONTROLLER
var controller = (function(budgetCtrl, UICtrl) {

    // Function in which all event listeners are placed
    var setupEventListeners = function() {

        // retrieve DOMstrings from UI Controller 
        var DOM = UICtrl.getDOMstrings();

        document.querySelector(DOM.inputBtn).addEventListener('click',ctrlAddItem);
        
        document.addEventListener('keypress', function(event) {
            if (event.keyCode === 13 || event.which === 13) {
                ctrlAddItem();            
            } 
        });
    };


    // Function that gets call when we want to add a new item
    var ctrlAddItem = function(){

        // 1. Get the filled input data
        // UI controller is the module that we have access to
        var input = UICtrl.getInput();

        // 2. Add the items into the budget controller


        // 3. Add item to the UI

        // 4. Calculate the budget

        // 5. Display the budget on the UI

    };


    // A public initialization function (Running the app whenever we start the app)
    // Our event listene will be setup as soon as we call the init function
    // We need to do that outside the controller
    return {
        init: function() {
            console.log('Application has started !');
            setupEventListeners();
        }
    };


})(budgetController, UIController);

controller.init();