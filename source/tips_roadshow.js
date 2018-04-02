//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on roadshow")
  .setColor("97f7ff")

.addField("You can unlock the song list in every district if you have an extra ticket that won't be used on that day; this ensures that you have extra songs that can contribute to seals events when you do get the time (and when they come around)", "by freeman", true)


;
module.exports = Object.freeze({
  embed: {embed}
});
