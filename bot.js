
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'ping') {
    	message.reply('pong');
  	}
});

// THIS  MUST  BE  THIS  WAY
client.login(NDQ4NDg3MTI5MjMyOTY1NjQy.DeiolA.0PSXjRAMjciRrtvR19ywIRXK7gE);
