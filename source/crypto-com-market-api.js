const util = require('util');
const WebSocket = require('ws');
const { createWebSocketStream } = require('ws');
const EventEmitter = require('events').EventEmitter;

class CryptoComMarket{

    constructor(args = {}){
        let default_data = {
            id: 0,
            error_report: true,
            console_report: true,
            hostname: 'wss://stream.crypto.com/v2/market',
        }

        for (const [key, value] of Object.entries(default_data)){
            args[key] != undefined ? this[key] = args[key] : this[key] = value;
        }

        this.#connect(); //Connect to Crypto.com Exchange Server

    }

    #connect(){

        this.socket = new WebSocket(this.hostname,{
            origin: 'https://crypto.com'
        });
        
        this.duplex = createWebSocketStream(this.socket, { encoding: 'utf8' });

        this.duplex.ondata = (data) => {
            console.log(JSON.parse(data))
        };

        this.socket.on('open', () => {
            this.console_report ? console.log('Crypto.com Exchange Market is connected') : false;
            const send = `{"id": ${this.id},"method": "public/respond-heartbeat"}`;
            this.socket.send(send);
            this.emit('connect', true);
        })

        this.socket.on('message', (data) => { 
            data = JSON.parse(data.toString());     
            this.#keepAlive(this.socket,data);
        })

        this.socket.onerror = () => {
            this.console_report ? console.log('Web Socket Error') : false;
            this.emit('connect', false);
        }

        this.socket.onclose = () => {
            this.console_report ? console.log('Web Socket Disconnected') : false;
            this.emit('connect', false);
        }

    }

    #keepAlive(connection,data){

        if(data.method == 'public/heartbeat'){

            let request = {
                id: data.id,
                method: "public/respond-heartbeat"
            }
            const requestBody = JSON.stringify(request);
            connection.send(requestBody);
        }

    }

    book(instrument,depth){
        
        this.on('connect', () => {
            this.id = this.id + 1;
            setTimeout(() =>{
                this.socket.send(`{"id": ${this.id},"method": "subscribe","params": {"channels": ["book.${instrument}.${depth}"]},"nonce": ${new Date().getTime()}}`)
            },this.id * 5000);
        });
    
        this.duplex.on('data',(data)=>{     
            let data2 = JSON.parse(new Object(data).toString());
    
            let result = data2.result?.data[0];
            if(data2.result?.subscription == `book.${instrument}.${depth}`){
                this.emit(`book.${instrument}.${depth}`, result);
            }
        });
    }

    ticker(instrument){
        
        this.on('connect', () => {
            this.id = this.id + 1;
            setTimeout(() =>{
                this.socket.send(`{"id": ${this.id},"method": "subscribe","params": {"channels": ["ticker.${instrument}"]},"nonce": ${new Date().getTime()}}`)
            },this.id * 5000);
        });
    
        this.duplex.on('data',(data)=>{     
            let data2 = JSON.parse(new Object(data).toString());
    
            let result = data2.result?.data[0];
            if(data2.result?.subscription == `ticker.${instrument}`){
                this.emit(`ticker.${instrument}`, result);
            }
        });
    }

}


util.inherits(CryptoComMarket, EventEmitter);

module.exports.CryptoComMarket = CryptoComMarket;