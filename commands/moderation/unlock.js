const Discord = require("discord.js");

module.exports = {
  name: "unlock",
  category: "moderation",
  aliases: ["kholo"],
  description: "Unlocks the channel",
  usage: "lock",
  run: async (client, message, args) => {
    
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.updateOverwrite(message.channel.guild.roles.everyone, { SEND_MESSAGES: true })
 const Embed = new Discord.MessageEmbed()
.setDescription('🔒 Channel has been unlocked!')
.setColor('#D6680E')
 message.channel.send(Embed);
message.delete()
  }
};
