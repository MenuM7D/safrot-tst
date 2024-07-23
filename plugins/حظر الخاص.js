let handler = m => m

handler.all = async function (m) {
    let prefixRegex = new RegExp('^[' + (opts['prefix'] || '‎z/i!#$%+£¢€¥^°=¶∆×÷π√✓©®:;?&.,\\-').replace(/[|\\{}()[\]^$+*?.\-\^]/g, '\\$&') + ']')

    let setting = global.db.data.settings[this.user.jid]
    const settingsREAD = global.db.data.settings[this.user.jid] || {}

    if (m.text && prefixRegex.test(m.text)) {
        await this.sendPresenceUpdate('composing', m.chat)
        await this.readMessages([m.key])
        
        let usedPrefix = m.text.match(prefixRegex)[0]
        let command = m.text.slice(usedPrefix.length).trim().split(' ')[0]
    }
}

export default handler

/*----------------------[ ANTIPRIVADO ]-----------------------*/
export async function before(m, { conn, isAdmin, isBotAdmin, isOwner, isROwner }) {
    if (m.isBaileys && m.fromMe) return !0
    if (m.isGroup) return !1
    if (!m.message) return !0 
    if (m.text.includes('PIEDRA') || m.text.includes('PAPEL') || m.text.includes('TIJERA') ||  m.text.includes('menu') ||  m.text.includes('estado') || m.text.includes('bots') ||  m.text.includes('serbot') || m.text.includes('jadibot')) return !0
    
    let chat = global.db.data.chats[m.chat]
    let bot = global.db.data.settings[this.user.jid] || {}
    
    if (bot.antiPrivate && !isOwner && !isROwner) {
        await m.reply(`أهلاً، ممنوع تتكلم في الخاص مع البوت، علشان كده هتتعمل لك حظر...\n> _*علشان تستخدم الوظائف بتاعتي، انضم للمجموعة الرسمية 🧚🏼‍♂️*_\n${nn}`, false, { mentions: [m.sender] })
        await this.updateBlockStatus(m.chat, 'block')
    }
    
    return !1
                }
