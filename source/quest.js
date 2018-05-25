const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
   .setTitle("Quest FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/M96lhVN.jpg")

  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: Why can't I get over level 20 even if I played a lot and receive a lot of exps?",
    "A: There is a level cap when you reach a certain level. You need to finish the tasks in main quest first before you can level up.", true)

.addField("Q: What are the requirements for level 80 promotion test?","A: You need to complete 10 of these to promote: Sign Attendance for 80 days, Complete 500 songs in training room, Buy M-coins 10 times, Sign Artist 100 times, Upgrade Artist 50 times, Evolve Artist 50 times, Complete any song and score 1.8M or more, Spend 1M m-coins, Upgrade any artist to level 80, Finish any song in expert difficulty and score S++.", true)

.addField("Q: What are the requirements for level 55 promotion test? ","A: You need to complete 8 of these to promote: Sign Attendance for 50 days, Complete 200 songs in the training room, Buy M-coins 5 times, Sign Artist 50 times, Spend 150K m-coins, Upgrade any artist to level 60, Upgrade artist 20 times, Evolve Artist 30 times, Complete Seongdong district.",true)





;
/*
    .addField("Q: Can we pick the song(s) we want to play?", "A: No, the songs are pre-determined and one random song will be chosen for you from the song list.", true);
  /*
   * Blank field, useful to create some space..addBlankField(true)
   */


module.exports = Object.freeze({
  embed: {embed}
});
