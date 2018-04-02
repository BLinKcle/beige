// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Ladder FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")

.addField("Q: How often are the songs updated?", "A: Once every 48 hours. Song list may contain Platinum-only songs.", true)

.addField("Q: During the song, I'm clearly leading. Yet in the results screen I lost. How?", "A: The status on the upper left corner is merely your score less the opponent's score based on taps (s perfect, perfect, great, etc) and card influence.  Any score % bonuses are added in the final results screen.", true)

.addField("Q: How do the placement rewards work?", "A: All players in the same medal receive the same reward, regardless of stars.", true)

.addField("Q: Will there be a special card every month?", "A: Yes, Gold Medal players and above will receive a special card every month. Gold Medal playesr receive a Trainee Rank 1 card. Champion Medal players receive an Artist Rank 5 card.", true)

.addField("Q: How is my opponent decided?", "A: Based on your current medal/placement.", true)

.addField("Q: After reaching Champion Medal, what is the maximum number of stars a person can obtain?", "A: You can obtain up to 9999 stars, but the rewards do not change.", true)

.addField("Q: Is there an achievement associated with ladder?", "A: Not at this time. We will add it later.", true)
/*
   * Blank field, useful to create some space..addBlankField(true)
   */

;
module.exports = Object.freeze({
  embed: {embed}
});
