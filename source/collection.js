const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Collection FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/sAmOOsM.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: When does new pictures for birthdays get updated?",
    "A: The pictures gets updated on the week of the birthday during maintenance. Other pictures for events get added too.", true)
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */

;
module.exports = Object.freeze({
  embed: {embed}
});
