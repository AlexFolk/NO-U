const discord = require('discord.js')
const fetch = require('node-fetch')

const  client = new Discord.Client()

const tkn = "WZNj1YdW06BBn3ba4-eQKbNyy9SxoyM2"

bot.on("ready", () => {
  client.login(tkn)

})
