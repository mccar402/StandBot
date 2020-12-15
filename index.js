const Slackbot = require('slackbots');
const axios = require('axios');
const dotenv = require('dotenv');

dotenv.config()

const bot = new Slackbot({
    token: `${process.env.BOT_TOKEN}`,
    name: 'standbot'
})

bot.on('start', () => {
    const params = {
        icon_emoji: ':robot_face:'
    }

    bot.postMessageToChannel(
        'testing-robots',
        'The Overlords have arrived',
        params
    );
})