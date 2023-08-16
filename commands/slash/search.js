const { useQueue, useMainPlayer } = require("discord-player")
const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("search")
        .setDescription("test"),
    async execute (interaction, client) {
        const queue = useQueue(interaction.guild.id)
        queue.connect(interaction.member.voice.channel)
        await interaction.deferReply();
        await interaction.deleteReply();
    }
}