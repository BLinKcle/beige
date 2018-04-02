const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Management")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/qCItN2L.png")
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Why are Minzy and Bom cards not in 2ne1 and Taehyun cards not in Winner?",
    "Minzy,Bom, and Taehyun are not part of YG anymore so BEYG have no right to use their pictures.", true)











;
module.exports = Object.freeze({
  embed: {embed}
});
