let handler = async (m, { conn, text }) => {
let [l, r] = text.split`|`
if (!l) l = ''
if (!r) r = ''
conn.reply(m.chat, l + readMore + r, m)
}
handler.help = ['readmore', 'spoiler'].map(v => v + ' <teks>|<teks>')
handler.tags = ['tools']
handler.command = /^(مزيد|مزيد|قراءة-المزيد|المذيد)$/i
export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
