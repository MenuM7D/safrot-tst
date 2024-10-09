import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const chat = global.db.data.chats[m.chat];

  const randomReply = (replies) => replies[Math.floor(Math.random() * replies.length)];

  if (/^جيت|انا جيت$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*اعمل اي يعني🐤*', '*نورت🧚🏻‍♂️*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^يروحي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*يوغتي😹*', '*يعمري🫦*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^صلي علي النبي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*عليه افضلالصلاةوالسلام💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^سفروت بحبك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ونا كمان بحبني😹💗*', '*يبختي😹*', '*انا كمان بحبك🌚💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بحبك|بحبق|احبك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*بحبك اكتر🌚💗*', '*ونا كمان بحبني😹💗*', '*ونا كمان يحته🌚💗*', '*يبختي🌚💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^ازبك|عامل اي|عامل اي|اغبارك اي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*تمام وانت🌚*', '*زي الفل🌚💗*', '*الحمد لله💗*', '*احسن منك🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^يارب ديما|يارب دايما$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*ليا وليك🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^قلبي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*قلب قليك🐤💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^بموت فيك$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*عارف😹💗*', '*ونا كمان بموت فيا😹🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^البوت فين|سفروت فين$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*مش هنا🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^ازاي$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*زي السكر في الشاي😹💗*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^خخخ|خخخخ|خخخخخ|خخخخخخ|خخخخخخخخ$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*خوخ ومنجا وسوق العبور🐤😹*', '*حاسب لتشرق😹*', '*حاسب لتبلع لسانك😹🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  } else if (/^باي|سلام$/i.test(m.text) && !chat.isBanned) {
    const replies = ['*باي💗*', '*سلام🐤*'];
    m.conn.sendMessage(m.chat, {text: randomReply(replies)}, {quoted: m});

  }

  return !0;
};
export default handler;