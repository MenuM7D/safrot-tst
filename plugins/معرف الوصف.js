import fetch from 'node-fetch';
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = (m) => m;

export async function before(m, { conn, participants, groupMetadata }) {
  if (!m.messageStubType || !m.isGroup) return;

  const sendGroupMessage = async (text, mentions) => {
    await conn.sendMessage(m.chat, { text, mentions }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
  };

  let pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image').catch(_ => 'https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg');
  let img = await (await fetch(`${pp}`)).buffer();
  let usuario = `@${m.sender.split`@`[0]}`; 
  let fkontak = { 
    "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" },
    "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }},
    "participant": "0@s.whatsapp.net"
  };
  let chat = global.db.data.chats[m.chat];
  const groupAdmins = participants.filter(p => p.admin);
  
  if (chat.detect) {
    switch (m.messageStubType) {
      case 21:
        await sendGroupMessage(`${usuario} \`تتم تغير اسم الجروب🧚🏼‍♂️`\n\n> *${m.messageStubParameters[0]}*`, [m.sender, ...groupAdmins.map(v => v.id)]);
        break;
      case 22:
        await sendGroupMessage(`${usuario} \`تم تغير صورة الجروب🧚🏼‍♂️`, [m.sender]);
        break;
      case 24:
        await sendGroupMessage(`${usuario} تم تغير وصف الجروب🧚🏼‍♂️\n\n${m.messageStubParameters[0]}`, [m.sender]);
        break;
      case 25:
        await sendGroupMessage(`🔒 دلوقتي *${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس' : 'الكل'}* يقدر يغير معلومات الجروب`, [m.sender]);
        break;
      case 26:
        await sendGroupMessage(`الجروب *${m.messageStubParameters[0] == 'on' ? 'مغلق 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'الأدمنز بس يقدروا يكتبوا' : 'دلوقتي الكل يقدر يكتب'}`, [m.sender]);
        break;
      case 29:
        await sendGroupMessage(`@${m.messageStubParameters[0].split`@`[0]} * ابسط بقيت ادمن🧚🏼‍♂️*\n\n🧚🏼‍♂️* اليي اداك ادمن  ${usuario}`, [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]);
        break;
      case 30:
        await sendGroupMessage(`@${m.messageStubParameters[0].split`@`[0]} 🧚🏼‍♂️*نزلت من الرول*\n\n*الي نزلك 🧚🏼‍♂️* ${usuario}`, [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)]);
        break;
      case 72:
        await sendGroupMessage(`${usuario} غير مدة الرسائل المؤقتة لـ *@${m.messageStubParameters[0]}*`, [m.sender]);
        break;
      case 123:
        await sendGroupMessage(`${usuario} *ألغى* الرسائل المؤقتة.`, [m.sender]);
        break;
      default:
        console.log({
          messageStubType: m.messageStubType,
          messageStubParameters: m.messageStubParameters,
          type: WAMessageStubType[m.messageStubType]
        });
    }
  }
    }
