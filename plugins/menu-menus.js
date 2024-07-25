import { promises } from 'fs'
import { join } from 'path'
import moment from 'moment-timezone'
import { xpRange } from '../lib/levelling.js'
import { Buttons, MessageMedia } from 'whatsapp-web.js' // تأكد من استخدام المكتبة الصحيحة

let fecha = moment.tz('America/Bogota').format('DD/MM/YYYY')
let hora = moment.tz('America/Argentina/Buenos_Aires').format('LT')
let tags = {
  'main': 'ℹ️ INFOBOT',
  'jadibot': '✨ بُوت ثانوي', 
  'downloader': '🚀 تحميلات',
  'game': '👾 ألعاب', 
  'rg': '🟢 تسجيل', 
  'group': '⚙️ مجموعة',
  'nable': '🕹 تفعيل/تعطيل', 
  'nsfw': '🥵 أوامر +18', 
  'buscadores': '🔍 محركات البحث', 
  'sticker': '🧧 ملصقات',  
  'econ': '🛠 RPG',
  'convertidor': '🎈 محولات',
  'logo': '🎀 لوجوهات',
  'tools': '🔧 أدوات',
  'randow': '🪄 عشوائي',
  'efec': '🎙 تأثير تسجيل صوتي', 
  'owner': '👑 مالك', 
}

const defaultMenu = {
  before: `「 ${wm} 」
 
*\`『 اتفضل يا 』\`* *%name*
 
*• \`『 التريخ 』\`* ${fecha}
*• \`『 الموقت 』\`* ${hora} (⌚) 
*• \`『 المستخدمبن 』\`* %totalreg
*• \`『 وقت التشغيل 』\`* %muptime
${(conn.user.jid == global.conn.user.jid ? `*• \`『 المطور 』\`* wa.me/${global.conn.user.jid.split`@`[0]}` : `*• أنا بوت ثانوي لـ:* wa.me/${global.conn.user.jid.split`@`[0]}`) || ''}

*• \`『 حدك 』\`* %limit
*• \`『 المستوي 』\`* %level
*• \`『 الرتبه 』\`* %role
*• \`『 الخبره 』\`* %totalexp XP 

*• \`『 المستخدمين المسجلين 』\`* %rtotalreg من %totalreg

`.trimStart(),
  header: '◉ %category  ',
  body: ' ║\n╠ ○%cmd %islimit %isPremium',
  footer: `╚• \n`,
  after: `
`,
}

let handler = async (m, { conn, usedPrefix: _p, __dirname }) => {
  try {
    let _package = JSON.parse(await promises.readFile(join(__dirname, '../package.json')).catch(_ => ({}))) || {}
    let { exp, limit, level, role } = global.db.data.users[m.sender]
    let { min, xp, max } = xpRange(level, global.multiplier)
    let name = await conn.getName(m.sender)

    let d = new Date(new Date + 3600000)
    let locale = 'es'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    let time = d.toLocaleTimeString(locale, {
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    })
    let _uptime = process.uptime() * 1000
    let _muptime
    if (process.send) {
      process.send('uptime')
      _muptime = await new Promise(resolve => {
        process.once('message', resolve)
        setTimeout(resolve, 1000)
      }) * 1000
    }

    let muptime = clockString(_muptime)
    let uptime = clockString(_uptime)
    let taguser = '@' + m.sender.split('@s.whatsapp.net')[0];
    let totalreg = Object.keys(global.db.data.users).length
    let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
    let help = Object.values(global.plugins).filter(plugin => !plugin.disabled).map(plugin => {
      return {
        help: Array.isArray(plugin.tags) ? plugin.help : [plugin.help],
        tags: Array.isArray(plugin.tags) ? plugin.tags : [plugin.tags],
        prefix: 'customPrefix' in plugin,
        limit: plugin.limit,
        premium: plugin.premium,
        enabled: !plugin.disabled,
      }
    })
    for (let plugin of help)
      if (plugin && 'tags' in plugin)
        for (let tag of plugin.tags)
          if (!(tag in tags) && tag) tags[tag] = tag
    conn.menu = conn.menu ? conn.menu : {}
    let before = conn.menu.before || defaultMenu.before
    let header = conn.menu.header || defaultMenu.header
    let body = conn.menu.body || defaultMenu.body
    let footer = conn.menu.footer || defaultMenu.footer
    let after = conn.menu.after || (conn.user.jid == conn.user.jid ? '' : `Powered by https://wa.me/${conn.user.jid.split`@`[0]}`) + defaultMenu.after
    let _text = [
      before,
      ...Object.keys(tags).map(tag => {
        return header.replace(/%category/g, tags[tag]) + '\n' + [
          ...help.filter(menu => menu.tags && menu.tags.includes(tag) && menu.help).map(menu => {
            return menu.help.map(help => {
              return body.replace(/%cmd/g, menu.prefix ? help : '%p' + help)
                .replace(/%islimit/g, menu.limit ? '(ⓓ)' : '')
                .replace(/%isPremium/g, menu.premium ? '(Ⓟ)' : '')
                .trim()
            }).join('\n')
          }),
          footer
        ].join('\n')
      }),
      after
    ].join('\n')

    // تحويل النصوص إلى أزرار
    let buttons = Object.keys(tags).map(tag => {
      return {
        buttonId: `${_p}${tag}`, // تعيين معرف الزر
        buttonText: { displayText: tags[tag] }, // نص الزر
        type: 1
      }
    });

    // إعداد الرسالة مع الأزرار
    let message = {
      text: _text,
      buttons: buttons,
      headerType: 1
    };

    // إرسال الرسالة
    conn.sendMessage(m.chat, message, { quoted: m });

  } catch (e) {
    m.react(`❌`) 
    throw e
  }
}
handler.help = ['help']
handler.tags = ['main']
handler.command = /^(menu|منيو|memu|مساعدة|help|info|أوامر|2help|menu1.2|commands|commandos|m|\?)$/i
handler.register = false

handler.exp = 3

export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

function clockString(ms) {
  let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
  let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
  let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
  return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
  }
