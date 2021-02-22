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
	.setDescription('**Subscription slots are available!!**\n\n**PREMANENT FIXED SLOT**\n\n**NO NEED TO REGISTER DAILY**\n\n**NO NEED TO WAIT FOR SLOT LIST**\n\n**YOU WILL GET A MEMBERSHIP ROLE FROM YT ESPORT**\n\n**SUBSCRIBE TODAY**\n\n')
.addField('SUBSCRIBE TODAY', 'https://discord.gg/4ThTZSXJfH', true)
  .setImage('https://i.imgur.com/6s117hn.gif')
  .setTimestamp()
	.setFooter('Young Terminator Esports');

message.channel.send(RegClosed);
    message.channel.send(`**To Subscribe Fixed Slot Check** <#719936663005954088>`)
    message.delete()
  }
}
