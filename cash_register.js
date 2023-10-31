/* Cash Register */
/* 
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

The checkCashRegister() function should always return an object with a status key and a change key.

Return {status: "INSUFFICIENT_FUNDS", change: []} if cash-in-drawer is less than the change due, or if you cannot return the exact change.

Return {status: "CLOSED", change: [...]} with cash-in-drawer as the value for the key change if it is equal to the change due.

Otherwise, return {status: "OPEN", change: [...]}, with the change due in coins and bills, sorted in highest to lowest order, as the value of the change key.
*/
function checkCashRegister(price, cash, cid) {
    let changeNeeded = floatFix(cash - price);
    //check register fund
    let regTotal = 0.0;
    for (let cur of cid){
      regTotal = floatFix(regTotal + cur[1]);
    }
    let status;
    if (changeNeeded > regTotal){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    else if(changeNeeded == regTotal){
      status = "CLOSED";
    }
    else{
      status = "OPEN";
    }
    //console.log("inital reg:", cid);
  
    let currencyIndex = [.01, .05, .1, .25, 1, 5, 10, 20, 100];
    let change = [];
    let noChange = [];
    // check how many of each currency val
    for (let i = currencyIndex.length-1; i >= 0; i--){
      if (changeNeeded >= currencyIndex[i] && cid[i][1] >= currencyIndex[i]){
        let maxBills = Math.floor(cid[i][1]/currencyIndex[i]);
        let neededBills = Math.floor(changeNeeded/currencyIndex[i]);
        if (neededBills <= maxBills){
          changeNeeded = floatFix(changeNeeded - (neededBills * currencyIndex[i]));
          cid[i][1] = floatFix(cid[i][1] - (neededBills * currencyIndex[i]));
          change.push([cid[i][0], floatFix(neededBills * currencyIndex[i])]);
        }
        else{
          changeNeeded = floatFix(changeNeeded - (maxBills * currencyIndex[i]));
          cid[i][1] = floatFix(cid[i][1] - (maxBills * currencyIndex[i]));
          change.push([cid[i][0], floatFix(maxBills * currencyIndex[i])]);
        }
        console.log("Change needed after", cid[i][0], "=", changeNeeded);
  
      }
      else{
          noChange.unshift([cid[i][0], 0]);
      }
    }
    if (changeNeeded > 0){
      return {status: "INSUFFICIENT_FUNDS", change: []};
    }
    //console.log("cid", cid);
    //console.log("Change needed:", changeNeeded);
    if (status == "CLOSED"){
        change.push(...noChange);
    }
    return {status: status, change: change};
  }
  
  function floatFix(brokenFloat){
    return parseFloat(brokenFloat.toPrecision(4));
  }
  
  console.log(checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]));