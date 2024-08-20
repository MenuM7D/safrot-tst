import uploadImage from '../lib/uploadImage.js'
import { sticker } from '../lib/sticker.js'
let handler = async (m, { conn, text, usedPrefix, command }) => {
    let [فوق, تحت] = text.split`|`
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    if (!mime) return m.reply('*\`『 اعمل ريب ع الصوره الي عايز تخليها ملصق🧚🏻‍♂️ 』\`*')
    try {
    if (!/image\/(jpe?g|png)/.test(mime)) return await m.react('✖️')
    await m.react('🕓')
    let img = await q.download()
    let url = await uploadImage(img)
    let meme = `https://api.memegen.link/images/custom/${encodeURIComponent(فوق ? فوق : '')}/${encodeURIComponent(تحت ? تحت : '')}.png?background=${url}`
    let stiker = await sticker(false, meme, global.packname, global.author)
    if (stiker) await conn.sendFile(m.chat, stiker, '', global.author, m, '', { asSticker: 1 })
    await m.react('✅')
} catch {
await m.react('✖️')
}}
handler.help = ['صورة_مضحكة *<نص>*']
handler.tags = ['ستيكر']
handler.command = /^(ملصق|لملصق)$/i
 
export default handler
