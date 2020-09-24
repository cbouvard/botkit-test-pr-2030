/**
 * Small bot to test PR / issue #2030 for Botkit
 * @see https://github.com/howdyai/botkit/issues/2030
 */

const { Botkit } = require('../botkit/packages/botkit/lib/index');

const controller = new Botkit({
    disable_console: true,
    webhook_uri: '/api/messages',
    // adapterConfig: {
    //     appId: process.env.APP_ID,
    //     appPassword: process.env.APP_PASSWORD,
    // },
});

const plugin = function (botkit) {
    return {
        name: 'Plugin to test PR/issue #2030',
        init: function (controller) {},
        middlewares: {
            ingest: [],
            receive: [
                (bot, message, next) => {
                    if (message && message.type === 'message') {
                        if (message.user) {
                            console.log(`✅ Message received "${message.text}" with user ${message.user}`);
                        } else {
                            console.log(`❌ Message received "${message.text}" without user`);
                        }
                    }
                    next();
                }
            ],
            send: [
                (bot, message, next) => {
                    if (message && message.type === 'message') {
                        const user =
                            message.user ||
                            (message.recipient && message.recipient.id); // If bot.reply is used, the user is in the recipient field
                        if (user) {
                            console.log(`✅ Message sent "${message.text}" with user ${user}`);
                        } else {
                            console.log(`❌ Message sent "${message.text}" without user`);
                        }
                    }
                    next();
                }
            ]
        }
    }
};

controller.ready(() => {
    controller.usePlugin(plugin);
    controller.loadModules(__dirname + '/features');
    console.log(`This app is running Botkit ${controller.version}.`);
});
