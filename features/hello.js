module.exports = (controller) => {
    controller.hears('hello', 'message', async (bot, message) => {
        await bot.reply(message, 'Hey!');
    });
};
