const { Client, Events, GatewayIntentBits} = require('discord.js');
const cron = require('cron');
const dotenv = require('dotenv');

dotenv.config();
const { TOKEN, GUILD_ID, COQUEIROS_ID, BOT_CHANNEL_ID } = process.env;
const comidinhas = ['🍝','🍜','🍔🍟','🍕','🍛','🥗','🍗','🌭','🌮','🍣','🐛'];

const client = new Client({ intents: [GatewayIntentBits.Guilds, GatewayIntentBits.GuildMessages, GatewayIntentBits.MessageContent] });

var dailyOrWeesklyChance;
var bomDiaReceived = false;

client.once(Events.ClientReady, c => {
	console.log(`Ready! Logged in as ${c.user.tag}`);
  client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
    channel.send('To on família! 🌴🥥');
  });
});

client.login(TOKEN);

client.on(Events.MessageCreate, async message => {
  var date = new Date();
  if(message.author.bot && message.content === 'To on família! 🌴🥥'){
      setTimeout(() => {message.delete()}, 5000);
  }
  if(!message.author.bot && message.content.toUpperCase().includes('BOM DIA') && date.getHours()<12){
      client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
        channel.send('Bom dia! 😎🍹');
        bomDiaReceived = true;
    });
  }
});

let scheduledMessageNotBomDia = new cron.CronJob('00 12 * * 1-5', () => {
  selecionada = Math.floor(Math.random() * (comidinhas.length-1));
  console.log(selecionada);
  if(!bomDiaReceived){
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
      channel.send('Ninguém me deu bom dia hoje 🥺');
    });
    bomDiaReceived = false;
  }
  client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
    channel.send('Hora de muçar 😋' + comidinhas[selecionada]);
  });
});

let scheduledMessageDailyOn = new cron.CronJob('00 16 * * 1-4', () => {
  dailyOrWeesklyChance = Math.floor(Math.random() * 100);
  client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
    if(dailyOrWeesklyChance < 21)
      channel.send(`<@&${COQUEIROS_ID}> 🇩 🇦 🇮 🇸 🇱 🇾 :white_check_mark:`)  
    else
      channel.send(`<@&${COQUEIROS_ID}> 🇩 🇦 🇮 🇱 🇾 :white_check_mark:`)
  });
});

let scheduledMessageDailyOff = new cron.CronJob('40 16 * * 1-4', () => {
  dailyOrWeesklyChance = Math.floor(Math.random() * 100);
  client.channels.fetch(BOT_CHANNEL_ID).then(channel => {
    if(dailyOrWeesklyChance < 21)
      channel.send(`<@&${COQUEIROS_ID}> 🇦 🇨 🇦 🇧 🇴 🇺   🇦   🇩 🇦 🇮 🇸 🇱 🇾`)
    else
      channel.send(`<@&${COQUEIROS_ID}> 🇦 🇨 🇦 🇧 🇴 🇺   🇦   🇩 🇦 🇮 🇱 🇾`)
  });
});

let scheduledMessageWeesklyOn = new cron.CronJob('00 16 * * 5', () => {
  dailyOrWeesklyChance = Math.floor(Math.random() * 100);
  if(dailyOrWeesklyChance < 21)
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => channel.send(`<@&${COQUEIROS_ID}> 🇼 🇪 🇪 🇸 🇰 🇱 🇾`));
  else
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => channel.send(`<@&${COQUEIROS_ID}> 🇼 🇪 🇪 🇰 🇱 🇾`));
});

let scheduledMessageWeesklyOff = new cron.CronJob('15 16 * * 5', () => {
  dailyOrWeesklyChance = Math.floor(Math.random() * 100);
  if(dailyOrWeesklyChance < 21)
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => channel.send(`<@&${COQUEIROS_ID}> 🇦 🇨 🇦 🇧 🇴 🇺   🇦   🇼 🇪 🇪 🇸 🇰 🇱 🇾`));
  else  
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => channel.send(`<@&${COQUEIROS_ID}> 🇦 🇨 🇦 🇧 🇴 🇺   🇦   🇼 🇪 🇪 🇰 🇱 🇾`));
});

let scheduledMessageSextou = new cron.CronJob('00 18 * * 5', () => {
    client.channels.fetch(BOT_CHANNEL_ID).then(channel => channel.send('🇸 🇪 🇽 🇹 🇴 🇺  😈'));
});

scheduledMessageSextou.start();
scheduledMessageNotBomDia.start();
scheduledMessageDailyOn.start();
scheduledMessageDailyOff.start();
scheduledMessageWeesklyOn.start();
scheduledMessageWeesklyOff.start();