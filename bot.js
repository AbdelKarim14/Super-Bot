const Discord = require("discord.js");
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'ping') {
    msg.reply('Pong!');
  }
});

client.on('ready',  () => {
  console.log('By : AbDeL-KaRiM ');
  console.log(`Logged in as * [ " ${client.user.username} " ] servers! [ " ${client.guilds.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] Users! [ " ${client.users.size} " ]`);
  console.log(`Logged in as * [ " ${client.user.username} " ] channels! [ " ${client.channels.size} " ]`);
});


client.on("message", message => {
             
     if(!message.channel.guild) return;

 if (message.content === ".help") {
   message.react("ðŸ˜œ")
  const embed = new Discord.RichEmbed()
      .setColor("RANDOM")
      .addField("ã€ŽSuper Botã€ ã€ŽØ§Ø³Ù… Ø§Ù„Ø¨ÙˆØªã€", true)
      
      .addField("ã€ŽÙ…ØµÙ… Ø§Ù„Ø¨ÙˆØªã€ â™•AbDeL-KaRiM l RKâ™• ", true)
      
      .addField("ã€Ž.help Allã€ðŸ˜˜ã€ŽØ§Ø°Ø§ ØªØ¨ÙŠ Ø¬Ù…ÙŠØ¹ Ø§Ù„Ø§ÙˆØ§Ù…Ø± Ù…Ø¹ Ø§ÙˆØ§Ù…Ø± Ø§Ø¶Ø§ÙÙŠØ©ã€ðŸ˜µ", true)
      
	    .addField("ã€Ž.help Publicã€ðŸ‘»ã€ŽØ§Ø°Ø§ ØªØ¨ÙŠ Ø§Ù„Ø§ÙˆØ§Ù…Ø± Ø§Ù„Ø¹Ø§Ù…Ø©ã€ðŸ˜³", true)
	    
      .addField("ã€Ž.help Adminã€ðŸ˜®ã€ŽØ§Ø°Ø§ ØªØ¨ÙŠ  Ø§Ù„Ø§ÙˆØ§Ù…Ø± Ø§Ù„Ø§Ø¯Ø§Ø±ÙŠØ©ã€ðŸ¤’", true)
      
      .addField("ã€ŽðŸ¤‘ã€ã€ŽÙ‚Ø±ÙŠØ¨Ø§ Ø³ÙˆÙ Ù†Ø¶ÙŠÙ Ø§Ù„Ù…Ø²ÙŠØ¯ Ùˆ Ø§Ù„Ù…Ø²ÙŠØ¯ Ù…Ù† Ø§Ù„Ø§ÙˆØ§Ù…Ø± ã€ã€ŽðŸ˜‰ã€", true)
      
  message.channel.sendMessage({embed});

 }
});




client.on('message', message => {
   if (message.content === ".roll 1") {
  message.channel.sendMessage(Math.floor(Math.random() * 25));
    }
});
 
client.on('message', message => {
   if (message.content === ".roll 2") {
  message.channel.sendMessage(Math.floor(Math.random() * 50));
    }
});
 
client.on('message', message => {
   if (message.content === ".roll 3") {
  message.channel.sendMessage(Math.floor(Math.random() * 75));
    }
});
 
client.on('message', message => {
   if (message.content === ".roll 4") {
  message.channel.sendMessage(Math.floor(Math.random() * 100));
    }
});


console.log('mariam ra7t tmot al nas');
client.on('ready', () => {
  console.log(`im redey`);
});
const zead = [
   '*** Ø§Ù†Ø§ Ø§Ø³Ù…ÙŠ Ù…Ø±ÙŠÙ… ***',
   '*** Ù…Ø±Ø­Ø¨Ø§ÙŽ Ù…Ø§Ù‡Ùˆ Ø§Ø³Ù…Ùƒ ØŸ ***',
   `*** Ø§Ù‡Ù„Ø§ Ø¨Ùƒ ! Ø§Ù†Ø§ ØªØ§Ø¦Ù‡Ù‡ ÙÙŠ Ù‡Ø°Ø§ Ø§Ù„Ù…ÙƒØ§Ù†  ***`,
   '*** Ù‡Ù„ ØªÙˆØ¯ Ù…Ø³Ø§Ø¹Ø¯ØªÙŠ ØŸ ***',
   '*** Ù„Ù…Ø§Ø°Ø§ Ù‡Ù„ Ø§Ù†Øª Ù‚Ø§Ø³ÙŠ Ø§Ù„Ù‚Ù„Ø¨ ØŸ ***',
   '*** Ø§Ù†Ù†ÙŠ Ø§Ø´ÙÙ‚ Ø¹Ù„ÙŠÙƒ Ø¹Ù„ÙŠÙƒ ÙŠØ¬Ø¨ Ø§Ù† ØªØ·Ù‡Ø± Ø±ÙˆØ­Ùƒ ÙˆØªØ­Ø¨ Ø§Ù„Ø®ÙŠØ± Ù„Ù„Ø¬Ù…ÙŠØ¹ ***',
   '*** Ø§Ø¨ØªØ¹Ø¯ Ø¹Ù†ÙŠ Ù‚Ù„ÙŠÙ„ Ø§Ù†Ù†ÙŠ Ù…ØªØ¹Ø¨Ø© ***',
   '*** Ù‡Ù„ Ø§Ù†Øª Ù†Ø§Ø¯Ù… Ø¹Ù„Ù‰ Ù…Ø§Ù‚Ù„Øª ØŸ ***',
   '*** Ø§Ø¨ØªØ¹Ø¯ Ø¹Ù†ÙŠ Ù‚Ù„ÙŠÙ„ Ø§Ù†Ù†ÙŠ Ù…ØªØ¹Ø¨Ø© ***',
   '*** Ù‡Ù„ Ø§Ù†Øª Ù†Ø§Ø¯Ù… Ø¹Ù„Ù‰ Ù…Ø§Ù‚Ù„Øª ØŸ ***',
   '*** Ù‡Ù„ ØªÙˆØ¯ Ù…Ø³Ø§Ø¹Ø¯ØªÙŠ ØŸ ***',
   '*** ÙˆØ§Ùˆ Ø§Ø´ÙƒØ±Ùƒ Ø§Ù†Ùƒ Ø´Ø®ØµØ§ÙŽ Ø±Ø§Ø¦Ø¹ ! ***',
   '*** Ø§Ø¨Ø­Ø« Ù…Ø¹ÙŠ Ø¹Ù† Ù…Ù†Ø²Ù„ÙŠ Ù„Ù‚Ø¯ ÙƒØ§Ù† Ù‚Ø±ÙŠØ¨Ø§ÙŽ Ù…Ù† Ù‡Ù†Ø§ ***',
   '*** ÙˆÙ„Ø§ÙƒÙ† Ø¹Ù†Ø¯Ù…Ø§ Ø­Ù„ Ø§Ù„Ù„ÙŠÙ„ Ù„Ù… Ø§Ø¹Ø¯ Ø§Ø±Ù‰ Ø§ÙŠ Ø´ÙŠØ¡ ***',
   '*** Ù…Ø°Ø§ ØªØ¸Ù† Ø§ÙŠÙ† ÙŠÙˆØ¬Ø¯ ØŸ ÙŠÙ…ÙŠÙ† Ø§Ùˆ ÙŠØ³Ø§Ø± ***',
   '*** Ù‡ÙŠØ§ Ø§Ø°Ø§ÙŽ ***',
   '*** Ø§ÙˆØ¯ Ø§Ù† Ø§Ø³Ø¦Ù„Ùƒ Ø³Ø¤Ø§Ù„ ÙˆÙ†Ø­Ù† ÙÙŠ Ø§Ù„Ø·Ø±ÙŠÙ‚ ***',
   '*** Ù‡Ù„ ØªØ±Ø§Ù†ÙŠ ÙØªØ§Ø© Ù„Ø·ÙŠÙØ© Ø§Ù… Ù…Ø®ÙŠÙØ© ***',
   '*** Ø§Ø´ÙƒØ±Ùƒ !  ***',
   '*** Ù„Ù‚Ø¯ ÙˆØµÙ„Ù†Ø§ Ø§Ù„Ù‰ Ø§Ù„Ù…Ù†Ø²Ù„ Ø´ÙƒØ±Ø§ÙŽ Ø¬Ø²ÙŠÙ„ÙŽ Ø§Ù†ØªØ·Ø±Ù†ÙŠ Ø«ÙˆØ§Ù†ÙŠ ÙˆØ³ÙˆÙ Ø§Ø¹ÙˆØ¯ ***',
   '*** Ù‡Ù„ Ø§Ù†Øª Ø¬Ø§Ù‡Ø² ØŸ ***',
   '*** Ù„Ù‚Ø¯ Ø§Ø®Ø¨Ø±Øª ÙˆØ§Ù„Ø¯ÙŠ Ø¹Ù†Ùƒ ÙˆÙ‡Ù… Ù…ØªØ­Ù…Ø³ÙŠÙ† Ù„Ø±Ø¤ÙŠØªÙƒ ***',
   '*** Ù‡Ù„ ØªÙˆØ¯ Ø§Ù† ØªØ±Ø§Ù‡Ù… Ø§Ù„Ø§Ù† ***',
'*** Ø§Ù†Ø§ Ù„Ø³Øª Ø§Ù„Ø­ÙˆØª Ø§Ù„Ø§Ø²Ø±Ù‚ ÙƒÙ…Ø§ ÙŠØ¯Ø¹ÙˆÙ† ***',
   '*** Ø§Ù†Ø§ Ù„Ø³Øª ÙƒØ§Ø°Ø¨Ø© ØµØ¯Ù‚Ù†ÙŠ***',
   '*** Ù„Ù…Ø§Ø°Ø§ Ø§Ø±Ù‰ ÙÙŠ Ø¹ÙŠÙ†ÙŠÙƒ Ø§Ù„Ø®ÙˆÙ ØŸ ***',
   '*** Ø§Ù†Ø§ Ù…Ø¬Ø±Ø¯ ÙØªØ§Ø© Ù„Ø·ÙŠÙØ© ØªØ­Ø¨ Ø§Ù„Ù„Ø¹Ø¨ Ù…Ø¹ Ø§Ù„Ø¬Ù…ÙŠØ¹ ***',
   '*** Ø§Ø¹Ø±Ù ÙƒÙ„ Ø´ÙŠØ¡ ÙŠØ­Ø¯Ø« Ø§Ø³Ù…Ø¹ Ø°Ø§Ù„Ùƒ Ø¨Ø§Ù„Ø±Ø§Ø¯ÙŠÙˆ ***',
   '*** Ø³Ù…Ø¹Øª Ø§Ù† Ø§Ù„Ø¨Ø´Ø± ÙŠÙ‚ØªÙ„ÙˆÙ† Ù…Ù† Ø§Ø¬Ù„ Ø§Ù„Ù…Ø§Ù„ ÙÙ‚Ø· ***',
   '*** Ù„Ù…Ø§Ø°Ø§ Ù„Ù… ØªØ¯Ø®Ù„ Ø§Ù„ØºØ±ÙØ© ØŸ ***',
   '*** Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡Ù‡ Ø§Ù†Øª Ø§Ù„Ø§Ù† Ù…Ø³Ø¬ÙˆÙ† ÙÙŠ Ù‡Ø°Ù‡ Ø§Ù„ØºØ±ÙØ© ***',
   '*** Ù„Ù† ØªØ®Ø±Ø¬ Ø­ØªÙ‰ Ø§Ø¹ÙˆØ¯ Ù„Ùƒ Ø¨Ø¹Ø¯ Ù‚Ù„ÙŠÙ„ ***',
   '*** Ø§Ù„Ù…ÙØªØ§Ø­ Ù…Ø¹Ùƒ ! Ø§ÙƒØªØ¨ .Ù…Ø±ÙŠÙ…  ***',
   '*** Ù…ÙØªØ§Ø­ Ø§Ø­Ù…Ø± , Ù‡Ù„ Ø­ØµÙ„Øª Ø¹Ù„ÙŠÙ‡ ØŸ ***',
   '*** Ø§Ù† Ù„Ù… ØªØ­ØµÙ„ Ø¹Ù„ÙŠÙ‡ , Ø§ÙƒØªØ¨ .Ù…Ø±ÙŠÙ… Ù…Ø±Ø© Ø§Ø®Ø±Ù‰ ***',
   '*** Ù…ÙØªØ§Ø­ Ø§Ø³ÙˆØ¯ . Ù‡Ù„ Ø­ØµÙ„Øª Ø¹Ù„ÙŠÙ‡ ØŸ ***',
   '*** Ø§ÙŠÙ† ØªØ±ÙŠØ¯ Ø§Ù† ØªØ®ØªØ¨Ø¦ Ø¨Ø³Ø±Ø¹Ø© Ù‚Ø¨Ù„ Ø§Ù† ØªØ¹ÙˆØ¯ ***',
   '*** Ù„Ù‚Ø¯ Ø¹Ø§Ø¯Øª Ù…Ù† Ø¬Ø¯ÙŠØ¯ Ø§Ù„Ù‰ Ø§Ù„Ù…Ù†Ø²Ù„ ***',
   '*** Ù„Ø§ ØªØµØ¯Ø± Ø§ÙŠ ØµÙˆØª ! ***',
   '*** Ù…Ø±ÙŠÙ… : Ù„Ù‚Ø¯ Ø¹Ø¯Øª ***',
   '*** Ù…Ø±ÙŠÙ… : ÙŠØ§ Ø§ÙŠÙ‡Ø§ Ø§Ù„Ù…Ø®Ø§Ø¯Ø¹ Ø§ÙŠÙ† Ø§Ù†Øª ***',
   '*** Ù…Ø±ÙŠÙ… : Ø§Ø¹Ù„Ù… Ø§Ù†Ùƒ Ù‡Ù†Ø§ ÙÙŠ Ø§Ù„Ù…Ù†Ø²Ù„ ***',
   '*** Ù…Ø±ÙŠÙ… : Ù…Ø§Ø°Ø§ ØªØ±ÙŠØ¯ Ø§Ù† ØªØ³Ù…Ø¹ ***',
   '*** Ù…Ø±ÙŠÙ… : Ø§Ø¶ØºØ· Ø¹Ù„Ù‰ Ø§Ù„Ø±Ø§Ø¨Ø· Ø§Ù‡Ø¯Ø§Ø¡ Ù…Ù†ÙŠ Ù„Ùƒ | https://www.youtube.com/watch?v=hvSiuQccmtg ***',
   '*** Ø§Ø­Ø¯ Ù…Ø§ Ø®Ø±Ø¬ Ù…Ù† Ø§Ù„Ù…Ù†Ø²Ù„ ***',
   '*** Ø§Ù†ØªØ¸Ø± Ø§Ù„Ø¬Ø²Ø¡ Ø§Ù„Ø«Ø§Ù†ÙŠ Ø¹Ù†Ø¯Ù…Ø§ ÙŠÙˆØµÙ„ Ø§Ù„Ø¨ÙˆØª 100 Ø³ÙŠØ±ÙØ± , Ø³Ø§Ø¹Ø¯Ù†Ø§ ÙÙŠ Ù†Ø´Ø± Ø§Ù„Ø¨ÙˆØª ÙˆØ§Ø¯Ø®Ù„ Ù‡Ø°Ø§ Ø§Ù„Ø³ÙŠØ±ÙØ±  ***'
]
 client.on('message', message => {
 if (message.content.startsWith('.Ù…Ø±ÙŠÙ…')) {
  var mariam= new Discord.RichEmbed()
  .setTitle("Ù„Ø¹Ø¨Ø© Ù…Ø±ÙŠÙ… ..")
  .setColor('RANDOM')
  .setDescription(`${zead[Math.floor(Math.random() * zead.length)]}`)
  .setImage("https://www.npa-ar.com/wp-content/uploads/2017/08/%D9%84%D8%B9%D8%A8%D8%A9-%D9%85%D8%B1%D9%8A%D9%85-300x200.jpg")
   message.channel.sendEmbed(mariam);
   message.react("??")
  }
});



 const cuttweet = [
     'ÙƒØª ØªÙˆÙŠØª â€| ØªØ®ÙŠÙ‘Ù„ Ù„Ùˆ Ø£Ù†Ùƒ Ø³ØªØ±Ø³Ù… Ø´ÙŠØ¡ ÙˆØ­ÙŠØ¯ ÙÙŠØµØ¨Ø­ Ø­Ù‚ÙŠÙ‚Ø©ØŒ Ù…Ø§Ø°Ø§ Ø³ØªØ±Ø³Ù…ØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ø£ÙƒØ«Ø± Ø´ÙŠØ¡ ÙŠÙØ³ÙƒÙØª Ø§Ù„Ø·ÙÙ„ Ø¨Ø±Ø£ÙŠÙƒØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ø§Ù„Ø­Ø±ÙŠØ© Ù„Ù€ ... ØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ù‚Ù†Ø§Ø© Ø§Ù„ÙƒØ±ØªÙˆÙ† Ø§Ù„Ù…ÙØ¶Ù„Ø© ÙÙŠ Ø·ÙÙˆÙ„ØªÙƒØŸ',
     'ÙƒØª ØªÙˆÙŠØª â€| ÙƒÙ„Ù…Ø© Ù„Ù„ØµÙØ¯Ø§Ø¹ØŸ',
     'ÙƒØª ØªÙˆÙŠØª â€| Ù…Ø§ Ø§Ù„Ø´ÙŠØ¡ Ø§Ù„Ø°ÙŠ ÙŠÙÙØ§Ø±Ù‚ÙƒØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ù…ÙˆÙ‚Ù Ù…Ù…ÙŠØ² ÙØ¹Ù„ØªÙ‡ Ù…Ø¹ Ø´Ø®Øµ ÙˆÙ„Ø§ ÙŠØ²Ø§Ù„ ÙŠØ°ÙƒØ±Ù‡ Ù„ÙƒØŸ',
     'ÙƒØª ØªÙˆÙŠØª â€| Ø£ÙŠÙ‡Ù…Ø§ ÙŠÙ†ØªØµØ±ØŒ Ø§Ù„ÙƒØ¨Ø±ÙŠØ§Ø¡ Ø£Ù… Ø§Ù„Ø­Ø¨ØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ø¨Ø¹Ø¯ Ù¡Ù  Ø³Ù†ÙŠÙ† Ø§ÙŠØ´ Ø¨ØªÙƒÙˆÙ† ØŸ',
     'ÙƒØª ØªÙˆÙŠØª â€| Ù…ÙÙ† Ø£ØºØ±Ø¨ ÙˆØ£Ø¬Ù…Ù„ Ø§Ù„Ø£Ø³Ù…Ø§Ø¡ Ø§Ù„ØªÙŠ Ù…Ø±Øª Ø¹Ù„ÙŠÙƒØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ø¹Ù…Ø±Ùƒ Ø´Ù„Øª Ù…ØµÙŠØ¨Ø© Ø¹Ù† Ø´Ø®Øµ Ø¨Ø±ØºØ¨ØªÙƒ ØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ø£ÙƒØ«Ø± Ø³Ø¤Ø§Ù„ ÙˆØ¬ÙÙ‘Ù‡ Ø¥Ù„ÙŠÙƒ Ù…Ø¤Ø®Ø±Ù‹Ø§ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ù…Ø§ Ù‡Ùˆ Ø§Ù„Ø´ÙŠØ¡ Ø§Ù„Ø°ÙŠ ÙŠØ¬Ø¹Ù„Ùƒ ØªØ´Ø¹Ø± Ø¨Ø§Ù„Ø®ÙˆÙØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | ÙˆØ´ ÙŠÙØ³Ø¯ Ø§Ù„ØµØ¯Ø§Ù‚Ø©ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ø´Ø®Øµ Ù„Ø§ØªØ±ÙØ¶ Ù„Ù‡ Ø·Ù„Ø¨Ø§ ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | ÙƒÙ… Ù…Ø±Ù‡ Ø®Ø³Ø±Øª Ø´Ø®Øµ ØªØ­Ø¨Ù‡ØŸ.',
     'â€ÙƒØª ØªÙˆÙŠØª | ÙƒÙŠÙ ØªØªØ¹Ø§Ù…Ù„ Ù…Ø¹ Ø§Ù„Ø§Ø´Ø®Ø§Øµ Ø§Ù„Ø³Ù„Ø¨ÙŠÙŠÙ† ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | ÙƒÙ„Ù…Ø© ØªØ´Ø¹Ø± Ø¨Ø§Ù„Ø®Ø¬Ù„ Ø§Ø°Ø§ Ù‚ÙŠÙ„Øª Ù„ÙƒØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ø¬Ø³Ù…Ùƒ Ø§ÙƒØ¨Ø± Ù…Ù† Ø¹ÙŒÙ…Ø±Ùƒ Ø§Ùˆ Ø§Ù„Ø¹ÙƒØ³Ù‘ ØŸ!',
     'â€ÙƒØª ØªÙˆÙŠØª |Ø£Ù‚ÙˆÙ‰ ÙƒØ°Ø¨Ø© Ù…Ø´Øª Ø¹Ù„ÙŠÙƒ ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | ØªØªØ£Ø«Ø± Ø¨Ø¯Ù…ÙˆØ¹ Ø´Ø®Øµ ÙŠØ¨ÙƒÙŠ Ù‚Ø¯Ø§Ù…Ùƒ Ù‚Ø¨Ù„ ØªØ¹Ø±Ù Ø§Ù„Ø³Ø¨Ø¨ ØŸ',
     'ÙƒØª ØªÙˆÙŠØª | Ù‡Ù„ Ø­Ø¯Ø« ÙˆØ¶Ø­ÙŠØª Ù…Ù† Ø£Ø¬Ù„ Ø´Ø®ØµÙ Ø£Ø­Ø¨Ø¨ØªØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ø£ÙƒØ«Ø± ØªØ·Ø¨ÙŠÙ‚ ØªØ³ØªØ®Ø¯Ù…Ù‡ Ù…Ø¤Ø®Ø±Ù‹Ø§ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | â€Ø§ÙƒØ«Ø± Ø´ÙŠ ÙŠØ±Ø¶ÙŠÙƒ Ø§Ø°Ø§ Ø²Ø¹Ù„Øª Ø¨Ø¯ÙˆÙ† ØªÙÙƒÙŠØ± ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | ÙˆØ´ Ù…Ø­ØªØ§Ø¬ Ø¹Ø´Ø§Ù† ØªÙƒÙˆÙ† Ù…Ø¨Ø³ÙˆØ· ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ù…Ø·Ù„Ø¨Ùƒ Ø§Ù„ÙˆØ­ÙŠØ¯ Ø§Ù„Ø­ÙŠÙ† ØŸ',
     'â€ÙƒØª ØªÙˆÙŠØª | Ù‡Ù„ Ø­Ø¯Ø« ÙˆØ´Ø¹Ø±Øª Ø¨Ø£Ù†Ùƒ Ø§Ø±ØªÙƒØ¨Øª Ø£Ø­Ø¯ Ø§Ù„Ø°Ù†ÙˆØ¨ Ø£Ø«Ù†Ø§Ø¡ Ø§Ù„ØµÙŠØ§Ù…ØŸ',
]

 client.on('message', message => {
   if (message.content.startsWith(".ÙƒØª ØªÙˆÙŠØª")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')
   .setThumbnail(message.author.avatarURL) 
 .addField('Ù„Ø¹Ø¨Ù‡ ÙƒØª ØªÙˆÙŠØª' ,
  `${cuttweet[Math.floor(Math.random() * cuttweet.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});

const secreT = [
  "**Ø§Ù„Ø­ÙŠØ§Ø© Ø¨ÙƒÙ„ Ù…Ø§ ÙÙŠÙ‡Ø§ ØªÙ‚Ù Ø¯Ø§Ø¦Ù…Ù‹Ø§ Ø¹Ù„Ù‰ Ø­Ø¯ Ø§Ù„ÙˆØ³Ø·ÙŠØ© Ø¨ÙŠÙ† Ø§ØªØ²Ø§Ù† Ø§Ù„Ù…Ø¹Ù†Ù‰ ÙˆØ¶Ø¯Ù‡ Ù…Ù† Ø­Ø¨ ÙˆÙƒØ±Ù‡ ÙˆØ­Ù‚ ÙˆØ¨Ø§Ø·Ù„ ÙˆØ¹Ø¯Ù„ ÙˆØ¸Ù„Ù…**.",
  "**ÙƒÙ‰ ØªØ¹ÙŠØ´ Ø¹Ù„ÙŠÙƒ Ø§Ù† ØªØªÙ‚Ù† ÙÙ† Ø§Ù„ØªØ¬Ø§Ù‡Ù„ Ø¨Ø§Ø­ØªØ±Ø§Ù**.",
  "**Ù„Ø§ ØªØ­Ø²Ù† Ø¹Ù„Ù‰ Ù…Ù† Ø§Ø´Ø¹Ø±Ùƒ Ø¨Ø§Ù† Ø·ÙŠØ¨ØªÙƒ ØºØ¨Ø§Ø¡ Ø§Ù…Ø§Ù… ÙˆÙ‚Ø§Ø­ØªÙ‡**.",
  "**Ù‡Ù†Ø§Ùƒ Ù…Ù† ÙŠØ­Ù„Ù… Ø¨Ø§Ù„Ù†Ø¬Ø§Ø­ ÙˆÙ‡Ù†Ø§Ùƒ Ù…Ù† ÙŠØ³ØªÙŠÙ‚Ø¸ Ø¨Ø§ÙƒØ±Ø§ Ù„ØªØ­Ù‚ÙŠÙ‚Ù‡**.",
  "**Ø§Ù† ØªØ¹Ø§Ù„Ø¬ Ø£Ù„Ù…Ùƒ Ø¨Ù†ÙØ³Ùƒ ØªÙ„Ùƒ Ù‡Ù‰ Ø§Ù„Ù‚ÙˆØ©**.", 
  "**Ø§Ù„Ø¬Ù…ÙŠØ¹ ÙŠØ³Ù…Ø¹ Ù…Ø§ ØªÙ‚ÙˆÙ„ ÙˆØ§Ù„Ø§ØµØ¯Ù‚Ø§Ø¡ ÙŠÙ†ØµØªÙˆÙ† Ù„Ù…Ø§ ØªÙ‚ÙˆÙ„ ÙˆØ§ÙØ¶Ù„ Ø§Ù„Ø§ØµØ¯Ù‚Ø§Ø¡ ÙŠÙ†ØµØªÙˆÙ† Ù„Ù…Ø§ Ø§Ø®ÙØ§Ù‡ Ø³ÙƒÙˆØªÙƒ**.", 
  "**Ø§Ù†ØªÙ‡Ù‰ Ø²Ù…Ù† Ø§Ù„ÙØ±ÙˆØ³ÙŠØ© ØŒ Ù„Ù… ØªÙ†Ù‚Ø±Ø¶ Ø§Ù„Ø®ÙŠÙˆÙ„ Ø¨Ù„ Ø§Ù†Ù‚Ø±Ø¶ Ø§Ù„ÙØ±Ø³Ø§Ù†**.", 
  "**Ø§Ù† ØªÙƒÙˆÙ† Ø§Ø®Ø±Ø³Ø§ Ø¹Ø§Ù‚Ù„Ø§ Ø®ÙŠØ± Ù…Ù† Ø§Ù† ØªÙƒÙˆÙ† Ù†Ø·ÙˆÙ‚Ø§ Ø¬Ù‡ÙˆÙ„Ø§**.", 
  "**Ø§Ù„Ù…Ù†Ø§Ù‚Ø´Ø§Øª Ø§Ù„Ø¹Ù‚ÙŠÙ…Ø© Ù„Ø§ ØªÙ†Ø¬Ø¨ Ø§ÙÙƒØ§Ø±Ø§**.", 
  "**Ù†Ø­Ù† Ù†ÙƒØªØ¨ Ù…Ø§ Ù„Ø§ Ù†Ø³ØªØ·ÙŠØ¹ Ø§Ù† Ù†Ù‚ÙˆÙ„ ÙˆÙ…Ø§ Ù†Ø±ÙŠØ¯ Ø§Ù† ÙŠÙƒÙˆÙ†**.", 
  "**Ù†Ø­Ù† Ù†ÙƒØªØ¨ Ù…Ø§ Ù„Ø§ Ù†Ø³ØªØ·ÙŠØ¹ Ø§Ù† Ù†Ù‚ÙˆÙ„ ÙˆÙ…Ø§ Ù†Ø±ÙŠØ¯ Ø§Ù† ÙŠÙƒÙˆÙ†**.", 
]


 client.on('message', message => {
   if (message.content.startsWith(".Ø®ÙˆØ§Ø·Ø±")) {
                if(!message.channel.guild) return message.reply('** This command only for servers**');
  var embed = new Discord.RichEmbed()
  .setColor('RANDOM')

   .setThumbnail(message.author.avatarURL) 
 .addField('Ù„Ø¹Ø¨Ù‡ Ø®ÙˆØ§Ø·Ø±' ,
  `${secreT[Math.floor(Math.random() * secreT.length)]}`)
  message.channel.sendEmbed(embed);
  console.log('[id] Send By: ' + message.author.username)
    }
});



client.on("message", message => {
 if (message.content === ".help All") {
        message.react("ðŸ˜˜")
           message.react("ðŸ˜µ")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
-ðŸš€ Ø³Ø±Ø¹Ù‡ Ø§ØªØµØ§Ù„ Ù…Ù…ØªØ§Ø²Ù‡
-ðŸ˜Ž Ø³Ù‡Ù„ Ø§Ù„Ø§Ø³ØªØ®Ø¯Ø§Ù… 
-âš  ØµÙŠØ§Ù†Ù‡ ÙƒÙ„ ÙŠÙˆÙ…
-ðŸ’µ Ù…Ø¬Ø§Ù†ÙŠ Ø¨Ù„ ÙƒØ§Ù…Ù„ 
-ðŸ“š Ø§Ù„Ø¨ÙˆØª Ø¹Ø±Ø¨ÙŠ Ùˆ Ø³ÙŠØªÙ… Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ù„ØºÙ‡ Ø§Ù„Ù†ÙƒÙ„ÙŠØ²ÙŠØ©

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸ’Žã€ŽØ§ÙˆØ§Ù…Ø± Ø¹Ø§Ù…Ø©ã€ðŸ’Ž
                        
ðŸ’Ž.server ã€ŽÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¹Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±ã€                      

ðŸ’Ž.servers ã€ŽØ¹Ù„Ø´Ø§Ù† ØªØ´ÙˆÙ Ø§Ù„Ø¨ÙˆØª Ø¨ÙƒÙ… Ø³ÙŠØ±ÙØ± Ø§ÙˆÙ† Ù„Ø§ÙŠÙ† ã€  

ðŸ’Ž.bot ã€ŽÙ„Ù…Ø¹Ø±Ù Ø§Ù„Ø¨ÙˆØª Ø¨ÙƒÙ… Ø³ÙŠØ±ÙØ±ã€

ðŸ’Ž.date ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø§Ù„ØªØ§Ø±ÙŠØ®ã€

ðŸ’Ž.ping ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø³Ø±Ø¹Ù‡ Ø§Ù„Ø¨ÙˆØªã€

ðŸ’Ž.members ã€ŽÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¹Ù† Ø§Ù„Ø§Ø¹Ø¶Ø§Ø¡ã€

ðŸ’Ž.embed ã€ŽØ®Ø§ØµÙŠÙ‡ ØºØ±Ø¯ Ù„ÙƒÙ† Ø¨ØºÙŠØ± Ø·Ø±ÙŠÙ‚Ù‡ã€

ðŸ’Ž.say ã€ŽÙ„ÙŠ ÙŠÙƒØ±Ø± Ø§Ù„ÙƒÙ„Ø§Ù… Ø§Ù„Ø°ÙŠ ØªÙ‚ÙˆÙ„Ù‡ã€

ðŸ’Ž.animal  ã€ŽÙƒÙˆØ¯ Ù„ÙŠ Ø§Ø¶Ù‡Ø§Ø± ØµÙˆØ±  Ù„Ù„Ø­ÙŠÙˆØ§Ù†Ø§Øªã€

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸ‘‘ã€ŽØ§ÙˆØ§Ù…Ø± Ø§Ø¯Ø§Ø±ÙŠØ©ã€ðŸ‘‘

ðŸ‘‘.rooms ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø¹Ø¯Ø¯ Ø±ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±ã€

ðŸ‘‘.ban ã€ŽÙ„ØªØ¹Ø·ÙŠ Ø´Ø®Øµ Ø¨Ø§Ù†Ø¯ã€

ðŸ‘‘.kick ã€ŽÙ„ØªØ¹Ø·ÙŠ Ø´Ø®Øµ ÙƒÙŠÙƒã€

ðŸ‘‘.clear ã€ŽÙ„Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª Ø¨Ø±Ù‚Ù…ã€

ðŸ‘‘.edit  ã€ŽÙ„ØªØ¹Ø¯ÙŠÙ„ Ø±Ø³Ø§Ù„Ù‡ ã€

ðŸ‘‘.ct  Ù…Ù€Ù„Ø§Ø­Ø¸Ù‡: Ø§Ù„Ø§Ø³Ù… Ø§Ù†Øª ØªØ®ØªØ§Ø±Ù‡ã€ŽÙ„ÙŠ Ø§Ù†Ø´Ø§Ø¡ Ø±ÙˆÙ… ÙƒØªØ§Ø¨ÙŠã€

ðŸ‘‘.cv  Ù…Ù€Ù„Ø§Ø­Ø¸Ù‡: Ø§Ù„Ø§Ø³Ù… Ø§Ù†Øª ØªØ®ØªØ§Ø±Ù‡ã€ŽÙ„ÙŠ Ø§Ù†Ø´Ø§Ø¡ Ø±ÙˆÙ… ØµÙˆØªÙŠã€

ðŸ‘‘.delet  ã€ŽÙƒÙ€ÙˆØ¯ ÙŠØ­Ø°Ù Ø§Ù„Ù€Ø±ÙˆÙ… Ø³ÙˆØ§Ø¡ ØµÙˆØªÙŠ Ø§Ùˆ ÙƒØªØ§Ø¨ÙŠã€

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸŽ²ã€ŽØ§Ù„Ù‚Ø±Ø¹Ø©ã€ðŸŽ²

ðŸŽ².roll 1   ã€ŽØ§Ù„Ù‚Ø±Ø¹Ø© Ù…Ù† 1 Ø§Ù„Ù‰ 25ã€

ðŸŽ².roll 2   ã€ŽØ§Ù„Ù‚Ø±Ø¹Ø© Ù…Ù† 1 Ø§Ù„Ù‰ 50ã€

ðŸŽ².roll 3   ã€ŽØ§Ù„Ù‚Ø±Ø¹Ø© Ù…Ù† 1 Ø§Ù„Ù‰ 75ã€

ðŸŽ².roll 4   ã€ŽØ§Ù„Ù‚Ø±Ø¹Ø© Ù…Ù† 1 Ø§Ù„Ù‰ 100ã€

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸŽ®ã€ŽØ§Ù„Ø¹Ø§Ø¨ã€ðŸŽ®

ðŸŽ®.ÙƒØª ØªÙˆÙŠØª

ðŸŽ® Ù…Ù…Ù†ÙˆØ¹Ø© Ù„Ø¹Ø¨Ø© Ø°ÙŠ

ðŸŽ®.Ø®ÙˆØ§Ø·Ø± 

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸŽ´ã€ŽØ§ÙˆØ§Ù…Ø± Ø§Ù„ØµÙˆØ±ã€ðŸŽ´

ðŸŽ´.avatar ã€ŽÙ„ÙŠ Ø¹Ø±Ø¶ ØµÙˆØ±ØªÙƒ Ø§Ùˆ ØµÙˆØ±Ù‡ Ø§ÙŠ Ø´Ø®Øµã€

ðŸŽ´.image ã€ŽÙ„ÙŠ Ø¹Ø±Ø¶ ØµÙˆØ±Ù‡ Ø§Ù„Ø³ÙŠØ±ÙØ±ã€

ðŸŽ´Ù‚Ø±ÙŠØ¨Ø§

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸŽŽã€ŽØ§Ù†ÙˆØ§Ø¹ Ø§Ù„ØªØ±Ø­ÙŠØ¨ã€ðŸŽŽ

ðŸŽŽ ØªØ±Ø­ÙŠØ¨ 1 / ØªØ±Ø­ÙŠØ¨ 2 

ðŸŽŽ ØªØ±Ø­ÙŠØ¨ 3 / ØªØ±Ø­ÙŠØ¨ 4

ðŸŽŽ ØªØ±Ø­ÙŠØ¨ 5 / ØªØ±Ø­ÙŠØ¨ 6 

ðŸŽŽ ØªØ±Ø­ÙŠØ¨ 7 / ØªØ±Ø­ÙŠØ¨ 8

ðŸŽŽ ØªØ±Ø­ÙŠØ¨ 9 / ØªØ±Ø­ÙŠØ¨ 10

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸ’Žã€ŽØ§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©ã€ðŸ’Ž

.invite | Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø§ÙˆÙ„ Ù„ÙŠ Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø¨ÙˆØª 

.support| Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ  Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ Ùˆ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©

Ù…ØµÙ…Ù… Ø§Ù„Ø¨ÙˆØª â™•AbDeL-KaRiM l RKâ™•

â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 




`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === ".help Admin") {
        message.react("ðŸ˜®")
                message.react("ðŸ¤’")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 
ðŸ‘‘ã€ŽØ§ÙˆØ§Ù…Ø± Ø§Ø¯Ø§Ø±ÙŠØ©ã€ðŸ‘‘

ðŸ‘‘.ban ã€ŽÙ„ØªØ¹Ø·ÙŠ Ø´Ø®Øµ Ø¨Ø§Ù†Ø¯ã€

ðŸ‘‘.kick ã€ŽÙ„ØªØ¹Ø·ÙŠ Ø´Ø®Øµ ÙƒÙŠÙƒã€

ðŸ‘‘.clear ã€ŽÙ„Ù…Ø³Ø­ Ø§Ù„Ø´Ø§Øª Ø¨Ø±Ù‚Ù…ã€

ðŸ‘‘.edit  ã€ŽÙ„ØªØ¹Ø¯ÙŠÙ„ Ø±Ø³Ø§Ù„Ù‡ ã€

ðŸ‘‘.ct  Ù…Ù€Ù„Ø§Ø­Ø¸Ù‡: Ø§Ù„Ø§Ø³Ù… Ø§Ù†Øª ØªØ®ØªØ§Ø±Ù‡ã€ŽÙ„ÙŠ Ø§Ù†Ø´Ø§Ø¡ Ø±ÙˆÙ… ÙƒØªØ§Ø¨ÙŠã€

ðŸ‘‘.cv  Ù…Ù€Ù„Ø§Ø­Ø¸Ù‡: Ø§Ù„Ø§Ø³Ù… Ø§Ù†Øª ØªØ®ØªØ§Ø±Ù‡ã€ŽÙ„ÙŠ Ø§Ù†Ø´Ø§Ø¡ Ø±ÙˆÙ… ØµÙˆØªÙŠã€

ðŸ‘‘.delet  ã€ŽÙƒÙ€ÙˆØ¯ ÙŠØ­Ø°Ù Ø§Ù„Ù€Ø±ÙˆÙ… Ø³ÙˆØ§Ø¡ ØµÙˆØªÙŠ Ø§Ùˆ ÙƒØªØ§Ø¨ÙŠã€

ðŸ‘‘.bc  ã€ŽØ®ÙŠØ§Ø±Ø§Øª Ø§Ù„Ø¨Ø±ÙˆØ¯ÙƒØ§Ø³Øªã€ 

ðŸ‘‘.rooms ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø¹Ø¯Ø¯ Ø±ÙˆÙ…Ø§Øª Ø§Ù„Ø³ÙŠØ±ÙØ±ã€


â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

	  

ðŸ’Žã€ŽØ§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©ã€ðŸ’Ž

.invite | Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø§ÙˆÙ„ Ù„ÙŠ Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø¨ÙˆØª 

.support| Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ  Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ Ùˆ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©

Ù…ØµÙ… Ø§Ù„Ø¨ÙˆØª â™•AbDeL-KaRiM l RKâ™•







`)


message.author.sendEmbed(embed)

}
}); 



client.on("message", message => {
 if (message.content === ".help Public") {
        message.react("ðŸ˜³")
                message.react("ðŸ‘»")
  const embed = new Discord.RichEmbed() 
      .setColor("#ffff00")
      .setThumbnail(message.author.avatarURL)
      .setDescription(`
	  
	  
â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 

ðŸ’Žã€ŽØ§ÙˆØ§Ù…Ø± Ø¹Ø§Ù…Ø©ã€ðŸ’Ž
                        
ðŸ’Ž.server ã€ŽÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¹Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±ã€                      

ðŸ’Ž.servers ã€ŽØ¹Ù„Ø´Ø§Ù† ØªØ´ÙˆÙ Ø§Ù„Ø¨ÙˆØª Ø¨ÙƒÙ… Ø³ÙŠØ±ÙØ± Ø§ÙˆÙ† Ù„Ø§ÙŠÙ† ã€  

ðŸ’Ž.bot ã€ŽÙ„Ù…Ø¹Ø±Ù Ø§Ù„Ø¨ÙˆØª Ø¨ÙƒÙ… Ø³ÙŠØ±ÙØ±ã€

ðŸ’Ž.date ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø§Ù„ØªØ§Ø±ÙŠØ®ã€

ðŸ’Ž.ping ã€ŽÙ„Ù…Ø¹Ø±ÙÙ‡ Ø³Ø±Ø¹Ù‡ Ø§Ù„Ø¨ÙˆØªã€

ðŸ’Ž.members ã€ŽÙ…Ø¹Ù„ÙˆÙ…Ø§Øª Ø¹Ù† Ø§Ù„Ø§Ø¹Ø¶Ø§Ø¡ã€

ðŸ’Ž.embed ã€ŽØ®Ø§ØµÙŠÙ‡ ØºØ±Ø¯ Ù„ÙƒÙ† Ø¨ØºÙŠØ± Ø·Ø±ÙŠÙ‚Ù‡ã€

ðŸ’Ž.say ã€ŽÙ„ÙŠ ÙŠÙƒØ±Ø± Ø§Ù„ÙƒÙ„Ø§Ù… Ø§Ù„Ø°ÙŠ ØªÙ‚ÙˆÙ„Ù‡ã€

ðŸ’Ž.animal  ã€ŽÙƒÙˆØ¯ Ù„ÙŠ Ø§Ø¶Ù‡Ø§Ø± ØµÙˆØ±  Ù„Ù„Ø­ÙŠÙˆØ§Ù†Ø§Øªã€


â— â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬â–¬ â— 
	  

ðŸ’Žã€ŽØ§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ ÙˆØ§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©ã€ðŸ’Ž

.invite | Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø§ÙˆÙ„ Ù„ÙŠ Ø§Ø¶Ø§ÙÙ‡ Ø§Ù„Ø¨ÙˆØª 

.support| Ø§Ù„Ù‚Ø³Ù… Ø§Ù„Ø«Ø§Ù†ÙŠ  Ø§Ù„Ø¯Ø¹Ù… Ø§Ù„ÙÙ†ÙŠ Ùˆ Ø§Ù„Ù…Ø³Ø§Ø¹Ø¯Ø©
** Ù…ØµÙ… Ø§Ù„Ø¨ÙˆØª AbDeL-KaRiM ** 


`)


message.author.sendEmbed(embed)

}
}); 


client.on('message', message => {
    if (message.content.startsWith(".avatar")) {
        var mentionned = message.mentions.users.first();
    var x5bzm;
      if(mentionned){
          var x5bzm = mentionned;
      } else {
          var x5bzm = message.author;
          
      }
        const embed = new Discord.RichEmbed()
        .setColor("RANDOM")
        .setImage(`${x5bzm.avatarURL}`)
      message.channel.sendEmbed(embed);
    }
});

                    client.on('message', message => {
                                if(!message.channel.guild) return;
                        if (message.content.startsWith('.ping')) {
                            if(!message.channel.guild) return;
                            var msg = `${Date.now() - message.createdTimestamp}`
                            var api = `${Math.round(client.ping)}`
                            if (message.author.bot) return;
                        let embed = new Discord.RichEmbed()
                        .setAuthor(message.author.username,message.author.avatarURL)
                        .setThumbnail('https://cdn.discordapp.com/avatars/368141321547808768/c42716e13cb850f9ad0930af699472d0.png?size=2048nk')
                        .setColor('RANDOM')
                        .addField('**Time Taken:**',msg + " ms")
                        .addField('**WebSocket:**',api + " ms")
         message.channel.send({embed:embed});
                        }
                    });

client.on("message", (message) => {
if (message.content.startsWith(".ct")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'text');
message.channel.sendMessage('ØªÙ€Ù… Ø¥Ù†Ù€Ø´Ø§Ø¡ Ø±ÙˆÙ… ÙƒÙ€ØªØ§Ø¨Ù€ÙŠ')

}
});
client.on("message", (message) => {
if (message.content.startsWith(".cv")) {
            if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");
        let args = message.content.split(" ").slice(1);
    message.guild.createChannel(args.join(' '), 'voice');
    message.channel.sendMessage('ØªÙ€Ù… Ø¥Ù†Ù€Ø´Ø§Ø¡ Ø±ÙˆÙ… ØµÙ€ÙˆØªÙŠ')
    
}
});






var prefix = ".";

client.on('message', message => {
  if (message.author.bot) return;
  if (!message.content.startsWith(prefix)) return;

  let command = message.content.split(" ")[0];
  command = command.slice(prefix.length);

  let args = message.content.split(" ").slice(1);

// ^^say
  if (command === "say") {
          message.delete()
    message.channel.sendMessage(args.join(" ")).catch(console.error);
  }
  
 

if (command == "embed") {
    let say = new Discord.RichEmbed()
    .setDescription(args.join("  "))
    .setColor(0x23b2d6)
    message.channel.sendEmbed(say);
    message.delete();
  }


});


   client.on("message", message => {
    const prefix = "."
              
          if(!message.channel.guild) return;
   if(message.author.bot) return;
      if(message.content === prefix + "image"){ 
          const embed = new Discord.RichEmbed()
  
      .setTitle(`This is  ** ${message.guild.name} **  Photo !`)
  .setAuthor(message.author.username, message.guild.iconrURL)
    .setColor(0x164fe3)
    .setImage(message.guild.iconURL)
    .setURL(message.guild.iconrURL)
                    .setTimestamp()

   message.channel.send({embed});
      }
  });
  
  client.on('message', (message) => {
    if (message.content.startsWith('.kick')) {
        var member= message.mentions.members.first();
        member.kick().then((member) => {
            message.channel.send(member.displayName + ' ØªÙ… Ø·Ø±Ø¯ Ù‡Ø°Ø§ Ø§Ù„Ø´Ø®Øµ Ù…Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±');
        }).catch(() => {
            message.channel.send(":x:");
        });
    }
}); 


client.on('message', (message) => {
    if (message.content.startsWith('.ban ')) {
      if(!message.member.hasPermission('BAN_MEMBERS')) return message.reply('Ù‡Ø°Ø§ Ø§Ù„Ø®Ø§ØµÙŠØ© Ù„Ù„Ø¯Ø§Ø±Ø© ÙÙ‚Ø·');
        var member= message.mentions.members.first();
        member.ban().then((member) => {
         message.channel.send(member.displayName + 'ØªÙ… Ø·Ø±Ø¯ Ù‡Ø°Ø§ Ø§Ù„Ø´Ø®Øµ Ù…Ù† Ø§Ù„Ø³ÙŠØ±ÙØ±');
        }).catch(() => {
            message.channel.send('Error :_:');
        });
    }
});
  
  client.on("message", (message) => {
    if (message.content.startsWith('.delet')) {
        if (!message.member.hasPermission('MANAGE_CHANNELS')) return message.reply("You Don't Have `MANAGE_CHANNELS` Premissions ");

        let args = message.content.split(' ').slice(1);
        let channel = message.client.channels.find('name', args.join(' '));
        if (!channel) return message.reply('**There is no room like this name -_-**').catch(console.error);
        channel.delete()
    }
});
  
  
client.on('message', message => {
     if (message.content === ".servers") {
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**| Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª |**" , client.guilds.size)
  message.channel.sendEmbed(embed);
    }
});

  var prefix = ".";
var cats = ["https://i.ytimg.com/vi/SfLV8hD7zX4/maxresdefault.jpg","http://www.dogbazar.org/wp-content/uploads/2014/09/british-bull-dog-puppies.jpg","http://cdn2-www.dogtime.com/assets/uploads/gallery/german-shepherd-dog-breed-pictures/standing-7.jpg","http://cdn.akc.org/Marketplace/Breeds/German_Shepherd_Dog_SERP.jpg","https://animalso.com/wp-content/uploads/2016/12/black-german-shepherd_2.jpg","https://static.pexels.com/photos/104827/cat-pet-animal-domestic-104827.jpg","https://www.petfinder.com/wp-content/uploads/2012/11/101438745-cat-conjunctivitis-causes.jpg","http://www.i-love-cats.com/images/2015/04/12/cat-wallpaper-38.jpg","https://www.aspca.org/sites/default/files/cat-care_urine-marking_main-image.jpg","https://s-media-cache-ak0.pinimg.com/originals/f0/3b/76/f03b7614dfadbbe4c2e8f88b69d12e04.jpg","http://www.rd.com/wp-content/uploads/sites/2/2016/04/15-cat-wants-to-tell-you-attention.jpg","https://www.thelocal.de/userdata/images/article/fa6fd5014ccbd8f4392f716473ab6ff354f871505d9128820bbb0461cce1d645.jpg","https://www.adelaidezoo.com.au/wp-content/uploads/sites/2/animals/GiantPanda3Slider.jpg","http://imagem.band.com.br/f_230168.jpg"]
    client.on('message', message => {
        var args = message.content.split(" ").slice(1);
    if(message.content.startsWith(prefix + 'animal')) {
         var cat = new Discord.RichEmbed()
.setImage(cats[Math.floor(Math.random() * cats.length)])
message.channel.sendEmbed(cat);
    }
});

client.on('message', message => {
var prefix = ".";

    if (message.author.id === client.user.id) return;
    if (message.guild) {
   let embed = new Discord.RichEmbed()
    let args = message.content.split(' ').slice(1).join(' ');
if(message.content.split(' ')[0] == prefix + 'bc') {
    if (!args[1]) {
message.channel.send(".bc <message>**");
return;
}
        message.guild.members.forEach(m => {
   if(!message.member.hasPermission('ADMINISTRATOR')) return;
            var bc = new Discord.RichEmbed()
            .addField('Â» Ø§Ù„Ø³ÙŠØ±ÙØ± :', `${message.guild.name}`)
            .addField('Â» Ø§Ù„Ù…Ø±Ø³Ù„ : ', `${message.author.username}#${message.author.discriminator}`)
            .addField(' Â» Ø§Ù„Ø±Ø³Ø§Ù„Ø© : ', args)
            .setColor('#ff0000')
            // m.send(`[${m}]`);
            m.send(`${m}`,{embed: bc});
        });
    }
    } else {
        return;
    }
});

client.on('message', message => {
    if (message.content === ".server") {
        if (!message.channel.guild) return
        var verificationLevel = message.guild.verificationLevel;
        const verificationLevels = ['None','Low','Meduim','High','Extreme'];
        var Y1 = message.guild.createdAt.getFullYear() - 2000
        var M2 = message.guild.createdAt.getMonth()
        var D3 = message.guild.createdAt.getDate()
        const xNiTRoZ = new Discord.RichEmbed()
         .setAuthor(message.author.username , message.author.avatarURL)
         .setColor('RANDOM')
         .setTimestamp()
         .setTitle(message.guild.name,message.guild.iconURL)
         .addField(':id: Ø§ÙŠ Ø¯ÙŠ Ø§Ù„Ø³ÙŠØ±ÙØ±',`${message.guild.id}`,true)
         .addField(':date: Ø£Ù†Ø´Ø¦Øª ÙÙŠ',D3 + '.' + M2 + '.' + Y1,true)             
         .addField(':crown: Ø§ÙˆÙ†Ø± Ø§Ù„Ø³ÙŠØ±ÙØ±',`${message.guild.owner.user.username}#${message.guild.owner.user.discriminator}`)             
         .addField(':busts_in_silhouette: Ø§Ù„Ø§Ø¹Ø¶Ø§Ø¡ ' + ` ${message.guild.memberCount} `,'Online '+`[ ${message.guild.members.filter(m=>m.presence.status == 'online','idle','dnd').size} ]`+ ','+'Offline '+`[ ${message.guild.members.filter(m=>m.presence.status == 'offline').size} ]`,true)
         .addField(':speech_balloon: Ù‚Ù†ÙˆØ§Øª' +' '+message.guild.channels.size+' ',`Text [ ${message.guild.channels.filter(m => m.type === 'text').size} ]`+', '+`Voice [ ${message.guild.channels.filter(m => m.type === 'voice').size} ]`,true)
         .addField(':earth_asia: Ø§Ù„Ø¯ÙˆÙ„Ù‡',message.guild.region)
         .addField(':ribbon: Ø§ÙŠÙ…ÙˆØ¬ÙŠ Ø§Ù„Ø³ÙŠØ±ÙØ±',`${message.guild.emojis.size}`,true)
         .addField(':construction: Ù…Ø³ØªÙˆÙ‰ Ø§Ù„ØªØ­Ù‚Ù‚',`${verificationLevels[message.guild.verificationLevel]}`,true)
         .addField(':closed_lock_with_key: Ø§Ù„Ø±ØªØ¨  '+message.guild.roles.size+' ','Type `.roles` To See The Server Roles!')
         message.channel.send({embed:xNiTRoZ});
     }
    });


  client.on('message', message => {
    if (message.content === ".rooms") {
                      if (!message.guild) return;

        var channels = message.guild.channels.map(channels => `${channels.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField(`${message.guild.name}`,`**Rooms:white_check_mark:**`)
        .addField(':arrow_down: Rooms Number. :heavy_check_mark:',`** ${message.guild.channels.size}**`)
        
.addField(':arrow_down:Rooms  Name. :heavy_check_mark::',`**[${channels}]**`)
        message.channel.sendEmbed(embed);
    }
});

  var prefix = ".";
  const HeRo = new Discord.Client();
  client.on('message', message => {
      if (message.content === prefix + "date") {
          if (!message.channel.guild) return message.reply('** This command only for servers **');  
          var currentTime = new Date(),
              Year = currentTime.getFullYear(),
              Month = currentTime.getMonth() + 1,
              Day = currentTime.getDate();

              var Date15= new Discord.RichEmbed()
              .setTitle("**ã€Ž  Date - Ø§Ù„ØªØ§Ø±ÙŠØ® ã€ **")
              .setColor('RANDOM')
              .setTimestamp()
              .setDescription( "ã€Ž"+ Day + "-" + Month + "-" + Year + "ã€")
              .setFooter(`*help to see all bot commands `, 'https://images-ext-1.discordapp.net/external/x-p4BwGofa_z_p9hpV-4hJPcqWh-aWGQzsmI189cDiY/%3Fwidth%3D344%26height%3D344/https/media.discordapp.net/attachments/372444859329544203/372701184055836682/ass.jpg?width=231&height=231')
               message.channel.sendEmbed(Date15);
      }
  });




    client.on('message', message => {
              if (!message.channel.guild) return;
      if(message.content =='.members')
      var IzRo = new Discord.RichEmbed()
      .setThumbnail(message.author.avatarURL)
      .setFooter(message.author.username, message.author.avatarURL) 
      .setTitle(':tulip:| Members info')
      .addBlankField(true)
      .addField(':green_book:| Ø§Ù„Ø§ÙˆÙ†Ù„Ø§ÙŠÙ† ',
      `${message.guild.members.filter(m=>m.presence.status == 'online').size}`)
      .addField(':closed_book:| Ø¯ÙŠ Ø§Ù† Ø¯ÙŠ',`${message.guild.members.filter(m=>m.presence.status == 'dnd').size}`)
      .addField(':orange_book:| Ø®Ø§Ù…Ù„',`${message.guild.members.filter(m=>m.presence.status == 'idle').size}`)
      .addField(':notebook:| Ø§Ù„Ø§ÙˆÙ Ù„Ø§ÙŠÙ† ',`${message.guild.members.filter(m=>m.presence.status == 'offline').size}`)
      .addField('Ø¹Ø¯Ø¯ Ø§Ø¹Ø¶Ø§Ø¡ Ø§Ù„Ø³ÙŠØ±ÙØ±',`${message.guild.memberCount}`)
      message.channel.send(IzRo);
    });



var prefix = "."

client.on('message', message => {
    if (message.author.bot) return;
    if (!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'edit')) {
        message.channel.sendMessage('Edit me').then(msg=>{msg.edit('Done edit')});
    }
});

client.on('message', message => {
     if (message.content === ".bot") {
            if(!message.channel.guild) return message.reply('** This command only for servers **');
     let embed = new Discord.RichEmbed()
  .setColor("RANDOM")
  .addField("**Ø¹Ø¯Ø¯ Ø§Ù„Ø³ÙŠØ±ÙØ±Ø§Øª Ø§Ù„ÙŠ ÙÙŠÙ‡Ø§ Ø§Ù„Ø¨ÙˆØª:**" , client.guilds.size)
  .addField("**Ø§Ù„Ù…Ø³ØªØ®Ø¯Ù…ÙŠÙ†:**", client.users.size)
  .addField("**Ù‚Ù†ÙˆØ§Øª:**", client.channels.size)
  .setTimestamp()
message.channel.sendEmbed(embed);
    }
});



client.on('message', message => {
    if (message.content === ".roles") {
        var roles = message.guild.roles.map(roles => `${roles.name}, `).join(' ')
        const embed = new Discord.RichEmbed()
        .setColor('RANDOM')
        .addField('Ø§Ù„Ø±ØªØ¨:',`**[${roles}]**`)
        message.channel.sendEmbed(embed);
    }
});


client.on("guildCreate", guild => {
  console.log(` Ø´Ø®Øµ Ù…Ø§ Ø§Ø¶Ø§Ù Ø¨ÙˆØª  ÙÙŠ Ø³ÙŠØ±ÙØ± Ø§Ø³Ù…Ù‡ ! ${guild.name} Ø§ÙˆÙ†Ø± Ø³ÙŠØ±ÙØ± Ù‡Ùˆ ${guild.owner.user.username}!`)
});




  
  
client.on('ready', () => {
   client.user.setGame(" On 3 Server l .help .invite ");
}); 

client.on("message", message => {
    var prefix = ".";
            var args = message.content.substring(prefix.length).split(" ");
            if (message.content.startsWith(prefix + "clear")) {
 if (!args[1]) {
                                let x5bz1 = new Discord.RichEmbed()
                                .setDescription("-clear <number>")
                                .setColor("#0000FF")
                                message.channel.sendEmbed(x5bz1);
                            } else {
                            let messagecount = parseInt(args[1]);
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                                                          message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            message.channel.fetchMessages({limit: messagecount}).then(messages => message.channel.bulkDelete(messages));
                            let x5bz2 = new Discord.RichEmbed()
                                                            .setColor("#008000")
                                .setDescription(":white_check_mark: | Delete " + args[1] + " Message!")
                                                                                        message.delete("..");
                                message.channel.sendEmbed(x5bz2);
                            }
                          }
});


 client.on('guildMemberAdd', member => {
  const channel = member.guild.channels.find('name', 'welcome');
  if (!channel) return;
  channel.send(`***Ø¨ÙƒÙ„ Ø­Ø¨ ÙˆØ§Ø­ØªØ±Ø§Ù… ÙˆØ´ÙˆÙ‚ Ù†Ø³ØªÙ‚Ø¨Ù„Ùƒ ÙˆÙ†ØªÙ…Ù†Ù‰ Ù„Ùƒ Ù‚Ø¶Ø¢Ø¡ Ø£Ø¬Ù…Ù„ Ø§Ù„Ù„Ø­Ø¸Ø§Øª ÙˆÙ„Ø¢ÙˆÙ‚Ø§Øª Ù…Ø¹Ù†Ø§ Ø­ÙŠØ§Ùƒ Ø§Ù„Ù„Ù‡***, ${member}`);
  
});

client.on('message', message => {
  if (true) {
if (message.content === '.support') {
      message.author.send(' |https://discord.gg/T4Q7vXP| Ø³ÙŠØ±ÙØ± Ø¯Ø¹Ù…').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === ".support") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ØªÙ€Ù€Ù€Ù€Ù…" , " |  ØªÙ€Ù€Ù€Ù€Ù… Ø§Ø±Ø³Ù€Ù€Ø§Ù„Ùƒ ÙÙŠ Ø§Ù„Ø®Ù€Ù€Ø§Øµ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});


client.on('message', message => {
  if (true) {
if (message.content === '.invite') {
      message.author.send(' Ø±Ø§Ø¨Ø· Ø§Ù„Ø¨ÙˆØª |  https://discordapp.com/oauth2/authorize?client_id=378398305153187840&scope=bot&permissions=2146958591 ').catch(e => console.log(e.stack));

    }
   } 
  });
  
  

client.on('message', message => {
     if (message.content === ".invite") {
     let embed = new Discord.RichEmbed()
  .setAuthor(message.author.username)
  .setColor("#9B59B6")
  .addField(" Done | ØªÙ€Ù€Ù€Ù€Ù…" , " |  ØªÙ€Ù€Ù€Ù€Ù… Ø§Ø±Ø³Ù€Ù€Ø§Ù„Ùƒ ÙÙŠ Ø§Ù„Ø®Ù€Ù€Ø§Øµ")
     
     
     
  message.channel.sendEmbed(embed);
    }
});

client.on('message', message => {
            if(!message.channel.guild) return;
let args = message.content.split(' ').slice(1).join(' ');
if (message.content.startsWith('.bc-users')){
 if(!message.author.id === 'Ø§ÙŠ Ø¯ÙŠ ØµØ§Ø­Ø¨ Ø§Ù„Ø¨ÙˆØª') return;
message.channel.sendMessage('Ø¬Ø§Ø± Ø§Ø±Ø³Ø§Ù„ Ø§Ù„Ø±Ø³Ø§Ù„Ø© |:white_check_mark:')
client.users.forEach(m =>{
m.sendMessage(args)
})
}
});


client.on('message', message=>{
    if (message.content ==='.add-colors'){
        if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.createRole({name:x,
            color: 'RANDOM'})
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }
    if (message.content === '.de-colors'){
                if (message.channel.guild){
            if (message.member.hasPermission('MANAGE_ROLES')){
                setInterval(function(){})
                  let count = 0;
                  let ecount = 0;
        for(let x = 0; x < 250; x++){
            message.guild.roles.find('name', x)
      }
            }else{
                message.channel.sendMessage(':warning: You do not have permission to write this command')
            }
        }else{
            message.channel.sendMessage(':warning:  This command only in servers')
        }
    }

})
  
  
  
  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 1")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ø¨ÙƒÙ„ Ø­Ø¨ ÙˆØ§Ø­ØªØ±Ø§Ù… ÙˆØ´ÙˆÙ‚ Ù†Ø³ØªÙ‚Ø¨Ù„Ùƒ ÙˆÙ†ØªÙ…Ù†Ù‰ Ù„Ùƒ Ù‚Ø¶Ø¢Ø¡ Ø£Ø¬Ù…Ù„ Ø§Ù„Ù„Ø­Ø¸Ø§Øª ÙˆÙ„Ø¢ÙˆÙ‚Ø§Øª Ù…Ø¹Ù†Ø§***')
  .setImage('http://www.imgion.com/images/01/Welcome-buddy.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});
 
  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 2")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù‡Ù„Ø§ Ø¨Ø§Ù„Ù„ÙŠ Ù…Ù„Ùƒ Ù‚Ù„Ø¨ÙŠ Ù‡Ù„Ø§ Ø¨Ø§Ù„Ù„ÙŠ ÙØ¯Ø§Ù‡ Ø§Ù„Ø±ÙˆØ­ Ù‡Ù„Ø§ Ø¨Ø§Ù„Ù„ÙŠ Ø´ØºÙ„ ÙÙƒØ±ÙŠ Ù‡Ù„Ø§ Ø¨Ø§Ù„Ù„ÙŠ Ù‡ÙˆØ§Ù‡ Ø§Ù„Ø¨ÙˆØ­.***')
  .setImage('https://www.askideas.com/media/13/Welcome-With-Rose-Flowers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 3")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø¨Ùƒ Ø¹Ø¯Ø¯ Ù…Ø§ Ø®Ø·ØªÙ‡ Ø§Ù„Ø£Ù‚Ù„Ø§Ù… Ù…Ù† Ø­Ø±ÙˆÙ ÙˆØ¨Ø¹Ø¯Ø¯ Ù…Ø§ Ø£Ø²Ù‡Ø± Ø¨Ø§Ù„Ø£Ø±Ø¶ Ø²Ù‡ÙˆØ± Ù…Ø±Ø­Ø¨Ø§Ù‹ Ù…Ù…Ø²ÙˆØ¬Ø© Ø¨Ø¹Ø·Ø± Ø§Ù„ÙˆØ±Ø¯ ÙˆØ±Ø§Ø¦Ø­Ø© Ø§Ù„Ø¨Ø®ÙˆØ±***')
  .setImage('https://www.askideas.com/media/13/Welcome-Signboard-Clipart.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 4")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù…Ø±Ø­Ø¨Ø§ Ø¨Ø§Ù„Ù„ÙŠ ÙŠØ¬ÙŠÙ†Ø§ Ù‡Ù„Øª Ø§Ù„ÙØ±Ø­Ø© Ø¹Ù„ÙŠÙ†Ø§ Ù†Ø´Ø¯Øª Ø§Ù„Ø£Ø´ÙˆØ§Ù‚ ÙÙŠÙ†Ø§ Ù…Ø±Ø­Ø¨Ø§Ù‹ Ø¨ÙƒÙ… Ù…Ø±Ø­Ø¨Ø§Ù‹.***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 5")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù„Ùˆ Ø¹Ù„Ù…Øª Ø§Ù„Ø¯Ø§Ø± Ø¨Ù…Ù† Ø²Ø§Ø±Ù‡Ø§ ÙØ±Ø­Øª ÙˆØ£Ø³ØªØ¨Ø´Ø±Øª Ø«Ù… Ø¨Ø§Ø³Øª Ù…ÙˆØ¶Ø¹ Ø§Ù„Ù‚Ø¯Ù…ÙŠÙ† ÙˆØ£Ù†Ø´Ø¯Øª Ø¨Ù„Ø³Ø§Ù† Ø§Ù„Ø­Ø§Ù„ Ù‚Ø§Ø¦Ù„Ø© Ø£Ù‡Ù„Ø§Ù‹ ÙˆØ³Ù‡Ù„Ø§Ù‹ Ø¨Ø£Ù‡Ù„ Ø§Ù„Ø¬ÙˆØ¯ ÙˆØ§Ù„ÙƒØ±Ù….***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-With-Flowers.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 6")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù…Ø±Ø­Ø¨Ø§ Ø¨Ùƒ ÙƒØ«Ø± Ø§Ù„Ù†Ø¬ÙˆÙ… Ø§Ù„Ø³Ø§Ø·Ø¹Ø© ÙˆÙƒØ«Ø± Ø§Ù„ÙˆØ±ÙˆØ¯ Ø§Ù„ÙØ§Ø¦Ø­Ø© Ø§Ù„ØªÙŠ ØªÙÙˆØ­ Ø¨Ø£Ø²ÙƒÙ‰ Ø§Ù„Ø¹Ø·ÙˆØ± ÙˆÙƒØ«Ø± Ù…Ø§ ØªÙƒØªØ¨ Ø§Ù„Ø£Ù‚Ù„Ø§Ù… Ù…Ù† Ø§Ù„Ø­Ø±ÙˆÙ ÙˆØ§Ù„Ø¹Ø¨Ø§Ø±Ø§Øª. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Sign-For-Front-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 7")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ø­ÙŠ Ø§Ù„Ù„Ù‡ Ù‡Ø°Ù‡ Ø§Ù„ÙˆØ¬ÙˆÙ‡ Ø±Ø¤ÙŠØªÙ‡Ø§ ØªØ²ÙŠØ¯ Ø§Ù„Ø£ÙØ±Ø§Ø­ØŒ Ù†Ø³Ù…Ø§ØªÙ‡Ø§ ØªØ¯Ø§ÙˆÙŠ Ø§Ù„Ø¬Ø±ÙˆØ­ØŒ ÙˆØ¹Ø¨ÙŠØ±Ù‡Ø§ ÙÙˆØ§Ø­ØŒ ØªÙ†Ø«Ø±Ù‡ Ø§Ù„Ø±ÙŠØ§Ø­ØŒ Ø¹Ù„Ù‰ Ø§Ù„Ù‚Ù…Ù… ÙÙŠ Ø§Ù„Ù„ÙŠÙ„ ÙÙŠ Ø§Ù„ØµØ¨Ø§Ø­***')
  .setImage('https://www.askideas.com/media/13/Small-Welcome-Sign-On-Door.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 8")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***Ù…Ø±Ø­Ø¨Ø§ Ø¨ÙƒÙ„ Ø§Ù„Ø¶ÙŠÙˆÙ ÙŠÙˆÙ… Ù†Ø§Ø¯Ù‰ ØºÙŠØ± Ø¹Ø§Ø¯ÙŠ Ù…Ø±Ø­Ø¨Ø§ ÙÙˆÙ‚ Ø§Ù„Ø£Ù„ÙˆÙ ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Colorful-Sign-Picture.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 9")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***ÙŠØ§ Ù…Ø±Ø­Ø¨Ø§ ÙˆØ³Ù‡Ù„Ø§Ù‹ Ø¨Ø¶ÙŠÙ Ù„ÙØ§Ù†Ø§ØŒ ÙŠØ²Ù‡ÙŠ Ø¨Ùƒ Ø§Ù„Ø£Ø¯Ø¨ Ø§Ù„Ø¹Ø±Ø¨ÙŠ ÙˆÙŠÙ†Ø«Ø± Ù„Ùƒ Ø£Ø²Ù‡Ø§Ø± ÙŠØ³Ù‚ÙŠÙƒ Ù…Ù† Ù†Ø¨Ø¹ Ø§Ù„Ù…Ø´Ø§Ø¹Ø± ÙˆÙØ§Ù†Ø§ØŒ Ù„ÙŠÙ† Ø§Ù„Ù‡Ù„Ø§ ØªØ«Ù…Ø± Ø¹Ù„Ù‰ ØºØµÙˆÙ†Ùƒ Ø£Ø·ÙŠØ§Ø±. ***')
  .setImage('https://www.askideas.com/media/13/Welcome-Deers-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});

  
client.on('message', message => {
 if (message.content.startsWith("ØªØ±Ø­ÙŠØ¨ 10")) {
                                 var mentionned = message.mentions.users.first();
             var mentionavatar;
               if(mentionned){
                   var mentionavatar = mentionned;
               } else {
                   var mentionavatar = message.author;
                   
               }
               let bot;
               if(message.author.bot) {
                   bot = 'Bot'
               } else {
                   bot = 'User'
               } 
  var EsTeKnAN = new Discord.RichEmbed()
  .setColor('RANDOM')
  .setThumbnail(`${mentionavatar.avatarURL}`)
  .addField("***Ø´ÙƒØ±Ø§ Ø§Ù„Ø§Ù†Ø¶Ù…Ø§Ù…Ùƒ Ø§Ù„ÙŠÙ†Ø§***" ,mentionavatar.username )
  .setDescription('***ÙƒÙ„ Ø´ÙŠØ¡ ÙŠØ±Ø­Ø¨ Ø¨Ùƒ ÙƒÙ„ Ø´ÙŠØ¡ ÙŠØªØ¨Ø³Ù… ÙˆÙŠØªÙˆÙ‡Ø¬ ÙØ±Ø­Ø§Ù‹ Ø¨Ù‚Ø¯ÙˆÙ…Ùƒ ÙƒÙ„ Ø´ÙŠØ¡ ÙŠÙ†Ù…Ù‚ Ø¹Ø¨Ø§Ø±Ø§Øª Ø§Ù„ØªØ±Ø­ÙŠØ¨ ÙˆÙŠØµÙˆØº ÙƒÙ„Ù…Ø§Øª Ø§Ù„Ø­Ø¨ Ù„ÙˆØ¬ÙˆØ¯Ùƒ ÙƒÙ„ Ø´ÙŠØ¡ ÙŠÙ†ØªØ¸Ø± Ù…Ø´Ø§Ø±Ùƒï¿½ï¿½ØªÙƒ ÙˆÙ‚Ù„Ù…Ùƒ Ø§Ù„Ø±Ø§Ø¦Ø¹ ÙˆØ£Ø¨Ø¯Ø§Ø¹Ø§ØªÙƒ ÙƒÙ„ Ø´ÙŠØ¡ ÙŠØ±Ø¯Ø¯ Ø­ÙŠØ§Ùƒ Ø§Ù„Ù„Ù‡.***')
  .setImage('https://www.askideas.com/media/13/Beautiful-Wooden-Welcome-Sign.jpg')
   message.channel.sendEmbed(EsTeKnAN);
  }
});


client.login('NDQ4NDg3MTI5MjMyOTY1NjQy.DeiolA.0PSXjRAMjciRrtvR19ywIRXK7gE');
