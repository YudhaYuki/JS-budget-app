// Module BUDGET CONTROLLER
var budgetController = (function() {

    // Create custom data type for inc and exp
    var Expense = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    var Income = function(id, description, value) {
        this.id = id;
        this.description = description;
        this.value = value;
    };

    /* 
    var allExpenses;
    var allIncomes;
    var totalExpenses;

    var data = {
        allExpenses : [],
        allIncomes : []
    }
    */

    // Better way of creating data structures, ready to receive data.
    var data = {
        allItems: {
            exp: [],
            inc: []
        },
        totals: {
            exp: 0,
            inc: 0
        }
    }

    // Adding item, either INC or EXP
    return {
        addItem: function(type, des, val) {
            var newItem, ID;

            // Create new ID
            if (data.allItems[type].length > 0) {
                ID = data.allItems[type][data.allItems[type].length - 1].id + 1;                
            } else {
                ID = 0;
            }

            // Create new item based on 'inc' or 'exp' type
            if (type === 'exp') {
                newItem = new Expense(ID, des, val);
            } else if (type === 'inc') {
                newItem = new Income(ID, des, val)
            }

            // Push it into our data structure
            data.allItems[type].push(newItem);

            // Return the new element
            return newItem;
        },

        // New method to access PRIVATE DATA structure (Just testing)
        testing: function() {
            console.log(data);
        }
    };

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
        var input, newItem;

        // 1. Get the filled input data
        // UI controller is the module that we have access to
        input = UICtrl.getInput();

        // 2. Add the items into the budget controller
        newItem = budgetCtrl.addItem(input.type, input.description, input.value);


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