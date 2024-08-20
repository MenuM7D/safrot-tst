 let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let bio = await conn.fetchStatus(who).catch(_ => 'غير محدد')
    let biot = bio.status?.toString() || 'بدون نبذة'
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    let str = `${username}`
    await conn.reply(m.chat, str, m)
}

handler.help = ['احصل على الاسم', 'احصل على الاسم *@تاج*']
handler.tags = ['جروب']
handler.command = /^(اسمي|اسم)$/i

export default handler
