let handler = async (m, { conn, args, text, usedPrefix, command }) => {
  let too = `[🧚🏻‍♂️] اعمل لوجو ناروتو\n\n *\`『 مثال 』\`* :\n*${usedPrefix + command}* SAFROT`

  if (!text) throw too
  let lr = (`https://shizoapi.onrender.com/api/photooxy/naruto?text=${encodeURIComponent(text)}&apikey=shizo`)
  conn.sendFile(m.chat, lr, 'Bot.png', `> ${text}`, m)  // تم تعديل النص ليعرض الرسالة المدخلة
}

handler.help = ['safrot']
handler.tags = ['safrot']
handler.command = ['نارو', 'لوجو_ناروتو']

export default handler
