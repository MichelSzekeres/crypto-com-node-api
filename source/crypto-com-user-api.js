const util = require('util');
const WebSocket = require('ws');
const crypto = require('crypto-js');
const { createWebSocketStream } = require('ws');
const EventEmitter = require('events').EventEmitter;

class CryptoComUser{

    constructor(args = {}){

        let default_data = {
            id: 0,
            error_report: true,
            console_report: true,
            hostname: 'wss://stream.crypto.com/v2/user',
            api_key: null,
            api_secret: null,
        }

        for (const [key, value] of Object.entries(default_data)){
            args[key] != undefined ? this[key] = args[key] : this[key] = value;
        }

        this.#connect(); //connect Crypto Exchange Server 
        this.#authorization();

    }

    #connect(){
        
        if(this.api_key == null && this.api_secret == null){
            return this.console_report ? console.log('User API Key and API Secret are not specified'): false;
        }else if(this.api_key == null){
            return this.console_report ? console.log('User API Key is not specified'): false;
        }else if(this.api_secret == null){
            return this.console_report ? console.log('User API Secret is not specified'): false;
        }else{

            this.socket = new WebSocket(this.hostname);
        
            this.socket.onopen = function(){
                this.console_report ? console.log('Web Socket Connected') : false;
                this.emit('connection', true);
            }

            this.socket.onerror = function(){
                this.console_report ? console.log('Web Socket Error') : false;
                this.emit('connection', false);
            }

            this.socket.onclose = function(){
                this.console_report ? console.log('Web Socket Disconnected') : false;
                this.emit('connection', false);
            }
        }
    }

    #keepAlive(){
        for(let x = 0; x  > this.rel;x++){
            console.log('Datalog net work ')
        }
    }

    #authorization(){
        this.on('connection', ()=>{

        });
    }

}

CryptoComUser.prototype.user = function(){
    console.log()
}

util.inherits(CryptoComUser, EventEmitter);

module.exports.CryptoComUser = CryptoComUser;
