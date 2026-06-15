const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');
const app = express();
const port = 3000;

// Render'ın botu açık tutması için web server
app.get('/', (req, res) => {
  res.send('Marketify 7/24 Aktif!');
});

app.listen(port, () => {
  console.log(`Web server port ${port} üzerinde çalışıyor.`);
});

// Discord Bot Kurulumu
const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`${client.user.tag} olarak giriş yapıldı! Bot hazır.`);
});

// Botun tokenini Render üzerinden gizli bilgi (Environment Variable) olarak bağlayacağız
client.login(process.env.MTUwODgxODk4NjY2NDQ2NDQwNA.GCQkhN.Uz_e5oZnh1dPrxPuxCtM27Mcobt-DjpRSecHp0);
