
const Discord = require('discord.js');
const client = new Discord.Client();

client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'mytime') {
        message.reply('your time is');
    } else
    if (message.content === 'hint') {
        message.reply('this should work eventually :P');
    }
});

client.login(process.env.BOT_TOKEN);
