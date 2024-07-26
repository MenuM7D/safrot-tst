import { xpRange } from '../lib/levelling.js'
import PhoneNumber from 'awesome-phonenumber'
import { promises } from 'fs'
import { join } from 'path'
let handler = async (m, { conn, usedPrefix, command, args, usedPrefix: _p, __dirname, isOwner, text, isAdmin, isROwner }) => {


const { levelling } = '../lib/levelling.js'
//let handler = async (m, { conn, usedPrefix, usedPrefix: _p, __dirname, text }) => {

let { exp, limit, level, role } = global.db.data.users[m.sender]
let { min, xp, max } = xpRange(level, global.multiplier)

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
let { money } = global.db.data.users[m.sender]
let muptime = clockString(_muptime)
let uptime = clockString(_uptime)
let totalreg = Object.keys(global.db.data.users).length
let rtotalreg = Object.values(global.db.data.users).filter(user => user.registered == true).length
let replace = {
'%': '%',
p: _p, uptime, muptime,
me: conn.getName(conn.user.jid),

exp: exp - min,
maxexp: xp,
totalexp: exp,
xp4levelup: max - exp,

level, limit, weton, week, date, dateIslamic, time, totalreg, rtotalreg, role,
readmore: readMore
}
text = text.replace(new RegExp(`%(${Object.keys(replace).sort((a, b) => b.length - a.length).join`|`})`, 'g'), (_, name) => '' + replace[name])


let pp = './media/menus/Menu1.jpg'
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let mentionedJid = [who]
let username = conn.getName(who)

let chat = `👤 *الشات الغير معروف بيشتغل بس في الخاص مع البوت.*

👥 *بالتأكيد 🔒هو إنك تستخدم رقم البوت عشان تكلم ناس تانية، يعني الاتنين هيكتبوا في نفس الوقت في الشات الخاص بالبوت، وبالطريقه دي🔒 محدش من الاتنين هيقدر يشوف رقمه، صورته، اسمه، وصفه، وهكذ*
✨ *عشان تقدر تستخدم الخاصية دي، لازم تعمل الخطوات اللي في الأسفل.:
⚡️ *ادخل على الشات الخاص بالبوت*
⚡ *اكتب الأمر التالي*
*#start*

✅ *لما تخلص اللي فوق، خليك مستني حد تاني يستخدم نفس الأمر (#start) عشان يتم ربطكم برقم البوت وتبدأوا تتفاعلوا مع بعض* 

✅ *لو فضلت تفتح الـ #start هتبقى عندك فرص أكتر تتفاعل مع الشخص التاني بطريقة مجهولة*

🚪 *لو عاوز تخرج من الشات المجهول استخدم الأمر ده*
*#leave* 

✅ *بكده هتخرج من الشات المجهول مع البوت*
❗ *مش مسؤولين عن أي إساءة بتعملها باستخدام هذه الوظيفة في البوت*.`

const fkontak = {
        "key": {
    "participants":"0@s.whatsapp.net",
                "remoteJid": "status@broadcast",
                "fromMe": false,
                "id": "Halo"
        },
        "message": {
                "contactMessage": {
                        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
                }
        },
        "participant": "0@s.whatsapp.net"
}

await conn.sendButton(m.chat, chat, wm, pp, [['𝙑𝙤𝙡𝙫𝙚𝙧 𝙖𝙡 𝙈𝙚𝙣𝙪́ | 𝘽𝙖𝙘𝙠 𝙩𝙤 𝙈𝙚𝙣𝙪 ☘️', '/menu'] ], fkontak, m)  
}

handler.command = /^(anonimochat|chatanonimo|شات_مجهول|ChatAnonimo|chatanónimo|anónimochat|anonimoch)$/i
handler.exp = 70
//export default handler

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
function clockString(ms) {
let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')}
