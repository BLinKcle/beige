// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on events")
  .setColor("97f7ff")

.addField("Don't spend too much on this district, they just give you few NHR Seals (average of 15) in every songs. And you only have a max of 5 tickets daily (total of 75 seals assumption a day). You could just focus on achievements having an all combo in every songs.", "by KrispyKim", true)


;
module.exports = Object.freeze({
  embed: {embed}
});