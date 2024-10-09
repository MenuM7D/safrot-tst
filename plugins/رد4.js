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

  if (/^سفرووت|سفروت|سفروتي|يسفروت|سفريتو$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قلبي🧚🏻‍♂️*', '*اي يحب🧚🏻‍♂️*', '*ارغي🐤*', '*معاك🧚🏻‍♂️*', '*قلب سفروت 🧚🏻‍♂️*', '*اي يسطا🧚🏻‍♂️*', '*يساتر🧚🏻‍♂️*', '*عيون سفروت💗*', '*معاك يزميلي😹💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بوت|يبوت|يبوتي|بووت|بوووت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اسمي سفروت🧚🏻‍♂️*', '*انت الي بوت🧚🏻‍♂️*', '*قول سفروت🧚🏻‍♂️*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^لا انت بوت|انت بوت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قولت اسمي سفروت🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بوت عبيط$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*كسمك🙂*', '*انت الي عبيط🐤*', '*بس يهطل😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^كسمك بوت|ينعل كسم البوت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*علي كسم الي جبتك🫵🏻*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^سفروت بتبحبي|بوت بتحبني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اها بحبني😹*', '*بكرهك😹💗*', '*بحب نفسي اكتر😹💗*', '*مش عارف😹🙂*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^خت خزوق|خزوقتني|ادتني خزوق|لسه متخزوق|لسه مخزوقاني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يمتخزوق😹🫵🏻*', '*المتخزوق اهو🫵🏻😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^🙂|🙂🙂|.🙂$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اتصدم🙂*', '*معلش الصدمه وحشه🙂*', '*حقك عليا🙂*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^نو ريب$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يمحني🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بس|سكتي البتاع ده|سكت البتات ده|سكتو$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*لا مش هسكت😹🙂*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^هاي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*باي🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بتحبني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*بحب ابراهيم اكتر💗🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^حد صاحي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مش انا😹💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }

  return !0;
};
export default handler;