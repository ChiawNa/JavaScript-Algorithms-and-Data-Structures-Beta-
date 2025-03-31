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

const displayChangeDue = document.getElementById('change-due');
const cash = document.getElementById('cash');
const purchaseBtn = document.getElementById('purchase-btn');
const priceScreen = document.getElementById('price-screen');
const cashDrawerDisplay = document.getElementById('cash-drawer-display');

priceScreen.innerHTML = `Total: $${price}`;

function checkResults(){
  if (price > parseFloat(cash.value)){
    alert("Customer does not have enough money to purchase the item");
  } 

  else if ((price === parseFloat(cash.value))){
    displayChangeDue.innerHTML = `No change due - customer paid with exact cash`;
    return;
  }
}



purchaseBtn.addEventListener('click', checkResults);

cash.addEventListener('keydown', e => {
  if (e.key === 'Enter') {
    checkResults();
  }
});