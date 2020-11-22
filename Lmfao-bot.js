const {Client, Attachment, DiscordAPIError, MessageEmbed, Message} = require('discord.js');
const client = new Client();
const prefix = '+'
//const ms = require('ms')

client.on('ready', () => {
    console.log('Ready!');
});

client.on('message', async msg => {

    let args = msg.content.split(" ");
    if(args[0] === '+ping') {
        if(msg.content == 'stop') {
            msg.channel.send('ok')
            return ok;
        }
        
        if(args[1] === 'shanmukha') {
            let num = args[2]
            for(i = 1; i <= num; i++) {
                msg.channel.send('<@724316222954537091>');
            }
        }

        if(args[1] === 'sakthi') {
            let num = args[2]
            for(i = 1; i <= num; i++) {
                msg.channel.send('<@747516121762234559>');
            }
        }

        if(args[1] === 'safal') {
            let num = args[2]
            for(i = 1; i <= num; i++) {
                msg.channel.send('<@717817572807933985>');
            }
        }
    }
    
    if (msg.content === '+lmao'){
        list_of_gifs = ['https://media.tenor.com/images/bae9f9ee3bf793a0bb667d8e4ccb9883/tenor.gif', 
        'https://media.tenor.com/images/cdb327ec053535ce6c41b1c0f8bc4a7d/tenor.gif',
        'https://media.tenor.com/images/0b2e8973ec3973837672e19df74f09ff/tenor.gif',
        'https://media.tenor.com/images/b3fa3e23470374ab460a2efe6e5e9c51/tenor.gif',
        'https://media.tenor.com/images/41b745cd92fc4211e5c4c7c3db13a7c1/tenor.gif',
        'https://media.tenor.com/images/417715538a572432f53deeb681d5a425/tenor.gif',
        'https://media.tenor.com/images/d79105122f98e8c7494b0415666e2953/tenor.gif',
        'https://media.tenor.com/images/2f3aa36e900d1c4f4c40969da55de14d/tenor.gif',
        'https://media.tenor.com/images/5dae0ffa33060bd8e0b09d699d9feadd/tenor.gif'
        ]
        var item = list_of_gifs[Math.floor(Math.random() * list_of_gifs.length)];
        msg.channel.send(item)
    }

    if (msg.content === '+precalc'){
        list_of_precalc_videos = ['https://www.youtube.com/watch?v=eI4an8aSsgw', 'https://www.youtube.com/watch?v=c7VnIJF1UZ8']
        var video = list_of_precalc_videos[Math.floor(Math.random() * list_of_precalc_videos.length)];
        msg.author.send(video)
    }

    if (msg.content === '+calc'){
        list_of_calc_videos = ['https://www.youtube.com/watch?v=HfACrKJ_Y2w', 'https://www.youtube.com/watch?v=WUvTyaaNkzM', 'https://www.youtube.com/watch?v=rfG8ce4nNh0', 'https://www.youtube.com/watch?v=9vKqVkMQHKk', 'https://www.youtube.com/watch?v=S0_qX4VJhMQ', 'https://www.youtube.com/watch?v=YG15m2VwSjA', 'https://www.coursera.org/learn/multivariate-calculus-machine-learning']
        var calc_video = list_of_calc_videos[Math.floor(Math.random() * list_of_calc_videos.length)];
        msg.author.send(calc_video)
    }
    
    let arg = msg.content.split(" ");
    if (arg[0] == `${prefix}create`){
      if (msg.member.permissions.has("ADMINISTRATOR")) {
        let num = arg[1]
        if(!arg[1]) {
          num = 1;
        }
        let channelName = arg[2]
        for(i = 1; i<=num; i++) {
          msg.guild.channels.create(channelName, {
            type: 'text'
            });
        }
        msg.channel.send('Successfully created '+num+" channel(s) named, "+channelName)
        
        if(!arg[2]) {
          // msg.channel.send("Please specify the number of channels you wanna create")
          msg.channel.send("Syntax:\n$create <number of channels you wanna create> <channel name>")
        }
    } else {
      msg.channel.send("You do not have the permission to create channels. SMH")
    }
  }

    if (msg.content === '+delete'){
        msg.channel.delete()
    }

    if (msg.content == '+commands'){
        let embed = new MessageEmbed()
        .setColor("#EB260B")
        .setTitle("List of commands")
        .setDescription("These are the commands for the LMFAO bot.")
        .addField('Commands', '\+ping sakthi/safal/shanmukha (some number)\n +lmao\n +create (number of channels) (name of channel)\n +calc\n +precalc\n +kick(@user). ONLY FOR ADMINS\n +ban (@user). ONLY FOR ADMINS', false)
        msg.channel.send(embed)
    }
    
    if (msg.content.startsWith(`${prefix}kick`)) {
        if (msg.member.permissions.has("ADMINISTRATOR")) {
          const user = msg.mentions.users.first();
          if (user) {
            const member = msg.guild.member(user);
            if (member) {
              member
                .kick({
                  reason: "They were bad!",
                })
                .then(() => {
                  // We let the message author know we were able to ban the person
                  msg.channel.send(`Successfully kicked ${user.tag}`);
                })
                .catch((err) => {
                  // An error happened
                  // This is generally due to the bot not being able to ban the member,
                  // either due to missing permissions or role hierarchy
                  msg.channel.send("I was unable to kick the member");
                  // Log the error
                  console.error(err);
                });
            } else {
              // The mentioned user isn't in this guild
              msg.channel.send("That user isn't in this guild!");
            }
          } else {
            // Otherwise, if no user was mentioned
            msg.channel.send("You didn't mention the user to kick!");
          }
        } else if (!msg.member.permissions.has("ADMINISTRATOR")) {
            let KickEmbed = new MessageEmbed()
            .setColor("#EB260B")
            .setTitle("You don't have admin role. hehe.")
            .setImage("https://media.tenor.com/images/d5d4eb9b301fa6b118b7dca32765ce4f/tenor.gif")
            msg.channel.send(KickEmbed)
        }
    }

    if (msg.content.startsWith(`${prefix}ban`)) {
        if (msg.member.permissions.has("ADMINISTRATOR")) {
          const user = msg.mentions.users.first();
          if (user) {
            const member = msg.guild.member(user);
            if (member) {
              member
                .ban({
                  reason: "They were bad!",
                })
                .then(() => {
                  // We let the message author know we were able to ban the person
                  msg.channel.send(`Successfully banned ${user.tag}`);
                })
                .catch((err) => {
                  // An error happened
                  // This is generally due to the bot not being able to ban the member,
                  // either due to missing permissions or role hierarchy
                  msg.channel.send("I was unable to banned the member");
                  // Log the error
                  console.error(err);
                });
            } else {
              // The mentioned user isn't in this guild
              msg.channel.send("That user isn't in this guild!");
            }
          } else {
            // Otherwise, if no user was mentioned
            msg.channel.send("You didn't mention the user to ban!");
          }
        } else if (!msg.member.permissions.has("ADMINISTRATOR")) {
            let BanEmbed = new MessageEmbed()
            .setColor("#EB260B")
            .setTitle("You don't have admin role. hehe.")
            .setImage("https://media.tenor.com/images/d5d4eb9b301fa6b118b7dca32765ce4f/tenor.gif")
            msg.channel.send(BanEmbed)
        }
    }
    
    /*let givea = msg.content.substring(prefix.length).split(" ")
    if (msg.content.startsWith(`${prefix}giveaway`)){
      let time = givea[1]
      if (!time) return msg.channel.send('Pls specify your duration!');

      if(
        !givea[1].endsWith('d')&&
        !givea[1].endsWith('h')&&
        !givea[1].endsWith('m')&&
        !givea[1].endsWith('s')
      )
        return msg.channel.send("You need to use d(days), h(hours), m(minutes) or s(seconds)")
        let gchannel = msg.mentions.channels.first();
        if (!channel) return msg.channel.send("I can't find that channel in the server!")
        let prize = givea.slice(3).join(" ")
        if (!prize) return msg.channel.send('One argument is missing! What is the prize')

        msg.delete();
        channel.send('WOOP***NEW GIVEAWAY***WOOP')
        let gembed = Discord.MessageEmbed()
        .setTitle("***NEW GIVEAWAY***")
        .setColor("RANDOM")
        .setDesription(`React with :partying_face: to enter the giveaway hosted by ${msg.author}\n This was hosted BY: ***${msg.author}***\n Time: **${time}** `)
        .setTimeStamp(Date.now + ms(givea[1]))
        .setFooter("Will end at:")
        let reaction = await channel.send()
    }*/
    
});

client.login('Nzc2OTcxMDY0ODM5NjM0OTU1.X68osQ.8skEhI2ChifZGz-Mmv2TPOwjS7M')
