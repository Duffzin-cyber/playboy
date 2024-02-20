const Discord = require("discord.js");
 
exports.run = async (client, message, args) => {
 
  let motivo = args.slice(" ").join(" ")
  if(!motivo) motivo = "Motivo não Informado"
      let avatar = message.author.avatarURL({ dynamic: true, format: "gif", size: 1024 });
            if (!message.member.hasPermission("MANAGE_MESSAGES")) {
        const embed = new Discord.MessageEmbed()
        .setDescription(`${message.author}, <:emoji_2:869658313804103770> VOCE NAO TEM PERMISSAO PARA USAR ESSE COMANDO .`)
        return message.channel.send(embed);
      }
    message.delete();
    message.channel.createOverwrite(message.guild.id, {
        SEND_MESSAGES: false,
        VIEW_CHANNEL: true
    })
    const embed = new Discord.MessageEmbed()
    .setTitle('CHAT FECHADO!!')
    .setDescription(`ESTE CHAT FOI FECHADO!`)
    .addField('Destrancar:', '(V!UNLOCK)', true)
    .addField('FECHADO POR:', `${message.author}`, true)
    .addField('MOTIVO:', motivo)
    .setTimestamp()
    .setThumbnail(avatar)
    .setColor('#00FFFF')
    message.channel.send(embed);
          
}