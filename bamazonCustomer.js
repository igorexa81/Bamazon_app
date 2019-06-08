var mysql = require("mysql");
var inquirer = require("inquirer")

var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "Maxima03!",
    database: "bamazon"

});

connection.connect(function (error) {
    if (error) {
        console.error('error!!!', error);
        return;
    }

    console.log('connection made!', connection.threadId);

    start();
});

function start() {
    connection.query("SELECT * FROM products", function (err, res) {
        if (err) throw err;
        for (var i = 0; i < res.length; i++) {
            console.log("Item #: " + res[i].item_id + "|" +
            "Product: " + res[i].product_name + "|" +
            "Department: " + res[i].department_name + "|" +
            "Price: " + "$" + res[i].price + "|" +
            "In Stock: " + res[i].stock_quantity);
            console.log("--------------------------------------------------------------------------------");
        }
        purchaseProduct();
    });

};

function purchaseProduct() {
    inquirer.prompt([{
        name: "itemId",
        type: "input",
        message: "Select By Product ID Number:"
    }, {
        name: "quantity",
        type: "input",
        message: "How many items would you like to buy?"
    }]).then(function(answer) {

        connection.query("SELECT * FROM products", function (err, res) {
            if (err) throw err;

            var selectedItem;
            for (var i = 0; i < res.length; i++) {
                if (res[i].item_id === parseInt(answer.itemId)) {
                    selectedItem = res[i];
                }
            }

            if (selectedItem.stock_quantity >= parseInt(answer.quantity)) {
                connection.query(
                    "UPDATE products SET ? WHERE ?",
                    [
                        {
                            stock_quantity: (selectedItem.stock_quantity - parseInt(answer.quantity))
                        },
                        {
                            item_id: selectedItem.item_id
                        }
                    ],
                    function (error) {
                        if (error) throw error;
                        console.log("Thank you for your purchase! Your total is " + "$" + parseInt(answer.quantity) * selectedItem.price);
                        setTimeout(()=>{
                            start();

                        }, 750)
                    }
                );
            } 
            else {
                console.log("We're sorry. We don't have enough in stock.");
            
                purchaseProduct();
            
            }
            
        });
    });
};