var moro = function (bot, from, to, message, callback) {
    callback("Moi " + from + "!");
};


module.exports = {
    name: "moro",
    commands: {
        "!moro": moro
    }
};