const { EmbedBuilder, Colors } = require("discord.js")

async function track_embed(track) {
    if (!track) {
        throw Error("'track' must be passed down as param! (queueEmbed)");
    }
    const embed = new EmbedBuilder()
        .setColor(Colors.Fuchsia)
        .setAuthor({ name: "🎵Now Playing!!🎵" })
        .setTitle(track.title)
        .setDescription(track.description) 
        .addFields([
            {
                name: "RequestedBy",
                value: track.requestedBy.username
            },
            {
                name: "duration",
                value: track.duration
            }
        ])
        .setImage(track.thumbnail)
        .setFooter({iconURL: devicon, text: "develop by " + devname})
    return embed
}

module.exports = {
    track_embed
}