function veloRace(input) {
    let junior = Number(input[0]);
    let senior = Number(input[1]);
    let type = input[2];
    let price = 0;

    switch (type) {
        case "trail":
            price = (junior * 5.50) + (senior * 7);
            break;
        case "cross-country":
            price = (junior * 8) + (senior * 9.50);
            if (junior + senior >= 50) {
                price *= 0.75;
            }
            break;
        case "downhill":
            price = (junior * 12.25) + (senior * 13.75);
            break;
        case "road":
            price = (junior * 20) + (senior * 21.50);
            break;
    
        default:
            break;
    }

    let moneyLeft = price * 0.95;

    console.log(`${moneyLeft.toFixed(2)}`);
}

veloRace([30, 25, "cross-country"])