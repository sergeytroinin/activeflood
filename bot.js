const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.hears("Ало", (ctx) => ctx.reply("Салут"));
bot.launch();
