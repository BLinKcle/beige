  const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Management")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/qCItN2L.png")
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: Why are Minzy and Bom cards not in 2ne1 and Taehyun cards not in Winner?",
    "A: Minzy,Bom, and Taehyun are not part of YG anymore so BEYG have no right to use their pictures.", true)
  .addField("Q: Which card is the best to level up?","A: Unless you have a card that you want to really use, the best card to upgade is rank 1 trainee card if you want to save on m-coins and material. However, if you want to save on rank 5 cards, it is best to level up an artist card instead of trainee.",true)
.addField("Q: Is it worth to promote Artist to Star?", "A: Yes. It gives a higher score in songs due to increase in influence and is required to get the gold badge in achievements.",true)
.addField("Q: If I promote to trainee to artist, will the level reset?","A: No, the level stays the same. It will be rank 5 level 50 artist. You need to evolve it to get it to rank 6.", true)
.addField("Q: How do I promote a trainee to Artist?","A: To promote a card, you need 2 cards that have the same rank as your card which means you only need a level 1 rank 5 trainee card.",true)
.addField("Q: Will the influence differ depending on the card I use to upgrade?","A: It's true but only until you evolve the card. Once the card evolve, it will set to the default influence for that rank and level.",true)
.addField("Q: How do I bind to Guess account?","A: Login as Guest> Go to Settings>Go to User Center>Sign up (Will be your new X.D account)>Submit>All Done",true)





;
module.exports = Object.freeze({
  embed: {embed}
});
