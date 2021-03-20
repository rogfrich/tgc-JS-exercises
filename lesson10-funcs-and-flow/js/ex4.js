//Ex 4
function doIneedaCoat(temperature) {
    if (temperature < 50 && temperature > 30) {
        msg = `Wear a coat ${temperature}`
    } else if (temperature < 30 && temperature > 0) {
        msg = `Hat and coat ${temperature}`
    } else if (temperature < 0) {
        msg = `Stay indoors! ${temperature}`
    } else {
        msg = `Pants and vest is fine ${temperature}`
    }
    console.log(msg)
}



doIneedaCoat(49)
doIneedaCoat(29)
doIneedaCoat(-2)
doIneedaCoat(55)
doIneedaCoat(0)

function ternaryTest(temp) {
    return (temp > 50 ? "hot" : "cold")
}

console.log(ternaryTest(60))