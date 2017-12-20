const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

bot.on('ready', () => {
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
    if (!message.content.startsWith(PREFIX)) return;
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "scavengerhunt":
            member.addRole(member.guild.roles.find("name", "scavengerhunt"))
            break;
        case "start":
            msg.author.sendMessage("I see you've decided to join my hunt. this will be *very* easy, good luck!\n/p/BcyyoI7F8DN/*")
            console.log(msg.author.username + " just began the hunt")
            break;
        case "0101010001001010010011100100011101001000":
            msg.author.sendMessage("https://www.youtube.com/watch?v=Hb0Ghb1RQ7M")
            console.log(msg.author.username + " just completed level 1")
            break;
        case "011101000110100001100101011100000110100101100011011010110110110001100101011001000110100101100100001110010011000100110001":
            msg.author.sendMessage("had enough of decoding? Good, I have a riddle for you. \nWhat invention allows you to look right through a wall?")
            console.log(msg.author.username + " just completed level 2")
            break;
    }
});

bot.login(process.env.BOT_TOKEN);

    
    //member.addRole(member.guild.roles.find("name", "INSERTNAMEOFROLE"))
//        case "011101110110100101101110011001000110111101110111"
           // msg.author.sendMessage("lets go back to the beginning, may not be lvl 10 yet, but I think this'll be fine ;)\nAOLAYBLIHJVU")
           // console.log(msg.author.username + " just completed level 3")
           // break;
     //   case "011101000110100001100101011101000111001001110101011001010110001001100001011000110110111101101110"
        //    msg.author.sendMessage("picturewillgohere")
        //    console.log(msg.author.username + " just completed level 4")
        //    break;
  //      case "01110000011000010111001101110011011000010110011101100101001101010011001100110100"
        //   msg.author.sendMessage("")
        //    console.log(msg.author.username + " just completed level 5")
         //   break;
