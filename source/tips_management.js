const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on management")
  .setColor("97f7ff")

//.addField("", "", true)
//.addField("", "" ,true)
//.addField(" ", "" ,true)

.addField("by KrispyKim:","Better sell low level cards (Lvl 1 Rank 1-3 or 4(if useless)),than using them as a material artist for upgrade. Then, use that mcoins from the cards you sold to upgrade your artists.",true)
.addField("by freeman:","If you are running low on m-coins and want to complete an achievement quickly, you could use one exp card per upgrade. (there are upgrade artist quests for manager promotions as well)",true)
.addField("by KrispyKim:","Although you have other group that you stan, it is wise to upgrade those artist that would benefit in songs: Ladder, schedules, roadshow, specifically BB(GD and Taeyang)",true)
.addField("by weiwei:","The game has a lock function, accessible through 'My Group' or 'All Star' tab. Select the card you want and click on the lock icon. This way you cannot accidentally use/sell the card.",true)
.addField("by Locya:","If you have a lot of exp cards and are low on M-coins, you can sell 1 star exp card for 100 M-coins: go to management > all stars> YG (on the left) > scroll to the bottom and sell exp cards.",true)

;
module.exports = Object.freeze({
  embed: {embed}
});
