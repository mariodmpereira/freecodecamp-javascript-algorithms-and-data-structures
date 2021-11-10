const MONEY_DENOMINATIONS = [
    {name: "ONE HUNDRED", value: 100.0},
    {name: "TWENTY", value: 20.0},
    {name: "TEN", value: 10.0},
    {name: "FIVE", value: 5.0},
    {name: "ONE", value: 1.0},
    {name: "QUARTER", value: 0.25},
    {name: "DIME", value: 0.1},
    {name: "NICKEL", value: 0.05},
    {name: "PENNY", value: 0.01},
];

function checkCashRegister(price, cash, cid) {
    let change = cash - price;
    const moneyInStore = cid.slice();
    const moneyDenominationsChange = [];
    const result = {status: "", change: [],};
    const moneyInStoreSum = moneyInStore.map(moneyType => moneyType[1]).reduce((a, b) => a + b);

    if (change > moneyInStoreSum) {
        result.status = "INSUFFICIENT_FUNDS";
        return result;
    }

    if (change === moneyInStoreSum) {
        result.status = "CLOSED"
        result.change = moneyInStore
        return result;
    }

    moneyInStore.reverse();

    for (let i = 0; i < moneyInStore.length; i++) {
        let amountPaid = 0

        while (MONEY_DENOMINATIONS[i].value <= change && moneyInStore[i][1] > 0) {
            moneyInStore[i][1] -= MONEY_DENOMINATIONS[i].value
            change = change.toFixed(2)
            change -= MONEY_DENOMINATIONS[i].value
            amountPaid += MONEY_DENOMINATIONS[i].value
        }

        if (amountPaid > 0) {
            moneyDenominationsChange.push([moneyInStore[i][0], amountPaid])
        }
    }

    if (change > 0) {
        result.status = "INSUFFICIENT_FUNDS";
        return result
    }

    result.status = "OPEN";
    result.change = moneyDenominationsChange;
    return result;
}

checkCashRegister(3.26, 100, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90],
    ["FIVE", 55],
    ["TEN", 20],
    ["TWENTY", 60],
    ["ONE HUNDRED", 100]
]);