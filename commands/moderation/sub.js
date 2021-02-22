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
	.setDescription('Subscription slots are available!!')
    .addFields(
		{ name1: 'PREMANENT FIXED SLOT', value: '' },
		{ name2: 'NO NEED TO REGISTER DAILY', value: '' },
		{ name3: 'NO NEED TO WAIT FOR SLOT LIST', value: '', inline: true },
		{ name4: 'YOU WILL GET A MEMBERSHIP ROLE FROM YT ESPORT', value: '', inline: true },
	)
	.addField('SUBSCRIBE TODAY', '', true)
  .setImage('https://i.imgur.com/6s117hn.gif')
  .setTimestamp()
	.setFooter('Young Terminator Esports');

message.channel.send(RegClosed);
    message.channel.send(`**To Subcribe Fixed Slot Check** <#719936663005954088>`)
    message.delete()
  }
}
