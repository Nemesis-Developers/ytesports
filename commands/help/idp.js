const discord = require("discord.js");

module.exports = {
  name: "idp",
  category:"moderation",
  run: async (client, message, args) => {
    
  if (!message.member.hasPermission("MANAGE_ROLES")) {
      return
    }
    if(!args[0]) {
      return message.channel.send("Please give the Room ID")
    }
    
    let ping = args.slice(2).join(" ")

  let embed = new discord.MessageEmbed()
  .setColor('#FFA500')
  .setTitle('Young Terminator Esports')
  .setThumbnail('https://i.ibb.co/p0YpkKz/IMG-20210205-191207.jpg')
  .addField("Room ID", "" + args[0] + "")
  .addField("Password", "" + args[1] + "")
.setTimestamp()
  message.channel.send(embed)
  message.channel.send(`${ping}`)
  message.delete()
    
  }
}
