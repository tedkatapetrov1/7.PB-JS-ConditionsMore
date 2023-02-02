function poolPipes(input) {
    let poolArea = Number(input[0]);
    let debitFirstPipeHour = Number(input[1]);
    let debitSecondPipeHour = Number(input[2]);
    let hoursWorkerMissing = Number(input[3]);

    let totalFirstPipe = debitFirstPipeHour * hoursWorkerMissing;
    let totalSecondPipe = debitSecondPipeHour * hoursWorkerMissing;
    let totalFull = totalFirstPipe + totalSecondPipe;

    let percentFirstPipe = ((totalFirstPipe / totalFull) * 100).toFixed(2);
    let percentSecondPipe = ((totalSecondPipe / totalFull) * 100).toFixed(2);
    let percentAllPipes = ((totalFull / poolArea) * 100).toFixed(2);

    if (totalFull <= poolArea) {
        console.log(`The pool is ${percentAllPipes}% full. Pipe 1: ${percentFirstPipe}%. Pipe 2: ${percentSecondPipe}%.`);
    } else if (totalFull > poolArea) {
        moreLittres = totalFull - poolArea;
        console.log(`For ${hoursWorkerMissing} hours the pool overflows with ${moreLittres} liters.`);
    }
}

poolPipes([100, 100, 100, 2.5])
