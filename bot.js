const { Telegraf } = require("telegraf");

const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => ctx.reply("Welcome"));
// bot.help((ctx) => ctx.reply("Send me a sticker"));
// bot.on("sticker", (ctx) => ctx.reply("👍"));
bot.hears("Ало", (ctx) => ctx.reply("Салут"));
bot.launch();

// Enable graceful stop
process.once("SIGINT", () => bot.stop("SIGINT"));
process.once("SIGTERM", () => bot.stop("SIGTERM"));
