const { CryptoComMarket } = require('../index'); //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

//Subscription make sure that there is only one subscription, data every 100ms
market.ticker('BTC_USDT'); //specify pair

market.on('ticker.BTC_USDT', (data)=>{
    data.h // Price of the 24h highest trade
    data.v // The total 24h traded volume
    data.a // The price of the latest trade, null if there weren't any trades
    data.l // Price of the 24h lowest trade, null if there weren't any trades
    data.b // The current best bid price, null if there aren't any bids
    data.k // The current best ask price, null if there aren't any asks
    data.c // 24-hour price change, null if there weren't any trades
    data.t // update time
});
