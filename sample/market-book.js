const { CryptoComMarket } = require('../index'); //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

market.book('BTC_USDT', 10)

market.on('book.BTC_USDT.10',(data)=>{
    // data.asks[0] - returns only the highest [value,amount,number of bits]
    
    console.log(data)
})
