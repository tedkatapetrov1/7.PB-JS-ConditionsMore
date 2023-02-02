// •	Брой магнолии – цяло число в интервала [0 … 50]
// •	Брой зюмбюли – цяло число в интервала [0 … 50]
// •	Брой рози – цяло число в интервала [0 … 50]
// •	Брой кактуси – цяло число в интервала [0 … 50]
// •	Цена на подаръка – реално число в интервала [0.00 … 500.00]



function flowerShop(input) {
    let magnoliasCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let allFlowersPrice = ((magnoliasCount * 3.25) + (hyacinthCount * 4) + (rosesCount * 3.50) + (cactusCount * 8)) * 0.95;

    if (allFlowersPrice >= giftPrice) {
        let leftMoney = allFlowersPrice - giftPrice;
        console.log(`She is left with ${Math.floor(leftMoney)} leva.`);
    } else if (allFlowersPrice < giftPrice) {
        let neededMoney = giftPrice - allFlowersPrice;
        console.log(`She will have to borrow ${Math.ceil(neededMoney)} leva.`);
    }
}

flowerShop([2, 3, 5, 1, 50])