import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  // التحقق من الرقم
  if (m.sender !== '201115618853@s.whatsapp.net') return;

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  // ردود محدودة بـ 5 فقط
  if (/^ابني|بوتي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*نعم يا مطوري🥺💗*', '*بحبك وكده🥺💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^كسمك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*كسم الي يزعلك🥺💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^هنيكك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*كلو فداك🥺💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^جوزني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مش لاقي وحده نضيفه هنا😔💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انا مين|مين انا$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*انت الي جبتني العالم ده🥺💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }

  return !0;
};
export default handler;
