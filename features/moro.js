var moro = function (bot, from, to, message) {
    bot.say(to, "Moi " + from + "!");
};


module.exports = {
    name: "moro",
    commands: {
        "!moro": moro
    }
};