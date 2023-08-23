const { SlashCommandBuilder, EmbedBuilder, Colors } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("help"),
    async execute(interaction, client) {
        const embed = new EmbedBuilder()
            .setAuthor({ name: "command help" })
            .setTitle("How to use slsh command")
            .setColor(Colors.DarkOrange)
            .setFooter({ iconURL: devicon, text: "develop by " + devname })
            .addFields([
                {
                    name: "/jump",
                    value: "`Skips the queue until the specified index.`\n`指定したインデックスまでキューをスキップします。`"
                },
                {
                    name: "/remove",
                    value: "`Deletes a track at the specified index in the queue.`\n`キュー内の指定したインデックスのトラックを削除します。`"
                },
                {
                    name: "/repeatmode",
                    value: "`Selects the playback mode for the song.`\n`楽曲の再生モードを選択します。`"
                },
                {
                    name: "/play",
                    value: "`Play the song. (YoutubeURL,YoutubePlaylist,SpotifyURL,Title)`\n`楽曲を再生します。(YoutubeURL,YoutubePlaylist,SpotifyURL,Title)`"
                },
            ])
        await interaction.reply({ ephemeral: true, embeds: [embed] })
    }
}