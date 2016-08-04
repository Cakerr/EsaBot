var moro = function (bot, from, to, message) {
    bot.say(to, "Moi " + from + "!");
};

var horo = function (bot, from, to, message) {
    bot.say(to, "Moi " + from + "!");
};

module.exports = {
    name: "moroMolot",
    commands: {
        "!moro": moro,
        "!horo": horo
    }
};