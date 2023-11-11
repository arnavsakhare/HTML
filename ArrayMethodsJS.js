//Push()
const num1 = [1,2,3];
num1.push(4,5,6);
console.log(num1);

//Pop()
const num2 = [1,2,3];
const lastNumber = num2.pop();
console.log(lastNumber);

//Shift()
const num3 = [1,2,3];
const fisrtNumber = num3.shift();
console.log(fisrtNumber);

//Unshift()
const num4 = [1,2,3];
num4.unshift(-5,8,-4);
console.log(num4);

//find()
const num5 = [1,2,3,4,5,6,7];
const foundNumber = num5.find((num => num > 5));
console.log(foundNumber);

//Some()
const num6 = [1,2,3,4,5];
const hasEvenNumbers = num6.some((num) => num%2 == 0);
console.log(hasEvenNumbers);

//every()
const num7 = [1,2,3,4,5];
const allEvenNumbers = num7.every((num) => num%2 == 0);
console.log(allEvenNumbers);

//sort()
const fruits = ['banana', 'grape', 'orange', 'apple'];
fruits.sort();
console.log(fruits);

const num8 = [54, 845, 3, 94];
num8.sort();
console.log(num8);

//includes()
const num9 = [1,2,3,4,5,6];
const includesFive = num9.includes(5);
console.log(includesFive);

//slice()
const num10 = [1,2,3,4,5,6];
const slicedNumbers = num10.slice(0,2);
console.log(slicedNumbers);

//map()
const num11 = [1,2,3];
const doubleNumbers = num11.map((num) => num*2);
console.log(doubleNumbers);

//filter()
const num12 = [1,2,3,4,5];
const evenNumbers = num12.filter((num) => num%2 ==0);
console.log(evenNumbers);

//reduce()
const num13 = [1,2,3,4,5];
const sum = num13.reduce((total,num) => total + num, 0);
console.log(sum);

//forEach()
const num14 = [1,2,3];
num14.forEach((num) => console.log(num*3));

//indexOf()
const fruitss = ['banana', 'apple', 'orange', 'grape'];
const appleIndex = fruitss.indexOf('apple');
console.log(appleIndex);

//lastIndexOf()
const fruitsss = ['banana', 'apple', 'orange', 'grape', 'apple'];
const lastAppleIndex = fruitsss.lastIndexOf('apple');
console.log(lastAppleIndex);

//reverse()
const num15 = [1,2,3]
num15.reverse();
console.log(num15);

//concat()
const num16 = [1,2,3];
const num17 = [4,5,6];
const allNumbers = num16.concat(num17);
console.log(allNumbers);

//join()
const fruit = ['banana', 'apple', 'orange', 'grape'];
const joinedFruit = fruit.join(", ");
console.log(joinedFruit);

//toString()
const num18 = [1,2,3];
const numbersString = num18.toString();
console.log(numbersString);