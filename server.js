const { default_prefix } = require("./config.json");
const { config } = require("dotenv");
const fetch = require("node-fetch");
const db =require("quick.db");
const moment = require("moment");
const { CanvasSenpai } = require("canvas-senpai")
const canva = new CanvasSenpai();
const discord = require("discord.js");
const client = new discord.Client({
  disableEveryone: false
});
const yts = require('yt-search')

client.queue = new Map();
client.vote = new Map();
const { ready } = require("./handlers/ready.js")


require("./uptime.js");

client.commands = new discord.Collection();
client.aliases = new discord.Collection();

["command"].forEach(handler => {
  require(`./handlers/${handler}`)(client);
});

client.on("message", async message => {
  const prefixMention = new RegExp(`^<@!?${client.user.id}>( |)$`);
  if (message.content.match(prefixMention)) {
    return message.reply(`Official bot of Young Terminator Esports™. Made with ❤️ and Node.JS`);
  }

  if (!message.guild) return;
  if (!message.content.startsWith(default_prefix)) return;

  if (!message.member)
    message.member = await message.guild.fetchMember(message);

  const args = message.content
    .slice(default_prefix.length)
    .trim()
    .split(/ +/g);
  const cmd = args.shift().toLowerCase();

  if (cmd.length === 0) return;

  let command = client.commands.get(cmd);

  if (!command) command = client.commands.get(client.aliases.get(cmd));

  if (command) command.run(client, message, args);
});



//LEVEL

const { addexp } = require("./handlers/xp.js")

//LEVEL
client.on("message", async message => {
if(message.author.bot) return;
  if(!message.guild) return;
  
return addexp(message)
})

client.snipes = new Map()
client.on('messageDelete', function(message, channel){
  
  client.snipes.set(message.channel.id, {
    content:message.content,
    author:message.author.tag,
    image:message.attachments.first() ? message.attachments.first().proxyURL : null
  })
  
})
 

const { GiveawaysManager } = require("discord-giveaways");
// Starts updating currents giveaways
const manager = new GiveawaysManager(client, {
    storage: "./handlers/giveaways.json",
    updateCountdownEvery: 10000,
    default: {
        botsCanWin: false,
        exemptPermissions: [ "MANAGE_MESSAGES", "ADMINISTRATOR" ],
        embedColor: "#FF0000",
        reaction: "🎉"
    }
});
// We now have a giveawaysManager property to access the manager everywhere!
client.giveawaysManager = manager;

client.on("message", async message => {
if(!message.guild) return;
  let prefix = db.get(`default_prefix${message.guild.id}`)
  if(prefix === null) prefix =default_prefix;
  
  if(!message.content.startsWith(default_prefix)) return;
 
})


client.on("message", async message => {
if(message.content.startsWith('X,afk'))return;
if(db.has(`afk-${message.author.id}+${message.guild.id}`)) {
        const info = db.get(`afk-${message.author.id}+${message.guild.id}`)
        await db.delete(`afk-${message.author.id}+${message.guild.id}`)
        message.reply(`Your afk status has been removed.`).then(msg => {
    msg.delete({ timeout: 3500 })
  });
   message.member.setNickname('')
}
    //checking for mentions
    if(message.mentions.members.first()) {
        if(db.has(`afk-${message.mentions.members.first().id}+${message.guild.id}`)) {
            message.channel.send(message.mentions.members.first().user.tag + " is AFK : " + db.get(`afk-${message.mentions.members.first().id}+${message.guild.id}`))
        }else return;
    }else;
 })

// Mentionable form
client.on('message', msg => {
 

 if (!msg.content.startsWith('?tag') || msg.author.bot) return;
 if(!msg.mentions.members.first()) return;
  const mtargets = msg.mentions.members;
       let membed = new discord.MessageEmbed()
       .setAuthor(`Paste the following to tag your teammates!`)
       .setTitle(`**${mtargets.map(member => member.user)}**`)
       .setColor("#E4A200")
       .setFooter("Click and Hold To Copy")
msg.channel.send(membed)

    }
);

client.on('message', msg => {
  if (!msg.content.startsWith('?tag') || msg.author.bot) return;
  
   if(msg.mentions.members.first()) return;
  const mbanda = msg.author;
    const membedd = new discord.MessageEmbed()
    .setAuthor('Paste the following to tag yourself')
    .setTitle(`**${mbanda}**`)
    .setColor("#E4A200")
    .setFooter("Click and Hold To Copy")
    msg.channel.send(membedd)
});

// mentionable done






// Set the bot's online/idle/dnd/invisible status
client.on("ready", () => {
    client.user.setStatus("online");
    console.log("I'm ready")
});




client.on("ready", () => {
    client.user.setActivity(`YT ESPORTS IS A PLATFORM FOR GAMERS WHERE THEY CAN IMPROVE THEIR GAMING SKILLS & GROW UP INDIAN ESPORTS COMMUNITY WORLDWIDE`, { type: "PLAYING", url: "https://www.youtube.com/c/YOUNGTERMINATORESPORTS"})
})
client.login(process.env.TOKEN);
