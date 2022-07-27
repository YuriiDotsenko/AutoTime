/* Задание 1: */

const townName = "Szczecin";
const countryName = "Poland";
const population = 404461;
const footballStadium = true;

/* Задание 2: */

let height = 40;
let width = 70;
let result = height * width;
console.log(`площадь прямоугольника = ${result} см`);

/* Задание 3: */

let time = 2;
let speedOfFirst = 95;
let speedOfSecond = 114;

let result1 = speedOfFirst * time;
let result2 = speedOfSecond * time;
let sum = result1 + result2;
console.log(`${sum}км`);

/* Задание 4: */

const randomNumber = Math.floor(Math.random() * 100);
if (randomNumber < 20) {
  console.log("randomNumber меньше 20");
} else if (randomNumber > 50) {
  console.log("randomNumber больше 50");
} else {
  console.log("randomNumber больше 20, и меньше 50");
}

/* Задание 5: */

switch (true) {
  case randomNumber < 20:
    console.log("randomNumber меньше 20");
    break;
  case randomNumber > 50:
    console.log("randomNumber больше 50");
    break;
  default:
    console.log("randomNumber больше 20, и меньше 50");
}
