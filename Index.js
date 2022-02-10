const express = require('express');
const app = express();
const port = 3000 || 8000 || 5500;

app.get('/', (req ,res) => {
  res.send("Bot is online")
});

app.listen(port, () => {
  console.log(`Server listening at https://localhost/${port}`)
})

client.login(process.env.TOKEN);
client.commands = new Collection();
client.prefix = PREFIX;
client.queue = new Map();
const cooldowns = new Collection();
const escapeRegex = (str) => str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
const {BOT_PREFIX, BOT_STATUS2, BOT_STATUS3 , BOT_PRESENCE } = require('./config.json');

Const Discord = require("discord.js);
Module.exports = {
Help: {
name: "Fun command"
Description "FUNNNNN"
Permission "nothing"
Category "fun"
Aliases: []
},

run: async (client,msg, args => {
Let guy = args[0]
Let db = require("quick.db")

db.set("fun", guy) 
     message.channel.send("DONE")
     
     const { Client, Collection } = require("discord.js");
const { readdirSync } = require("fs");
const { join } = require("path");
const { PREFIX } = require("./config.json");
const client = new Client({ disableMentions: "everyone" })

