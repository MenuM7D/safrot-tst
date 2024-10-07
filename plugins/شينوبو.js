import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, command }) => {
    await m.react('🕓') // إرسال رد فعل الساعة
    try {
        let res = await fetch('https://api.waifu.pics/sfw/shinobu') // جلب الصورة من API
        if (!res.ok) return
        let json = await res.json()
        if (!json.url) return
        await conn.sendButton(m.chat, '🐦شينوبو', '𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓', json.url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
        await m.react('✅') // إرسال رد فعل نجاح
    } catch {
        await m.react('✖️') // إرسال رد فعل فشل في حالة وجود خطأ
    }
}
handler.help = ['شينوبو']
handler.tags = ['صورة']
handler.command = ['شينوبو']

export default handler
