const Discord = require("discord.js");

module.exports = {
  name: "unlock",
  category: "moderation",
  description: "Unlocks the channel",
  usage: "lock",
  run: async (client, message, args) => {
    
   if (!message.member.hasPermission('MANAGE_SERVER', 'MANAGE_CHANNELS')) {
   return message.channel.send("You don't have enough Permissions")
   }
   message.channel.overwritePermissions([
     {
        id: message.guild.id,
        allow : ['SEND_MESSAGES'],
     },
    ],);
await message.channel.send(`Channel has been unlocked`);
message.delete()
  }
};
