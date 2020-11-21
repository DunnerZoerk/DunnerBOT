module.exports = {
    name: 'ping',
    aliases: ['p', 'ms'],
    execute(message, args){
        message.channel.send(`Pong? `);
	}
};