const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Krunk Dorm FAQ")
  .setColor("97f7ff")
  .setThumbnail("https://i.imgur.com/gvid13v.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Resources:",
    "https://www.reddit.com/r/BeatEVOYG/comments/7meqh1/guide_krunk_dorm/", true);
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */


module.exports = Object.freeze({
  embed: {embed}
});
