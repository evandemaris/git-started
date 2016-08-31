var buyPhonesWindowCheck = (window ? this.buyPhones : global.buyPhones);

(function(arbit) {
	var SPENDING_THRESHOLD = 100;
	var TAX_RATE = 0.09;
	var PHONE_PRICE = 399.99;
	var ACCESSORY_PRICE = 29.99;

	arbit.bankAccount = 5000;
	arbit.phonesPurchased = 0;

	addTax = function(amount) {
    	return amount * TAX_RATE;
	}

	arbit.addDollars = function(amount) {
    	return "$" + amount.toFixed(2);
	}

	var cost = PHONE_PRICE + ACCESSORY_PRICE;
	cost += addTax(PHONE_PRICE + ACCESSORY_PRICE);

	while (arbit.bankAccount - cost > SPENDING_THRESHOLD) {
  	  console.log("Phone purchased for " + arbit.addDollars(cost));
  	  arbit.bankAccount -= cost;
   	  arbit.phonesPurchased++;
	}
})(buyPhonesWindowCheck = {});

console.log(buyPhones.addDollars(buyPhones.bankAccount) + " in account.");
console.log(buyPhones.phonesPurchased + " phones purchased.");