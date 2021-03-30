const Discord = require("discord.js");

module.exports = {
  name: "lock",
  category: "moderation",
  aliases: ["bandh"],
  description: "Locks the channel",
  usage: "lock",
  run: async (client, message, args) => {
    
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: false })
 const Embed = new Discord.MessageEmbed()
.setDescription('🔒 Channel has been locked!')
.setColor('#D6680E')
 message.channel.send(Embed);
message.delete()
  }
};
