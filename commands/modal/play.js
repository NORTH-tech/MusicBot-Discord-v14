const { useMainPlayer, useQueue } = require("discord-player")

module.exports = async (interaction, client) => {
    const channel = interaction.member.voice.channel;
    if (!channel) return interaction.reply({ content: "You are not connected to a voice channel!", ephemeral: true }); // make sure we have a voice channel

    // let's defer the interaction as things can take time to process
    await interaction.deferReply();
    const source = interaction.fields.getTextInputValue('input_source');

    //https://open.spotify.com/intl-ja/track/2IS04ea4Zp1081lffiwiuL?si=7374417f9118408d

    const player = useMainPlayer();
    const queue = useQueue(interaction.guild.id);
    try {
        await player.play(channel, source, {
            nodeOptions: {
                // nodeOptions are the options for guild node (aka your queue in simple word)
                metadata: interaction // we can access this metadata object using queue.metadata later on
            }
        });
        return await interaction.deleteReply();
    } catch (e) {
        // let's return error if something failed
        return interaction.followUp(`Something went wrong: ${e}`);
    }
}