let handler = async (m, { conn, text, usedPrefix, command }) => {
    let who
    if (m.isGroup) {
        who = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted ? m.quoted.sender : false
    } else {
        who = m.chat
    }
    
    if (!who) throw ` *منشن للي عايز تعملو بان*🧚🏼‍♂️`
    
    let user = global.db.data.users[who]
    user.banned = true
    
    let ban = 'https://qu.ax/SJJt.mp3'
    let imageUrl = 'https://telegra.ph/file/5487258cdd4f40ee4d259.jpg'  // URL للصورة الثابتة

    conn.sendMessage(m.chat, { 
        audio: { url: ban }, 
        image: { url: imageUrl },  // إضافة الصورة هنا
        contextInfo: { 
            "externalAdReply": { 
                "title": `🧚🏼‍♂️ *مستخدم البان مش هيقدر يستخدم البوت* ${wm}`, 
                "body": ``, 
                "previewType": "PHOTO", 
                "thumbnailUrl": null,
                "thumbnail": imagen1, 
                "sourceUrl": md, 
                "showAdAttribution": true
            }
        }, 
        ptt: true, 
        mimetype: 'audio/mpeg', 
        fileName: `error.mp3` 
    }, { quoted: m })
}

handler.help = ['banuser']
handler.tags = ['owner']
handler.command = /^banuser$/i
handler.rowner = true

export default handler
