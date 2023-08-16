async function success(interaction, content) {
    await interaction.channel.send("```🟢 " + content + "```")
}

async function wrong(interaction, content) {
    await interaction.channel.send("```🟡 " + content + "```")
}

async function error(interaction, content) {
    await interaction.channel.send("```🔴 " + content + "```")
}

module.exports = {
    success,
    wrong,
    error
}