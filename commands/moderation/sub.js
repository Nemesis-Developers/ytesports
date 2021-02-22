const Discord = require('discord.js');
module.exports = {
  name: "sub",
  category: "info",
  description: "Registration closed message",
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES"))
    return
    const RegClosed = new Discord.MessageEmbed()
	.setColor('#FA780B')
	.setTitle('REGISTRATION CLOSED 🚧')
	.setURL('https://discord.js.org/')
	.setAuthor('Some name', 'https://i.imgur.com/Llu4eiV.png', 'https://www.youtube.com/channel/UCLt-31Xqvt5pbHVtfv5iPTw')
	.setDescription('Subscription slots are available!!')
	.setThumbnail('https://i.imgur.com/wSTFkRM.png')
	.addFields(
		{ name: 'PREMANENT FIXED SLOT', value: '' },
		{ name: 'NO NEED TO REGISTER DAILY', value: '' },
		{ name: 'NO NEED TO WAIT FOR SLOT LIST', value: '', inline: true },
		{ name: 'YOU WILL GET A MEMBERSHIP ROLE FROM YT ESPORT', value: '', inline: true },
	)
	.addField('SUBSCRIBE TODAY', '', true)
	.setImage('https://i.imgur.com/wSTFkRM.png')
	.setTimestamp()
	.setFooter('Young Terminator Esports', 'https://i.imgur.com/Llu4eiV.png');

message.channel.send(RegClosed);
    message.channel.send(`**To Subcribe Fixed Slot Check** <#719936663005954088>`)
    message.delete()
  }
}
