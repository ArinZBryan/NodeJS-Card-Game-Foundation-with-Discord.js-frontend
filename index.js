const { Client, Intents, MessageActionRow, MessageButton, MessageSelectMenu } = require('discord.js');
const { token, prefix } = require('./config.json');
const myIntents = new Intents();

// INTENTS -------------------------------------------------------
// Guild Intents
myIntents.add('GUILDS', 'GUILD_MEMBERS', 'GUILD_BANS', 'GUILD_EMOJIS_AND_STICKERS', 'GUILD_WEBHOOKS', 'GUILD_INVITES', 'GUILD_MESSAGES', 'GUILD_MESSAGE_REACTIONS');
// Direct Intents
myIntents.add('DIRECT_MESSAGES', 'DIRECT_MESSAGE_REACTIONS');

// ESTABLISH CLIENT -------------------------------------------------------
const client = new Client({allowedMentions: {parse: ["users", "roles", "everyone"], repliedUser: true}, intents: myIntents});
client.login(token);
// ON LOGIN TESTS -------------------------------------------------------
client.once('ready', () => {

	console.log('Ready!');  //Console Report

    let target = client.channels.cache.get('792073130389667906')//Sends to 'Bot Testing / General'
    newButton([{style : 1, customId: "custom", label: "customLabel", disabled: false}],target)
    newSelectMenu({customId: "custom", placeholder: "placeholder", mivalues: 1, maxvalues: 1, options: [{label : "1", description: "1", value: "val1"},{label : "2", description: "2", value: "val2"}]}, target)
    target.send({content : "⠀", files : ["./custom/solitaire/src_imgs/2C.png"] })
    sendFile(["./custom/solitaire/src_imgs/AH.png"],target)
});


// Basic text command handler  -------------------------------------------------------
client.on('interactionCreate', async (interaction) => {
	if (!interaction.isCommand()) return;
	const { commandName: command } = interaction;

	if (command === 'start') {
		
	}
});

// Function to make a new MessageActionRow of only buttons -------------------------------------------------------
// Up to five can be created in one function call, this is a discord.js limitation
function newButton(args = [
    {style : style, customId : customId, label : label, disabeled : disabled}, //required args
    {style : style = null, customId : customId = null, label : label = null, disabled : disabled = null}, //optional args
    {style : style = null, customId : customId = null, label : label = null, disabled : disabled = null},
    {style : style = null, customId : customId = null, label : label = null, disabled : disabled = null},
    {style : style = null, customId : customId = null, label : label = null, disabled : disabled = null},
    ], target) {

    const ActionRows = [];

    for (let i = 0; i < 5; i++) {// For each button requested

        if (args[i] != undefined) {// If Args have been supplied

            switch (args[i].style) {// Different button styles

                case 1: //If style is primary
                args[i].style = 'PRIMARY'
                ActionRows.push(
                    new MessageActionRow().addComponents(
                        new MessageButton()
                        .setCustomId(args[i].customId)
                        .setLabel(args[i].label)
                        .setStyle(args[i].style)
                        .setDisabled(args[i].disabled)
                        )
                )
                    break

                case 2://If style is secondary
                    args[i].style = 'SECONDARY'
                    ActionRows.push(
                        new MessageActionRow().addComponents(
                        new MessageButton()
                        .setCustomId(args[i].customId)
                        .setLabel(args[i].label)
                        .setStyle(args[i].style)
                        .setDisabled(args[i].disabled)
                        )
                    )
                    break

                case 3://If style is tertiary
                    args[i].style = 'SUCCESS'
                        ActionRows.push(
                        new MessageActionRow().addComponents(
                        new MessageButton()
                        .setCustomId(args[i].customId)
                        .setLabel(args[i].label)
                        .setStyle(args[i].style)
                        .setDisabled(args[i].disabled)
                        )
                    )
                    break

                case 4://If style is quaternary
                    args[i].style = 'DANGER'
                        ActionRows.push(
                        new MessageActionRow().addComponents(
                        new MessageButton()
                        .setCustomId(args[i].customId)
                        .setLabel(args[i].label)
                        .setStyle(args[i].style)
                        .setDisabled(args[i].disabled)
                        )
                    )
                    break

                case 5://If style is a link
                    args[i].style = 'LINK'
                    ActionRows.push(
                        new MessageActionRow().addComponents(
                            new MessageButton()
                            .url(args[i].customId)
                            .setLabel(args[i].label)
                            .setStyle(args[i].style)
                            .setDisabled(args[i].disabled)
                            )
                        )
                    break
            }

        Ids.push(args[i].customId) //Push CustomId to handler
        
        }
    }
    target.send({content :"⠀", components : ActionRows})
    
}

function newSelectMenu( 
    args = {customId: customId, placeholder: placeholder, minvalues: minvalues, maxvalues: maxvalues, options: options =[{label: label, description : description, value : value},{label: label, description : description, value : value}]}
    , target)
    {
    const ActionRows = [];
    ActionRows.push(
        new MessageActionRow().addComponents([
            new MessageSelectMenu()
                .setCustomId(args.customId)
                .setPlaceholder(args.placeholder)
                .setMinValues(args.minvalues)
                .setMaxValues(args.maxvalues)
                .addOptions(args.options)
        
        ]))
        
    Ids.push(args.customId) //Push CustomId to handler
    console.log("pushed to Ids")
    target.send({content :"⠀", components : ActionRows})
}
function sendFile(paths, target) {target.send({content: "⠀", files: paths})}

// V13 Handler
client.on('interactionCreate', async (interaction) => {     

    if (interaction.isButton()) {// if button recieved
        
            for (let i = 0; i < Ids.length; i++) {
                if (interaction.customId = Ids[i]) {
                    
                    interaction.reply({content :`${interaction.customId}`})
                    
                }
            }  
         
    }else if (interaction.isSelectMenu()) {//if select menu recieved
        interaction.reply(`${interaction.values}`)
    }
})

// GLOBAL VARS -------------------------------------------------------
const Ids = []



