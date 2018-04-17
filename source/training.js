const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Ladder FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/20dsUK3.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: What are the shortest songs?",
    "A: Some of the shortest songs are Missing You(GD), Lies Remix Ver (BIGBANG), Bad (Epik High), YG Family Bounce(YG Family)", true)
.addField("Q: What will I get when I play on training?","A: The reward for playing in training is M-coins. The better you play a song and the longer the song, the better the reward.",true)




;

module.exports = Object.freeze({
  embed: {embed}
});
