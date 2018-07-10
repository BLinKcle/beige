const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on ranking")
  .setColor("97f7ff")

//.addField(".", "", true)

.addField("by Locya:","Try playing the games first in training before playing in the ranking challenge. Unequip all your cards so you can compare them with the players in ranking.",true)
.addField("by jungtae_21:","You can buy ranking Entrance only until three hours before the Round Time Left countdown ends. You still have three hours to finish all the remaining songs.",true)









;
module.exports = Object.freeze({
  embed: {embed}
});
