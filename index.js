const Discord = require('discord.js');
const client = new Discord.Client();
const ayarlar = require('./ayarlar.json');
const { Cleint, MessageEmbed } = require('discord.js');
var prefix = ayarlar.prefix;
const proton = require("proton-io")

let komutDosya = "./komutlar"
let event = "./eventlar"
let gelistiricler = ["776161681462132787"]
let owner = true;
let defaultCommands = ["ping"]; 

const komutYukle = new proton(client,komutDosya,event,gelistiricler,{owner,defaultCommands})

let botlaraCevapVer = false;
let etiketlePrefixOgren = true; 
let etiketiPrefixOlarakKullan = true;

client.on('message', async(msg) => {
    komutYukle.message(msg,prefix,{botlaraCevapVer,etiketiPrefixOlarakKullan,etiketlePrefixOgren})
})


client.on("message", message => {
  if(message.content.toLowerCase() === prefix + "davet") {
  
  var embed = new Discord.MessageEmbed()
  .setColor("RED")
  .setDescription('davet linki')
  .setAuthor("davet linki")
  .setFooter("sa as botu")
  .setTitle("**https://tek.link/Onve**")
  .addField("umarım iyi yıllar geçirisin","discord sunucumuzu arkadaşlarınla paylaşırsan seviniriz https://discord.gg/PnECgG69Dh")
  .setThumbnail('https://cdn.discordapp.com/attachments/794593167613231127/794618442036019200/6faf3b2ff385f75cc6b46e61e60c1979.gifhttps://discord.com/channels/778174334439129088/794593167613231127/795776231408402462')
  message.channel.send({embed: embed})
}
})

client.on('message', msg => {
  if (msg.content === 'amk') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});
client.on('message', msg => {
  if (msg.content === 'orospu çocuğu') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});
client.on('message', msg => {
  if (msg.content === 'sikiyim') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});
client.on('message', msg => {
  if (msg.content === 'sikim') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});
client.on('message', msg => {
  if (msg.content === 'gerizekalı') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});client.on('message', msg => {
  if (msg.content === 'orospu') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});

client.on('message', msg => {
  if (msg.content === 'salak') {
      msg.delete()
    msg.reply('**Küfür Etmemelisin !**');
  }
});

client.on("message", (message) => {
  if(message.content === prefix+"ping")
  message.channel.send(`**Pingimi ${client.ws.ping} MS Olarak Ölçtüm! **`)
  })


client.on('message', message => {
  // If the message is "avatarım ne ?"
  if (message.content === prefix+'avatar') {
    // Send the user's avatar URL
    message.reply(message.author.displayAvatarURL());
  }
});
client.on('message', msg => {
  if (msg.content === 'discord.gg') {
   msg.delete()
    msg.reply('Reklam Engellendi');
  }
});
client.on("message", message => {
  if (message.channel.type === "dm") {
      if (message.author.bot) return;
      var samet = new Discord.MessageEmbed()
       .setTitle(`${client.user.username} - Dm Mesaj`)
       .setColor('RED')
       .addField(`Mesajı Gönderen`, message.author.tag)
       .addField(`ID'si`, message.author.id)
       .addField(`Gönderilen Mesaj`, message.content)
       .setThumbnail(message.author.avatarURL) 
  client.channels.cache.get("801754035358269451").send(samet);
  }
});

  





client.on('message', msg => {
  if (msg.content.toLowerCase() === 'naber') {
    msg.channel.send('hiç oturuyoz öyle işte');
  }
  if (msg.content.toLowerCase() === 'nasılsın') {
    msg.channel.send('iyi');
  }
  if (msg.content.toLowerCase() === 'hello') {
    msg.channel.send('aleyküm hello');
  }
  if (msg.content.toLowerCase() === 'aloo') {
    msg.reply('cevap vermiyo belki birazda daha kibar olmayı denesen');
  }
  if (msg.content.toLowerCase() === 'ne yapıyon') {
    msg.channel.send('Tv izliyom ya sen?');
  }
  if (msg.content.toLowerCase() === 'site') {
    msg.channel.send('**`oyunbudur.cf`**');
  } 
  if (msg.content.toLowerCase() ===  'ben proyum' ) {
    msg.channel.send('yav hehe tamam tamam inandım xd')
    msg.channel.send('https://pbs.twimg.com/media/Dn2CZRMXkAEXa9c.jpg')
  }
  if (msg.content.toLowerCase() === 'sa') {
    msg.channel.send('**Aleyküm Selam**');
  } 
  if (msg.content.toLowerCase() === 'Selamın Aleyküm') {
    msg.channel.send('**Aleyküm Selam**');
  } 
  if (msg.content.toLowerCase() === 'Selamun Aleyküm') {
    msg.channel.send('**Aleyküm Selam**');
  } 
if (!msg.content.startsWith(prefix)) {
   return;
}
if (msg.content.toLowerCase() === prefix + 'adam' ) {
  msg.channel.send('sa as')
}
if (msg.content.toLowerCase() === prefix + 'kedi' ) {
  msg.channel.send('https://ichef.bbci.co.uk/news/640/cpsprodpb/3738/production/_93263141_thinkstockphotos-489784110.jpg')
}
});
client.on("message", message => {
if (message.content.startsWith(prefix+'oylama')) {
  const args = message.content.split(' ').slice(1)
  const { Cleint, MessageEmbed } = require('discord.js')
  const botmesajı = args.join(" ")
  if (!message.member.hasPermission('ADMINISTRATOR')) return message.reply(' Oylama yapmak için YÖNETİCİ rolüne sahip olmalısın.');
  if (!botmesajı) return message.reply('Oylamanın ne olacağını yazmadın.');
  message.delete(message.author)
  const embed = new MessageEmbed()
  .setTitle('OYLAMA')
  .setDescription(botmesajı)
  .setFooter('sa as botu');
  message.channel.send({ embed: embed }).then( embedMessage => {
  embedMessage.react("😀")
  embedMessage.react("😡")
  embedMessage.react("✔️")
  embedMessage.react("❌");
  })
  }
});

    // HOSGELDIN \\
client.on('guildMemberAdd', member => {
  const mesaj = new Discord.MessageEmbed()
  .setColor("GREEN")
    .setTitle(`HOŞGELDİN`)
    .setDescription(`${member} Hoşgeldin Seni Aramızda Görmek Ne Güzel <3`)
    .setThumbnail(member.user.displayAvatarURL())

  member.guild.channels.cache.get(`786527075082960899`).send(mesaj)
});
// HOSGELDIN \\

// BB \\
client.on('guildMemberRemove', member => {
  const mesaj = new Discord.MessageEmbed()
.setColor("RED")
    .setTitle(`GÖRÜŞÜRÜZ`)
    .setDescription(`${member} Keşke Gitmeseydin be aga :(`)
.setThumbnail(member.user.displayAvatarURL())

  member.guild.channels.cache.get(`786527075082960899`).send(mesaj)
});
// BB \\
client.login(ayarlar.token);