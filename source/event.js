 const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Event")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/GTtl8Kr.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: In special rewards event, will I get 10 artist cards for the 680 diamond advanced contract folder?",
    "A: Yes. Advanced Contract folder in the event is the same as using 10 Advanced contract folder in shop. In other words, you can choose still choose which artist you prefer.", true)
.addField("Q: In Limited Edition(LE) event, is it possible to not get the possible pictures shown? ","A: The probability of getting the actual picture card is very low. It is possible to not get the pictures of reward shown or to not get an artist card at all. ",true)
.addField("Q: In seals event, what is the use of the non-artist card? ","A: It's an exp card equivalent to 1 star gold exp card, 1500exp.  ",true)
.addField("Q: What is the best way to pull for LE event?","A: There is no best way as single pulls and 10 pulls have the same reward probability of 10%. However, there is a higher probability to get an artist card for 10 pulls rather than single pull.",true)
.addField("Q: In Collect Artist Gallery event, I already have the cards required, do I need to get it again?","A: Yes, pictures of cards you got before the event are not counted. You will need to collect them again.",true)
.addField("Q: In 9 grid event, does getting card on roadshow counts for sign 30 artist tasks?","A: Yes. Signing cards from shop and getting cards through roadshow count. Cards from mail or events doesn't.  ", true)  
.addField("Q: In seal collection event, do I get more seals on higher district?","A: No. The number of seals depends on the length of the song. If you are a platinum member, you will get twice the normal number of seals given.",true)  
.addField("Q: Does events repeat?","Yes, events do repeat but no one knows when.",true)  
  
  ;

module.exports = Object.freeze({
  embed: {embed}
});

