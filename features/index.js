var commands = {};

require("fs").readdirSync("./features/").forEach(function (file) {
    //Exclude this file 
    if (file !== "index.js") {
        var req = require("./" + file);   
        for (var command in req.commands){
            commands[command] = req.commands[command];
            console.log("Loaded command: " +command);
        }
    }
});
//TODO Find better place for this
commands["!help"] = function (bot, from, to, message, callback) {
    var commandsString = "Available commands: ";
    Object.keys(commands).forEach(function (key, index) {
        commandsString += key + " ";
    });
    callback(commandsString);
};

module.exports.features = {
    commands: commands
};