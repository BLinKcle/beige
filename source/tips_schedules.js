// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on schedule")
  .setColor("97f7ff")

//.addField("", "", true)

//.addField("", "", true)
//.addField("", "", true)
.addField("by PhoenixKnightZ:","If you know you are going to fail your schedule, you can force close the app and retry the schedule.",true)
.addField("by Debby:","Equip your best cards during recording to get more rewards. You will get 7000 mcoins, 14 exp cards (sometimes you can get gold exp) and more support items.",true)
.addField("by BLinKcle:","To get the maximum rewards for tv schedules, you need at least 4900 total influence.",true)
.addField("by BlinKcle:", "If you get 14 exp, that means you got 1 gold card, 2 2-star exp, and 11 1-star exp cards. If you get 13 exp cards, it means you got 11 1-star exp cards, and 2 2-star exp cards.",true)
.addField("by Ricky_blink:","Normal members can get 4nos. of schedules. platinum members can get 1 more.See picture below.",true)


.setImage("https://cdn.discordapp.com/attachments/430210328517804032/430230117697060873/20184212571171.png")
;

module.exports = Object.freeze({
  embed: {embed}
});

