const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";

bot.on('ready', () => {
    console.log('I am ready!');
});jkm 
    
    var args = message.content.substring(PREFIX.length).split(" ");
    
    switch (args[0].toLowerCase()) {
        case "scavengerhunt":
            message.author.addRole(message.author.guild.roles.find("name", "scavengerhunt"))
            break;
        case "start":
            message.author.sendMessage("Ig see you've decided to join my hunt. this will be *very* easy, good luck!\n**/p/BcyyoI7F8DN/**")
            console.log(message.author.username + " just began the hunt");
            break;
        case "0101010001001010010011100100011101001000":
            message.author.sendMessage("good job! here's level 2\nhttps://www.youtube.com/watch?v=Hb0Ghb1RQ7M")
            console.log(message.author.username + " just completed level 1");
            break;
        case "011101000110100001100101011100000110100101100011011010110110110001100101011001000110100101100100001110010011000100110001":
            message.author.sendMessage("had enough of decoding? Good, I have a riddle for you. \nWhat invention allows you to look right through a wall?")
            console.log(message.author.username + " just completed level 2");
            break;
        case "hint":
            message.author.sendMessage("this will work eventually :P")
            break;
    }
    switch (args[0].toLowerCase()) {
        case "011101110110100101101110011001000110111101110111":
            message.author.sendMessage("lets go back to the beginning, may not be lvl 10 yet, but I think this'll be fine ;)\nAOLAYBLIHJVU")
            console.log(message.author.username + " just completed level 3");
            break;
        case "011101000110100001100101011101000111001001110101011001010110001001100001011000110110111101101110":
            message.author.sendMessage("hm, this should be interesting", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393114450606948352/passage534.png"
                    }
                }
            });
            console.log(message.author.username + " just completed level 4");
            break;
        case "010101000100100001000101010101000101001001010101010001010100001001000001010000110100111101001110":
            message.author.sendMessage("hm, this should be interesting", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393114450606948352/passage534.png"
                    }
                }
            });
            console.log(message.author.username + " just completed level 4");
            break;
        case "01110000011000010111001101110011011000010110011101100101001101010011001100110100":
            message.author.sendMessage("aaa aaaa abbb baa aaa ab")
            console.log(message.author.username + " just completed level 5");
            break;       
        case "011100110110100001101010011001000111001101100001":
            message.author.sendMessage("this is the hardest level, good luck!", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393118029610745868/lvl7.jpg"
                    }
                }
            });
            console.log(message.author.username + " just completed level 6");
            break;
    }
    switch (args[0].toLowerCase()) {
        case "01110011011101000111001001100001011101110110001001100101011100100111001001111001":
            message.author.sendMessage("congrats! you solved the hardest puzzle. heres an easy one as a reward. **__I want to play a game__**")
            console.log(message.author.username + "just completed level 7");
            break;
        case "setgame":
            if (message.author.id !== "270017125815418901"){
                return message.reply("sorry, that command is only available for this bot's creator ")
            }
            let args = message.content.split(" ").slice(1);
            let game = args.join(" ")
            bot.user.setGame(game)
    }
});

bot.login(process.env.BOT_TOKEN);

    
    //member.addRole(member.guild.roles.find("name", "INSERTNAMEOFROLE"))
