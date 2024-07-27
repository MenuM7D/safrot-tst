const linkRegex = /chat.whatsapp.com\/(?:invite\/)?([0-9A-Za-z]{20,24})/i;

export async function before(m, { conn, isAdmin, isBotAdmin }) {
  if (m.isBaileys && m.fromMe) return true;
  if (!m.isGroup) return false;
  let chat = global.db.data.chats[m.chat];
  let bot = global.db.data.settings[this.user.jid] || {};
  const isGroupLink = linkRegex.exec(m.text);

  if (chat.antiLink && isGroupLink && !isAdmin) {
    if (isBotAdmin) {
      const linkThisGroup = `https://chat.whatsapp.com/${await this.groupInviteCode(m.chat)}`;
      if (m.text.includes(linkThisGroup)) return true;
    }
    await conn.reply(
      m.chat,
      `*≡ تم اكتشاف رابط*
            
نحن لا نسمح بروابط من مجموعات أخرى.
آسف *@${m.sender.split('@')[0]}*، سيتم طردك من المجموعة ${isBotAdmin ? '' : '\n\nأنا لست مشرفًا لذلك لا أستطيع طردك :"v'}`,
      null,
      { mentions: [m.sender] }
    );
    if (isBotAdmin && chat.antiLink) {
      await conn.sendMessage(m.chat, { delete: m.key });
      await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove');
    } else if (!chat.antiLink) return; // m.reply('')
  }
  return true;
                                                          }
