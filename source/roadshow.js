

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Roadshow")
  .setColor(3447003)
  .setFooter("Brought to you by: BlinKcle, weiwei, Steve","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/qcn745p.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: How do I unlock districts?",
    "A: Every district have a required number of stars to unlock. Collect the stars by completing the missions assigned at each song.", true)
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /* 
   * Blank field, useful to create some space..addBlankField(true)
   */
;

module.exports = Object.freeze({
  embed: {embed}
});
