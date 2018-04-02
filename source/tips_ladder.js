// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on ladder")
  .setColor("97f7ff")

.addField("You could forcely quit the app even searching the opponent and see who and what the song is. I know that you know who have higher cards and you want a particular song because you have good cards on that artist. Nothing to loose nor gain stars", "by KrispyKim", true)

.addField("If you feel like you're about to lose to your opponent, you can force quit your app. You will lose one star as a result, but you will keep your streak of +2 stars per win. (if you had a streak going on, that is) ", "by freeman", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
