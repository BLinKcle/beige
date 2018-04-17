const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
   .setTitle("Quest FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
 

  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Why can't I get over level 20 even if I played a lot and receive a lot of exps?",
    "There is a level cap when you reach a certain level. You need to finish the tasks in main quest first before you can level up.", true);
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */


module.exports = Object.freeze({
  embed: {embed}
});
