let handler = async (m, { conn,usedPrefix, text }) => {
if(isNaN(text) && !text.match(/@/g)){
	
}else if(isNaN(text)) {
var number = text.split`@`[1]
}else if(!isNaN(text)) {
var number = text
}
	
if(!text && !m.quoted) return conn.reply(m.chat, `*[❗] اترقيت لمشرف*\n\n*┯┷*\n*┠≽ ${usedPrefix}daradmin @tag*\n*┠≽ ${usedPrefix}darpoder -> responder a un mensaje*\n*┷┯*`, m)
if(number.length > 13 || (number.length < 11 && number.length > 0)) return conn.reply(m.chat, `*[ ⚠️ ] El número ingresado es incorrecto, por favor ingrese el número correcto*`, m)
	
try {
if(text) {
var user = number + '@s.whatsapp.net'
} else if(m.quoted.sender) {
var user = m.quoted.sender
} else if(m.mentionedJid) {
var user = number + '@s.whatsapp.net'
} 
} catch (e) {
} finally {
conn.groupParticipantsUpdate(m.chat, [user], 'promote')
conn.reply(m.chat, `*\`『 تم يحب🧚🏼‍♂️ 』\`*`, m)
}}
handler.help = ['رفع']
handler.tags = ['owner']
handler.command = /^(ترقيه|promote|رفع)$/i
handler.group = true
handler.admin = true
handler.botAdmin = true
handler.fail = null
export default handler
