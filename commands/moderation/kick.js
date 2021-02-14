const discord = require("discord.js");

module.exports = {
  name: "kick",
  category: "moderation",
  description: "kick anyone with one shot whithout knowing anyone xD",
  usage: "kick <@user> <reason>",
  run: async (client, message, args) => {
    
    const target = message.mentions.members.first()
    
    const reason = args.slice(1).join(" ")
    
    if(!message.member.hasPermission("BAN_MEMBERS")) return message.reply(`You don't have enough powers to kick someone`)
    
    if(!message.guild.me.hasPermission("BAN_MEMBERS")) return message.reply(`I don't have powers to kick someone`)
    
    if(!args[0]) return message.reply(`Please mention someone to kick`)
    
    if(!target) return message.reply(`I can't find that member`)
    
    if(target.bannable) {
      message.channel.send(`Kicked  ${target} for ${reason}`)     
      message.guild.member(target).kick({
    reason: reason
  });
      
      message.delete()
      
    } else {
      return message.reply(`I can't ban them, make sure that my role is above of theirs`)
    }
    return undefined
  }
};
