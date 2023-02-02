// •	1ви ред: X кв.м е лозето – цяло число в интервала [10 … 5000]
// •	2ри ред: Y грозде за един кв.м – реално число в интервала [0.00 … 10.00]
// •	3ти ред: Z нужни литри вино – цяло число в интервала [10 … 600]
// •	4ти ред: брой работници – цяло число в интервала [1 … 20]


function harvest(input) {
    let squareMeter = Number(input[0]);
    let grapesPerMeter = Number(input[1]);
    let neededLittresWine = Number(input[2]);
    let workersCount = Number(input[3]);

    let totalGrapes = squareMeter * grapesPerMeter;
    let wine = (totalGrapes / 2.5) * 0.40;

    if (wine >= neededLittresWine) {
        let wineLeft = wine - neededLittresWine;
        let winePerWorker = wineLeft / workersCount;
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wineLeft)} liters left -> ${Math.ceil(winePerWorker)} liters per person.`);
    } else if(wine < neededLittresWine){
        let wineNeeded = neededLittresWine - wine;
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded)} liters wine needed.`);
    }
}

harvest([1020, 1.5, 425, 4])