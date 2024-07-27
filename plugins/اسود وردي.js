let handler = async (m, { conn, text, args, usedPrefix, command }) => {
    let response = args.join(' ').split('|')
    if (!text) throw ` *\`『 هات نص معا الامر يحب🧚🏼‍♂️ 』\`* `
    await m.react('🕓')
    try {
        let res = `https://api.lolhuman.xyz/api/textprome/blackpink?apikey=${lolkeysapi}&text=${text}`
        await conn.sendFile(m.chat, res, 'thumbnail.jpg', 'تم', m)
        await m.react('✅')
    } catch {
        await m.react('❌')
    }
}
handler.help = ['بلاك']
handler.tags = ['logo']
handler.command = /^(بلاك)$/i
handler.limit = 3
//handler.register = true 
export default handler
