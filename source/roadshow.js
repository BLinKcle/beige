

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Roadshow")
  .setColor(3447003)
  .setThumbnail("https://i.imgur.com/qcn745p.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: How do I unlock districts?",
    "A: Every district have a required number of stars to unlock. Collect the stars by completing the missions assigned at each song.", true)
  .addField("Q: What is the easiest song on expert?","A:Some easy expert songs are:MTBD(2ne1), Airplane(iKon), Empty(WINNER),Zutter(BIGBANG), A-Yo(Jinusean), Falling in Love (2ne1), Ride(Taeyang), Empty Road(Taeyang), Fire(2ne1)",true)
.addField("Q: How do you obtain stage cards?","A: Three stage cards are automatically given every refresh at 5am (China).",true)
.addField("Q: Why are some of my friends have Hanyang Station?","Hanyang station is the last station in the pre-global release.",true)
;

module.exports = Object.freeze({
  embed: {embed}
}) 
