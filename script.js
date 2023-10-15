var crust = document.getElementById('crust');
var sauce = document.getElementById('sauce');
var toppings = [];
var formbutton = document.getElementById('btn');
formbutton.addEventListener("click", function getcontent(event){
    event.preventDefault();
    var topping1 = document.getElementById('top1').value;
    var topping2 = document.getElementById('top2').value;
    var topping3 = document.getElementById('top3').value;
    toppings.push(topping1, topping2, topping3);
    calculateTotal(toppings);
});

function calculateTotal(toppingArray) {  
    let total = 0;
    let toppingCost = 2.50; 
    let baseCost = 5.50;

    if (crust.value === "") {
        crust.value = "mystery";
    };
    if (sauce.value === "") {
        sauce.value = "mystery"
    };
    let orderString = crust.value + " pizza with " + sauce.value + " sauce";

    let toppingString = "Toppings: ";
    

    // For Loop
    for (var i = 0; i < toppingArray.length; i++) {
        if (toppings[i] !== "") {
            total += toppingCost;
            toppingString = toppingString + " " + toppingArray[i];
        };
    };
    toppings = [];
    total = total += baseCost;
    document.getElementById('total').innerHTML = "$" + total;
    document.getElementById('pizzaorder').innerHTML = orderString;
    document.getElementById('toppings').innerHTML = toppingString;
};



// testing purposes only
console.log("debug console");
console.log("     .\^/.           ")
console.log("   . |`|/| .         ")
console.log("   |\|\|'|/|         ")
console.log(".--'-\`|/-''--.      ")
console.log(" \`-._\|./.-'/       ")
console.log("  >`-._|/.-'<        ")
console.log(" '~|/~~|~~\|~'       ")
console.log("       |             ")