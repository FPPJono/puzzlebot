const commando = require('discord.js-commando')
const client = new commando.Client();

bot.registry.registerGroup('commands', 'Commands');
bot.registry.registerCommandsIn(__dirname + "/commands")
client.on('ready', () => {
    console.log('I am ready!');
});

client.on('message', message => {
    if (message.content === 'mytime') {
        message.reply('your time is');
    } else
    if (message.content === 'hint') {
        message.reply('this should work eventually :P');
    } else
});

client.login(process.env.BOT_TOKEN);
