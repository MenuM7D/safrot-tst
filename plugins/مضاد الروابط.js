let linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})/i;
export async function before(m, { isAdmin, isBotAdmin, participants }) {
  if (m.isBaileys && m.fromMe) return !0;
  if (!m.isGroup) return !1;
  
  let chat = global.db.data.chats[m.chat];
  let delet = m.key.participant;
  let bang = m.key.id;
  const user = `@${m.sender.split`@`[0]}`;
  const groupAdmins = participants.filter(p => p.admin);
  const listAdmin = groupAdmins.map((v, i) => `*» ${i + 1}. @${v.id.split('@')[0]}*`).join('\n');
  let bot = global.db.data.settings[this.user.jid] || {};
  const isGroupLink = linkRegex.exec(m.text);
  const grupo = `https://chat.whatsapp.com`;
  
  if (isAdmin && chat.antiLink && m.text.includes(grupo)) 
    return m.reply('*ميزة منع الروابط مفعلة، بس مش هيتحظرك عشان انت ادمن 😎!*');
  
  if (chat.antiLink && isGroupLink && مش ادمن) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return !0;
    }    
    await conn.sendMessage(m.chat, {
      text: `*「 تم الكشف عن رابط 」*\n\n${user} 🤨 انت خالفت قواعد الجروب وهيتم طردك...`,
      mentions: [m.sender]
    }, {
      quoted: m, 
      ephemeralExpiration: 24*60*100, 
      disappearingMessagesInChat: 24*60*100
    });
    
    if (!isBotAdmin) 
      return conn.sendMessage(m.chat, {
        text: `*انت نجوت لأنني مش ادمن ومقدرش اطردك*`,
        mentions: [...groupAdmins.map(v => v.id)]
      }, {quoted: m});
    
    if (isBotAdmin) {
      await conn.sendMessage(m.chat, {
        delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }
      });
      let responseb = await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
      if (responseb[0].status === "404") return;
    } else if (!bot.restrict) 
      return m.reply('*صاحب البوت مش مفعل القيود (enable restrict). كلمه علشان يفعلها.*');
  }
  return !0;
    }
