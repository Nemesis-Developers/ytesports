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
	.setTitle('Registration closed 🚧')
	.setDescription('Subscription slots are available. No daily registration required!')
  .setImage('https://cdn.discordapp.com/attachments/734800941554991114/812723546904199168/ytesportsREGCofficial.gif')
  .setTimestamp()
	.setFooter('Young Terminator Esports');

message.channel.send(RegClosed);
    message.channel.send(`To buy subscription slot(s) check <#812722317108576266>`)
    message.delete()
  }
}