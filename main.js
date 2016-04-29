var irc = require('irc');
var commands = ['!hi', '!url']
var config = {
    channels: ["#molobotdev"],
    server: "irc.quakenet.org",
    botName: "EsaBot"
};
var UrlTitle = require('./features/urltitle').UrlTitle;
var urltitle = new UrlTitle;

var bot = new irc.Client(config.server, config.botName, {
    channels: config.channels
});

bot.addListener('message', function (from, to, message) {
    var msg = message.toLowerCase();
    
    urltitle.getTitle(message, function (title) {
        if(!title){
            return;
        }
        console.log(from);
        if(from === "Glarbung" && title.indexOf("YouTube") > -1){
            bot.say(to, "Katsomatta kpoppia");
            return
        }
        bot.say(to, title);
    });
});