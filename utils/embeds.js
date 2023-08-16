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
        .setImage(track.thumbnail)
        .setFooter({iconURL: devicon, text: devname})
    return embed
}

module.exports = {
    track_embed
}