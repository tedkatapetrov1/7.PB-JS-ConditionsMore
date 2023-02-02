function ticketPrice(input) {
    let kilometers = Number(input[0]);
    let timeOfTheDay = input[1];
    let price = 0;



    if (kilometers >= 100) {
        price = kilometers * 0.06;
    } else if (kilometers >= 20) {
        price = kilometers * 0.09;
    } else if (kilometers < 20) {
        switch (timeOfTheDay) {
            case "day":
                price = 0.70 + 0.79 * kilometers;
                break;
            case "night":
                price = 0.70 + 0.90 * kilometers;
                break;

            default:
                break;
        }
    }

    console.log(price.toFixed(2));

}

ticketPrice([7, "night"])