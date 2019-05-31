module.exports = function main(inputs) {
    let inputsList = inputs.split();
    const pricePerKilo = 0.8, waitingPricePerKilo = 0.25;
    let mileage = parseFloat(inputsList[0]),result =0;
    if (mileage <= 2) {
        result = 6;
    } else if (mileage < 8) {
        result = 6 + (mileage - 2) * pricePerKilo
    } else {
        result = 6 + (mileage - 2) * pricePerKilo * 1.5
    }
    if (inputsList.length > 1) {
        let waitingTime = parseFloat(inputsList[1]);
        result += waitingPricePerKilo * waitingTime;
    }
    return Math.round(result);
}