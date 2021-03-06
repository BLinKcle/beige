const Discord = require('discord.js');
const client = new Discord.Client();
var fs = require('fs');
//modules
const ladder = require("./source/ladder.js");
const roadshow = require("./source/roadshow.js");
const nhr = require("./source/nhr.js");
const club = require("./source/club.js");
const collection = require("./source/collection.js");
const events = require("./source/event.js");
const achievements = require("./source/achievements.js");
const training = require("./source/training.js");
const ranking = require("./source/ranking.js");
const management = require("./source/management.js");
const schedule = require("./source/schedule.js");
const krunkdorm = require("./source/krunkdorm.js");
const shop = require("./source/shop.js");
const quest = require("./source/quest.js");
const tips_ladder = require("./source/tips_ladder.js");
const tips_shop = require("./source/tips_shop.js");
const tips_songs = require("./source/tips_songs.js");
const tips_achievements = require("./source/tips_achievements.js");
const tips_schedule = require("./source/tips_schedules.js");
const tips_event = require("./source/tips_event.js");
const tips_nhr = require("./source/tips_nhr.js");
const tips_roadshow = require("./source/tips_roadshow.js");
const tips_management = require("./source/tips_management.js");
const tips_quest = require("./source/tips_quest.js");
const tips_general = require("./source/tips_general.js");
const tips_ranking = require("./source/tips_ranking.js");
const categ = ["ladder","shop","achievements","schedule","event","nhr", "roadshow","management","quest","general","songs","ranking"];

client.on('ready', () => {
	client.user.setPresence({ status: 'online',  game: { name: '#wikibot, See >h for help', type: 0 }});
   // client.user.setActivity('YouTube', { type: 'WATCHING' })
    console.log('I am ready!');
    
});

client.on('message', async message => {
    //botception
     if(message.author.bot) return;
    const swearWords = ["darn", "fuck", "shit", "damn","dick","bitch","cunt","shag","pussy"];
/*	if(swearWords.some(word => message.content.toLowerCase().includes(word))) {
		 message.delete().catch(O_o=>{});
 		 message.reply("Oh no you said a bad word!!! I deleted it for ya.");

		} */
//prefix = ">"
  if(message.content.indexOf(process.env.prefix) !== 0) return;

  const args = message.content.slice(process.env.prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  //faq's on ladder  
    switch(command) {
		case 'ladder': 
		      message.channel.send(ladder.embed);
					     break;
         		//var com = fs.readFileSync("./source/ladder.txt", {"encoding": "utf-8"});
		    
		case 'roadshow':   
	   		message.channel.send(roadshow.embed);
		    break;
		case 'nhr':    
	   		message.channel.send(nhr.embed);
		    break;
		case 'club':    
	   		message.channel.send(club.embed);
		  	  break;
		 case 'collection':    
	   		message.channel.send(collection.embed);
		   	 break;
		 case 'events':    
	   		message.channel.send(events.embed);
		   	 break;
		 case 'achievements':    
	   		message.channel.send(achievements.embed);
		   	 break;
		 case 'training':    
	   		message.channel.send(training.embed);
		   	 break;
		 case 'ranking':    
	   		message.channel.send(ranking.embed);
		   	 break;
		 case 'management':    
	   		message.channel.send(management.embed);
		   	 break;   
	         case 'schedule':    
	   		message.channel.send(schedule.embed);
		   	 break; 
		 case 'krunkdorm':    
	   		message.channel.send(krunkdorm.embed);
		   	 break; 
		  case 'shop':    
	   		message.channel.send(shop.embed);
		   	 break; 
		 case 'quest':    
	   		message.channel.send(quest.embed);
		   	 break; 
			 
			/ */
        }
//help command
      if(command === "h") {
	  var help = fs.readFileSync("./source/help.txt", {"encoding": "utf-8"}); 
           message.delete().catch(O_o=>{}); 
           message.author.send(help);
       }    
//make beige greet you	
      if (command === "hello") {
          message.reply('hi~');
  	}
//make beige talk
    if(command === "talk") {  
	    let chan = args[0]; //channel name
	    let sayMessage = args.slice(1).join(' ');
		
	    if(!message.member.roles.some(r=>["Mods", "Admin","Bess", ].includes(r.name)))
		return message.reply("Sorry, you don't have permissions to use this!");
	  /*   let say_channel = args[0];
			  if(!(say_channel.slice[0])=="#");)
   			   return message.reply("Please type the channel you wish to send the message to starting with #.");
		  */
	     

	 //    var SAY_CHANNEL = "429474095227469855";
	//    client.channels.get(chan).send(sayMessage);   
	    client.channels.find("name", chan).send(sayMessage);
      
	    
	}
	
	
	if (command === "readtip") {
		let cat = args[0];
			  if(!cat)
   			   return message.reply("Please type one of the following categories after >readtip: " + (categ));
		
		if(!categ.some(word => message.content.toLowerCase().includes(word))) {
 			 message.reply("this category does not have any tips yet ^^'.");
			 message.channel.send("Current Categories: " + (categ));
		}
		switch(cat) {
          	  // !ping
          	  case 'ladder':
			//var tips = fs.readFileSync("./source/tips_ladder.txt", {"encoding": "utf-8"});
			//message.channel.send(tips);
			message.channel.send(tips_ladder.embed);
          		 break;
		case 'songs':
				message.channel.send(tips_songs.embed);
          	
				break;
				
		case 'achievements':
			message.channel.send(tips_achievements.embed);
          		 break;	
		case 'schedule':
			message.channel.send(tips_schedule.embed);
			var embed = new Discord.RichEmbed()
				 .setColor("97f7ff")
				.addField("by Ricky_blink", " Rewards of different types of schedule.(should be independent of card influence). See picture below.", true)
				 .setImage("https://media.discordapp.net/attachments/430210328517804032/430662328212783115/2018-04-03_17h27_44.png");
          		message.channel.send({embed}); 
				break;	
		case 'event':
			message.channel.send(tips_event.embed);
          		 break;	
		case 'nhr':
			message.channel.send(tips_nhr.embed);
          		 break;	
				
		case 'roadshow':
			message.channel.send(tips_roadshow.embed);
          		 break;	
								
		case 'management':
			message.channel.send(tips_management.embed);
          		 break;	
		case 'quest':
			message.channel.send(tips_quest.embed);
          		 break;	
		case 'general':
			message.channel.send(tips_general.embed);
          		 break;
		case 'ranking':
			message.channel.send(tips_ranking.embed);
          		 break;
		case 'shop':
			message.channel.send(tips_shop.embed);
          		 break;
			 
            // Just add any case commands if you want to..
     		   }

	     
        }
	
	
	if (command === "addtip"){
	 	let cat = args[0];
//		   if(!cat)
  // 			   return message.reply("Eyyy...Choose what category is the tip you want to view first.");
			
		let tip = args.slice(1).join(' ');
			  if(!tip)
   			   return message.reply("Ya! You forgot to include the tip (tip limit: max 256 characters)!");
		  if(tip.length > 1000)
   			   return message.reply("Your tip exceeded the character limit. Please rephrase. ^^");
	
//	if(!categ.some(word => message.content.includes(word))) 
 //		return message.reply("Category should be one of these:" + (categ));	
	 message.channel.send("Thanks! Your tip will be added after one of the mods have reviewed it. ^^");
	client.channels.get(process.env.TIPS_CHANNEL).send("Category:  "+ (cat));
	 client.channels.get(process.env.TIPS_CHANNEL).send(" Tip: " + (tip) +" by " + (  message.author.username  ));	
		
	
	}

});

// THIS  MUST  BE  THIS  WAY
client.login(process.env.BOT_TOKEN);

