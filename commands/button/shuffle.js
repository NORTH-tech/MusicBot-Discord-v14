module.exports = async (interaction, client) => {
    const [boolean, queue] = await client.checked.checkQueue(interaction)
    if (!boolean) return await interaction.reply(queue)
    await interaction.deferUpdate()
    if (queue.size < 3) return await client.say.wrong(interaction, "キューが短すぎるためシャッフルできません。");
    await queue.tracks.shuffle();
    return await client.say.success(interaction, "トラックをシャッフルしました。")
}