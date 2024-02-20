const Discord = require("discord.js");

exports.run = async (client, message, args) => {


let papae = args.join(' ')
 
 let mamae = new Discord.MessageEmbed()
 .setColor('#00BFFF') //escolha uma cor 
 .setDescription(`${message.author} \n\n <a:830883188268204093:855128229303025694> | *** Total de membros ${message.guild.memberCount}.*** \n\n <a:830657445063819284:855128226548285462> | ***Total de bots no servidor ${message.guild.members.cache.filter(m => m.user.bot).size}*** \n\n <a:830883187600654337:855128229269864558> | ***Total de cargos no servidor ${message.guild.roles.cache.size}***`)
 .setTitle('LISTRA DE MEMBROS <a:830883181196214332:855128228493525024> ') 
 .setFooter(`Comando feito por ${message.author.username}.`)

if(!args[0]) return message.channel.send(mamae);

message.channel.send(manin)

};