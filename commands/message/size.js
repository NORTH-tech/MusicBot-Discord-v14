module.exports = async (message, client) => {
    const size = client.guilds.cache.size
    return await message.reply({ephemeral: true, content: `server ${String(size)}`})
}