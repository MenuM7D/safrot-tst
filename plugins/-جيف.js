/* 𝐂𝐑𝐄𝐀𝐃𝐎 𝐏𝐎𝐑 https://github.com/BrunoSobrino */

const handler = async (m, {conn, usedPrefix, command}) => {
  if (!m.quoted) throw `*🧚🏼‍♂️اعمل ريب ع الي عايز تحولو لجيف*`;
  const q = m.quoted || m;
  const mime = (q.msg || q).mimetype || '';
  if (!/(mp4)/.test(mime)) throw `*🧚🏼‍♂️ نوع الملف ${mime} مش صحيح، رد على فيديو عشان نحوله لجيف بالصوت*`;
  m.reply('*جارى التحميل🧚🏼‍♂️*');
  const media = await q.download();
  conn.sendMessage(m.chat, {video: media, gifPlayback: true, caption: '*اتفضل يحب🧚🏼‍♂️*'}, {quoted: m});
};

handler.help = ['جيف'];
handler.tags = ['محول'];
handler.command = ['جيف', 'togif'];
//handler.register = true;

export default handler;
