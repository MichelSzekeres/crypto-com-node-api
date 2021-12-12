const { CryptoComMarket } = require('crypto-com-node-api');
const market = new CryptoComMarket();

market.ticker('BTC_USDT');

market.on('ticker.BTC_USDT', (data)=>{
    console.log(data);
    data.h // Price of the 24h highest trade
    data.v // The total 24h traded volume
    data.a // The price of the latest trade, null if there weren't any trades
    data.l // Price of the 24h lowest trade, null if there weren't any trades
    data.b // The current best bid price, null if there aren't any bids
    data.k // The current best ask price, null if there aren't any asks
    data.c // 24-hour price change, null if there weren't any trades
    data.t // update time
})