const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("NHR")
  .setColor(3447003)
  .setDescription("FAQ's about the NHR")
  .setFooter("Brought to you by: BlinKcle, weiwei, Steve","https://i.imgur.com/TgNMUlS.jpg")
  .setThumbnail("https://scontent.fmnl8-1.fna.fbcdn.net/v/t31.0-8/25532238_1517327165055657_4232053050308972680_o.jpg?_nc_cat=0&oh=aa1f3b7a3a2a7a2fbc34bdc054f75b3e&oe=5B6940BA")
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

