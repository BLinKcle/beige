const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Roadshow")
  .setColor(3447003)
  .setDescription("FAQ's about the Roadshow")
  .setFooter("Brought to you by: BlinKcle, weiwei, Steve","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/bbpeunH.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: When I tap on collect reward, it says 'Schedule expired' Any idea what this means?",
    "A: This is a glitch in the game, the schedule already expired so you won't get any reward.", true)


;
module.exports = Object.freeze({
  embed: {embed}
});
