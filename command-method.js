const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
// bot.start((ctx) => {
//     ctx.reply("سلام به ربات آموزش نود جی اس خوش آمدید");
//     ctx.telegram.sendMessage(ctx.chat.id, "سلام به ربات آموزش نود جی اس خوش آمدید");
// });
// bot.help((ctx) => {
//     ctx.reply("برای استفاده کردن از ربات راهنمای زیر را بطور کامل مطالعه کنید : ")
// });
// bot.settings((ctx) => {
//     ctx.reply("یک لیست از نظیمات در اختیار شما قرار دارد و میتوانید استفاده کنید: ")
// })
bot.command("start", ctx => {
    ctx.reply("سلام به ربات آموزش نود جی اس خوش آمدید");
})
bot.command("help", ctx => {
    ctx.reply("برای استفاده کردن از ربات راهنمای زیر را بطور کامل مطالعه کنید : ")
})
bot.command(["setting", "settings", "Setting", "tools"], ctx => {
    ctx.reply(`
    یک لیست از نظیمات در اختیار شما قرار دارد و میتوانید استفاده کنید: 
1- set username
2- set theme color
3- set profile photo
    `);
});
bot.command("nodejs", ctx => {
    ctx.reply("nodejs in runtime for run javascript on server (v8 - libuv)")
})
bot.command("ctx", ctx => {
    const {from, chat, message, botInfo} = ctx;
    console.log(JSON.stringify({from, chat, message, botInfo}, null, 4));
    ctx.reply("logged important object's ctx in terminal ")
})
bot.launch()