import { sticker } from '../lib/sticker.js';
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const handler = (m) => m;

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg');
  let img = await (await fetch(`${pp}`)).buffer();
  let usuario = `@${m.sender.split`@`[0]}`; 
  let fkontak = { 
    "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" },
    "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }},
    "participant": "0@s.whatsapp.net"
  };
  let chat = global.db.data.chats[m.chat];
  let users = participants.map(u => conn.decodeJid(u.id));
  const groupAdmins = participants.filter(p => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');

  if (chat.detect && m.messageStubType == 21) {
    await this.sendMessage(m.chat, { text: `${usuario} \`غير اسم الجروب لـ:\`\n\n> *${m.messageStubParameters[0]}*`, mentions: [m.sender, ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 22) {
    await this.sendMessage(m.chat, { text: `${usuario} \`غير صورة الجروب\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 24) {
    await this.sendMessage(m.chat, { text: `${usuario} غير وصف الجروب لـ:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 25) {
    await this.sendMessage(m.chat, { text: `🔒 دلوقتي *${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس' : 'الكل'}* يقدر يغير معلومات الجروب`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 26) {
    await this.sendMessage(m.chat, { text: `الجروب *${m.messageStubParameters[0] == 'on' ? 'مغلق 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس يقدروا يكتبوا' : 'دلوقتي الكل يقدر يكتب'}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 29) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} بقى أدمن في الجروب\n\n😼🫵 تم الإجراء بواسطة: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 30) {
    await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} مش أدمن في الجروب دلوقتي\n\n😼🫵 تم الإجراء بواسطة: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 72) {
    await this.sendMessage(m.chat, { text: `${usuario} غير مدة الرسائل المؤقتة لـ *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else if (chat.detect && m.messageStubType == 123) {
    await this.sendMessage(m.chat, { text: `${usuario} *ألغى* الرسائل المؤقتة.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  } else {
    console.log({
      messageStubType: m.messageStubType,
      messageStubParameters: m.messageStubParameters,
      type: WAMessageStubType[m.messageStubType]
    });
  }
            }
