function sleepyTom(input) {
    let holidays = Number(input[0]);

    let holidayPlayTime = holidays * 127;
    let workdayPlayTime = (365 - holidays) * 63;
    let difference = workdayPlayTime + holidayPlayTime;


    if (difference > 30000) {
        let moneyNeeded = difference - 30000;
        let h = moneyNeeded / 60;
        let m = moneyNeeded % 60;
        console.log("Tom will run away");
        console.log(`${Math.trunc(h)} hours and ${m} minutes more for play`);
    } else if (difference < 30000) {
        let moneyLeft = 30000 - difference;
        let h = moneyLeft / 60;
        let m = moneyLeft % 60;
        console.log("Tom sleeps well");
        console.log(`${Math.trunc(h)} hours and ${m} minutes less for play`);
    }
}

sleepyTom([113])