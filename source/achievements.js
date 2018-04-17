
const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Achievements FAQ")
  .setColor("97f7ff")
  .setThumbnail("https://i.imgur.com/gvid13v.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: For NHR Achievement, what does the special character means ?",
    "A: It means that you have to all-combo all songs in expert level to get the achievement.", true)
  .addField("Q: In Artist dorm Achievement, what does the special character means besides unlocking rooms?","After unlocking rooms, it's 'Purchase 10/50/100/500/1000 furniture items.'",true)
;
module.exports = Object.freeze({
  embed: {embed}
});
