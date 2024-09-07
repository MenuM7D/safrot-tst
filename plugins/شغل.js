import fg from 'api-dylux'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'
import fetch from 'node-fetch' 

let handler = async (m, { conn, args, usedPrefix, text, command }) => {
    let lister = [
        "mp3",
        "mp4", 
        "mp3doc",
        "mp4doc"
    ]
    let [feature, inputs, inputs_, inputs__, inputs___] = text.split(" ")
    if (command == "شغل" || command == 'play') {
        if (!text) return conn.reply(m.chat, '*\`『 اكتب الي عايز تشغلو معا الامر🧚🏻‍♂️ 』\`*', m)

        await m.react('🕓')
        let res = await yts(text)

        // التأكد من وجود نتائج
        if (!res || res.videos.length === 0) {
            return conn.reply(m.chat, 'لم أتمكن من العثور على نتائج للبحث المطلوب.', m);
        }

        let vid = res.videos[0]

        // التأكد من وجود الفيديو والرابط
        if (!vid || !vid.url) {
            return conn.reply(m.chat, 'لم أتمكن من العثور على الفيديو المطلوب.', m);
        }

        let q = '128kbps'
        const texto1 = `ابحاثك\n
        ✩ *العنوان ∙* ${vid.title}\n
        ✩ *المده ∙* ${vid.timestamp} `

        await conn.sendButton(m.chat, texto1, wm, vid.thumbnail, [
            ['الصوت 📀', `${usedPrefix}mp3 ${text}`],
            ['الفيديو 🎥', `${usedPrefix}mp4 ${text}`], 
        ], null, [['قناتي 🧚🏻‍♂️', `https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46`]], m)
    }

    if (command == "mp3") {
        if (!text) return conn.reply(m.chat, `*اكتب الي عيزني اشغلو معا الامر🧚🏻‍♂️*`, m)

        try {
            let res = await yts(text)

            if (!res || res.videos.length === 0) {
                return conn.reply(m.chat, 'لم أتمكن من العثور على نتائج للبحث المطلوب.', m);
            }

            let vid = res.videos[0]

            if (!vid || !vid.url) {
                return conn.reply(m.chat, 'لم أتمكن من العثور على الفيديو المطلوب.', m);
            }

            let q = '128kbps'
            let yt = await fg.yta(vid.url, q)
            let { title, dl_url, size } = yt
            let limit = 100

            if (size.split('MB')[0] >= limit) return conn.reply(m.chat, `يزن الملف أكثر من ${limit} ميغابايت، تم إلغاء التنزيل.`, m).then(_ => m.react('✖️'))

            await conn.sendMessage(m.chat, { audio: { url: dl_url }, mimetype: "audio/mp4", fileName: `${title}.mp3`, quoted: m, contextInfo: {
                'forwardingScore': 200,
                'isForwarded': true,
                externalAdReply:{
                    showAdAttribution: false,
                    title: title,
                    body: `${vid.author.name}`,
                    mediaType: 2, 
                    sourceUrl: vid.url,
                    thumbnail: await (await fetch(vid.thumbnail)).buffer()
                }}}, { quoted: m })
            await m.react('✅')
        } catch (error) {
            await conn.reply(m.chat, `*☓ Ocurrió un error inesperado*\n\n` + error, m).then(_ => m.react('✖️'))
            console.error(error)
        }
    }
}

handler.help = ["play"].map(v => v + " <formato> <búsqueda>")
handler.tags = ["downloader"]
handler.command = ['شغل', 'play2', 'mp3', 'mp4', 'mp3doc', 'mp4doc']

export default handler