module.exports = async(interaction, client) => {
    const [boolean, queue] = await client.checked.checkQueue(interaction)
    if (!boolean) return await interaction.reply(queue)
    await interaction.deferUpdate()
    await queue.node.seek(0);
    return await client.say.success(interaction, "現在の曲をはじめから再生します。")
}