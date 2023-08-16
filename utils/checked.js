const { useQueue } = require("discord-player")

async function checkQueue(interaction) {
    const queue = useQueue(interaction.guild.id);
    if (!queue) return [false, {
        content: "```音楽が再生されていません。```",
        ephemeral: true,
    }];
    const memberChannelId = interaction.member?.voice?.channelId;
    const queueChannelId = queue?.channel.id;
    if (memberChannelId !== queueChannelId) return [false, {
        content: "```BOTと同じVCに接続してください。```",
        ephemeral: true,
    }];
    return [true, queue]
}

module.exports = {
    checkQueue
}