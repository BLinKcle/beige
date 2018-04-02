// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on achievements")
  .setColor("97f7ff")

.addField("If you're aiming to have an all sperfect , try these songs: WINNER - empty (Highly recommended); JINUSEAN - gasoline, phone number; TAEYANG - Empty Road, Naked; IKON - Airplane.", "by KrispyKim", true)


;
module.exports = Object.freeze({
  embed: {embed}
});
