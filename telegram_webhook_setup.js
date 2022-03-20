// This code is responsible for setting the webhook and is to be executed once.
require('dotenv').config();

const { Telegraf } = require('telegraf')

const bot = new Telegraf(process.env.BOT_TOKEN)
console.log(bot);

// Set telegram webhook
// The second argument is necessary only if the client uses a self-signed
// certificate. Including it for a verified certificate may cause things to break.
bot.telegram.setWebhook(process.env.WEBHOOK_URL, {})

// Start https webhook
// bot.startWebhook('/telegrambot')

// Http webhook, for nginx/heroku users.
// bot.startWebhook('/s', null, 5000)
