const discordapp = require("discord.js");
const discord = new discordapp.Client();
const util = require("./util.js");


discord.on("ready",  () => {
    console.log("Bot is ready.");
    discord.user.setPresence({
        game:{
            name: "with cyber-sword by cyberam!"
       





            
        }
    })
})

discord.on("message", message => {
   if (util.commandIs(message, "hello")){
       message.reply("Hello")
   }
   //copy the above 3 lines replacing name and code to add more commands (test())
})
discord.on("message", message => {
    if (util.commandIs(message,"kill")){
        message.channel.send("loads gun and boom <@" + message.mentions.users.first().id + ">");
    }
    if (util.commandIs(message,"hug")){
        //New code = hu
        message.channel.send("<@" + message.mentions.users.first().id + ">, you have been huged by <@" +message.author.id + ">" );
    }

    if(util.commandIs(message, "help")){
        message.author.send("", {embed: new discordapp.RichEmbed({
            title: "Help",
            description: "A list of commands **" + discord.user.username + "** has: \n" + "**hello** - say hello\n**kill** - mention user and shoots him \n**hug** -hugs a patricluar user mentioned \n" + "**changepresence** -saychanges bot to online,dnd,idlechangepresence\n" + "**pokedex** -say shows you a quick pokedex \n" + "**opgym** -say if you play game then useable\n" + "**gmarket** -saymy poke game market to buy pokes\n" + "**more hidden game cmnd** -say no one use this until admin allows (secret)"
        })}).then(() => {
            message.reply("Check your DM")
        }).catch(() => {
            message.reply("Unable to send DM. Are you sure you have DM enabled?")
        })
    }
});
//Welcoming module
discord.on('guildMemberAdd', member => {
    // Send the message to a designated channel on a server:
    const channel = member.guild.channels.find(ch => ch.id === '478198464552108034'); 
    // Do nothing if the channel wasn't found on this server
    if (!channel) return;
    // Send the message, mentioning the member
    channel.send(`A NEW USER JOINED,Welcome to the cyberam,ADDS 1CYBER TO CURRENT CYBER ${member}`); //You can change this to what you need, thi ok
  });

discord.on('message', message => { //This is your message event handler, all commands to go here, i did understood
  // If the message is "what is my avatar"
  if (util.commandIs(message, "avatar")) { //where to copy paste and did i copy paste right?
    // Send the user's avatar URL
    message.reply(message.author.avatarURL);
  }

  if (util.commandIs(message, "kick")){
        let reason = "Kicked by " + message.author.tag;
        let members = message.mentions.members;
        if (message.member.permissions.has("KICK_MEMBERS")){
        members.forEach(elem => {
            if (elem.kickable){
              if (elem.highestRole.position >= message.member.highestRole.position){
                  message.reply("The user you are going to kick is above you in hierarchy"); 
              }
              else {
                  elem.user.send("You have been kicked from **" + message.guild.name + "** by " + message.author.tag); 
                  elem.kick(reason);
                  message.channel.send("Successfully kicked `" + elem.tag + "` from **" + message.guild.name + "**");
              }
          }
      else{
          message.reply("Client could not kick the user"); 
      }
  
      });
    }
    else {
        message.reply("You do not have KICK_MEMBERs permission");
    }
}
if (util.commandIs(message, "electricattack")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "for the game purpose@",
        description: 'DAMAGE: 0',
        image:{
            url: "https://media.discordapp.net/attachments/477024287480348683/478915187219365919/Screenshot_10.png"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}

if (util.commandIs(message, "confuse ray")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "for the game purpose@",
        description: 'DAMAGE: 0, opponent-pokemon:missed',
        image:{
            url: "https://media.discordapp.net/attachments/477435444280295424/478956545334312960/tumblr_n451z4Vn3X1rpn9eno1_250.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}

if (util.commandIs(message, "leaf blade")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "for the game purpose@",
        description: 'DAMAGE done : 0',
        image:{
            url: "https://media.discordapp.net/attachments/477435444280295424/478958213706940418/tumblr_mghvu0mH611r3ifxzo1_500.gif?"
        }
    
        
    });
    message.channel.send("", {embed: channelEmbed});
}

if (util.commandIs(message, "watermove")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "for the game purpose@",
        description: 'DAMAGE done : 0',
        image:{
            url: "https://media.discordapp.net/attachments/477435444280295424/478951934469079080/Screenshot_14.png?"
        }
    }); 
    message.channel.send("", {embed: channelEmbed});

}
if (util.commandIs(message, "inc.random")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "for the game purpose@",
        description: 'DAMAGE done : 0 +(includes many attacks)',
        image:{
            url: "https://media.discordapp.net/attachments/477435444280295424/478983018292183043/randomattc.gif?"
        }
    });
    message.channel.send("", {embed: channelEmbed});
}

if(util.commandIs(message, "changepresence")){
    let args = message.content.split(" ");
    if (!["dnd", "idle", "online", "invisible"].includes(args[1])){
        message.reply("Value not supported");
        return;
    }
    discord.user.setPresence({
        
        status: args[1]
    })
}

if(util.commandIs(message, "pokedex")){
    message.reply("https://pokemondb.net/pokedex/national");
}


/* TO ADD AUTOREPLY COMMANDS COPY THE BELOW LINES:
if(message.content.toLowerCase() == "care 1"){
    message.reply("The rep ok") 
}
 */
if(message.content.toLowerCase() == "welcome"){
    message.reply("hm, whom u welcoming?. welcome from me too!")
}

if(message.content.toLowerCase() == "ninja?"){
    message.reply("**i am NINJA** *from CYBER WORLD*") 
}
if(message.content.toLowerCase() == "@Cyber`Ninja`"){
    message.reply("HELLO, i am cyberam bot , made by eklavya11.. its on devloping  :)") 
}

if(message.content.toLowerCase() == "gminfo"){
    message.reply("ITS A POKEMON GAME BASED ON DISCORD!,YOU CAN LEVEL UP YOUR POKES ,IF YOU BATTLE OR YOU CAN BUY CANDIES TO LEVEL UP.,THERE IS NO POKE LVL EX:UR CHARIZARD CAN USE ANY MOVE IT HAS (SOMETIMES IT ALSO ON EXP). if u defeat gym leaders, you get their pokemons|WE ALSO HAVE EVENTS,ETC |^hope you play my game||") 
}
if(message.content.toLowerCase() == "free version cyber?"){
    message.reply("ok, free vrision is also nice , but not much special as premuim  ") 
}
if(message.content.toLowerCase() == "minecraft cyber?"){
    message.reply("nope, but is it bought verision OR free verision:)") 
}
if(message.content.toLowerCase() == "you play any games cyber?"){
    message.reply("bro, game is everything if i dont play what i am gonna do ..xD") 
}
if(message.content.toLowerCase() == "how much old are you cyber?"){
    message.reply(" me?i am 100old, but i am not updated, hoping alot from useless developer") 
}
if(message.content.toLowerCase() == "talk with me cyber?"){
    message.reply("yeah, but .. can i talk?? OR CHAT OPEN YOUR MIND..") 
}
if (util.commandIs(message, "guessup")){
    message.reply("ok, here you go and , and play guess up game https://en.akinator.com/ hope you enjoy")
}
if (util.commandIs(message, "noder-pokedex")){
    message.reply("https://bulbapedia.bulbagarden.net/wiki/List_of_Pok%C3%A9mon_by_name   . this the the 2nd pokedex, which is better than old pokedex, it is arranged by name to name. usefull for guessing pokes")
}
if (util.commandIs(message, "joke-1")){
    message.reply("A: I have the perfect son.B: Does he smoke?A: No, he doesn't.B: Does hedrink whiskey?A: No, he doesn't.B: Does he ever come home late?A: No, he doesn't.B: I guess you really do have the perfect son. How old is he?A: He will be six months old next Wednesday. ")
}
if (util.commandIs(message, "JOKE2")){
    message.reply("A man goes to the doctor and says,Doctor, wherever I touch, it hurts.The doctor asks, What do you mean?The man says, When I touch my shoulder, it really hurts. If I touch my knee - OUCH! When I touch my forehead, it really, really hurts.The doctor says, I know what's wrong with you - because you are touching it with fire.")
}
if (util.commandIs(message, "JOKE3")){
    message.reply(" Can a kangaroo jump higher than a house?-Of course, a house doesn’t jump at all LOL")
}
if (util.commandIs(message, "JOKE4")){
    message.reply("A man asks a farmer near a field, “Sorry sir, would you mind if I crossed your field instead of going around it? You see, I have to catch the 4:23 train.”The farmer says, “Sure, go right ahead. And if my bull sees you, you’ll even catch the 4:11 one")
}
if (util.commandIs(message, "JOKE5")){
    message.reply("A man walks into a shop and sees a cute little dog. He asks the shopkeeper, Does your dog bite?The shopkeeper says, No, my dog does not bite.The man tries to pet the dog and the dog bites him.Ouch!He says, I thought you said your dog does not bite!The shopkeeper replies, MY DOG IS at home,its not my dog!")
}
if (util.commandIs(message, "JOKE6")){
    message.reply("A duck walks into a bar and goes up to the bartender.The bartender says What can I get you?Duck: Umm. Do you have any grapes?Bartender (looking surprised and finding the question odd):No, I'm afraid we don't.And the duck waddles slowly out of the bar.The next day at the same time, the duck waddles into the bar, hops up on a bar stool.Bartender: Hi. What can I get for you?Duck: Umm. Do you have any grapes?Bartender (a little annoyed): Hey! Weren't you in here yesterday. Look buddy, we don't have any grapes. OK?The duck hops off the stool and waddles out the door.The next day, at the same time, the bartender is cleaning some glasses when he hears a familiar voiceDuck: Umm.. Do you have any grapes?The bartender is really ticked off.Bartender: Look. What's your problem? You came in here yesterday asking for grapes, I TOLD you, WE DON'T HAVE ANY GRAPES!! Next time I see your little ducktail waddle in here I'm going to nail those little webbed feet of yours to the floor. GOT me pal?And the duck hops off the bar stool and waddles out.The NEXT day at the same time, the duck waddles into the bar, walks up to the bartender and the bartender says,What the heck do YOU want?Umm. do you have any nails?What!? OF course not.Oh. Well, do you have any grapes?")
}
if (util.commandIs(message, "JOKE7")){
    message.reply("A man's dog has a problem so he takes him to the vet's. The vet looks at the dog and says that he'll have to take him to the examining room. In the examining room, he takes a cat out of a cage and lets the cat walk all over the dog, but the dog doesn't do anything.The doctor say Your dog is dead.The man goes out to the receptionist and asks for his bill.That'll be $325 says the receptionist.What! $325? Hows that possible?It,$25 for the consultation, and **$300 for cat walk**.")
}
if (util.commandIs(message, "JOKE8")){
    message.reply("Three rich brothers each wanted to do something special for their elderly mother on Mother's Day. The first brother bought her a huge house. The second brother gave her a limousine, with a driver. The third brother remembered that his mother used to love to read the Bible, but couldn't see well anymore, so he got her a specially trained parrot that could recite any verse from the Bible on demand.Soon, the brothers received thank-you notes from their mother. The first son's note said, The house you bought me is much too big! I only live in a small part of it, but I have to clean the whole thing! The second son got a note that said, I rarely leave the house anymore, so I hardly use the limo you gave me. And when I do use it, the driver is so rude!The third son's note said, My darling baby boy, you know just what your mother loves! The chicken was delicious!")
}
if (util.commandIs(message, "JOKE9")){
    message.reply("George was taking care of a parrot for his aunt. This parrot was a very nasty parrot. It cussed and screamed and made fun of George, so he took the parrot and put it in the freezer.The parrot kept screaming and insulting George until finally it stopped.George thought to himself, On no! I froze my aunt's bird to death.He opened the door and saw the bird alive!The bird said, Im sorry for my behaviour and will never act up again.George said, Why the change?The bird answered, Because I saw what you did to the other bird.")
}
if (util.commandIs(message, "JOKE10")){
    message.reply("Teacher: Why are you late?Student: Because of the sign on the road.Teacher: What type of sign?Student: The sign that says,  Go Slow")
}
if(util.commandIs(message, "JOKE11")){
    message.reply("Sam: Dear sir, I want to ask you something.Teacher: yes Sam, ask me, what do you want?Sam: Sir, do you punish anyone for something they did not do?Teacher: No Sam. Why should I?Sam: Thank you sir. That’s a relief. I haven’t done the homework.")
}
if(util.commandIs(message, "JOKE12")){
    message.reply(" Teacher: Sara, what do you get when you subtract 897 from 1824 and add 176 and divide the answer by 3?Sara: A Headache Madam")
}
if(util.commandIs(message, "JOKE13")){
    message.reply("Son: I am not able to go to school today.Father: what happened?Son: I am not feeling wellFather: Where you are not feeling well?Son: In school")
}
if(util.commandIs(message, "JOKE14")){
    message.reply("Teacher: Which one is closer, Sun or Africa?Johnny: SunTeacher: Wrong,africa is answer , ok why did you told sun?Johnny: We can see the sun all the time, but can’t see Africa.")
}
if(util.commandIs(message, "JOKE15")){
    message.reply("Teacher asked the students to tell the importance of the year 1809.John stand up and said “Abraham Lincoln was born”Then teacher again asked the students to tell the importance of another year 1819 Then Sam suddenly stand up and said “Abraham Lincoln was ten years old”!")
}
if(util.commandIs(message, "JOKE16")){
    message.reply("eacher asked the students to tell the most common word used by students in a classroom.Suddenly a student got up and said “Can’t Sir”!Brilliant! You are right, the teacher said!")
}
if(util.commandIs(message, "JOKE17")){
    message.reply("It was oral examination in the standard two. The class teacher asked various questions to the students. She asked Tom, ‘Can you tell me a name of an animal that starts with alphabet ‘E’?Tom replied ‘ELEPHANT’Teacher asked him again to name an animal that starts with alphabet ‘T’.Tom replied ‘Two Elephants’Teacher asked him the same question.Tom replied ‘Ten Elephants’Annoyed teacher, asked him name an animal that starts with alphabet ‘M’Tom replied ‘Mother Elephant’The angry teacher repeated the same question.Cool Tom replied ‘May be an elephant")
}

if (util.commandIs(message, "?cool-pyrexical")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERAM NINJA AUTO-SCAN!",
        description: 'pyrexical IS COOL IN ALL OF BOTS, DUE TO HIS GAYNESS',
        image:{
            url: "https://media.discordapp.net/attachments/478079722551509032/489764945542774787/received_2096146373963582.jpeg?"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "js.learn")){
    message.reply("1)https://www.codecademy.com/courses/learn-javascript-introduction/lessons/introduction-to-javascript/exercises/console?action=resume_content_item&course_redirect=introduction-to-javascript ")
    message.reply("https://nodeschool.io/ ")
    message.reply("https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference")
    message.reply("http://eloquentjavascript.net/")
}
 
if (util.commandIs(message, "cyber-info")){
    message.reply("the server is  made on ```Monday, August 7th 2017 @ 5:02:39 am```")
    message.reply("the server is owned by EKLAVYA11#9620")
    message.reply("*THE SERVER IS 450+*")
    message.reply("**the CYBERAM is based on gaming+CODING+HELP+ALOT THINGS TO SAY.....**")
}
if (util.commandIs(message, "cyberlabs 1")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490930596189831188/who-u0cal.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-2")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490935497431187501/behello.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-3")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490936676957290505/dcnhf.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-4")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490937090406612994/dfshjihf.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-5")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490937383836188672/fhdstf.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-6")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490938395539800082/fuhuy.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-7")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490938761752870914/gjg.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-8")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490939039394955285/huyg.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-9")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490939329821147139/idsja.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-10")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490939605462286338/jxuhf.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-11")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490939910908542976/ndfesr_uyrf.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-12")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490940139917410307/searc.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-13")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490940702579228698/tgQAU_SD_IUJ.gif?"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-14")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490940964383490059/uhb.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-15")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490941248887324672/uyhr.gif?"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-16")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490941737045327914/wqdesahn.gif"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-17")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490942013286514701/8u5.gif?"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if (util.commandIs(message, "cyberlabs-18")){
    let channelEmbed = new discordapp.RichEmbed({
        title: "CYBERlabs",
        description: 'this,pic was hidden in  this number :)',
        image:{
            url: "https://media.discordapp.net/attachments/479251600913858560/490942291637436426/87585.gif?"
        }
    
    });
    message.channel.send("", {embed: channelEmbed});
}
if(util.commandIs(message, "help")){
    message.author.send("", {embed: new discordapp.RichEmbed({
        title: "Help",
        description: "A list of commands **" + discord.user.username + "** has: \n" + "**cyberlabs-** -choose any random number from 1 to 100,it gives random picyures from CYBERLABS!\n **joke-** - choose any number from 1to100,it would tell u some jokes \n**minecraft-cyber? - a auto-responder \n **cyber? - auto-responder ,just type it and see the text \n **welcome - auto-responder to welcome people!\n **noder-pokedex -(with pprefix) best version of pokedex for your.updated..\n **free version cyber? - a auto-responder for minecraft player,to just chat some\n minecraft cyber?** - a auto-responder for minecraft player\n you play any games cyber?** - a auto-responder to talk with ninja\n watermove** - its just 1 pic for a pokemon water move\n inc.random** - its just 1 pic for a pokemon all moves basically\n leaf blade** - its just 1 pic for a pokemon leaf blade move\n confuse ray** - its just 1 pic for pokemon confuse ray\n electricattack** - its just 1 pic to show electrick attack\n kick** - kicks a user from the server,sucessfully with prefix/n cyber-info - shows some quick server info\n js.learn** -shows some really cool and helping things+tip to learn javascript fast and easily/n guessup** - a cool comand that trys to guess your charecter/avatar.\n help** -shows this message)"
    })}).then(() => {
        message.reply("Check your DM")
    }).catch(() => {
        message.reply("Unable to send DM. Are you sure you have DM enabled?")
    })

 };
 if(util.commandIs(message, "partnerRAM")){
     message.delete();
    message.author.send("", {embed: new discordapp.RichEmbed({
        title: "PARTNERSHIP MORE INFO BY CYBER`NINJA",
        description: "thanks for choosing cyberam as your partner server! **" + discord.user.username + "** has: \n" + "**are you a cyberam partner?not yet? be one now!~** \ *dm any CEO/ADMIN that you wanna partnership :)* \ ~~we are growing fastly and trying to be best community~~ \ __cyberam is on coding and gaming,we allow any partner to be partnership__ \ we try to spread diffrence bewteen people in cyberam \ if you have partnership with us - THANKS ALOT TO YOU, I REALLY FELLING GLAD THAT YOU PARTNERED WITH US!ALSO WE HOPE THAT YOU GOT A PARTNER ROLE! \ we have our own logo for our partners,.... \ *hope you enjoy with our partnership!* "
    })}).then(() => {
        message.reply("hey!partner check your dm")
    }).catch(() => {
        message.reply("Unable to send DM. Are you sure you have DM enabled?")
    })
    let channelEmbed = new discordapp.RichEmbed({
        title: "our special partner!",
        description: ':100 for you ',
        image:{
            url: "https://media.discordapp.net/attachments/478225735392428032/496767271348338691/giphy.gif"
        }
    
    });
    message.author.send("", {embed: channelEmbed});

}
if(util.commandIs(message, "find-candy")){
const oyun = [
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*oh!you were so close!!!*`,
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*CONGRATS🎊, YOU FOUND THE CANDY🍬!,NOW TAKE A SCREENSHOT OF IT AND GIVE TO THE CEO/founder {happy halloween! and enjoy! 🎃  *`,
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*`, 
    `*NOTHING FOUND! KEEP SEARCHING FOR THE Candy!*, `];

    const random = Math.floor(Math.random()*(oyun.length-0+1)+0);
    message.channel.send(oyun[random])
}
//https://discord.gg/JfWVHr7
});
discord.login("")
