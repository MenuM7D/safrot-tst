import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];
  const fk = {
    'key': {
      'participants': '0@s.whatsapp.net',
      'remoteJid': 'status@broadcast',
      'fromMe': false,
      'id': 'Halo'
    },
    'message': {
      'contactMessage': {
        'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    'participant': '0@s.whatsapp.net'
  };

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  if (/^احا|احه$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*احتين علي احتك😹*', '*بلتكت بتعها😹*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^بقولك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ارغي😹*', '*قول🧚🏻‍♂️*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^مين سفروت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مطوري☺️*', '*عمك 😹*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^بقولك اي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قولي🐤*', '*العب بليه🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^اها$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*في الشارع الي وره🐤*', '*وجع ولا دلع😹*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^اسم سفروت الحقيقي اي|اسمك الحقيقي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ابراهيم🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^هات رول$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*لا🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^انت مالك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*انا تمام الحمد لله🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^كسم البوت|كسم المطور$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*علي كسمك🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^هات بوثه|هات بوسه$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش في الخشن😹🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^ياسافل|انت سافل|يا سافل$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*محثلش🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^انا مخنوق|انا زهقان$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ونا كمان🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^عايز انام$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*روح نام🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  }
  
  return !0;
};
export default handler;
