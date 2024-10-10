import { canLevelUp, xpRange } from '../lib/levelling.js'
import fetch from 'node-fetch'

let handler = async (m, { conn }) => {
    let img = await (await fetch(`https://telegra.ph/file/b97148e2154508f63d909.jpg`)).buffer()
    let name = conn.getName(m.sender)
    let user = global.db.data.users[m.sender]
    
    if (!canLevelUp(user.level, user.exp, global.multiplier)) {
        let { min, xp, max } = xpRange(user.level, global.multiplier)
        let txt = ` –  *ترقية  -  المُسْتَخْدِم*\n\n`
            txt += `┌  ✩  *الاسم* : ${name}\n`
            txt += `│  ✩  *المستوى* : ${user.level}\n`
            txt += `└  ✩  *XP* : ${user.exp - min}/${xp}\n\n`
            txt += `يتبقى لك *${max - user.exp}* من *🧚🏻‍♂️ XP* لترقية المستوى`
        await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
    }
    
    let before = user.level * 1
    while (canLevelUp(user.level, user.exp, global.multiplier)) user.level++
    
    if (before !== user.level) {
        let txt = ` –  *ترقية  -  المُسْتَخْدِم*\n\n`
           txt += `┌  ✩  *الاسم* : ${conn.getName(m.sender)}\n`
           txt += `│  ✩  *المستوى السابق* : ${before}\n`
           txt += `└  ✩  *المستوى الحالي* : ${user.level}\n\n`
           txt += `🧚🏻‍♂️ كلما تفاعلت أكثر مع *\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`*، زاد مستواك`
        await conn.sendFile(m.chat, img, 'thumbnail.jpg', txt, m)
    }
}

handler.help = ['ترقية']
handler.tags = ['rpg']
handler.command = ['مستوى', 'لفل', 'levelup', 'level'] 

export default handler