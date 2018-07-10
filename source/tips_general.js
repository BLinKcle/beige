
// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("General tips by users when playing BEY")
  .setColor("97f7ff")


.addField("by KrispyKim:","If you're angry or stressed about the game (having some bugs or other issues), go to #bey-rant . Let your emotions come out about it",true)
.addField("by sekigan:","When using a bluetooth headset, the wireless connection gives a delay on the music. Go to Settings then adjust the note speed to somewhere between +120 to +130ms.",true)
.addField("by BLinKcle:","Read #resources in this channel for black screen problems, switching device problems and other useful tools and informations.",true)

;
module.exports = Object.freeze({
  embed: {embed}
});
