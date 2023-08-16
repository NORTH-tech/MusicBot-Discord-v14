module.exports = async (client) => {
    //icon&name set
    const iconurl = await client.user.displayAvatarURL()
    const name = await client.user.username
    const dev = await client.users.fetch(client.developper)
    global.boticon = iconurl;
    global.botname = name;
    global.devname = dev.username
    global.devicon = await dev.avatarURL()

    setInterval(() => {
        const size = client.guilds.cache.size
        client.user.setActivity({
            name: `/help｜${size}server`
        })
    }, 10000)

    console.log("Bot is now online!!!")
}