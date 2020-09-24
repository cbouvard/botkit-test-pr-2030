const { BotkitConversation } = require('../../botkit/packages/botkit/lib/index');

const DIALOG_ID = 'DIALOG_PIZZA';

module.exports = (controller) => {
    const convo = new BotkitConversation(DIALOG_ID, controller);

    convo.say('It smells good... 🍕🍕🍕');

    convo.ask(
        {
            text: 'What kind of pizza do you want?',
            quick_replies: [
                { title: 'Margherita', payload: 'Margherita' },
                { title: 'Funghi', payload: 'Funghi' },
                { title: 'Quattro Formaggi', payload: 'Quattro Formaggi' },
                { title: 'Peperoni', payload: 'Peperoni' }
            ]
        },
        async (response, convo, bot, message) => {
            // ...
        },
        { key: 'pizza' }
    );

    convo.say('You choose: {{vars.pizza}}');

    controller.addDialog(convo);

    controller.hears('pizza', 'message', async (bot, message) => {
        await bot.beginDialog(DIALOG_ID);
    });
};
