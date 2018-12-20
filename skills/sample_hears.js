/*

WHAT IS THIS?

This module demonstrates simple uses of Botkit's `hears` handler functions.

In these examples, Botkit is configured to listen for certain phrases, and then
respond immediately with a single line response.

*/

module.exports = function(controller) {

    controller.hears(['^hello$','^hii$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "Hi there, you're on workspace: " + message.team)
    });
	controller.hears(['^bye$'], 'direct_message,direct_mention', function(bot, message) {
        bot.reply(message, "See ya around" )
        bot.reply(message, "Goodbye !!!" )
    });


};
