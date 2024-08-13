global.math = global.math ? global.math : {}
let handler = async (m, { conn }) => {
  
let id = m.chat
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }  
if (!m.quoted) return
if (m.quoted.sender != conn.user.jid) return
if (!/^𝘾𝙪𝙖𝙡 𝙚𝙨 𝙧𝙚𝙨𝙪𝙡𝙩𝙖𝙙𝙤 𝙙𝙚/i.test(m.quoted.text)) return
if (!(m.chat in global.math)) return //conn.reply(m.chat, `📢 التنبيه: السؤال ده اتجاوب عليه قبل كده`, m)
conn.sendButton(m.chat, `📢 التنبيه: السؤال ده اتجاوب عليه قبل كده\n السؤال ده اتجاوب عليه قبل كده`, wm, null, [['العب تاني 🧮', `/math`], ['الرجوع للقائمة الرئيسية ☘️', '/.menu']], m)
if (m.quoted.id == global.math[id][0].id) {
let math = global.math[id][1]
let gatacoins = global.db.data.users[m.sender].money += 500
if (m.text == math.result) {
 
await //conn.reply(m.chat, `💖 إجابة صحيحة\nما شاء الله عليك 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nكسبت\n🏆 *_${math.bonus}_* نقطة خبرة\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nمكافأة\n🎁 *_$500_* سفروت كوينز\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nفلوسك\n💵 *_$${gatacoins}_* لولي كوينز`, fkontak, m) 
conn.sendButton(m.chat, `💖 إجابة صحيحة\nما شاء الله عليك 😎\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nكسبت | WON\n🏆 *_${math.bonus}_* نقطة خبرة\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nمكافأة | BONUS\n🎁 *_$500_* لولي كوينز\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\nفلوسك | YOUR MONEY\n💵 *_$${gatacoins}_* لولي كوينز`, wm, null, [['العب تاني 🧮', `/math ${math.mode}`], ['قائمة الألعاب 🎡', `.juegosmenu`]], m)
global.db.data.users[m.sender].exp += math.bonus

clearTimeout(global.math[id][3])
delete global.math[id]
} else {
if (--global.math[id][2] == 0) {
await //conn.reply(m.chat, `📢 التنبيه: فرصك خلصت\nالإجابة هي *${math.result}*`, m)
conn.sendButton(m.chat, `📢 التنبيه: فرصك خلصت\nالإجابة هي *${math.result}*\n\nفرصك خلصت\nالإجابة هي *${math.result}*`, wm, null, [['العب تاني 🧮', `/math ${math.mode}`], ['توب | ترتيب 🏆', `.top`]], m)
clearTimeout(global.math[id][3])
delete global.math[id]
} else conn.reply(m.chat, `📢 التنبيه: إجابة غلط!!\nعندك *${global.math[id][2]}* فرص متبقية 😱`, m)
}}}

handler.customPrefix = /^-?[0-9]+(\.[0-9]+)?$/
handler.command = new RegExp
handler.exp = 0
export default handler
