  export async function before(m, { conn, isAdmin, isBotAdmin, usedPrefix }) {
  const delet = m.key.participant;
  const bang = m.key.id;
  const botNumber = this.user.jid; 

  if (m.isBaileys && m.fromMe || m.sender === botNumber) {
    return !0; 
  }

  if (!m.isGroup) return !1;

  
  const forbiddenWords = ["https://"]; 

  
  const messageText = m.text.toLowerCase().trim(); 

  for (let word of forbiddenWords) {
    
    const regex = new RegExp(`${word}`, 'i');

    if (regex.test(messageText)) {
      
      if (isAdmin || m.sender === botNumber) {
        return !0; 
      }

      if (isBotAdmin) {
      
        await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet } });

      
        await this.sendMessage(m.chat, {
          text: `
*\`『 لو شيفني غلط  اصححلك انا هنا😹🔥 』\`*
 *\`『 ممنوع تنزل لنكات🐤 』\`* @${m.sender.split('@')[0]}`,
          mentions: [m.sender] 
        });
        
        break; 
      } else {
        return m.reply('*\`『 انا م ادمن م هعرف امسح النك🙂 』\`*');
      }
    }
  }

  return !0;
}
