const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Shop")
  .setColor(3447003)
  .setThumbnail("https://i.imgur.com/DhkLaDB.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: Which is better to buy? Gold or Platinum?",
    "A: It is good to have both at the same time. However, if you only want to use one, gold membership is the better choice than platinum.", true)
.addField("Q: How do I earn diamonds without buying the membership?","A: You can get diamonds through ladder, ranking challenge, fb codes, daily quests,attendance, and 9 grid events.  ",true)
;
module.exports = Object.freeze({
  embed: {embed}
});

