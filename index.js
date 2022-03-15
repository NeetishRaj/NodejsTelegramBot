require('dotenv').config();
const { Telegraf } = require('telegraf')
const fs = require('fs')

const bot = new Telegraf(process.env.BOT_TOKEN)

// TLS options
const tlsOptions = {
  key: fs.readFileSync('server-key.pem'),
  cert: fs.readFileSync('server-cert.pem'),
  ca: [
    // This is necessary only if the client uses a self-signed certificate.
    fs.readFileSync('client-cert.pem')
  ]
}

// Set telegram webhook
// The second argument is necessary only if the client uses a self-signed
// certificate. Including it for a verified certificate may cause things to break.
bot.telegram.setWebhook('https://om3c3d9qcl.execute-api.ap-south-1.amazonaws.com/default/telegrambot', {
//   source: 'server-cert.pem'
})

// Start https webhook
bot.startWebhook('/')

// Http webhook, for nginx/heroku users.
// bot.startWebhook('/s', null, 5000)