const express = require('express')
const app = express();
const port = 3000

app.get('/', (req, res) => res.send('Yo boi!!'))

app.listen(port, () =>
console.log(`Your app is listening a http://localhost:${port}`)
);

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
