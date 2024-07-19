let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : null
    } else {
        who = m.chat
    }
    
    if (!who) throw `*منشن للي عايز تعملو بان*🧚🏼‍♂️`

    // Check if the user exists in the database
   if (!(who in global.db.data.users)) throw `*المستخدم غير موجود في قاعدة البيانات*`
    
    let user = global.db.data.users[who]
    user.banned = true
    
    let audioUrl = 'https://qu.ax/SJJt.mp3'
    let imageUrl = 'https://telegra.ph/file/5487258cdd4f40ee4d259.jpg'  // URL للصورة الثابتة

    await conn.sendMessage(m.chat, { 
        caption: '*المستخدم خد بان مش هيعرف يستخدم اوامر البوت🧚🏼‍♂️*', 
        image: { url: imageUrl },  // إضافة الصورة هنا
        contextInfo: { 
            externalAdReply: { 
                title: `🧚🏼‍♂️ *تم البان*`,
                body: `${wm}`, 
                previewType: "PHOTO", 
                thumbnail: { url: imageUrl },  // إضافة الصورة المصغرة هنا
                sourceUrl: md, 
                showAdAttribution: true
            }
        }
    }, { quoted: m })

    /*await conn.sendMessage(m.chat, { 
        audio: { url: audioUrl },
        mimetype: 'audio/mpeg',
        ptt: true
    }, { quoted: m })*/
}

handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser|بان$/i
handler.rowner = true

export default handler
