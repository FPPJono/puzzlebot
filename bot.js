const Discord = require('discord.js');
const bot = new Discord.Client();
const PREFIX = "!";
var fs = require('fs');

var userData = JSON.parse(fs.readFileSync('userData.json', 'utf8'));

bot.on('ready', () => {
    console.log('I am ready!')
    bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
});

bot.on('message', message => {
    if (message.content.toLowerCase === 'mytime') {
        message.reply('your time is');
    } else
    if (message.content.toLowerCase === 'hint') {
        message.reply('this should work eventually :P');
    } else
    if (!message.content.startsWith(PREFIX)) return;
    
    //allows custom commands
    var args = message.content.substring(PREFIX.length).split(" ");
    
    // MAIN HUNT CODE
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
    }
    switch (args[0].toLowerCase()) {
        case "011101110110100101101110011001000110111101110111":
            message.author.sendMessage("lets go back to the beginning, may not be lvl 10 yet, but I think this'll be fine ;)\nAOLAYBLIHJVU")
            console.log(message.author.username + " just completed level 3");
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            break;
        case "011101000110100001100101011100100110010101100001011011000110001001100001011000110110111101101110":
            message.author.sendMessage("hm, this should be interesting", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393114450606948352/passage534.png"
                    }
                }
            });
            console.log(message.author.username + " just completed level 4");
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
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
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            break;
        case "01110000011000010111001101110011011000010110011101100101001101010011001100110100":
            message.author.sendMessage("aaa aaaa abbb baa aaa ab")
            console.log(message.author.username + " just completed level 5");
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
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
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            break;
    }
    switch (args[0].toLowerCase()) {
        case "01110011011101000111001001100001011101110110001001100101011100100111001001111001":
            message.author.sendMessage ("congrats, you solved the hardest puzzle in the game, heres an easy one\n**__I want to play a game__**")
            console.log(message.author.username + " just completed level 7");
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            break;
        case "01100101011011100110010001111001011100110110100101110011":
            message.author.send("see, I told you it was easy. now read this text", {
                "files": ["https://cdn.discordapp.com/attachments/391482844414738432/393214243995910146/lvl9.zip"]
            });
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            console.log(message.author.username + " just completed level 8")
            break;
        case "0110111001101001011000110110010101110100011000010110001101101111":
            message.author.sendMessage("congrats! you've made it to the final level. good Job! this is something very few people achieve\nheres your **final** puzzle. Good luck", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393222974171381761/dmuznaie.png"
                    }
                }
            });
            console.log(message.author.username + " just completed level 9")
            break;
        case "0111001001100001011010010110111001100010011011110111011101110011":
            message.author.sendMessage('Congrats! you completed it\nDM Jono **__"I like hot tamales more than you"__** so he can add you to the list of winners')
            console.log(message.author.username + " just completed the whole damn hunt!")
            break;
        case "010100110100100001001010010001000101001101000001":
            message.author.sendMessage("this is the hardest level, good luck!", {
                "embed": {
                    "image": {
                        "url": "https://cdn.discordapp.com/attachments/391482844414738432/393118029610745868/lvl7.jpg"
                    }
                }
            });
            userData[sender.id] = {
                currentLevel: 7
            }
            console.log(message.author.username + " just completed level 6");
            bot.user.setPresence({ game: { name: 'endysis', type: 0 } });
            break;
    }
    
    //HINT SYSTEM
    switch (args[0].toLowerCase()) {
        case "hint":
            if (!userData[sender.id]) userData[sender.id] = {
                hintsLeft: 3
            }
            userData[sender.id].hintsLeft--;
            fs.writeFile('userData.json', JSON.stringify(userData), (err) => {
                if (err) console.error(err);
            });
            break;
    }
    
    //BINARY TRANSLATION
    
    //autodelete
    if (message.channel.id === '391835696287186944'){
        if (message.author.id !== "391442499115155466"){
            message.delete()
        }
    }
});


bot.login(process.env.BOT_TOKEN);

    
    //member.addRole(member.guild.roles.find("name", "INSERTNAMEOFROLE"))
