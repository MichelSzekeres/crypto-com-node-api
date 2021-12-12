const { CryptoComMarket } = require('../index');  //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

//Subscription make sure that there is only one subscription 
market.book('BTC_USDT', 10) //[10 and 150 are suported as second value ]

market.on('book.BTC_USDT.10',(data)=>{
    console.log(data)  //asks and bids avalable inside
})