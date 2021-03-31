const Discord = require ('discord.js')
const { MessageEmbed } = require('discord.js')

module.exports = {
name: "sendmedia",
aliases: ["sendmedia", "sm"],
category: "moderation
description: "Returns provided text",
run: async(client, message, args) => {
  if(!message.member.hasPermission("MANAGE_ROLES")) return message.channel.send(`YOU DO NOT HAVE PERMISSION `)
 await message.delete()
  let say = message.content.split(" ").slice(1).join(" ")
  if(!say) return message.channel.send(`❌ | `+"I Cannot Repeat Blank Message")
message.channel.send(say)
message.delete()
}
}
