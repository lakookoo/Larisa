function minCoinChange(coins, amount) {
    coins.sort((a, b) => b - a);
    let change = [];
    for (let coin of coins) {
        let num_of_coins = Math.floor(amount / coin)
        for (let i = 0; i < num_of_coins; i++){
           change.push(coin);
        }
        amount -= num_of_coins * coin;
    }
    if (amount > 0) {
        return -1; 
    }
    return change;
}

