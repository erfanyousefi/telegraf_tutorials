const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);

// bot.hears("nodejs", ctx => {
//     ctx.reply("یک ران تایم برای اجرا کردن جاوااسکریپت جهت توسعه ی سرور میباشد");
// })
// bot.hears(/.nodejs./, ctx => {
//     ctx.reply("یک ران تایم برای اجرا کردن جاوااسکریپت جهت توسعه ی سرور میباشد");
// })
bot.hears(/(bad|biadab|bishoor)/gi, ctx => {
    ctx.deleteMessage();
    ctx.reply("اخطار: شما نباید از کلمات رکیک اسفاده کنید");
})

bot.launch()