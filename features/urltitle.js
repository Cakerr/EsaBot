var request = require('request');
var cheerio = require('cheerio');

module.exports.UrlTitle = UrlTitle;

function UrlTitle() {}

UrlTitle.prototype.getTitle = function (str, callback) {

    var url = str.match(/(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \% \? \& \= c\.-]*)*\/?/);
    if (!url) {
        return;
    }
    try {

        var url = url[0].split(" ");
            
        var options = {
            url: url[0],
            headers: {
                'User-Agent': 'request'
            }
        };

        console.log("Retrieving: " + url[0]);
        request(options, function (error, response, html) {

            console.log("\t statuscode: " + response.statusCode);

            if (!error && response.statusCode === 200) {
                var $ = cheerio.load(html);

                var title = $('head title').text();
                
		if (title) {
                    title = title.trim();
		    title = title.replace(/\n/g, " | ");
		    console.log(title);
                    callback(title);

                }
            }
        });
    } catch (err) {
        console.log(err);
    }
};
