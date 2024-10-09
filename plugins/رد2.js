import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  if (/^تست$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*شغال🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^اسكت|اسكت انت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مين انت علشان تسكتني🐤*', '*اسكت انت😹*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بوسني|بوس|ممممح$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مووهه💗🫦*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^متيجي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش فلخشن😹*', '*متيجي انت🐤*', '*بس ينقس🐤🙂*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بكرهكو|بكرهك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*انا اصلا محبتكيش😹🔥*', '*ونا كمان😹🔥*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بضاني|يبضاني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يبصاني انا🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^سفروت كسمك|كسم سفروت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*علي كسم الي جبتك🫵🏻*', '*علي كسمك يابن المتناكه🫵🏻*', '*يلا يابن الشرموطه🫵🏻*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^مين ضفني|مين دخلني|مين جبني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*معرفش🐤*', '*ضور عليه😹*', '*انا🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^تصبح علي خير|تصبحو علي خير$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وانت بخير💗*', '*وانت من اهل الخير💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^وحشني|واحشني|وحشتني|واحشتني$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*وحشتني اكتر🌚💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^لف|متلف$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مليش في الخشن🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^انا مبضون|مبضون$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اكتر منك🙂*', '*الحياه بضان🙂*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^متحاسب|حاسب$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ممعيش فكه🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }

  return !0;
};
export default handler;