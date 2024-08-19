let { proto } = (await import('@whiskeysockets/baileys')).default

let handler = async (m, { conn, args, usedPrefix, command, text }) => {
  let rcanal = m.chat // مثال: هنا rcanal تم تعريفه ليكون المحادثة الحالية

  if (!args[0]) return conn.reply(m.chat, '*\`『 اعمل ريب ع الرساله باموجي معا الامر🧚🏻‍♂️ 』\`*', m, rcanal)
  let q = m.quoted ? await m.getQuotedObj() : m
  conn.sendMessage(m.chat, { react: { text: args[0], key: q.key }}, { quoted: q })
}

handler.help = ['react *<إيموجي>*']
handler.tags = ['أدوات']
handler.command = ['react', 'تفاعل', 'ريأكت'] 

export default handler
