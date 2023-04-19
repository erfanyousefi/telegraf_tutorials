const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN)
const cryptoToken = process.env.CRYPTO_TOKEN
bot.command("crypto", ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "لطفا یکی از ارز های دیجیتال زیر را انتخاب کنید", {
        reply_to_message_id: ctx.message.message_id,
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "one", callback_data: "one"},
                    {text: "two", callback_data: "two"},
                ],
                [
                    {text: "three", callback_data: "three"},
                    {text: "four", callback_data: "four"},
                ],
                [
                    {text: "five", callback_data: "five"},
                ],
            ]
        }
    });
});
bot.action("one", ctx => {
    ctx.answerCbQuery();
    ctx.reply("You clicked on one!")
})
bot.action("two", ctx => {
    ctx.answerCbQuery();
    ctx.reply("You clicked on two!")
})
bot.action("three", ctx => {
    ctx.answerCbQuery();
    ctx.reply("You clicked on three!")
})
bot.action("four", ctx => {
    ctx.answerCbQuery();
    ctx.reply("You clicked on four!")
})
bot.action("five", ctx => {
    ctx.answerCbQuery();
    ctx.reply("You clicked on five!")
})
bot.launch()