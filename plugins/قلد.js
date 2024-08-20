let handler = async (m, { conn, text, participants, isAdmin, isOwner, usedPrefix, command }) => {
  try {
    // التأكد من وجود رسالة مقتبسة للرد عليها
    if (!m.quoted) return conn.reply(m.chat, '*\`『 اعمل ريب علي الرساله الي هقلدها🧚🏻‍♂️ 』\`*', m)
    
    // إعادة إرسال الرسالة المقتبسة
    await conn.sendMessage(m.chat, { forward: m.quoted.fakeObj }, { quoted: m })
  } catch {
    await m.react('✖️')
  }
}

handler.help = ['قلد']
handler.tags = ['tools']
handler.command = ['قلد|كيب']

export default handler
