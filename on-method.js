const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
bot.on("text", (ctx) => {
    ctx.reply("you send text for me!")
})
bot.on("audio", (ctx) => {
    ctx.reply("you send audio for me!")
})
bot.on("photo", (ctx) => {
    ctx.reply("you send audio for me!")
})
bot.on("voice", (ctx) => {
    ctx.reply("you send voice for me!")
})
bot.on("video", (ctx) => {
    ctx.reply("you send video for me!")
})
bot.on("sticker", (ctx) => {
    ctx.reply("you send sticker for me!")
})
bot.on("new_chat_photo", (ctx) => {
    ctx.reply("admin changed the group photo! Thank you admin")
})
bot.on("new_chat_members", (ctx) => {
    const username = ctx.message.new_chat_member.username ?? ctx.message.new_chat_member.first_name
    ctx.reply(`welcome Dear ${username}!`)
})
bot.launch()