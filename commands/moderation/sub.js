const discord = require("discord.js");
module.exports = {
  name: "sub",
  aliases:["sub", "subription"],
  category: "moderation",
  description: "Registration closed message",
  
  run: async (client, message, args) => {
    if(!message.member.hasPermission("MANAGE_ROLES"))
    return
    const RegClosed = new Discord.MessageEmbed()
	.setColor('#FA780B')
	.setTitle('REGISTRATION CLOSED 🚧')
	.setDescription('Subscription slots are available!!')
  .setImage('https://i.imgur.com/6s117hn.gif')
  .setTimestamp()
	.setFooter('Young Terminator Esports');

message.channel.send(RegClosed);
    message.channel.send(`**To Subcribe Fixed Slot Check** <#719936663005954088>`)
    message.delete()
  }
}


// .setAuthor('Some name', 'https://i.imgur.com/Llu4eiV.png', 'https://www.youtube.com/channel/UCLt-31Xqvt5pbHVtfv5iPTw')
// .addFields(
//   { name: 'PREMANENT FIXED SLOT', value: '' },
//   { name: 'NO NEED TO REGISTER DAILY', value: '' },
//   { name: 'NO NEED TO WAIT FOR SLOT LIST', value: '', inline: true },
//   { name: 'YOU WILL GET A MEMBERSHIP ROLE FROM YT ESPORT', value: '', inline: true },
// )