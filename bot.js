const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

client.on('ready', () => {
    console.log('I am ready!');
});

bot.on('message', message => {
    if (message.content.toLowerCase === 'mytime') {
        message.reply('your time is');
    } else
    if (message.content.toLowerCase === 'hint') {
        message.reply('this should work eventually :P');
    } else
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "scavengerhunt":
            member.addRole(member.guild.roles.find("name", "scavengerhunt"))
            break;
    }
});

client.login(process.env.BOT_TOKEN);

    
    //member.addRole(member.guild.roles.find("name", "puzzleevent"))
