import fetch from 'node-fetch'

let handler = m => m
handler.all = async function (m) {
	
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? this.user.jid : m.sender
let pp = await this.profilePictureUrl(who, 'image').catch(_ => "https://telegra.ph/file/33bed21a0eaa789852c30.jpg")
	
global.rpl = { contextInfo: { externalAdReply: { mediaUrl: nna, mediaType: 'VIDEO', description: 'تحديثات/أخبار', title: packname, body: 'تحديث القناة', thumbnailUrl: pp, sourceUrl: nna }}} 
   	
global.fake = { contextInfo: { mentionedJid: null, forwardingScore: 1, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterJid: '120363160031023229@newsletter', serverMessageId: '', newsletterName: 'INFINITY-WA 💫' }, externalAdReply: { title: wm, body: vs, mediaType: 1, renderLargerThumbnail: false, previewType: `PHOTO`, thumbnailUrl: pp, sourceUrl: redes.getRandom() }}}
   
global.rpyp = { contextInfo: { externalAdReply: { mediaUrl: md, mediaType: 'VIDEO', description: 'GitHub', title: 'GitHub', body: 'ˢᶦ ᵗᵉ ᵃᵍʳᵃᵈᵃ ᵉˡ ᴮᵒᵗ ᵃᵇᵒʸᵃʳᵍᵎ ᶜᵒⁿ ᵘⁿᵃ 🌟', thumbnailUrl: pp, sourceUrl: md }}}

//⊱ ━━━━━.⋅ RPG ⋅.━━━━ ⊰

global.flaaa = [
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=water-logo&script=water-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextColor=%23000&shadowGlowColor=%23000&backgroundColor=%23000&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=crafts-logo&fontsize=90&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=amped-logo&doScale=true&scaleWidth=800&scaleHeight=500&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&text=',
'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&fillTextType=1&fillTextPattern=Warning!&fillColor1Color=%23f2aa4c&fillColor2Color=%23f2aa4c&fillColor3Color=%23f2aa4c&fillColor4Color=%23f2aa4c&fillColor5Color=%23f2aa4c&fillColor6Color=%23f2aa4c&fillColor7Color=%23f2aa4c&fillColor8Color=%23f2aa4c&fillColor9Color=%23f2aa4c&fillColor10Color=%23f2aa4c&fillOutlineColor=%23f2aa4c&fillOutline2Color=%23f2aa4c&backgroundColor=%23101820&text=']

global.cmenut = '❖––––––『'
global.cmenub = '┊✦ '
global.cmenuf = '╰━═┅═━––––––๑\n'
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.dmenut = '*❖─┅──┅〈*'
global.dmenub = '*┊»*'
global.dmenub2 = '*┊*'
global.dmenuf = '*╰┅────────┅✦*'
global.htjava = '⫹⫺'
global.htki = '*⭑•̩̩͙⊱•••• ☪*'
global.htka = '*☪ ••••̩̩͙⊰•⭑*'
global.comienzo = '• • ◕◕════'
global.fin = '════◕◕ • •'
global.botdate = `⫹⫺ التاريخ :  ${moment.tz('America/Los_Angeles').format('DD/MM/YY')}` //Asia/Jakarta
global.bottime = `𝗧 𝗜 𝗠 𝗘 : ${moment.tz('America/Los_Angeles').format('HH:mm:ss')}`//America/Los_Angeles
global.fgif = {
key: {
participant : '0@s.whatsapp.net'},
message: { 
"videoMessage": { 
"title": wm,
"h": `Hmm`,
'seconds': '999999999', 
'gifPlayback': 'true', 
'caption': bottime,
'jpegThumbnail': fs.readFileSync('./media/Menu3.jpg')
}}}

/*----------------------[ خروج من المجموعة ]-----------------------*/
if (!m.isGroup) return
let chats = global.db.data.chats[m.chat]
if (!chats.expired) return !0
if (+new Date() > chats.expired) {
await this.reply(m.chat, [`*${this.user.name}* ᴹᵉ ᵛᵒʸ ᵈᵉˡ ᵉˡ ᵍʳᵘᵖᵒ ᶠᵘᵉ ᵘⁿ ᵍᵘˢᵗᵒ ᵉˢᵗᵃ ᵃᵠᵘᶦ́ ˢᶦ ᵠᵘᶦᵉʳᵉˢ ᵠᵘᵉ ᵛᵘᵉˡᵛᵃ ᵁˢᵆᵘᵘʳ ᵈᵉ ⁿᵘᵉᵛᵒ ᵉˡ ᶜᵒᵐᵃⁿᵈᵒ`, `تمام، هسيب المجموعة، مافيش حاجة هنا، محدش يعيد إضافتي في المجموعات تاني`, `*${this.user.name}* هسيب المجموعة، مش لاقي فيها حاجة جديدة، كنت عايز أستمتع شوية وهي مليانة ناس مش كويسة 🤣`].getRandom()) 
await this.groupLeave(m.chat)
chats.expired = null
}

/*----------------------[ انتهاء الفترة المدفوعة ]-----------------------*/
for (const user of Object.values(global.db.data.users)) {
if (user.premiumTime != 0 && user.premium) {
if (new Date() * 1 >= user.premiumTime) {
user.premiumTime = 0;
user.premium = false;
const JID = Object.keys(global.db.data.users).find((key) => global.db.data.users[key] === user);
const usuarioJid = JID.split`@`[0];
const textoo = `*⚠️ @${usuarioJid} 𝚃𝚄 𝚃𝙸𝙴𝙼𝙿𝙾 𝙲𝙾𝙼𝙾 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼 𝙷𝙰 𝙴𝚇𝙿𝙸𝚁𝙰𝙳𝙾, 𝚈𝙰 𝙽𝙾 𝙴𝚁𝙴𝚂 𝚄𝙽 𝚄𝚂𝚄𝙰𝚁𝙸𝙾 𝙿𝚁𝙴𝙼𝙸𝚄𝙼*`;
await this.sendMessage(JID, {text: textoo, mentions: [JID]}, {quoted: ''});
}}}}

export default handler
