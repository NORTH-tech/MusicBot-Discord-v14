module.exports = async (client, message) => {
    if (message.author.bot || !message.content.startsWith("!")) return;
    try {
        const command = require(`../../commands/message/${message.content.slice(1)}`)
        await command(message, client)
    } catch { }
}