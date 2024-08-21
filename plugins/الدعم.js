let media = 'https://qu.ax/dcAc.mp4'
let handler = async (m, { conn, command }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }
let str = `\`『 ＣＵＥＮＴＡＳ ＯＦＩＣＩＡＬＥＳ🧚🏼‍♂️ 』\`

\` رقمي المطور \`
> *${bot}*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
 
\`『 قناتي  』\`   
* *${md}* 

\`『 المجتمع 』\`   
* *${nn}* 

\`『  قناتي 2 』\`   
* *${nnn}* 

\`『 فيسبوك 』\`   
* *${fb}* 

\`『 تيك توك 』\`   
* *${tiktok}* 

\`『 يوتيوب 』\`   
* *${yt}* 

\`『 جروب فيسبوك 』\`   
* *${face}* 

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈
\`『 زور كل الروابط الرسمية في مكان واحد 』\`   
• https://www.atom.bio/safrotbob-376

${wm}`
await conn.reply(m.chat, str, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})}
//conn.sendFile(m.chat, media, 'loli.mp4', str, fkontak)}
handler.help = ['cuentaoficial']
handler.tags = ['main']
handler.command = /^الدعم|دعم|الدوعم|cuentaoficial$/i

export default handler
