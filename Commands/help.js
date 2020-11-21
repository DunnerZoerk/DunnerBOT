const Discord = require('discord.js');
const Bot = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'help',
    aliases: ['commands'],
    description: "Commands of the bot",
    execute(message, args){
        const linksEmbed = new Discord.MessageEmbed()
        .setColor('#ff5050')
        .setTitle('❔ | Help')
        .setThumbnail('http://i.epvpimg.com/Dq7vaab.png')
        .addField('Moderation', '``warn``, ``mute``, ``temp-mute``, ``kick``, ``ban``, ``temp-ban``, ``clear``', true)
        .addField('Misc', '``prefix``, ``invite``, ``links``, ``vote``, ``help``, ``support``', false)
        .setTimestamp()
        .setFooter('Zoerk', 'http://i.epvpimg.com/Dq7vaab.png');

        message.channel.send(linksEmbed);
    }
}