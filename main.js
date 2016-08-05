var irc = require('irc');
var commands = ['!hi', '!url'];
var config = {
    channels: ["#molopaeaeTest"],
    server: "irc.quakenet.org",
    botName: "EsaBot"
};
var UrlTitle = require('./features/urltitle').UrlTitle;
var urltitle = new UrlTitle();
var features = require('./features/index').features;

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('error', function(message){
   console.log('ERROR: ' +message); 
});

bot.addListener('message', function (from, to, message) {
    var msg = message.toLowerCase();
    //console.log(message);
    var msg = msg.split(" ")[0];
    //console.log(msg);
    
    if (features.commands.hasOwnProperty(msg)){
        console.log("Command: " +msg);
        features.commands[msg](bot, from, to, message);
    }
    urltitle.getTitle(message, function (title) {
        if(!title){
            return;
        }
        console.log("\t From: " +from);
        
        bot.say(to, title);
    });
});