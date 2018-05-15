const Discord = require("discord.js");

var embed = new Discord.RichEmbed()
  .setTitle("Tips by users on quests")
  .setColor("97f7ff")

//.addField("Don't do the 'accumulate obtain 3 artists.' daily task. You could stock up 3 contracts for a gallery event rather than 1 contract. It is just a small amount of contracts but it is very helpful stocking up and have a LUCK.", "by KrispyKim", true)
//.addField("Obtaining 3 artist could count when you finish a song in a roadshow for the first time, daily log in reward, and others (bday support etc.) so better don't rush finishing a district in roadshow and play 3 songs per day instead.","by KrispyKim",true)
.addField("by KrispyKim:","Don't do the 'accumulate obtain 3 artists.' daily task. You could stock up 3 contracts for a gallery event rather than 1 contract. It is just a small amount of contracts but it is very helpful stocking up and have a LUCK.",true)
.addField("by KrispyKim:","Obtaining 3 artist could count when you finish a song in a roadshow for the first time, daily log in reward, and others (bday support etc.) so better don't rush finishing a district in roadshow and play 3 songs per day instead.", true)
.addField("by Locya:","If you have no schedules around 5am kst to complete the schedule quest, you can wait pushing 'get' on you last completed schedule before a new day starts and it’ll count as completing a schedule in the quest. ",true)
.addField("by BLinKcle:","For evolve n artist task, the fastest and cheapest way is to evolve a level 1 rank 1 to level 10 rank 2 (+ 2k for evolve + around 5k mcoins (even less if you use 2 star exp)) then use it to upgrade level 1 rank 1 to level 10 (700 mcoins) then evolve it (2k mcoins) then repeat the process n times.",true)

;
module.exports = Object.freeze({
  embed: {embed}
});
