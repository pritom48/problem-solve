//problem 1

function radianToDegree(radian) {
    //for input error
    if (typeof radian != "number") {
        return "please input a Number"
    }
    let degree = radian * 180 / 3.1416;
    let degree2 = degree.toFixed(2)
    return degree2
}

let inputRedian = radianToDegree(13)
console.log(inputRedian)

//problem 2

function isJavaScriptFile(fileName) {
    //for input error
    if (typeof fileName != "string") {
        return "please input a string"
    }
    let name = fileName.split('.')
    let js = name[1]
    if (js == 'js') {
        return true
    }
    else {
        return false
    }
}

let inputFile = isJavaScriptFile('tumi.js')
console.log(inputFile)

//problem 3

function oilPrice(dOilLitter, pOilLitter, oOilLitter) {
    //for input error
    if (typeof (dOilLitter, pOilLitter, oOilLitter) != 'number') {
        return 'please input a Number'
    }

    const dOilParLitterPrice = 114;
    const pOilParLitterPrice = 130;
    const oOilParLitterPrice = 135;

    let dOilTotalPrice = dOilParLitterPrice * dOilLitter;
    let pOilTotalPrice = pOilParLitterPrice * pOilLitter;
    let oOilTotalPrice = oOilParLitterPrice * oOilLitter;

    let totalOilPrice = dOilTotalPrice + pOilTotalPrice + oOilTotalPrice;

    return totalOilPrice;


}

let inputOil = oilPrice(3, 4, 9)
console.log(inputOil)


//problem 4

function publicBusFare(people) {
    //for input error
    if (typeof people != "number") {
        return "please input a Number"
    }
    const privateBusSets = 50;
    const microBusSets = 11;
    const publicBusFareParParson = 250;
    //for private bus
    let numberOfPrivetBus = parseInt(people / privateBusSets)
    let peopleInprivateBus = numberOfPrivetBus * privateBusSets
    //for micro bus
    let numberOfMicroBus = parseInt((people - peopleInprivateBus) / microBusSets)
    let peopleInMicroBus = numberOfMicroBus * microBusSets
    //for public bus
    let peopleInPublicBus = people - ((peopleInprivateBus + peopleInMicroBus))

    let totalPublicBusFare = peopleInPublicBus * publicBusFareParParson

    return totalPublicBusFare
}
let inputPeople = publicBusFare(79);
console.log(inputPeople)


//problem 5


function isBestFriend(friend1, friend2) {
    let friend1Name = friend1.name;
    let friend1Friend = friend1.friend;
    let friend2Name = friend2.name;
    let friend2Friend = friend2.friend

    if (friend1Name == friend2Friend && friend1Friend == friend2Name) {
        return true
    }
    else {
        return false
    }
}
let friend1 = { name: 'anna', friend: 'pritom' }
let friend2 = { name: 'pritom', friend: 'anna' }

let inputFriend = isBestFriend(friend1, friend2)
console.log(inputFriend)
