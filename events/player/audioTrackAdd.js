module.exports = async (client, queue, track) => {
    try {
        await queue.metadata.channel.send("```" + track.title + " をキューに追加しました。```")
    } catch { }
}