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

 message.channel.send(`**Room ID: ${args[0]}** \n **Password: ${args[1]}**`)
  message.channel.send(`${ping}`)
  message.delete()
    
  }
}
