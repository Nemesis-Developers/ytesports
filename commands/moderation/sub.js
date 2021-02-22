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
