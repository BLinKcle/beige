const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Training")
  .setColor(3447003)
  .setThumbnail("https://i.imgur.com/20dsUK3.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: What are the shortest songs?",
    "A: Some of the shortest songs are Missing You(GD), Lies Remix Ver (BIGBANG), Bad (Epik High), YG Family Bounce(YG Family)", true);
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */


module.exports = Object.freeze({
  embed: {embed}
});
