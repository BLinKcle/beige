const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Management")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/GTtl8Kr.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("In special rewards event, will I get 10 artist cards for the 680 diamond advanced contract folder?",
    "Yes. Advanced Contract folder in the event is the same as using 10 Advanced contract folder in shop. In other words, you can choose still choose which artist you prefer.", true)


  
  
  
  
  
  ;

module.exports = Object.freeze({
  embed: {embed}
});

