import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  if (/^احا|احه$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*احتين علي احتك😹*', '*بلتكت بتعها😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});
    
  } else if (/^بقولك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ارغي😹*', '*قول🧚🏻‍♂️*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});
    
  } else if (/^مين سفروت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مطوري☺️*', '*عمك 😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});
    
  } else if (/^بقولك اي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قولي🐤*', '*العب بليه🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^اها$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*في الشارع الي وره🐤*', '*وجع ولا دلع😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^اسم سفروت الحقيقي اي|اسمك الحقيقي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ابراهيم🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^هات رول$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*لا🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انت مالك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*انا تمام الحمد لله🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^كسم البوت|كسم المطور$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*علي كسمك🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^هات بوثه|هات بوسه$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش في الخشن😹🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^ياسافل|انت سافل|يا سافل$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*محثلش🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انا مخنوق|انا زهقان$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ونا كمان🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^عايز انام$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*روح نام🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }
  
  return !0;
};
export default handler;