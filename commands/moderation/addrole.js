const { MessageEmbed } = require('discord.js')

module.exports = {
  name: "addrole",
  aliases: ["mrole", ],
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
    
    if(!arole) return message.reply(`<:xmark:801109909030174760>  Please mention role!`)
    
    
      const embed = new MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`<a:emoji_101:752199185348165782> Successfully adds ${arole} to the user `)
      
      await message.channel.send(embed)
      
    targets.forEach(target => target.roles.add(arole));
    
  }
}
