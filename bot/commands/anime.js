const lennys = [
    'https://media.discordapp.net/attachments/929396010080424006/929455956386013214/gifboy15.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455955790430318/gifboy14.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455955391946842/gifboy13.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455954876067860/gifboy12.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455954611822622/gifboy5.gif?width=421&height=428',
'https://media.discordapp.net/attachments/929396010080424006/929455954167209994/gifboy4.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455953814900756/gifboy3.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455953391259669/gifboy2.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455953017962526/gifboy.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455951944245310/gifboy16.gif?width=428&height=428',
'https://media.discordapp.net/attachments/929396010080424006/929455505552855040/gifboy8.gif',
'https://media.discordapp.net/attachments/929396010080424006/929455466495479818/gifboy36.gif?width=428&height=428'
  ]


module.exports.run = async (bot, message, args) => {
    var rand_num = Math.floor(Math.random() * lennys.length);
    var rand_val = lennys[rand_num];

    return message.channel.send(rand_val);
}

module.exports.help = {
    name: "aquelacarinha",
    aliases: ["lenny"],
    descr: 'Lenny face.'
} 