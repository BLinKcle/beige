const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Club")
  .setColor(3447003)
  .setDescription("FAQ's about the Club")
  .setFooter("Brought to you by: BlinKcle, weiwei, Steve","https://i.imgur.com/TgNMUlS.jpg")
  .setThumbnail("https://i.imgur.com/60nlVAF.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: How often are the songs updated?",
    "A: Once every 48 hours.  It is worth mentioning that the songs will contain Platinum-only songs, so non-Platinum members get to experience them too.", true);
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */


module.exports = Object.freeze({
  embed: {embed}
});
