var billTotal = 39.99
var tipPercentage = 19.2
var currency = "£"

tip = (billTotal / 100) * tipPercentage
totalIncludingTip = billTotal + tip


tipMessage = `A tip of ${tipPercentage}% on a bill of ${currency}${billTotal.toFixed(2)} is ${currency}${tip.toFixed(2)}. The total is ${currency}${totalIncludingTip.toFixed(2)}.`

console.log(tipMessage)
