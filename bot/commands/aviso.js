const Discord = require('discord.js');

exports.run = async (client, message, args) => {

var aviso = args.slice(1).join(' ');


var canal = message.mentions.channels.first() || message.guild.channels.cache.get(args[0]);

/*
_____________________________________
_____________________________________
*/

if(!message.member.hasPermission('MANAGE_GUILD')) return message.channel.send('Você é fraco lhe falta permissão para usar esse comando');


if (!canal) return message.channel.send(`${message.author}|| marque um canal`);

if (!aviso) return message.channel.send(`${message.author}|| coloque o conteudo`);

/*
_____________________________________
_____________________________________
*/

let avisoEmbed = new Discord.MessageEmbed()

.setDescription(`**${aviso}**





**— atenciosamente equipe do ${message.guild}**

**- Canal ${canal}**
`)
.setColor('RANDOM')
.setFooter(`aviso feito por: ${message.author.tag}  `)
.setTimestamp();

canal.send(avisoEmbed);

message.channel.send(`${message.author}** || feito o aviso no canal ${canal}**`)

message.author.send(`${message.author} ficou assim`, avisoEmbed);


}