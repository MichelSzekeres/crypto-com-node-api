const { CryptoComMarket } = require('../index');  //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

//Subscription make sure that there is only one subscription, data every 100ms
market.trade('BTC_USDT'); //specify pair

market.on('trade.BTC_USDT', (data)=>{ //latest trades made on pair
    data.p // price
    data.q // quantity
    data.s // side ['SELL','BUY']
    data.d // trade id
    data.t // trade time
    data.dataTime // please ignore this field
});
