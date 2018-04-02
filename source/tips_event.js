// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on events")
  .setColor("97f7ff")

.addField("If for whatever reason you feel that you might not have enough days to clock attendance for 9-grid events, you can wait until the patch implementing it is over before logging in, or when someone here in discord mentions it being up.", "by freeman", true)
.addField(" Purchasing memberships do count toward 'Buy Diamonds 1 times' for 9-grid events", "by freeman", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
