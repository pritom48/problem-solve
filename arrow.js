//problem 1.1
const multiply = (num1, num2, num3) => num1 * num2 * num3;

const result1 = multiply(2, 3, 5)
console.log(result1)

//problem 1.2

const message = `I am a web developer.
I love to code.
I love to eat biryani.`
console.log(message)



//problem 1.3
const add = (num1, num2 = 20) => {
    const add = num1 + num2;
    return add
}

const result2 = add(10)
console.log(result2)

//problem 2
const friend = friends => {
    let evenFriend = [];
    for (i = 0; i < friends.length; i++) {
        const element = friends[i];
        // console.log(abc)
        if (element.length % 2 === 0) {
            evenFriend.push(element)

        }

    }
    return evenFriend;
}
const friends = ['jamal', 'kamalasd', 'hamalas', 'tamaliu', 'nishan', 'pritom', 'rupom']
const result3 = friend(friends)
console.log(result3)


//problem 3
const calculation = numArray => {
    let sum = 0;
    for (i = 0; i < numArray.length; i++) {
        const element = numArray[i];
        const spuare = element * element;
        sum = sum + spuare;
        var result = sum / numArray.length;
    }
    return result
}
const age = [2, 4, 8, 3, 6]
const result4 = calculation(age)
console.log(result4)


//problem 4
const maximum = (age, hight) => {
    const combine = age.concat(hight)
    const max = Math.max(...combine);

    return max;
}
const array1 = [12, 18, 9, 1122]
const array2 = [8, 10, 22, 11]

const result = maximum(array1, array2)
console.log(result)

