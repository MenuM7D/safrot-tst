const handler = async (m, { conn, command, text }) => {
  const lovePercentage = Math.floor(Math.random() * 100);
  const isHighLove = lovePercentage >= 50;
  
  const loveMessages = [ /* الرسائل هنا */ ];
  const notSoHighLoveMessages = [ /* الرسائل هنا */ ];
  
  const loveDescription = isHighLove ? "لديكم اتصال عميق وحب" : "لديكم اتصال خاص، ولكن نسبة حبكم تبلغ";
  const getRandomMessage = (messages) => messages[Math.floor(Math.random() * messages.length)];
  const loveMessage = isHighLove ? getRandomMessage(loveMessages) : getRandomMessage(notSoHighLoveMessages);
  
  const response =
    `━━━━━━━⬣ *الحب* ⬣━━━━━━━\n` +
    `*❥ في عالم الحب، ${text} و @${m.sender.split('@')[0]} ${loveDescription} ${lovePercentage}*\n\n` +
    `*❥ ${loveMessage}*\n` +
    `━━━━━━━⬣ *الحب* ⬣━━━━━━━`;

  async function loading() {
    const hawemod = [
      "《 █▒▒▒▒▒▒▒▒▒▒▒》10%",
      "《 ████▒▒▒▒▒▒▒▒》30%",
      "《 ███████▒▒▒▒▒》50%",
      "《 ██████████▒▒》80%",
      "《 ████████████》100%"
    ];
    
    let { key } = await conn.sendMessage(m.chat, {text: `*💞 ¡جاري حساب النسبة! 💞*`, mentions: [m.sender]}, {quoted: m});
    
    for (let i = 0; i < hawemod.length; i++) {
      await new Promise(resolve => setTimeout(resolve, 1000)); 
      await conn.sendMessage(m.chat, {text: hawemod[i], edit: key}, {quoted: m}); 
    }
    
    await conn.sendMessage(m.chat, {text: response, edit: key, mentions: [m.sender]}, {quoted: m});         
  }
  
  loading();
};

handler.help = ['نبسه'];
handler.tags = ['fun'];
handler.command = /^(الحب|نسبه)$/i;
export default handler;
