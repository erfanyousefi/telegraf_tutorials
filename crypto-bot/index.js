const { default: axios } = require("axios");
const {Telegraf} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN)
const cryptoToken = process.env.CRYPTO_TOKEN;
bot.command("crypto", ctx => {
    bot.telegram.sendMessage(ctx.chat.id, "منوی اصلی: ", {
        reply_to_message_id: ctx.message.message_id,
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "قیمت رمز ارز ها", callback_data: "pricing"},
                ],
                [
                    {text: "CoinList(cryptoCompare)", url: "https://www.cryptocompare.com/"},
                ],
            ]
        }
    });
});
bot.action("pricing", ctx => {
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "لطفا یکی از ارز های دیجیتال زیر را انتخاب کنید", {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "BTC", callback_data: "BTC"},
                    {text: "ETH", callback_data: "ETH"},
                ],
                [
                    {text: "USDT", callback_data: "USDT"},
                    {text: "BUSD", callback_data: "BUSD"},
                ],
                [
                    {text: "منوی اصلی", callback_data: "mainmenu"},
                ],
            ]
        }
    });
})
bot.action(["BTC", "ETH", "USDT", "BUSD"], async ctx => {
    try {
        console.log(ctx.match);
        const apiURL = `https://min-api.cryptocompare.com/data/price?fsym=${ctx.match}&tsyms=USD&api_key=${cryptoToken}`
        const data = await axios.get(apiURL).then(res => res.data);
        console.log(data);
        ctx.reply(`${Object.keys(data)[0]}: ${Object.values(data)[0]}`)
    } catch (error) {
        ctx.reply(error.message)
    }
    ctx.answerCbQuery();
})
bot.action("mainmenu", ctx => {
    ctx.answerCbQuery();
    ctx.deleteMessage();
    bot.telegram.sendMessage(ctx.chat.id, "منوی اصلی: ", {
        reply_markup: {
            inline_keyboard: [
                [
                    {text: "قیمت رمز ارز ها", callback_data: "pricing"},
                ],
                [
                    {text: "CoinList(cryptoCompare)", url: "https://www.cryptocompare.com/"},
                ],
            ]
        }
    });
})


bot.launch()