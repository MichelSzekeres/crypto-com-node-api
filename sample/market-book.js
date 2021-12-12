const { CryptoComMarket } = require('../index');  //replace '../index' -> 'crypto-com-node-api'

const market = new CryptoComMarket();

//Subscription make sure that there is only one subscription, data every 100ms
market.book('BTC_USDT', 10) //[10 and 150 are suported as second value ]

market.on('book.BTC_USDT.10',(data)=>{ 
    data.bids //arrays of bids [ price, quantity ,number of orders ]
    data.bids[0] //arrays of bids [ price, quantity ,number of orders ] value 0 to 9 or 149
    data.bids[0][0] //first element price
    data.bids[0][1] //first element quantity
    data.bids[0][2] //first element number of orders
    data.asks //arrays of asks [ price, quantity ,number of orders ]
    data.asks[0] //arrays of bids [ price, quantity ,number of orders ] value 0 to 9 or 149
    data.asks[0][0] //first element price
    data.asks[0][1] //first element quantity
    data.asks[0][2] //first element number of orders
    data.t    // update time
});
