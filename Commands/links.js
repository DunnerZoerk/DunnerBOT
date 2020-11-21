const Discord = require('discord.js');
const Bot = new Discord.Client();
const fs = require('fs');

module.exports = {
    name: 'links',
    description: "Info about the bot",
    aliases: ['invite', 'supportServer', 'vote'],
    execute(message, args){
        const infoEmbed = new Discord.MessageEmbed()
        .setColor('#ff5050')
        .setTitle('🔗 | Links')
        .setThumbnail('http://i.epvpimg.com/Dq7vaab.png')
        .addFields(
            { name: 'Invite', value: '[Click here](https://discord.com/api/oauth2/authorize?client_id=742026582704652370&permissions=469855414&scope=bot)', inline: true},
            { name: 'Vote', value: '[Click here](https://discord.com/api/oauth2/authorize?client_id=742026582704652370&permissions=469855414&scope=bot)', inline: true},
        )
        .addField("Support Server", "[Click here](https://discord.com/api/oauth2/authorize?client_id=742026582704652370&permissions=469855414&scope=bot)", true)
        .setTimestamp()
        .setFooter('Zoerk', 'http://i.epvpimg.com/Dq7vaab.png');

        message.channel.send(infoEmbed);
    }
}