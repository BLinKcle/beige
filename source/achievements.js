
const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Achievement FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/M8m2GN2.png?1")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: For NHR Achievement, what does the special character means ?",
    "A: It means that you have to all-combo all songs in expert level to get the achievement.", true)
  .addField("Q: In Artist dorm Achievement, what does the special character means besides unlocking rooms?","A: After unlocking rooms, it's 'Purchase 10/50/100/500/1000 furniture items.'",true)
  .addField("Q: How can I get the gold badge in Achievements?","A: To be able to get the gold badge in Achievement, you need to have a star card evolved to rank 8.",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
