let handler = async (m, { groupMetadata }) => {
    let who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : m.sender
    let nro = Math.floor(Math.random() * 101)
    await m.reply(`@${who.split("@")[0]} خول بنسبة ${nro}% 😹.`, null, { mentions: [who] })
}

handler.help = ['horny']
handler.tags = ['fun']
handler.command = ['خول', 'horny']

handler.group = true

export default handler
