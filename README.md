# Crypto.com Exchange API Client for NodeJS
Easy to use API connector package to speed up your development in connecting Crypto.com Exchange platform.

Both ES5 and ES6 are supported by the package.

ES5
```
var { CryptoComMarket, CryptoComUser } = require('crypto-com-node-api');

var market = new CryptoComMarket();
var user = new CryptoComUser();
```
ES6+
```
import { CryptoComMarket, CryptoComUser } from 'crypto-com-node-api';

const market = new CryptoComMarket();
const user = new CryptoComUser();
````

| Functions | CryptoComMarket | CryptoComUser | Sample |
| :---: | :---: | :---: | :---:
| .book() | :heavy_check_mark: | :heavy_minus_sign: | [./sample/market-book.js](https://github.com/MichelSzekeres/crypto-com-node-api/blob/main/sample/market-book.js)
| .ticker() | :heavy_check_mark: | :heavy_minus_sign: | coming soon
| .trade() | :heavy_check_mark: | :heavy_minus_sign: | coming soon
| .candlestick() | :heavy_check_mark: | :heavy_minus_sign: | coming soon
