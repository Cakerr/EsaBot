var irc = require('irc');

var config = {
    channels: ["#molobotdev"],
    server: "irc.quakenet.org",
    botName: "moloBot"
};

var bot = new irc.Client(config.server, config.botName,{
    channels: config.channels
});