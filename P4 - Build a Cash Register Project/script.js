let price = 3.26;
let cid = [
  ['PENNY', 1.01],
  ['NICKEL', 2.05],
  ['DIME', 3.1],
  ['QUARTER', 4.25],
  ['ONE', 90],
  ['FIVE', 55],
  ['TEN', 20],
  ['TWENTY', 60],
  ['ONE HUNDRED', 100]
];

const currencyValues = {
  'PENNY': 0.01,
  'NICKEL': 0.05,
  'DIME': 0.1,
  'QUARTER': 0.25,
  'ONE': 1,
  'FIVE': 5,
  'TEN': 10,
  'TWENTY': 20,
  'ONE HUNDRED': 100
};

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

priceScreen.innerHTML = `Total: $${price}`;

function checkResults() {
  let cashGiven = parseFloat(cash.value);

  if (price > cashGiven) {
    alert("Customer does not have enough money to purchase the item");
    return;
  } else if (price === cashGiven) {
    displayChangeDue.innerHTML = `No change due - customer paid with exact cash`;
    return;
  }

  let balance = cashGiven - price;
  let totalDrawer = cid.reduce((sum, currency) => sum + currency[1], 0);
  totalDrawer = Math.round(totalDrawer * 100) / 100;

  if (balance > totalDrawer) {
    displayChangeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let change_dist = [];
  let originalDrawer = JSON.parse(JSON.stringify(cid)); // Save the original drawer state
  let newDrawer = [...cid];

  for (let i = newDrawer.length - 1; i >= 0; i--) {
    let currency = newDrawer[i][0];
    let totalAmount = newDrawer[i][1];
    let currencyValue = currencyValues[currency];

    let maxPieces = Math.floor(totalAmount / currencyValue);
    let count = 0;

    while (balance >= currencyValue && maxPieces > 0) {
      balance -= currencyValue;
      balance = Math.round(balance * 100) / 100;
      count++;
      maxPieces--;
    }

    if (count > 0) {
      change_dist.push([currency, count * currencyValue]);
      newDrawer[i][1] -= count * currencyValue;
    }
  }

  if (balance > 0) {
    displayChangeDue.innerHTML = "Status: INSUFFICIENT_FUNDS";
    return;
  }

  let isDrawerEmpty = newDrawer.every(item => item[1] === 0);
  if (isDrawerEmpty) {
    displayChangeDue.innerHTML = `Status: CLOSED ${originalDrawer.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join(" ")}`;
    return;
  }

  displayChangeDue.innerHTML = `Status: OPEN <br> ${change_dist.map(item => `${item[0]}: $${item[1].toFixed(2)}`).join("<br>")}`;
}


// Helper function to format currency names properly
function formatCurrencyName(currency) {
  const nameMap = {
    'PENNY': 'Pennies',
    'NICKEL': 'Nickels',
    'DIME': 'Dimes',
    'QUARTER': 'Quarters',
    'ONE': 'Ones',
    'FIVE': 'Fives',
    'TEN': 'Tens',
    'TWENTY': 'Twenties',
    'ONE HUNDRED': 'Hundreds'
  };
  return nameMap[currency] || currency;
}

purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});