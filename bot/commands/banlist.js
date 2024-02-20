const { MessageEmbed } = require("discord.js")//ignore isso aqui, tava querendo fazer embed mas fiquei com preguiça 
module.exports = {
  name: "bans",
  aliases: ["listban", "list-ban", "banimentos"],
  run: async (client, message, args) => {

    if (!message.member.hasPermission("ADMINISTRATOR")) return message.inlineReply(`Você não possui permissão de \`Administrador\` bobão!`)
   const foda = message.guild.fetchBans()
    const titi = (await foda).map((member) => member.user.tag).join("\n") || "Ninguém foi banido"
    
    message.channel.send(titi)
  }
}