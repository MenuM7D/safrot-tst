import fetch from "node-fetch"
import { JSDOM } from "jsdom"

let handler = async (m, { conn, args, text }) => {
    if (!text) throw "الأمر ده لعمل شعارات باسمك \nمثال:\n*.تصميم3* safrot bot"
    try {
        await m.reply("استنى شوية...")
        let res = await BrandCrowd(text)
        let rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendMessage(m.chat, {
            image: { url: rdm },
            caption: "[ النتيجة ]"
        }, { quoted: m })

        // زر لتغيير الصورة
        await conn.sendMessage(m.chat, {
            text: "عايز تغير الصورة؟ اضغط الزر ده",
            buttons: [
                { buttonId: `change_logo_${text}`, buttonText: { displayText: 'تغيير الصورة' }, type: 1 }
            ],
            headerType: 1
        }, { quoted: m })
    } catch (e) {
        throw e
    }
}

// التعامل مع زر تغيير الصورة
handler.all = async (m) => {
    if (m.type !== 'buttons_response') return;
    let buttonId = m.buttonId;
    if (buttonId.startsWith('change_logo_')) {
        let text = buttonId.replace('change_logo_', '');
        let res = await BrandCrowd(text);
        let rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendMessage(m.chat, {
            image: { url: rdm },
            caption: "[ النتيجة الجديدة ]"
        }, { quoted: m })
    }
}

handler.help = ["brandcrowd"]
handler.tags = ["logo"]
handler.command = /^تصميم3$/i

export default handler

async function BrandCrowd(query) {
    let res = await fetch('https://www.brandcrowd.com/maker/logos/page1?Text=' + query + '&TextChanged=true&SearchText&KeywordChanged=true&LogoStyle=0&FontStyles&Colors&FilterByTags')
    let html = await res.text()
    let dom = new JSDOM(html)
    let collection = dom.window.document.getElementsByTagName('img');
    let img = []
    for (let i = 0; i < collection.length; i++) {
        if (collection[i].getAttribute('src').startsWith('https://dynamic.brandcrowd.com')) {
            img.push(collection[i].getAttribute('src'))
        }
    }
    return img.filter(el => el != null);
            }
