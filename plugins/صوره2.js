import { googleImage } from '@bochilteam/scraper'

let handler = async (m, { conn, text, usedPrefix, command }) => {
    if (!text) throw `*[❗خطأ❗] مثال على الأمر ${usedPrefix + command} كانيكي*`
    if (m.text.includes('gore') || m.text.includes('cp') || m.text.includes('porno') || m.text.includes('Gore') || m.text.includes('rule') || m.text.includes('CP') || m.text.includes('Rule34')) 
        return m.reply('[❗خطأ❗] لا يمكنني إرسال هذا المحتوى ، المجموعة محظورة \n إذا كنت مشرفًا وتريد تنشيطها ، اخبر المطور')  

    try {
        const res = await googleImage(text)
        let image = await res.getRandom()
        let link = image

        let captionn = `🔎 *البحث عن:* ${text}\n🌎 *محرك البحث:* Google`

        const sections = [{
            title: `عنوان القسم`,
            rows: [
                { header: 'عنوان1', title: "عنوان1", description: 'وصف1', id: usedPrefix + "menu" }, 
                { header: 'عنوان2', title: "عنوان2", description: 'وصف2', id: usedPrefix + "command" },
            ],
        }]

        const messages = [[ 
            'Descripción de Carrusel 1', 
            'Footer de Carrusel 1',
            'https://telegra.ph/file/5099b32eeb157d901030c.jpg',
            [['Botón1', usedPrefix + 'menu']],
            [['Texto para copiar 1']],
            [['Enlace1', 'https://example.com/link1']],
            [['Botón Lista 1', sections]]
        ], [
            'Descripción de Carrusel 2',
            'Footer de Carrusel 2',
            'https://telegra.ph/file/e9239fa926d3a2ef48df2.jpg',
            [['Botón2', usedPrefix + 'menu']],
            [['Texto para copiar 2']],
            [['Enlace2', 'https://example.com/link2']],
            [['Botón Lista 2', sections]]
        ], [
            'Descripción de Carrusel 3',
            'Footer de Carrusel 3',
            'https://telegra.ph/file/7acad0975febb71446da5.jpg',
            [['Botón3', usedPrefix + 'menu']],
            [['Texto para copiar 3']],
            [['Enlace3', 'https://example.com/link3']],
            [['Botón Lista 3', sections]]
        ], [
            'Descripción de Carrusel 4',
            'Footer de Carrusel 4',
            'https://telegra.ph/file/24b24c495b5384b218b2f.jpg',
            [['Botón4', usedPrefix + 'menu']],
            [['Texto para copiar 4']],
            [['Enlace4', 'https://example.com/link4']],
            [['Botón Lista 4', sections]]
        ]]

        await conn.sendCarousel(m.chat, 'Texto', 'Footer', 'Título de Carrusel', messages, m) 

        conn.sendButton(m.chat, captionn, 'Author', link, [['المنيو', `${usedPrefix}menu`]], m)
    } catch (error) {
        console.error(error)
        m.reply('[❗خطأ❗] حدث خطأ أثناء محاولة البحث.')
    }
}

handler.help = ['gimage <query>', 'imagen <query>']
handler.tags = ['internet', 'tools']
handler.command = /^(gimage|image|2صوره|imagen)$/i
export default handler
