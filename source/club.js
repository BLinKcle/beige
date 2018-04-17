
const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
   .setTitle("Club FAQ")
  .setColor("97f7ff")
  .setThumbnail("https://i.imgur.com/60nlVAF.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: Is there a card for the top 3 club during group birthdays/anniversary?",
    "A: There is no card for group birthdays.", true)
.addField("Q: Does the image used in the reward for the top 3 supporting clubs, the gold cards, all the same?","A: Yes. The only difference is the rank of the card. Top 1,2,3 clubs get rank 3,2,1 artist card, respectively.",true)
.addField("Q: Will I lose all my point when I leave a club or get kicked?","The contributions you get to spend in club shop do not disappear (that stays with you no matter what). However, when you join a new club, your contribution display starts back at 0.",true)
.addField("Club upgrading requirements:","See the following url: https://www.reddit.com/r/BeatEVOYG/comments/7joepi/club_upgrading_requirement/", true)
.addField("Q: Do you get rewards after being kicked?", "A: No, only the members that are still a member of the club will get the rewards.", true)

;



module.exports = Object.freeze({
  embed: {embed}
});
