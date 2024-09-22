import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    await m.react('🕓')
    try {
        let res = await fetch('https://api.waifu.pics/sfw/shinobu')
        if (!res.ok) return
        let json = await res.json()
        if (!json.url) return
        await conn.sendFile(m.chat, json.url, 'thumbnail.jpg', 'صورة شينوبو', m)
        await m.react('✅')
    } catch {
        await m.react('✖️')
    }
}
handler.help = ['شينوبو']
handler.tags = ['صورة']
handler.command = ['شينوبو']


export default handler
