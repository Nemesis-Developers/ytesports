const { Discord, MessageEmbed } = require("discord.js");
module.exports={
    name: 'rolerall',
    category: 'moderation',
    run: async(bot,message,args)=>{
 if (!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send("Nice try, but you can't")
        if (!message.guild.me.hasPermission("MANAGE_ROLES")) return message.channel.send('I don\'t have permissions.')
  const role = message.mentions.roles.first() 
    if (!role)  {
 return message.channel.send("Please mention a role");
    }else {
   await message.guild.members.fetch()
   const targets = message.guild.members.cache.filter(m => !m.roles.cache.has(role))

const targets1 = message.guild.members.cache.filter(m => m.roles.cache.has(role)).size

   await targets.forEach(member => member.roles.remove(role))
message.channel.send(`Removed ${role} from ${targets1} members`)
console.log('Hogaya')
}}};
