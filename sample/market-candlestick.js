const { CryptoComMarket } = require('../index');  //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

// 1m : one minute
// 5m : five minutes
// 15m : 15 minutes
// 30m: 30 minutes
// 1h : one hour
// 4h : 4 hours
// 6h : 6 hours
// 12h : 12 hours
// 1D : one day
// 7D : one week
// 14D : two weeks
// 1M : one month

//Subscription make sure that there is only one subscription, data based on interval
market.candlestick('BTC_USDT','1m'); // [specify pair, interval]

market.on('candlestick.1m.BTC_USDT', (data)=>{ //latest candlestick on pair
    data.o // open
    data.c // close
    data.h // high
    data.l // low
    data.v // volume
    data.t // start time of the stick, in epochtime
});
