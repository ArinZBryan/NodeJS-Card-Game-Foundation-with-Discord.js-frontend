const Discord = require("discord.js");
const client = new Discord.Client(); 
const config = require("./config.json");

//command requires
const command = {
    "start" : require('./start.js'),
    "play" : require('./play.js'),
    "start" : require('./start.js'),
    "start" : require('./start.js'),
    "start" : require('./start.js'),
    "start" : require('./start.js'),
    "start" : require('./start.js'),
}
client.login(config.token); // Uses value of key 'token' in config file.
// client is an instance of Discord.Client
client.on("message", (message) => {
    if(message.content == "!start"){ // Check if content of message is "!ping"
            
        }
    
    });
