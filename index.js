const Discord = require("discord.js");
const Client = new Discord.Client();
const prefix = '!';

Client.on("ready", ()=>{
    console.log("Bot is online!")
})

Client.on('message', (message)=>{
    if(!message.content.startsWith(prefix)) return;

    if (message.content.startsWith(prefix + 'hello')){
         message.channel.send('Hello.');

    }
    if(message.content.startsWith(prefix + 'help')){
        message.channel.send("Check your dm's!");
        message.author.send('Hello, These are my commands :frog::');
        message.author.send("Don't forget to type '!' before using a command!")
        message.author.send('hello: Says hello to you');
    }




})


Client.login("ODYxMTM0OTE2MzcyNTI5MTcy.YOFYYw.NQ_MMR46yBY5n2vytF-oonbfRZ4");