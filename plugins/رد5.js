import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  if (/^يبختي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يبختي انا🐤*', '*يتي يتي😹💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^عيب|حيب$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*العيب فلجيب😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^ولجيب مخروم$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*تع اخيطهولك😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^شكرا|ثكرا$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*العفو🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بمووت|بموت|بممووت|بموووت|بموووووت|موتت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ونا مالي😹🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^اخبارك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*فل الفل🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^يتي|يتي يتي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*🐤َ|يتي🌚*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^قلبي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قلب قليك🐤💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بوت متناك|بوت متناكك|بووت متناق$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*زبي اداك علي قفاك🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انت دمج|انت دمجج$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وانت بتاخد فيها😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انا دمج|اننا دمج$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اها اوي😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^حصل|حثل$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وبيحصل🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^اوك|اوكي|اووكي|اووك|اوككيي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اشطا🐤*', '*اوك🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }

  return !0;
};
export default handler;
