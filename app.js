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

client.login('Mzg5NjgyMjQ0MTM1OTQ0MjAy.DRB37w.2JH9I2uqtnzbQp8bgfuz8oN3LI0');
