const { discord } = require('discord.js')
const { tkn } = require('./config.json')

const  client = new Discord.Client()

bot.on("ready", () => {
  client.login(tkn)

})
