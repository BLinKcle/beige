// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on NHR")
  .setColor("97f7ff")

.addField("Don't spend too much on this district, they just give you few NHR Seals (average of 15) in every song. You could just focus on achievements having an all combo in every songs.", "by KrispyKim", true)

.addField("If you want to finish NHR as soon as possible, play No Visa (Feat. 김기쁨) (VAN.C Remix) five times. It has the shortest duration among all NHR songs so far (1min 36 s). You can also play Holy Moly Boom Boom (Original Mix) (1min 41s).", "by sekigan", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
