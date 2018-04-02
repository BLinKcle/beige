// ladder.js
//Make sure that there is a ; at the end of last .addField

const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on playing the songs")
  .setColor("97f7ff")

.addField("Be careful on those sensitive songs (specifically those fast songs). You would notice that the slider counts fast which means it is sensitive. You mostly get perfect rather than sperfect.", "by KrispyKim", true)

.addField("Be careful on those sliders in a sensitive songs. You might miss a note at the BEGINNING and END of the sliders.", "by KrispyKim", true)
.addField("There are times you got all combo but it seems you have missed some notes comparing to other players. Watch those sliders (beginning and end) and stars", "by KrispyKim", true)
.addField("Star notes don't need to be tapped on the first note. These notes will always give an S-PERFECT. In addition to that, missing star notes won't count as a miss.","by sekigan",true)
.addField("Although star notes do not count as a miss, missing too many can bring down your rank from an S->A (for example), so make sure you get them regardless","by freeman",true)
.addField("Although, it isn't easy to control, but for missing a note or two in the beginning or (near) end of a song can still give S-rank, while missing only one note in the middle of the song usually gives A-rank.","by Locya",true)

//Help me with this, I don't know how I can rephrase this. Or if I should really add this. ^^'
//.addField("A card adds 20% of its total individual influence for each note hit (rounded down) while it is active (for 5 sec), regardless for accuracy. For example, a level 30 rank 4 artist Jisoo card with an influence of 4140 will give +828 points per note hit while active.","by sekigan",true)


//.addField("The predicted requirement of getting S rank are not less than 85% combo or not more than 5% great or 2% good. For example, if a song full combo is 1000. You need to get min 850 combo, max. 50 great or 20 good.","Ricky_blink",true)

//.addField("Combo checkpoints: 60, 120, 180, 360, 540, 720, 900, 1080, 1260, 1440, 1620, and so on. This can be a few notes off depending on how well you're playing. You may get that first checkpoint at 58 notes if you always get S-PERFECT.","by sekigan",true)

//.addField("Watch out for songs such as Epik High - Spoiler and Bigbang - Loser (Live). Just when you thought the song is done, you will still need to wait for a few notes.","by sekigan",true)

//.addField("There is a very thin yellow line at the very top of the screen that moves when playing the songs. You can look at it to know where you are in the song.", "by BLinKcle", true)

;
module.exports = Object.freeze({
  embed: {embed}
});
