const { MessageEmbed, MessageMentions } = require("discord.js");

module.exports = {
  name: "dm",
  category: "moderation",
  usage: "DM <@mention> <message>",
  description: "DM server members!",
  run: async (client, message, args) => {
    if (!message.member.hasPermission("MANAGE_ROLES")) {
      return message.channel.send(
        "Access restricted!"
      );
    }

    const targets = message.mentions.members;

    if (!targets) {
      return message.channel.send(
        "Please Mention the person to who you want to DM!"
      );
    }

    if (message.mentions.users.bot) {
      return message.channel.send("You cannot DM bots");
    }

const reason = args
  .slice(0)
  .join(' ')
  .replace(MessageMentions.USERS_PATTERN,'');

    if (!reason) {
      return message.channel.send(
        "Place provide the message to send!"
      );
    }

    message.channel.send(`DM sent succesfully!`);
      
      let embed = new MessageEmbed()
.setColor('#0099ff')
	.setTitle(`Message from ${message.guild.name}`)
	.setDescription(`${reason}`)
	.setThumbnail('https://i.ibb.co/PCnBZ8w/IMG-20210205-191207.jpg')
	.setFooter(`Sent by ${message.member.user.tag}`)
	
      targets.forEach(target => target.send(embed));
      message.delete()
      
    
  }
};
