// requirements
const { Collection, Client, Discord, MessageAttachment, Util, MessageEmbed, MessageActionRow, MessageButton } = require('discord.js');

async function sendButton(label, id, style) {
    let mes = ''
    let mf = [0,'1']
    if (mf[1] == '1') {
        mes = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(style)
                .setLabel(label)
                .setCustomId(id)
        )
    }
    if (mf[1] == '2') {
        mes = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(style)
                .setLabel(label)
                .setCustomId(id)
        )
    }
    if (mf[1] == '3') {
        mes = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(style)
                .setLabel(label)
                .setCustomId(id)
        )
    }
    if (mf[1] == '4') {
        mes = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(style)
                .setLabel(label)
                .setCustomId(id)
        )
    }
    if (mf[1] == '5') {
        mes = new MessageActionRow().addComponents(
            new MessageButton()
                .setStyle(style)
                .setLabel(label)
                .setURL(id)
        )
    }
    let target = Client.channels.Cache.get('792073130389667906')
    target.send({ content: 'FAGS', components: [mes]})
};


module.exports = {sendButton}