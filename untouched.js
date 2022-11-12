// ENV
require('dotenv').config();
const token = process.env.TOKEN;

// DISCORD JS
const { Client, Events, GatewayIntentBits } = require('discord.js');
const client = new Client({ intents: [GatewayIntentBits.Guilds] });


// CONSOLE
client.once(Events.ClientReady, c => {
	console.log(`Bot online. ${c.user.tag}`);
});



// LOGIN
client.login(token);