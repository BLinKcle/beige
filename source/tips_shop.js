// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on shop")
  .setColor("97f7ff")

//.addField("", "", true)

.addField("by Louise:"," The shop refreshes every 4 hours, don’t ruin your sleep looking for contracts in shop. If the shop refreshes at 11pm you can check it and go to sleep; next refresh is at 3 am but check the shop at 6.57 am just as long it’s before 7 am (next refresh).",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
