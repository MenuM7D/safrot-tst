نص الملف حط_اونر.js:

let handler = async (m, { conn, text }) => {
    let who
    if (m.isGroup) who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : text
    else who = m.chat
    if (!who) throw 'قم بالإشارة الى الشخص الذي تريده ان يصبح ضمن لائحة المالكين للبوت او ما يسمى ب onwer bot'
    if (global.owner.includes(who.split('@')[0])) throw 'لقد أصبح هذا الشخص هو المالك!'
    global.owner.push([who.split('@')[0], m.name, true])
    const caption = `الآن @${who.split('@')[0]}   لقد أصبح مالكًا للبوت ​​​​​​​🐦​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​​❣️`
    await conn.reply(m.chat, caption, m, {
        mentions: conn.parseMention(caption)
    });
}
handler.help = ['حط_اونر']
handler.tags = ['owner']
handler.command = /^حط_اونر$/i
handler.owner = true

export default handler
