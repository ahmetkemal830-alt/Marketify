const { Client, GatewayIntentBits } = require('discord.js');
const express = require('express');

// 1. Botu 7/24 Aktif Tutacak Web Sunucusu (UptimeRobot İçin)
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Marketify Bot 7/24 Aktif!');
});

app.listen(PORT, () => {
    console.log(`Web sunucusu ${PORT} portunda çalışıyor.`);
});

// 2. Discord Bot Ayarları
const client = new Client({
    intents: [
        GatewayIntentBits.Guilds,
        GatewayIntentBits.GuildMessages,
        GatewayIntentBits.MessageContent
    ]
});

// Bot hazır olduğunda konsola yazdıracak
client.once('ready', () => {
    console.log(`[BAŞARILI] ${client.user.tag} olarak giriş yapıldı!`);
});

// Örnek test komutu (Botun çalışıp çalışmadığını denemek için)
client.on('messageCreate', (message) => {
    if (message.author.bot) return;

    if (message.content === '!ping') {
        message.reply('🏓 Pong! Marketify altyapısı canavar gibi çalışıyor.');
    }
});

// Render'a girdiğimiz TOKEN gizli değişkenini çağırıp botu başlatır
client.login(process.env.MTUwODgxODk4NjY2NDQ2NDQwNA.GCQkhN.Uz_e5oZnh1dPrxPuxCtM27Mcobt-DjpRSecHp0);
