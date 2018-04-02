
// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("General tips by users when playing BEY")
  .setColor("97f7ff")

.addField(" If you're angry or stressed about the game (having some bugs or other issues), go to #bey-rant . Let your emotions come out about it", "by KrispyKim", true)
.addField(" When using a bluetooth headset, the wireless connection gives a delay on the music. Go to Settings then adjust the note speed to somewhere between +120 to +130ms.", "by sekigan", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
