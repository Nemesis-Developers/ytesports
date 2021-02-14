const Discord = require("discord.js");

module.exports = {
  name: "lock",
  category: "moderation",
  description: "Locks the channel",
  usage: "lock",
  run: async (client, message, args) => {
    
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        deny : ['SEND_MESSAGES'],
     },
    ],);
await message.channel.send(`Channel has been locked`);
message.delete()
  }
};
