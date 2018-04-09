//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on roadshow")
  .setColor("97f7ff")

//.addField("", "", true)
.addField("by freeman:","You can unlock the song list in every district if you have an extra ticket that won't be used on that day; this ensures that you have extra songs that can contribute to seals events when you do get the time (and when they come around)",true)
.addField("by jinstal:"," If you don't feel like doing all 3 special performances, you may play 2 SPs and save the last one for another day (take note that if you do so, you'll have to do 4 SPs if you want to clear out your SP tickets)",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
