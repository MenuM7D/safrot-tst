import fs from 'fs'
import FormData from 'form-data'
import axios from 'axios'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {

  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || ''
  
  if (!mime.startsWith('image/')) {
    return m.reply('*\`『🧚🏻‍♂️ اعمل ريب ع الصوره الي عايز تعرف تفصيلها 』\`*')
  }
  await m.react('🕓')

  let media = await q.download()
  let formData = new FormData()
  formData.append('image', media, { filename: 'file' })

  let api = await axios.post('https://api.imgbb.com/1/upload?key=10604ee79e478b08aba6de5005e6c798', formData, {
    headers: {
      ...formData.getHeaders()
    }
  })

  if (api.data.data) {
    let txt = '*\`『 تفصيل الصوره🧚🏻‍♂️ 』\`*\n\n'
        txt += `  *» العنوان* : ${q.filename || 'x'}\n`
        txt += `  *» المعرف* : ${api.data.data.id}\n`
        txt += `  *» الرابط* : ${api.data.data.url}\n`
        txt += `  *» مباشر* : ${api.data.data.url_viewer}\n`
        txt += `  *» نوع الملف* : ${mime}\n`
        txt += `  *» الملف* : ${q.filename || 'x.jpg'}\n`
        txt += `  *» الامتداد* : ${api.data.data.image.extension}\n`
        txt += `  *» رابط الحذف* : ${api.data.data.delete_url}\n\n`
    await conn.sendFile(m.chat, api.data.data.url, 'ibb.jpg', txt, m)
    await m.react('✅')
  } else {
    await m.react('✖️')
  }
}
handler.tags = ['tools']
handler.help = ['تفصيل']
handler.command = /^(تفصيل)$/i

export default handler
