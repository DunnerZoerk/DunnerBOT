
const Discord = require('discord.js');
const Bot = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'clear',
    description: "Clear/Purge messages",
    aliases: ['purge', 'clean'],
    execute(message, args){
        if (message.deletable) {
            message.delete();
        }
        
        if (!message.member.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("You can not delete messages...").then(msg => {msg.delete({ timeout: 10000 })});
        }
        
        if (isNaN(args[0]) || parseInt(args[0]) <= 0) {
            return message.reply("Please, give a valid numer!").then(msg => {msg.delete({ timeout: 10000 })});
        }
        
        if (!message.guild.me.hasPermission("MANAGE_MESSAGES")) {
            return message.reply("Error 404... I can not delete messages!").then(msg => {msg.delete({ timeout: 10000 })});
        }
        
        if (parseInt(args[0]) > 100) {
            deleteAmount = 100;
        
         } else {
            deleteAmount = parseInt(args[0]);
        }
        
        message.channel.bulkDelete(deleteAmount, true)
        .then(deleted => message.channel.send(`I deleted \`${deleted.size}\` messages.`))
        .then(msg => {
            msg.delete({ timeout: 10000 })
          })
        .catch(err => message.reply(`Something went wrong... ${err}`));
    }        
}