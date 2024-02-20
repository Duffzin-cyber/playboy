const Discord = require("discord.js");
 
exports.run = (client, message, args) => {
    const embed = new Discord.MessageEmbed()
    .setColor('BLACK')
    .setDescription(`Olá ${message.author}, Abaixo está uma lista sobre mim:`)
    .setTimestamp()
    .setFooter(`Comando feito por: ${message.author.username}`)
    .addFields(
        {
            name: '<a:830655468778553354:855128225322500096>Meu Nome E Minha #',
            value: `${client.user.tag}`,
            inline: true
        },
        {
            name: '<a:830655354492026931:855128225213579335> Servidores Que Estou:',
            value: `Estou Em **${client.guilds.cache.size}** Servidores.`,
            inline: true
        },
        {
            name: '<a:830655448796626994:855128224467517442> Canais Que Trabalho:',
            value: `Tenho **${client.channels.cache.size}** Canais De Texto.`,
            inline: true
        },
        {
            name: '<a:830654757169266709:855128219867021313>Usuários :',
            value: `Cuido De **${client.users.cache.size}** usuários.`,
            inline: true
        },
        {
            name: '<a:830655368271102002:855128220709421066> Meu ping:',
            value: `**${Math.round(client.ws.ping)}** ms`,
            inline: true
        },
        {
            name: '<a:830868189352034354:855128226203697173> Meu Programador:',
            value: 'zkross#8872',
            inline: true
        },
        {
            name: '<a:830868261142528071:855128229273796658> Meu servidor:',
            value: 'https://discord.gg/HNsVTe5fe5',
            inline: true
        },
    )
    message.channel.send(embed);
}