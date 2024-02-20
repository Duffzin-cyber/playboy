exports.run = async (client, message) => {
    const ms = await message.channel.send("Ping?");
	const clientms = ms.createdTimestamp - message.createdTimestamp;
	ms.edit('<a:wify:855952829041737768> Seu ping é: ' + clientms + 'ms / <a:822614635743150140:855953418144317460> Ping do bot com Server:' + Math.floor(client.ping) + 'ms');
}