const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on events")
  .setColor("97f7ff")

//.addField("Don't do the 'accumulate obtain 3 artists.' daily task. You could stock up 3 contracts for a gallery event rather than 1 contract. It is just a small amount of contracts but it is very helpful stocking up and have a LUCK.", "by KrispyKim", true)
//.addField("Obtaining 3 artist could count when you finish a song in a roadshow for the first time, daily log in reward, and others (bday support etc.) so better don't rush finishing a district in roadshow and play 3 songs per day instead.","by KrispyKim",true)
.addField("KrispyKim:","Don't do the 'accumulate obtain 3 artists.' daily task. You could stock up 3 contracts for a gallery event rather than 1 contract. It is just a small amount of contracts but it is very helpful stocking up and have a LUCK.",true)
.addField("KrispyKim:","Obtaining 3 artist could count when you finish a song in a roadshow for the first time, daily log in reward, and others (bday support etc.) so better don't rush finishing a district in roadshow and play 3 songs per day instead.", true);



;
module.exports = Object.freeze({
  embed: {embed}
});
