const discord = require("discord.js")
const db = require('quick.db')
const {
    MessageEmbed
} = require('discord.js')

module.exports = {
    name: "afk",
    aliases: ["offline"],
    category: "info",
    description: "Sets your AFK status",
    run: async (client, message, args) => {
        const content = args.join(" ") 
        await db.set(`afk-${message.author.id}+${message.guild.id}`, content) 
          message.member.setNickname(`[AFK] ${message.author.username}`)
        const embed = new MessageEmbed().setDescription(`You have been set to afk\n**Reason :** ${content}`).setColor("GREEN").setAuthor(message.author.tag, message.author.displayAvatarURL({
            dynamic: true
        })) 
        message.channel.send(embed)
    }
}