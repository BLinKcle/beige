// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on schedule")
  .setColor("97f7ff")

.addField("If you know you are going to fail your schedule, you can force close the app and retry the schedule.", "by PhoenixKnightZ", true)

.addField("Equip your best cards during recording to get more rewards. You will get 7000 mcoins, 14 exp cards (sometimes you can get gold exp) and more support items.", "by Debby", true)
.addField("Normal members can get 4nos. of schedules. platinum members can get 1 more.See picture below.", "by Ricky_blink", true)
 .setImage("https://cdn.discordapp.com/attachments/430210328517804032/430230117697060873/20184212571171.png")
;
module.exports = Object.freeze({
  embed: {embed}
});