const { MessageEmbed } = require('discord.js')
const { Role } = require("discord.js")
module.exports = {
  name: "addrole",
  aliases: ["mr", "P!role"],
  category: "moderation",
  description: "Add role to any user",
  run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    } 
    const targets = message.mentions.members;
   
    if(!targets) return message.reply(`<:no:677902165859237894>please mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`<:no:677902165859237894>please mention role for add!`)
const highest = message.member.roles.highest; if (Role.comparePositions(highest, arole) <= 0) return message.channel.send(`The role You mention must be lower than the position of your highest role.\n **Bahut Tez Ho Rahe Ho**`);
      const embed = new MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`<a:ok_:731369076315652167>role added ${arole}`)
      
      await message.channel.send(embed)
      
    targets.forEach(target => target.roles.add(arole));
    
  }
}
