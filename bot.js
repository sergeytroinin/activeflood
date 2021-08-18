const { Telegraf } = require("telegraf");
const express = require("express");

const bot = new Telegraf(process.env.BOT_TOKEN);
bot.hears("Ало", (ctx) => ctx.reply("Салут"));

const secretPath = `/telegraf/${bot.secretPathComponent()}`;

bot.telegram.setWebhook(
  "https://activeflood-pdzbc.ondigitalocean.app/telegraf/cdd195bea0b4f9d1f256ba3f66fce00334abde41b565318e27a8b1b5acf4a6df"
);

const app = express();
app.get("/", (req, res) => res.send("Hello World!"));
app.use(
  bot.webhookCallback(
    "/telegraf/cdd195bea0b4f9d1f256ba3f66fce00334abde41b565318e27a8b1b5acf4a6df"
  )
);
app.listen(8080, () => {
  console.log(`Webhook URL: ${process.env.URL}${secretPath}`);
  console.log("Example app listening on port 8080!");
});
