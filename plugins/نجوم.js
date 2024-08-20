import fetch from 'node-fetch'

let handler = async (m, {conn, usedPrefix}) => {
	
    let who = m.quoted ? m.quoted.sender : m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
    let user = global.db.data.users[who]
    let name = conn.getName(who)
    if (!(who in global.db.data.users)) return conn.reply(m.chat, '🚩 المستخدم مش موجود في قاعدة البيانات عندي.', m).then(_ => m.react('✖️'))
    let img = await (await fetch(`https://telegra.ph/file/ba18ee051f004061eb80c.jpg`)).buffer()
    let txt = ` –  *نُجُوم  -  المُسْتَخْدِم*\n\n`
        txt += `┌  ✩  *الاسم* : ${user.name}\n`
        txt += `│  ✩  *نُجُوم* : ${toNum(user.limit)} ( *${user.limit}* )\n`
        txt += `│  ✩  *البنك* : ${toNum(user.bank)} ( *${user.bank}* )\n`
        txt += `└  ✩  *XP* : ${toNum(user.exp)} ( *${user.exp}* )`
    let mentionedJid = [who]
        
    await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
}
handler.help = ['نُجُوم']
handler.tags = ['rpg']
handler.command = ['coins', 'wallet', 'cartera', 'نجوم', 'stars', 'bal', 'balance']

export default handler

function toNum(number) {
    if (number >= 1000 && number < 1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number >= 1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else if (number <= -1000 && number > -1000000) {
        return (number / 1000).toFixed(1) + 'k'
    } else if (number <= -1000000) {
        return (number / 1000000).toFixed(1) + 'M'
    } else {
        return number.toString()
    }
                                                                                                                                      }
