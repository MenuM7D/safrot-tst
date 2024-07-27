import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) 
        return conn.reply(m.chat, `🧚🏼‍♂️*\`『 هات لنك جيتهب 』\`*\n• *مثال:* ${usedPrefix + command} ${md}`, m, {contextInfo: {externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: mg, body: ' 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})

    if (!regex.test(args[0])) 
        return conn.reply(m.chat, `🧚🏼‍♂️ *\`『 هات لنك جيتهب 』\`* 🧚🏼‍♂️`, m, {contextInfo: {externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: iig, body: ' 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})

    try {
        let [_, user, repo] = args[0].match(regex) || []
        repo = repo.replace(/.git$/, '')
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        
        conn.reply(m.chat, `*⌛ ثانية واحدة، ببعتلك الملف 🚀*\n*لو الملف موصلش، يبقى الريبو تقيل جدًا*`, m, {contextInfo: {externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: wm, body: ' 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})
        
        conn.sendFile(m.chat, url, filename, null, m, null, fake)
        handler.limit = 2
    } catch { 
        handler.limit = 0 // ❌ مش هتتحسب عليك لو الأمر فشل
    }
}

handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /gitclone|جيتهب|clonarrepo|repoclonar/i
//handler.register = true
handler.limit = 2
handler.level = 2

export default handler
