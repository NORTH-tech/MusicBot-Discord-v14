const { useQueue } = require("discord-player")
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("getqueue")
        .setDescription("test"),
    async execute(interaction, client) {
        const queue = useQueue(interaction.guild.id)
        const tracks = queue.tracks.toArray()
        for (const track of tracks) {
            console.log(track.title)
        }
        await interaction.deferReply()
        return await interaction.deleteReply()
    }

}