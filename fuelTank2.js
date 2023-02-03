function fuelTank2(input) {
    let fuelType = input[0];
    let liters = Number(input[1]);
    let clubCard = input[2];
    let price = 0;

    if (fuelType === "Gas") {
        if (clubCard === "Yes") {
            price = liters * (0.93 - 0.08); 
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            }
        }
        if (clubCard === "No") {
            price = liters * 0.93;
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            }
        }
    } else if (fuelType === "Gasoline") {
        if (clubCard === "Yes") {
            price = liters * (2.22 - 0.18);
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            } 
        }
        
        if (clubCard === "No") {
            price = liters * 2.22;
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            }
        }
    } else if (fuelType === "Diesel") {
        if (clubCard === "Yes") {
            price = liters * (2.33 - 0.12);
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            }
        }
      
        if (clubCard === "No") {
            price = liters * 2.33;
            if (liters >= 20 && liters <= 25) {
                price = price * 0.92;
            } else if (liters > 25) {
                price = price * 0.90;
            }
        }
    }

    console.log(`${price.toFixed(2)} lv.`);

}

fuelTank2(["Gas", 10, "Yes"])



