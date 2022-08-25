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