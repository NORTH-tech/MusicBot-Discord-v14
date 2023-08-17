const { ActionRowBuilder, ButtonBuilder, ButtonStyle } = require("discord.js")

/*
1volume up
1volume down
1pause
11replay
skip

2shuffle
2queue list show
2track add
m_queue delete
remove
2repeate
jump
2disconnect
*/

function panelbuttons_1() {
    const button_1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId("replay").setStyle(ButtonStyle.Danger).setEmoji("↩"),
            new ButtonBuilder().setCustomId("volumedown").setStyle(ButtonStyle.Success).setEmoji("🔉"),
            new ButtonBuilder().setCustomId("pause").setStyle(ButtonStyle.Danger).setEmoji("⏸"),
            new ButtonBuilder().setCustomId("volumeup").setStyle(ButtonStyle.Success).setEmoji("🔊"),
            new ButtonBuilder().setCustomId("skip").setStyle(ButtonStyle.Primary).setEmoji("⏭"),
        )
    const button_2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId("shuffle").setStyle(ButtonStyle.Success).setEmoji("🔀"),
            new ButtonBuilder().setCustomId("trackadd").setStyle(ButtonStyle.Secondary).setLabel("音楽を追加"),
            new ButtonBuilder().setCustomId("delete").setStyle(ButtonStyle.Secondary).setLabel("キューを削除"),
        )
    return [button_1, button_2]
}

function panelbuttons_2() {
    const button_1 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId("replay").setStyle(ButtonStyle.Danger).setEmoji("↩"),
            new ButtonBuilder().setCustomId("volumedown").setStyle(ButtonStyle.Success).setEmoji("🔉"),
            new ButtonBuilder().setCustomId("resume").setStyle(ButtonStyle.Primary).setEmoji("▶"),
            new ButtonBuilder().setCustomId("volumeup").setStyle(ButtonStyle.Success).setEmoji("🔊"),
            new ButtonBuilder().setCustomId("skip").setStyle(ButtonStyle.Primary).setEmoji("⏭"),
        )
    const button_2 = new ActionRowBuilder()
        .addComponents(
            new ButtonBuilder().setCustomId("shuffle").setStyle(ButtonStyle.Success).setEmoji("🔀"),
            new ButtonBuilder().setCustomId("trackadd").setStyle(ButtonStyle.Secondary).setLabel("音楽を追加"),
            new ButtonBuilder().setCustomId("delete").setStyle(ButtonStyle.Secondary).setLabel("キューを削除"),
        )
    return [button_1, button_2]
}

module.exports = {
    panelbuttons_1,
    panelbuttons_2
}