var request = require('request');
var cheerio = require('cheerio');

module.exports.UrlTitle = UrlTitle;

function UrlTitle() {}

UrlTitle.prototype.getTitle = function (str, callback) {
    
    var regex = /(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \? \= c\.-]*)*\/?$/;
    var url = String(str.match(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \? \= c\.-]*)*\/?/));

    try {
        var url = url.split(" ")[0];
        request(String(url), function (error, response, html) {
            if (!error && response.statusCode === 200) {
                console.log(url);
                var $ = cheerio.load(html);
                var title = $('head title').text();
                if (title) {
                    title = title.trim();
                    callback(title);
                }
            }
        });
    } catch (err) {
        console.log(err);
    }
};