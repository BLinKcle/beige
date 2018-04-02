// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on playing the songs")
  .setColor("97f7ff")

.addField("Be careful on those sensitive songs (specifically those fast songs). you would notice that the slider counts fast which means it is sensitive. you mostly get perfect rather than sperfect.", "by KrispyKim", true)

.addField("Be careful on those sliders in a sensitive songs. You might miss a note at the BEGINNING and END of the sliders.", "by KrispyKim", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
