const { MessageEmbed } = require('discord.js')
const { Role } = require("discord.js")
module.exports = {
  name: "addrole",
  aliases: ["mr", "P!role"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("Sorry you need permission");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission");
    } 
    const targets = message.mentions.members;
   const targets1 = message.mentions.members.size;
    if(!targets) return message.reply(`<:no:677902165859237894> Please mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`<:xmark:801109909030174760>  Please mention role!`)
const highest = message.member.roles.highest; if (Role.comparePositions(highest, arole) <= 0) return message.channel.send(`The role You mention must be lower than the position of your highest role.\n **Bahut Tez Ho Rahe Ho**`);
      const embed = new MessageEmbed()
      
      .setColor("RED")
      .setDescription(`<a:emoji_101:752199185348165782> Added ${arole} to ${targets1} members`)
      
      await message.channel.send(embed)
      
    targets.forEach(target => target.roles.add(arole));
    
  }
}
