const util = require('util');
const WebSocket = require('ws');
const { createWebSocketStream } = require('ws');
const EventEmitter = require('events').EventEmitter;

class CryptoComUser{

    constructor(args = {}){
        this.name = ''
    }

    #connect(){}

    #keepAlive(){}

}

CryptoComUser.prototype.user = function(){
    console.log(this.name)
}

util.inherits(WebSocket, EventEmitter);

module.exports.CryptoComUser = CryptoComUser;
