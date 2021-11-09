const cost = 10;
const price = 13;

if(cost >= 0 && price >= 0) {
    const totalCost = cost + (cost * 20 / 100);
    const totalProfit = (price - totalCost) * 1000;
    console.log(totalProfit);
} else {
    console.log('Error');
}
