const { getVoiceConnection } = require("@discordjs/voice")

module.exports = async (interaction, client) => {
    const [boolean, queue] = await client.checked.checkQueue(interaction)
    if (!boolean) return await interaction.reply(queue)
    await interaction.deferUpdate()
    const vc = getVoiceConnection(interaction.guild.id)
    vc.destroy()
    return await client.say.success(interaction, "VCから切断しました。")
}