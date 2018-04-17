const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Management")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/GTtl8Kr.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: In special rewards event, will I get 10 artist cards for the 680 diamond advanced contract folder?",
    "A: Yes. Advanced Contract folder in the event is the same as using 10 Advanced contract folder in shop. In other words, you can choose still choose which artist you prefer.", true)
.addField("Q: In Limited Edition(LE) event, is it possible to not get the possible pictures shown? ","A: The probability of getting the actual picture card is very low. It is possible to not get the pictures of reward shown or to not get an artist card at all. ",true)


  
  
  
  
  
  ;

module.exports = Object.freeze({
  embed: {embed}
});

