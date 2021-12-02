const util = require('util');
const WebSocket = require('ws');
const { createWebSocketStream } = require('ws');
const EventEmitter = require('events').EventEmitter;

class CryptoComMarket{

    constructor(args = {}){
        this.name = 'Michel'
    }

    #connect(){}

    #keepAlive(){}

}

CryptoComMarket.prototype.user = function(){
    console.log(this.name)
}

util.inherits(WebSocket, EventEmitter);

module.exports.CryptoComMarket = CryptoComMarket;