const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.use((ctx, next) => {
    const msg = ctx.message.text;
    if(msg == "erfan") return next();
    return ctx.reply("msg is not erfan")
})
bot.hears("erfan", (ctx) => {
    ctx.reply("Welcome Erfan!")
})
bot.launch()