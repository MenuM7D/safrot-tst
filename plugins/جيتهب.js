import fetch from 'node-fetch'
const regex = /(?:https|git)(?::\/\/|@)github\.com[\/:]([^\/:]+)\/(.+)/i

let handler = async (m, { args, usedPrefix, command }) => {
    if (!args[0]) 
        return conn.reply(m.chat, `🧚🏼‍♂️*\`『 هات رابط المشروع 』\`*\n• *مثال:* ${usedPrefix + command} ${md}`, m)

    if (!regex.test(args[0])) 
        return conn.reply(m.chat, `🧚🏼‍♂️ *\`『 هات رابط المشروع 』\`* 🧚🏼‍♂️`, m)

    try {
        let [_, user, repo] = args[0].match(regex) || []
        repo = repo.replace(/.git$/, '')
        let url = `https://api.github.com/repos/${user}/${repo}/zipball`
        let filename = (await fetch(url, { method: 'HEAD' })).headers.get('content-disposition').match(/attachment; filename=(.*)/)[1]
        
        conn.reply(m.chat, `*\`『 ويت بيحمل 🧚🏻‍♂️ 』\`*`, m)
        
        conn.sendFile(m.chat, url, filename, null, m)
        handler.limit = 2
    } catch { 
        handler.limit = 0 // ❌ مش هتتحسب عليك لو الأمر فشل
    }
}

handler.help = ['gitclone <url>']
handler.tags = ['downloader']
handler.command = /^مشروع$/i

export default handler
