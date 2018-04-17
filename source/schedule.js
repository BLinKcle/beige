const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Ladder FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/bbpeunH.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: When I tap on collect reward, it says 'Schedule expired' Any idea what this means?",
    "A: This is a glitch in the game, the schedule already expired so you won't get any reward.", true)
.addField("How to get gold exp card from TV schedule?","You need an influence of greater than 7k to at least get 2 2star exp cards or a gold exp. Getting a gold exp is random.",true)
.addField("Are there songs available on schedule only?","Yes, some songs can only be played on schedule. Some examples are Artificial Grass(AKMU), Come Back Home(2ne1), You and I(2ne1), and Wings(Bigbang).",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
