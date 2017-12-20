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
    if (msg.content.startsWith(PREFIX + "setGame")) {
        if (msg.author.id !== "270017125815418901"){
            return msg.reply("sorry, that command is only available for this bot's creator ")
        }
        let args = msg.content.split(" ").slice(1);
        let game = args.join(" ")
        bot.user.setGame(game)
    }

    }
});

client.login(process.env.BOT_TOKEN);

    
    //member.addRole(member.guild.roles.find("name", "INSERTNAMEOFROLE"))
