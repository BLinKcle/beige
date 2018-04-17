const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
    .setTitle("Ranking FAQ")
  .setColor("97f7ff")
  .setFooter("BeatEvo YG FAQ's","https://i.imgur.com/gvid13v.png")
  .setThumbnail("https://i.imgur.com/WeedNeG.png")
  .setTimestamp()
  
  //Add your questions here: Make sure there is a ; only at the end of the last .addField
  
  
  .addField("Q: What will I get on ranking challenge?",
    "A: Rank 1- 200 Dias+ 2% from Prize pool(2500 dias max), Rank 2- 150 Dias+ 1% from Prize pool(1250 dias Max), Rank 3 - 100 Dias + 0.8 % from Prize Pool(1000 Dias max), Rank 4-10 -50 dias+ 0.5% from Prize pool (625 dias max) , Rank 11-50- 35 dias + 0.08% from Prize pool (100 dias max) , Rank 51-100- 30 Dias + 0.05% from Prize pool(63 dias max),Top 20% -30 Dias,Top 40% - 22 Dias, Top 60% - 10 Dias, Top 80% -6 dias, Top 80%+ - 4 dias  ", true)
.addField("Q: Is ranking challenge worth the diamonds?","Ranking challenge gives great diamond rewards for expert players.",true)


module.exports = Object.freeze({
  embed: {embed}
});
