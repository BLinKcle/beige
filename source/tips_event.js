// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on events")
  .setColor("97f7ff")

//.addField("", "by freeman", true)
//.addField(" ", "by freeman", true)
.addField("by freeman:","If for whatever reason you feel that you might not have enough days to clock attendance for 9-grid events, you can wait until the patch implementing it is over before logging in, or when someone here in discord mentions it being up.",true)
.addField("by freeman:","Purchasing memberships do count toward 'Buy Diamonds 1 times' for 9-grid events.",true)
.addField("by Locya:"," Before the seals event begin, unlock all special events but don’t play the songs. When the event begin, you can accumulate more seals. :wink:",true)
.addField("by Debby:"," If there's a Sign LE event but you only have 700<x<800 diamonds, don't worry! You can buy one by one up to 9 times. It will always be an artist card on the 8th pull. Is this a LE card? No, 100% uncertain, this depends on your luck. So, good luck!",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
