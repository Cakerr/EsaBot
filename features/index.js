var features = [];
var commands = {};
var moro = require("./MoroMolot");
features.push(moro);

for (var i = 0; i < features.length; i++) {
    Object.keys(features[i].commands).forEach(function (key, index) {
        commands[key] = features[i].commands[key];
    });
}

commands["!help"] = function (bot, from, to, message) {
    var commandsString = "Available commands: ";
    Object.keys(commands).forEach(function (key, index) {
        commandsString += key + " ";
    });
    bot.say(to, commandsString);
};

module.exports.features = {
    commands: commands
};