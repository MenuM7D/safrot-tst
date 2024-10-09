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

  if (/^جيت|انا جيت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اعمل اي يعني🐤*', '*نورت🧚🏻‍♂️*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^يروحي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يوغتي😹*', '*يعمري🫦*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^صلي علي النبي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*عليه افضلالصلاةوالسلام💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});
    
  } else if (/^سفروت بحبك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ونا كمان بحبني😹💗*', '*يبختي😹*', '*انا كمان بحبك🌚💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^بحبك|بحبق|احبك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*بحبك اكتر🌚💗*', '*ونا كمان بحبني😹💗*', '*ونا كمان يحته🌚💗*', '*يبختي🌚💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^ازبك|عامل اي|عامل اي|اغبارك اي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*تمام وانت🌚*', '*زي الفل🌚💗*', '*الحمد لله💗*', '*احسن منك🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^يارب ديما|يارب دايما$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ليا وليك🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^قلبي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قلب قليك🐤💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^بموت فيك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*عارف😹💗*', '*ونا كمان بموت فيا😹🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^البوت فين|سفروت فين$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مش هنا🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^ازاي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*زي السكر في الشاي😹💗*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^خخخ|خخخخ|خخخخخ|خخخخخخ|خخخخخخخخ$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*خوخ ومنجا وسوق العبور🐤😹*', '*حاسب لتشرق😹*', '*حاسب لتبلع لسانك😹🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  } else if (/^باي|سلام$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*باي💗*', '*سلام🐤*'];
    conn.sendPresenceUpdate('recording', m.chat);
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: fk});

  }
  
  return !0;
};
export default handler;