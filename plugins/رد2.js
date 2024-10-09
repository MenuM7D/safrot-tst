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

  if (/^تست$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*شغال🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^اسكت|اسكت انت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مين انت علشان تسكتني🐤*', '*اسكت انت😹*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^بوسني|بوس|ممممح$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مووهه💗🫦*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^متيجي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش فلخشن😹*', '*متيجي انت🐤*', '*بس ينقس🐤🙂*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^بكرهكو|بكرهك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*انا اصلا محبتكيش😹🔥*', '*ونا كمان😹🔥*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^بضاني|يبضاني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يبصاني انا🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^سفروت كسمك|كسم سفروت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*علي كسم الي جبتك🫵🏻*', '*علي كسمك يابن المتناكه🫵🏻*', '*يلا يابن الشرموطه🫵🏻*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^مين ضفني|مين دخلني|مين جبني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*معرفش🐤*', '*ضور عليه😹*', '*انا🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^تصبح علي خير|تصبحو علي خير$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وانت بخير💗*', '*وانت من اهل الخير💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^وحشني|واحشني|وحشتني|واحشتني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وحشتني اكتر🌚💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^لف|متلف$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش في الخشن🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^انا مبضون|مبضون$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اكتر منك🙂*', '*الحياه بضان🙂*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^متحاسب|حاسب$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ممعيش فكه🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  }
  
  return !0;
};
export default handler;