const discord = require("discord.js");

module.exports = {
  name: "invite",
  category: "info",
  description: "INVITE Automodv12 beta BOT",
  run: async (client, message, args) => {
    
    let embed = new discord.MessageEmbed()
    .setTitle(`Sorry!`)
    .setDescription(`I was developed to serve Young Terminator Esports. I cannot be invited to any other servers!`)
    .setColor("RANDOM")
    .setFooter(`Dev. XavierxCode`)
    .setTimestamp(message.timestamp = Date.now())
    
    message.channel .send(embed)
    
  
  }
}
