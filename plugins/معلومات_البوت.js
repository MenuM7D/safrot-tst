import db from '../lib/database.js'
import { cpus as _cpus, totalmem, freemem, platform, hostname } from 'os'
import speed from 'performance-now'
import { sizeFormatter } from 'human-readable'

let format = sizeFormatter({
    std: 'JEDEC',
    decimalPlaces: 2,
    keepTrailingZeroes: false,
    render: (literal, symbol) => `${literal} ${symbol}B`,
})

let handler = async (m, { conn, usedPrefix }) => {
    let bot = global.db.data.settings[conn.user.jid]
    let _uptime = process.uptime()
    let hours = Math.floor(_uptime / 3600);
    let minutes = Math.floor((_uptime % 3600) / 60);
    let seconds = Math.floor(_uptime % 60);
    let uptime = `${hours}h ${minutes}m ${seconds}s`;

    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered === true).length
    let totalStats = Object.values(global.db.data.stats).reduce((total, stat) => total + stat.total, 0)
    const chats = Object.entries(conn.chats).filter(([id, data]) => id && data.isChats)
    let totalchats = Object.keys(global.db.data.chats).length
    let totalf = Object.values(global.plugins).filter(v => v.help && v.tags).length
    const groupsIn = chats.filter(([id]) => id.endsWith('@g.us'))
    let totaljadibot = [...new Set([...global.conns.filter(conn => conn.user && conn.state !== 'close').map(conn => conn.user)])]
    const used = process.memoryUsage()
    const cpus = _cpus().map(cpu => {
        cpu.total = Object.keys(cpu.times).reduce((last, type) => last + cpu.times[type], 0)
        return cpu
    })
    
    const usedMemory = totalmem() - freemem();
    
    let timestamp = speed()
    let latensi = speed() - timestamp
    let teks = `*≡ 𝑺𝐴𝐹𝑅O𝑇-𝐵O𝑇*

*معلومات*
*▣ عدد الجروبات الكلي:* ${groupsIn.length}
*▣ جروبات متحد:* ${groupsIn.length}
*▣ جروبات خرج:* ${groupsIn.length - groupsIn.length}
*▣ الشاتس الخاصة:* ${chats.length - groupsIn.length}
*▣ الشاتس الكلية:* ${chats.length}
*▣ عدد البوتات الفرعية المتصلة:* ${totaljadibot.length}
*▣ إجمالي الاضافات:* ${totalf}
*▣ السرعة:* ${latensi.toFixed(4)} مللي ثانية
*▣ وقت النشاط:* ${uptime}

*▣ الأوامر المنفذة:* ${toNum(totalStats)}/${totalStats}
*▣ الجروبات المسجلة:* ${toNum(totalchats)}/${totalchats}
*▣ المستخدمين المسجلين:*  ${rtotalreg} من ${totalreg} مستخدم

*≡ السيرفر*
▣ *اسم السيرفر:* ${hostname()}
▣ *الرام المستخدمة:* ${format(usedMemory)} / ${format(totalmem())}
▣ *المنصة:* ${platform()}`

    await conn.sendMessage(m.chat, { image: { url: "https://i.ibb.co/b54Ym1M/file.jpg" }, caption: teks }, { quoted: m })
}

handler.help = ['infobot']
handler.tags = ['main']
handler.command = /^(معلومات_البوت|informacionbot|infololi)$/i;

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