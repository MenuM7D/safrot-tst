import axios from "axios"
import fetch from "node-fetch"
import cheerio from "cheerio"
import { JSDOM } from "jsdom"

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    if (!text) throw "الأمر ده لعمل شعارات باسمك \nمثال:\n*.تصميم3* safrot bot"
    try {
        await m.reply("استنى شوية...")
        let res = await BrandCrowd(text)
        let rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendMessage(m.chat, {
            image: { url: rdm },
            caption: "[ النتيجة ]"
        }, { quoted: m })

        // زرار لتغيير الصورة
        await conn.sendMessage(m.chat, {
            text: "عايز تغير الصورة؟ اضغط الزر ده",
            buttons: [
                { buttonId: 'change_logo', buttonText: { displayText: 'تغيير الصورة' }, type: 1 }
            ],
            headerType: 1
        }, { quoted: m })
        
        // تخزين الشعار الناتج
        m.logoResults = res;

    } catch (e) {
        throw e
    }
}

// التعامل مع زر تغيير الصورة
conn.on('button_click', async (button) => {
    if (button.buttonId === 'change_logo' && button.message && button.message.logoResults) {
        let res = button.message.logoResults;
        let rdm = res[Math.floor(Math.random() * res.length)];
        await conn.sendMessage(button.chat, {
            image: { url: rdm },
            caption: "[ النتيجة الجديدة ]"
        }, { quoted: button.message })
    }
})

handler.help = ["brandcrowd"]
handler.tags = ["logo"]
handler.command = /^تصميم3$/i

export default handler

/* New Line */
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
