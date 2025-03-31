let cid = [
  ['RM50', 250], 
  ['RM20', 100],   
  ['RM5', 25],  
  ['RM1', 5],   
  ['SEN_50', 2.5], 
  ['SEN_20', 1.0], 
  ['SEN_10', 0.5]  
];
  
function money_balance(itemPrice, userCash) {
  if (isNaN(itemPrice) || isNaN(userCash)) {
    console.log("Invalid input! Please enter valid numbers.");
  }

  else if(itemPrice > userCash) {
    console.log("Insufficient funds from the user.");
  }

  else if(itemPrice == userCash) {
    console.log("Exact amount given. No change needed.");
  }

  else {
    let balance = userCash - itemPrice;
    console.log("Total change: RM", balance.toFixed(2));

    let totalDrawer = cid.reduce((sum, currency) => sum + currency[1], 0);  // currency[0] is "RM50", currency[1] is 250.
      
    if (balance > totalDrawer) {
      console.log("Insufficient funds in drawer.");
    }

    let change_dist = [];

    for (let i = 0; i < cid.length; i++) {
      let currency = cid[i][0]; // 'RM50', 'RM20', ...
      let totalAmount = cid[i][1];  // Total value of this currency in the drawer  //250, 100, ...
      let denomination = parseFloat(currency.replace(/[^0-9.]/g, '')) || 0.1; // Extract the denomination  // 50, 20, 5, 1, ...
      let maxPieces = totalAmount / denomination; // Number of available pieces
      let count = 0;
  
      while (balance >= denomination && maxPieces > 0) {
        balance -= denomination;
        balance = Math.round(balance * 100) / 100; // Fix floating-point precision issues
        count++;
        maxPieces--;
      }
  
      if (count > 0) {
        change_dist.push(`${currency}: ${count}`);
        cid[i][1] -= count * denomination; // Reduce the amount in the drawer
      }
    }
  
    console.log("Change breakdown: ", change_dist);
    console.log("Updated drawer: ", cid);
  }
}
  
  const prompt = require('prompt-sync')();
  let price = parseFloat(prompt("Enter price amount: RM "));
  let cash = parseFloat(prompt("Enter user cash amount: RM "));
  
  money_balance(price, cash);