import fetch from 'node-fetch'
import fs from 'fs' 
let handler = async (m, { conn, usedPrefix, command, args, isOwner, isAdmin, isROwner, text }) => { 
//try{
let chat = global.db.data.chats[m.chat]
let user = global.db.data.users[m.sender]
let bot = global.db.data.settings[conn.user.jid] || {}
let toUser = `${m.sender.split("@")[0]}`
let aa = toUser + '@s.whatsapp.net'
let listSections = []    
listSections.push({ title: '『 FUNCIÓN PARA ADMINS 』',
rows: [
  { header: `🎉 اهلا وسهلا ${m.isGroup ? chat.welcome ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} welcome`, description: `رسالة ترحيب للأعضاء الجدد في الجروب\n` },
  { header: `🔗 منع الروابط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antilink`, description: `حذف الأشخاص اللي بيبعتوا روابط مجموعات الواتساب\n` },
  { header: `🔗 منع الروابط 2 ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antilink2`, description: `حذف الأشخاص اللي بيبعتوا روابط بتحتوي على https\n` },
  { header: `🔗 منع الروابط الطويلة ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitraba`, description: `البوت بيكتشف النصوص الطويلة اللي ممكن تكون فيروس وبيحذف المستخدم.\n` },
  { header: `🔗 منع روابط تيك توك ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitiktok`, description: `حذف الأشخاص اللي بيبعتوا روابط تيك توك\n` },
  { header: `🔗 منع روابط يوتيوب ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antiyoutube`, description: `حذف الأشخاص اللي بيبعتوا روابط يوتيوب\n` },
  { header: `🔗 منع روابط تليجرام ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitelegram`, description: `حذف الأشخاص اللي بيبعتوا روابط تليجرام\n` },
  { header: `🔗 منع روابط فيسبوك ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antifacebook`, description: `حذف الأشخاص اللي بيبعتوا روابط فيسبوك\n` },
  { header: `🔗 منع روابط انستجرام ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antiinstagram`, description: `حذف الأشخاص اللي بيبعتوا روابط انستجرام\n` },
  { header: `🔗 منع روابط تويتر ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antitwitter`, description: `حذف الأشخاص اللي بيبعتوا روابط تويتر\n` },
  { header: `🔗 منع روابط ديسكورد ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antidiscord`, description: `حذف الأشخاص اللي بيبعتوا روابط ديسكورد\n` },
  { header: `🔗 منع روابط Threads ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antithreads`, description: `حذف الأشخاص اللي بيبعتوا روابط Threads\n` },
  { header: `🟢 منع الأرقام المزيفة ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antifake`, description: `دخول رقم مزيف (افتراضي)، سيتم طرده تلقائيًا من الجروب...\n` },
  { header: `🔔 الإشعارات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} detect`, description: `إشعارات عن الإجراءات داخل الجروب\n` },
  { header: `🪄 الاستيكرات التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autosticker`, description: `الفيديوهات، الصور المتحركة، الصور، الروابط jpg أو jpeg؛ سيتم تحويلها إلى استيكرات تلقائيًا\n` },
  { header: `🗑️ منع الحذف ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} antidelete`, description: `أي رسالة محذوفة ستعاد إرسالها إلى الشات أو الجروب\n` },
  { header: `🔞 وضع البالغين ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} modohorny`, description: `عرض محتوى للبالغين في الشات\n` },
  { header: `🔊 الأصوات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} audios`, description: `تمكين الإرسال التلقائي للأصوات إلى الجميع\n` },
  { header: `🆙 المستوى التلقائي ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autolevelup`, description: `رفع المستوى تلقائيًا للجميع؛ (تطبيق المكافآت عند رفع المستوى)\n` },
  { header: `🙃 شات بوت ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} chatbot`, description: `البوت هيبدأ يتكلم مع الجميع في الجروب.\n` },
  { header: `🛂 وضع المدير ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `.${usedPrefix + command} modoadmin`, description: `فقط الأدمن يقدروا يستخدموا البوت في الجروب\n` },
  { header: `『 وظيفة مخصصة للمالك فقط 』\n`, title: `🔰 منع الخاص ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, id: `${usedPrefix + command} antiprivado`, description: `حظر الشخص اللي بيستخدم البوت في الخاص\n` },
  { header: `🚫 منع المكالمات ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} anticall`, description: `حظر الأشخاص اللي بيعملوا مكالمات\n` },
  { header: `⛔ تقييد ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} restrict`, description: `تمكين وظيفة إضافة أو حذف الأشخاص في الجروب\n` },
  { header: `⚜️ للخاص فقط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} pconly`, description: `السماح باستخدام البوت في الشات الخاص فقط\n` },
  { header: `⚜️ للجروبات فقط ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} gconly`, description: `السماح باستخدام البوت في الشات الجروبات فقط\n` },
  { header: `✅ القراءة التلقائية ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} autoread`, description: `ترك الرسائل أو الشات مقروءة.\n` },
  { header: `🌐 الوضع العام ${m.isGroup ? chat.antilink ? '✅' : '❌' : `⚠️`}`, title: "", id: `${usedPrefix + command} public`, description: `تمكين وظيفة السماح للجميع باستخدام LoliBot.\n` }
];
        
let isEnable = /true|enable|(turn)?on|1/i.test(command)
let type = (args[0] || '').toLowerCase()
let isAll = false, isUser = false
switch (type) {
case 'welcome': case 'bienvenida':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.welcome = isEnable
break
    
case 'detect': case 'avisos':
if (!m.isGroup) {
if (!isOwner) {
global.dfail('group', m, conn)
throw false
}
} else if (!isAdmin) {
global.dfail('admin', m, conn)
throw false
}
chat.detect = isEnable
break
		
case 'antidelete': case 'antieliminar': case 'delete':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.delete = isEnable
break
    
case 'public': case 'publico':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['self'] = !isEnable
break
    
case 'antilink': case 'antienlace':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink = isEnable
break
    
case 'antilink2': case 'antienlace2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiLink2 = isEnable 
break
		
case 'antitiktok': case 'antitk': case 'antitik':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTiktok = isEnable 
break
		
case 'antiyoutube': case 'antiyt':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiYoutube = isEnable 
break
		
case 'antitelegram': case 'antitl': case 'antitele': case 'antitg': case 'antitel':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTelegram = isEnable 
break
		
case 'antifacebook': case 'antifb': case 'antifbook':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiFacebook = isEnable 
break
		
case 'antiinstagram': case 'antinstagram': case 'antiig': case 'antig': case 'antiinsta': case 'antinsta':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiInstagram = isEnable 
break
		
case 'antitwitter': case 'antitw': case 'antitwit': case 'antitwter': case 'antitwiter': case 'antix':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitter = isEnable 
break

case 'antidiscord':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiDiscord = isEnable 
break

case 'antithreads':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiThreads = isEnable 
break

case 'antitwitch':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTwitch = isEnable 
break
    
case 'modohorny': case 'modocaliente': case 'modehorny':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modohorny = isEnable          
break
    
case 'stickers':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.stickers = isEnable          
break
    
case 'game': case 'juegos': case 'fun':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game = isEnable          
break
    
case 'ruleta': case 'game2':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.game2 = isEnable          
break
    
case 'temporal':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.temporal = isEnable
break
		
case 'autolevelup': case 'autonivel': case 'nivelautomatico':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autolevelup = isEnable          
break
    
case 'autosticker':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.autosticker = isEnable          
break
    
case 'reaction': case 'reaccion': case 'emojis': case 'antiemojis': case 'reacciones': case 'reaciones':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.reaction = isEnable          
break
		
case 'antitoxic': case 'antitoxicos': case 'antimalos':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antitoxic = isEnable
break
    
case 'audios':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.audios = isEnable          
break
    
case 'antiver': case 'modover': case 'modoobservar': case 'modobservar': case 'antiviewonce':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiver = isEnable 
break
		
case 'antiinternacional': case 'antinternacional': case 'antinternational': case 'antifake': case 'antifalsos': case 'antivirtuales': case 'antiextranjeros':		
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antifake = isEnable          
break
		
case 'jadibot': case 'modojadibot': case 'serbot': case 'modoserbot': 
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.jadibotmd = isEnable
break 
    
case 'restrict': case 'restringir':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.restrict = isEnable
break

case 'antiporn': case 'antiporno':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiPorn = isEnable          
break
    
case 'nyimak':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['nyimak'] = isEnable
break
    
case 'autoread': case 'autovisto':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.autoread2 = isEnable    
global.opts['autoread'] = isEnable  
break
    
case 'anticall': case 'antillamar':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiCall = isEnable
break
		
case 'antispam':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam = isEnable
break

case 'antispam2':
isAll = true
if (!isOwner) {
global.dfail('owner', m, conn)
throw false
}
bot.antiSpam2 = isEnable
break

case 'modoadmin': case 'soloadmin': case 'modeadmin':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.modoadmin = isEnable          
break    
   
case 'pconly': case 'privateonly': case 'soloprivados':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['pconly'] = isEnable
break
    
case 'gconly': case 'grouponly': case 'sologrupos':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['gconly'] = isEnable
break
case 'antiprivado': case 'antiprivate':
case 'privado':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
bot.antiPrivate = isEnable
break
case 'antitrabas': case 'antitraba': case 'antilag':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.antiTraba = isEnable
break
case 'simi': case 'chatbot':
if (m.isGroup) {
if (!(isAdmin || isOwner)) {
global.dfail('admin', m, conn)
throw false
}}
chat.simi = isEnable
break
case 'modoia': case 'chatgpt': case 'ia':
isAll = true;
if (!isOwner) {
global.dfail('owner', m, conn);
throw false;
}
bot.modoia = isEnable;      
break;      
      
case 'swonly': case 'statusonly':
isAll = true
if (!isROwner) {
global.dfail('rowner', m, conn)
throw false
}
global.opts['swonly'] = isEnable
break
default:
if (!/[01]/.test(command)) return await conn.sendList(m.chat, `\`⧼⧼⧼ ＣＯＮＦＩＧＵＲＡＣＩＯ́Ｎ ⧽⧽⧽\`

> *Seleccione una opción de la lista*
> *Para empezar a Configurar*

● *Avisos de la Configuracion:*
✅ ⇢ *Función Activada*
❌ ⇢ *Función Desactivada*
⚠️ ⇢ *Este Chat no es un Grupo`, wm, `AJUSTES`, listSections, m) //conn.sendMessage(m.chat, texto, {quoted: fkontak})	
throw false
}
await conn.sendButton(m.chat, `╭┄〔 *${wm}* 〕┄⊱
┆🗂️ ᴏᴘᴄɪᴏɴ: ${type} 
┆——————«•»——————
┆🎚️ ᴇsᴛᴀᴅᴏ: ${isEnable ? 'ᴀᴄᴛɪᴠᴀᴅᴏ' : 'ᴅᴇsᴀᴄᴛɪᴠᴀᴅᴏ'}
┆——————«•»——————
┆📣 ᴘᴀʀᴀ: ${isAll ? 'ᴇsᴛᴇ ʙᴏᴛ' : isUser ? '' : 'ᴇsᴛᴇ ᴄʜᴀᴛ'} 
╰━━━⊰ 𓃠 ${wm} ⊱━━━━დ`, wm, null, [[`${isEnable ? `Desactivar` : `Activar`}`, `${isEnable ? `.off ${type}` : `.on ${type}`}`]], null, null, m)
}; 
handler.help = ['en', 'dis'].map(v => v + 'able <option>')
handler.tags = ['nable']
handler.command = /^((en|dis)able|(tru|fals)e|(turn)?o(n|ff)|[01])$/i
export default handler;

const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)
