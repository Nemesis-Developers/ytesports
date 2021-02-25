const { MessageEmbed } = require('discord.js')
const ms = require('ms');

module.exports = {
  name: "tmr",
  aliases: ["trole", "temprole"],
  category: "moderation",
  description: "Add role to any user",
      run: async (client, message, args) => {
   if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("sorry you need permission to mute someone");
    }
    if (!message.guild.me.hasPermission("MANAGE_ROLES")) {
      return message.channel.send("I do not have permission to mute");
    } 
let muteTime = ms(args[0]);
    
const targets = message.mentions.members;
   
    if(!targets) return message.reply(`Please mention user!`)
    
    let arole = message.mentions.roles.first();
    
    if(!arole) return message.reply(`Please mention a role to add`)
    
    const highest = message.member.roles.highest; if (Role.comparePositions(highest, arole) <= 0) return message.channel.send(`The role You mention must be lower than the position of your highest role.\n **Bahut Tez Ho Rahe Ho**`);
      const embed = new MessageEmbed()
      
      .setColor("RANDOM")
      .setDescription(`Temporarily added ${arole}`)
      
      await message.channel.send(embed)
      
    targets.forEach(target => target.roles.add(arole));

setTimeout(() => {targets.forEach(target => target.roles.remove(arole));
  message.channel.send(`Removed ${arole}`);
  
}, muteTime);
  }
}
