import fetch from 'node-fetch';
import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';
const { default: WAMessageStubType } = await import(global.baileys);

export async function before(m, { conn, participants, groupMetadata }) {
    if (!m.messageStubType || !m.isGroup) return;

    let pp;
    try {
        pp = await conn.profilePictureUrl(m.messageStubParameters[0], 'image');
    } catch (_) {
        pp = 'https://telegra.ph/file/2a1d71ab744b55b28f1ae.jpg';
    }

    let img = await (await fetch(pp)).buffer();
    let usuario = `@${m.sender.split`@`[0]}`;
    let fkontak = { 
        "key": { "participants": "0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, 
        "message": { "contactMessage": { 
            "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
        }}, 
        "participant": "0@s.whatsapp.net" 
    };
    
    let chat = global.db.data.chats[m.chat];
    let users = participants.map(u => conn.decodeJid(u.id));
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');

    if (chat.detect) {
        switch (m.messageStubType) {
            case 21:
                await this.sendMessage(m.chat, { text: `${usuario} \`غير اسم الجروب لـ:\`\n\n> *${m.messageStubParameters[0]}*`, mentions: [m.sender, ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 22:
                await this.sendMessage(m.chat, { text: `${usuario} \`غير صورة الجروب\``, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 24:
                await this.sendMessage(m.chat, { text: `${usuario} الوصف الجديد للجروب هو:\n\n${m.messageStubParameters[0]}`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 25:
                await this.sendMessage(m.chat, { text: `🔒 دلوقتي *${m.messageStubParameters[0] == 'on' ? 'فقط الأدمنز' : 'الكل'}* يقدروا يعدلوا معلومات الجروب`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 26:
                await this.sendMessage(m.chat, { text: `الجروب *${m.messageStubParameters[0] == 'on' ? 'مقفول 🔒' : 'مفتوح 🔓'}*\n ${m.messageStubParameters[0] == 'on' ? 'فقط الأدمنز يقدروا يكتبوا' : 'الكل يقدر يكتب'} في الجروب ده`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 29:
                await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} بقيت ادمن\n\n🧚🏻‍♂️الي رفعك ادمن: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 30:
                await this.sendMessage(m.chat, { text: `@${m.messageStubParameters[0].split`@`[0]} نزلت من الادمن\n\nالي نزلك 🧚🏻‍♂️: ${usuario}`, mentions: [m.sender, m.messageStubParameters[0], ...groupAdmins.map(v => v.id)] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 72:
                await this.sendMessage(m.chat, { text: `${usuario} غير مدة الرسائل المؤقتة لـ *@${m.messageStubParameters[0]}*`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            case 123:
                await this.sendMessage(m.chat, { text: `${usuario} *وقف* الرسائل المؤقتة.`, mentions: [m.sender] }, { quoted: fkontak, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
                break;
            default:
                console.log({
                    messageStubType: m.messageStubType,
                    messageStubParameters: m.messageStubParameters,
                    type: WAMessageStubType[m.messageStubType],
                });
                break;
        }
    }
                                 }
