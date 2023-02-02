function fuelTank(input) {
    let fuelType = input[0];
    let liters = Number(input[1]);

    if (fuelType === "Diesel") {
        fuelType = "diesel";
        if (liters >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    }
    else if (fuelType === "Gasoline") {
        fuelType = "gasoline"
        if (liters >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    }
    else if (fuelType === "Gas") {
        fuelType = "gas"
        if (liters >= 25) {
            console.log(`You have enough ${fuelType}.`);
        } else {
            console.log(`Fill your tank with ${fuelType}!`);
        }
    }
    else {
        console.log("Invalid fuel!");
    }
}

fuelTank(["Gas", 25])