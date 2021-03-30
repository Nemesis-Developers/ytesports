const Discord = require("discord.js");
const { parse } = require("twemoji-parser");


module.exports = {
  name: "emojiadd",
  category: "moderation",
  aliases: ["steal", "addemoji"],
  usage: "steal <emoji> <custom name>",
  description: "Steal an emoji from a different server",
  botPermissions: ["MANAGE_EMOJIS"],
  memberPermissions: ["MANAGE_EMOJIS"],
  async execute(bot, message, args) {
    const emoji = args[0];
    if (!emoji) return message.channel.send("Please Give Me An Emoji!");

    let customemoji = Discord.Util.parseEmoji(emoji);

    if (customemoji.id) {
      const Link = `https://cdn.discordapp.com/emojis/${customemoji.id}.${
        customemoji.animated ? "gif" : "png"
      }`;
      const name = args.slice(1).join(" ");

      message.guild.emojis.create(
        `${Link}`,
        `${name || `${customemoji.name}`}`
      );
      const Added = Discord.MessageEmbed()
        .setTitle("Emoji Added")
        .setColor("BLUE")
        .setDescription(
          `The server now has new emoji named ${
            name || `${customemoji.name}`
          } | Preview : [Click Me](${Link})`
        );
      return message.channel.send(Added);
    } else {
      let CheckEmoji = parse(emoji, { assetType: "png" });
      if (!CheckEmoji[0])
        return message.channel.send("Please Give Me A Valid Emoji!");
      message.channel.send(
        "You can use normal emojis without adding it to the server!"
      );
    }
  },
};
