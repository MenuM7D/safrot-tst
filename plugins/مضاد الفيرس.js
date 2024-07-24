//By @NeKosmic || https://github.com/NeKosmic/ //

import * as fs from 'fs'

export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
if (m.isBaileys && m.fromMe) return !0
if (!m.isGroup) return !1
let chat = global.db.data.chats[m.chat]
let bot = global.db.data.settings[this.user.jid] || {}
let delet = m.key.participant
let bang = m.key.id
let name = await conn.getName(m.sender)
let fakemek = {key: {participant: "0@s.whatsapp.net","remoteJid": "0@s.whatsapp.net"},"message": {"groupInviteMessage": {"groupJid": "51995386439-1616969743@g.us","inviteCode": "m","groupName": "P", "caption": 'ʟᴏʟɪʙᴏᴛ-ᴍᴅ', 'jpegThumbnail': null}}}
if (chat.antiTraba && m.text.length > 5000) { //كمية القصوى من الحروف المسموح بها في رسالة//
if (isAdmin) return conn.sendMessage(m.chat, { text: `🧚🏼‍♂️*الادمن @${m.sender.split("@")[0]} بعت رسالة فيها حروف كتير قوي -.-!*`, mentions: [m.sender] }, { quoted: fakemek })
conn.sendButton(m.chat, `*[ ! ] تم اكتشاف رسالة فيها حروف كتير قوي [ ! ]*\n`, `${isBotAdmin ? '' : 'مش ادمن مش قادر اعمل حاجة :/'}`, null, [['عطل انتي ترابا', `/disable antitraba`]], null, null, m)
if (isBotAdmin) {
conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
setTimeout(() => { 
conn.sendMessage(m.chat, { text: `تم تعليم الشات كمقروء ✓\n${"\n".repeat(400)}\n• الرقم : wa.me/${m.sender.split("@")[0]}\n• الاسم : ${name}\n‼️بعت رسالة فيها حروف كتير قوي اللي ممكن تسبب مشاكل في الأجهزة`, mentions: [m.sender] }, { quoted: fakemek })
}, 0)
setTimeout(() => { 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
}, 1000)} else if (!bot.restrict) return m.reply(`*الأمر ده مقفول من المطور بتاعي*`)
}
return !0
}
