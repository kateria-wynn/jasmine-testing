// accepts 'tipAmt', 'billAmt', 'tipPercent' and sums total from allPayments objects
function sumPaymentTotal(type) {
  let total = 0;

  for (let key in allPayments) {
    let payment = allPayments[key];

    total += Number(payment[type]);
  }

  return total;
}

// converts the bill and tip amount into a tip percent
function calculateTipPercent(billAmt, tipAmt) {
  return Math.round(100 / (billAmt / tipAmt));
}

// expects a table row element, appends a newly created td element from the value
function appendTd(tr, value) {
  let newTd = document.createElement('td');
  newTd.innerText = value;

  tr.append(newTd);
}

/*
Expects a table row element as param.

This function will create a ‘td’ with the value ‘X’, when clicked it will delete the table row it belongs to
*/
function appendDeleteBtn(tr) {
  let newTd = document.createElement('td');
  newTd.innerText = 'X';

  tr.append(newTd);
}
