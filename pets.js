// •	Първи ред – брой дни – цяло число в интервал [1…5000]
// •	Втори ред – оставена храна в килограми – цяло число в интервал [0…100000]
// •	Трети ред – храна на ден за кучето в килограми – реално число в интервал [0.00…100.00]
// •	Четвърти ред – храна на ден за котката в килограми– реално число в интервал [0.00…100.00]
// •	Пети ред – храна на ден за костенурката в грамове – реално число в интервал [0.00…10000.00]


function pet(input) {
    let missingDays = Number(input[0]);
    let leftFoodKilos = Number(input[1]);
    let foodPerDayDogKilos = Number(input[2]);
    let foodPerDayCatKilos = Number(input[3]);
    let foodPerDayTurtleGrams = Number(input[4]);

    let turtleFoodKilos = foodPerDayTurtleGrams / 1000;

    let foodDog = missingDays * foodPerDayDogKilos;
    let foodCat = missingDays * foodPerDayCatKilos;
    let foodTurtle = missingDays * turtleFoodKilos;

    let totalFood = foodCat + foodDog + foodTurtle;

    if (totalFood <= leftFoodKilos) {
        let leftKilos = leftFoodKilos - totalFood;
        console.log(`${Math.floor(leftKilos)} kilos of food left.`);
    } else if (totalFood > leftFoodKilos) {
        let neededKilos = totalFood - leftFoodKilos;
        console.log(`${Math.ceil(neededKilos)} more kilos of food are needed.`);
    }
}

pet([2, 10, 1, 1, 1200])