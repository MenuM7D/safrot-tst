/*---------------------------------------------------------------------------------------
  🍀 • By https://github.com/ALBERTO9883
  🍀 • ⚘Alberto Y Ashly⚘
-----------------------------------------------------------------------------------------*/
let handler = async (m, { conn, text, usedPrefix, command }) => {
let regex = /x/g
if (!text) return await conn.reply(m.chat, '⚠️ الرقم فين 🤔', m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: ag, body: '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, fb, tiktok].getRandom()}}})
if (!text.match(regex)) throw `*مثال على الاستخدام: ${usedPrefix + command} 521999340434x*`
let random = text.match(regex).length, total = Math.pow(10, random), array = []
for (let i = 0; i < total; i++) {
let list = [...i.toString().padStart(random, '0')]
let result = text.replace(regex, () => list.shift()) + '@s.whatsapp.net'
if (await conn.onWhatsApp(result).then(v => (v[0] || {}).exists)) {
let info = await conn.fetchStatus(result).catch(_ => {})
array.push({ exists: true, jid: result, ...info })
} else {
array.push({ exists: false, jid: result })
}}
let txt = '• المسجلين\n\n' + array.filter(v => v.exists).map(v => `• الرقم: wa.me/${v.jid.split('@')[0]}\n*• الوصف:* ${v.status || 'بدون وصف'}\n*• التاريخ:* ${formatDate(v.setAt)}`).join('\n\n') + '\n\n*مش مسجلين:*\n\n' + array.filter(v => !v.exists).map(v => v.jid.split('@')[0]).join('\n')
m.reply(txt)
}
handler.help = ["nowa"]
handler.tags = ["tools"]
handler.command = /^nowa$/i
handler
