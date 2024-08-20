let handler = async (m, { conn, usedPrefix, command }) => {
    let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let bio = await conn.fetchStatus(who).catch(_ => 'غير محدد')
    let biot = bio.status?.toString() || '*بدون نبذة ×*'
    let user = global.db.data.users[who]
    let username = conn.getName(who)
    let str = `${biot}`
    conn.reply(m.chat, str, m)
}

handler.help = ['احصل على النبذة', 'احصل على النبذة *@تاج*']
handler.tags = ['جروب']
handler.command = /^(وصفي|وصف)$/i

export default handler
