const { createReadStream } = require("fs");
const path = require("path");
const {
    Telegraf
} = require("telegraf");
require("dotenv").config();
const bot = new Telegraf(process.env.BOT_TOKEN);
const helpMessage = `
Help text is : 
/start - start the bot
/help - help reference
/print - the print command can send message to print
/cities - show you list of the grate city of world!
`;
bot.start(ctx => {
    ctx.sendChatAction("typing");
    ctx.reply("Hello I am Print Bot");
    ctx.reply(helpMessage)
})
bot.help(ctx => {
    ctx.sendChatAction("typing");
    ctx.reply(helpMessage)
});

// /print => you said print
// /print hello iam erfan yousefi => hello iam erfan yousefi
bot.command("print", ctx => {
    ctx.sendChatAction("typing");
    const msg = ctx.message.text;
    const listOfMsg = msg.split(" ");
    console.log(listOfMsg);
    let message = '';
    if (listOfMsg.length == 1) {
        message = "You said print!"
    } else {
        message = listOfMsg.slice(1).join(" ");
    }
    ctx.reply(message)
    
})
bot.command("cities", ctx => {
    ctx.sendChatAction("typing");
    const cityMessage = `
List of cities : 
/Tehran - iran
/NewYork - USA
/Hongkong - China
/Dubai - AUE
    `;
    ctx.reply(cityMessage)
})
bot.command(["Tehran", "tehran"], ctx => {
    // bot.telegram.sendChatAction(ctx.chat.id, "upload_photo");
    ctx.sendChatAction("upload_photo");
    ctx.sendPhoto({
        source: createReadStream(path.join(__dirname, "cities", "tehran.jpg"))
    }, {
        reply_to_message_id: ctx.message.message_id
    })
})
bot.command(["Dubai", "dubai"], ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    ctx.sendPhoto({
        source: createReadStream(path.join(__dirname, "cities", "dubai.jpg"))
    }, {
        reply_to_message_id: ctx.message.message_id
    })
})
bot.command(["NewYork", "newyork", "Newyork"], ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    ctx.sendPhoto({
        source: createReadStream(path.join(__dirname, "cities", "newyork.webp"))
    }, {
        reply_to_message_id: ctx.message.message_id
    })
})
bot.command(["hongkong", "HongKong", "Hongkong"], ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    ctx.sendPhoto({
        source: createReadStream(path.join(__dirname, "cities", "hongkong.jpg"))
    }, {
        reply_to_message_id: ctx.message.message_id
    })
})
bot.command("/media", ctx => {
    bot.telegram.sendChatAction(ctx.chat.id, "upload_photo")
    ctx.sendPhoto();
    ctx.sendDocument({});
    ctx.sendAudio({});
    ctx.sendVideo({});
    ctx.sendAnimation({});
    ctx.sendSticker({});
    ctx.send({});
})

bot.launch()