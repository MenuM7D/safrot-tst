import { googleImage } from '@bochilteam/scraper'

const canal2 = 'https://telegra.ph/file/078014e17aedf4f7a6cd9.jpg';

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[❗خطاء❗] مثال علي الامر ${usedPrefix + command} كانيكي*`
    if (m.text.includes('gore') || m.text.includes('cp') || m.text.includes('porno') || m.text.includes('Gore') || m.text.includes('rule') || m.text.includes('CP') || m.text.includes('Rule34')) 
        return m.reply('[❗خطاء❗] لا يمكنني إرسال هذا المحتوى ، المجموعة محظورة \n إذا كنت مشرفًا وتريد تنشيطها ، اخبر المطور')  

    const res = await googleImage(text)
    let image = await res.getRandom()
    let link = image

    let captionn = `🔎 *الـبـحـث عـن:* ${text}\n🌎 *مـحـرـك الـبـحـث:* Google`

    const sections = [{
        title: `عنوان القسم`,
        rows: [
            { header: 'عنوان1', title: "عنوان1", description: 'وصف1', id: usedPrefix + "menu" }, 
        ],
    }]

    const messages = [[ 
        'وصف الكروسل', 
        'Footer الكروسل',
        'https://telegra.ph/file/5099b32eeb157d901030c.jpg',
        [['زر1', usedPrefix + 'menu']],
        [['نص للنسخ 1']],
        [['رابط1', canal2]],
        [['زر قائمة 1', sections]]
    ]]

    await conn.sendCarousel(m.chat, 'نص', 'Footer', 'عنوان الكروسل', messages, m) 

    conn.sendButton(m.chat, captionn, 'Author', link, [['صوره غيراها', `.صوره ${text}`]], m)
}

handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|صوره2|imagen)$/i
export default handler
