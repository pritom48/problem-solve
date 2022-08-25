// function anaToVori(ana) {
//     //for input error
//     if (typeof ana != "number") {
//         return "please input a Number"
//     }
//     if (ana < 0) {
//         return "Please input positive value"
//     }
//     //vori calculation
//     var vori = ana / 16;
//     return vori;
// }
// var inputana = anaToVori(64);
// console.log(inputana);


// var a = 4;
// var b = 5;

// var sum = a + b;

// console.log(sum)

// function sum(a, b) {
//     var addition = a + b;
//     return additon;
// }
// var inputNumber = sum(55, 69)
// console.log(inputNumber)

// function isJavaScriptFile(fileName) {
//     let name = fileName.split('.')
//     let javascript = name[1]
//     if (javascript == 'js') {
//         return true;
//     }
//     else {
//         return false;
//     }
// }
// let inputFileName = isJavaScriptFile('sdifasdf.css')
// console.log(inputFileName)

// function inBestFriend(friend1, friend2) {
//     let friend1Name = friend1.name;
//     let friend1Friend = friend1.friend
//     let friend2Name = friend2.name;
//     let friend2Friend = friend2.friend

//     if (friend1Name == friend2Friend && friend2Name == friend1Friend) {
//         return true
//     }
//     else {
//         return false
//     }
// }
// let friend1 = { name: 'anna', friend: 'pritom' }
// let friend2 = { name: 'pritom', friend: 'anna' }

// let inputFriend = inBestFriend(friend1, friend2)
// console.log(inputFriend)


function publicBusFare(passenger) {
    let privateBusSets = 50;
    let microBusSets = 11;
    let publicBusFare = 250;
    // private bus
    let NumberOfPrivateBus = parseInt(passenger / privateBusSets)
    let passengerInPrivateBus = NumberOfPrivateBus * privateBusSets
    //micro bus
    let numberOfMicroBus = parseInt((passenger - passengerInPrivateBus) / microBusSets)
    let passengerInMicroBus = numberOfMicroBus * microBusSets
    //public bus
    let passengerInPublicBus = passenger - (passengerInPrivateBus + passengerInMicroBus)

    let totalpublicBusFare = passengerInPublicBus * publicBusFare;
    return totalpublicBusFare

}

let inputPassenger = publicBusFare(235)
console.log(inputPassenger)