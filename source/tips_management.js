const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on management")
  .setColor("97f7ff")

.addField("Better sell low level cards (Lvl 1 Rank 1-3 or 4(if useless)),than using them as a material artist for upgrade. Then, use that mcoins from the cards you sold to upgrade your artists.", "by KrispyKim", true)
.addField("If you are running low on m-coins and want to complete an achievement quickly, you could use one exp card per upgrade. (there are upgrade artist quests for manager promotions as well)", "by freeman" ,true)
.addField("Although you have other group that you stan, it is wise to upgrade those artist that would benefit in songs: Ladder, schedules, roadshow, specifically BB(GD and Taeyang) ", "by KrispyKim" ,true)

;
module.exports = Object.freeze({
  embed: {embed}
});
