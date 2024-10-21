import fs from 'fs';
const timeout = 60000;
const poin = 500;
const handler = async (m, {conn, usedPrefix}) => {
  conn.tekateki = conn.tekateki ? conn.tekateki : {};
  const id = m.chat;
  if (id in conn.tekateki) {
    conn.reply(m.chat, '> *\`『 لسه عندك سوال مجوبتش عليه 🧚🏻‍♂️ 』\`*', conn.tekateki[id][0]);
    throw false;
  }
  const tekateki = JSON.parse(fs.readFileSync(`./src/game/ايمو.json`));
  const json = tekateki[Math.floor(Math.random() * tekateki.length)];
  const _clue = json.response;
  const clue = _clue.replace(/[A-Za-z]/g, '_');
  const caption = `━━━━━━❰･𓃦･❱━━━━━━
ⷮ *${json.question}*

> *\`『 الوقت 』\`* ${(timeout / 1000).toFixed(2)} ثواني

> *\`『 الجايزه 』\`* +${poin} Exp

> *\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*

♡ ㅤ    ❍ㅤ     ⎙ㅤ     ⌲
━━━━━━❰･𓃦･❱━━━━━`.trim();

  // رابط الصورة الخاصة بالسؤال
  const imageUrl = 'https://d.uguu.se/VZtkZNLr.jpg';

  conn.tekateki[id] = [
    await conn.sendFile(m.chat, imageUrl, 'image.jpg', caption, m), json,
    poin,
    setTimeout(async () => {
      if (conn.tekateki[id]) await conn.reply(m.chat, `> *\`『 الوقت خلص 』\`*\n*إلاجابة* ${json.response}`, conn.tekateki[id][0]);
      delete conn.tekateki[id];
    }, timeout)];
};
handler.help = ['ايمو'];
handler.tags = ['game'];
handler.command = /^(ايمو|ايموجي)$/i;
export default handler;
