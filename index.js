const { Client, Intents, MessageActionRow, MessageButton } = require('discord.js');
const { token, prefix } = require('./config.json');
const sendBut = require('./sendButton.js')
const myIntents = new Intents();
// Guild Intents
myIntents.add('GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS');
// Direct Intents
myIntents.add('DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS');
const client = new Client({
    allowedMentions: {
        parse: ["users", "roles", "everyone"],
        repliedUser: true
    },
    intents: myIntents
});


client.once('ready', () => {
	console.log('Ready!');
    console.log(client.guilds)
    let target = client.channels.cache.get('792073130389667906')
    target.send({content :"ready"})
    let style = "PRIMARY"
    let label = "test"
    let id = "testStartup"
    const mes = new MessageActionRow().addComponents(
        new MessageButton()
            .setStyle(`${style}`)
            .setLabel(`${label}`)
            .setCustomId(`${id}`)
        ,new MessageButton()
            .setStyle(`${style}`)
            .setLabel(`${label}`)
            .setCustomId(`${id}`)
        
    )
    target.send({content: "⠀", components : [mes]})
});

client.on('interactionCreate', async interaction => {
	if (!interaction.isCommand()) return;

	const { commandName: command } = interaction;

	if (command === 'start') {
		
	}
});

client.on('interactionCreate', async (interaction) => {
    if (interaction.customId == 'testStartup') {
        interaction.reply('')
    }
    if (interaction.customId == 'dos') {
        interaction.reply('I Liiiiiiiive!')
    }
    if (interaction.customId == 'tres') {
        interaction.reply('Kill Arin')
    }
    if (interaction.customId == 'quatro') {
        interaction.reply('Kill Arin')
    }
    if (interaction.customId == 'ayup') {
        interaction.reply(`${interaction.user.tag} <@${interaction.user.id}>`)
    }
})

client.login(token);

