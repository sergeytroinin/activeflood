const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.hears("Ало", (ctx) => ctx.reply("Салут"));

const secretPath = `/telegraf/${bot.secretPathComponent()}`;

bot.telegram.setWebhook(`${process.env.URL}${secretPath}`);

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.listen(8080, () => {
  console.log("Example app listening on port 8080!");
});
