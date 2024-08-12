import { webp2png } from '../lib/webp2mp4.js';
const handler = async (m, { conn, usedPrefix, command }) => {
  const notStickerMessage = `*🧚🏼‍♂️اعمل ريب ع الملصق الي عايز تحولو لصوره* ${usedPrefix + command}`;
  if (!m.quoted) throw notStickerMessage;

  m.reply(`*صلي علي النبي🧚🏼‍♂️⏳*`);
  
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw notStickerMessage;

  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m, null, fake);
};

handler.help = ['toimg (رد)'];
handler.tags = ['convertidor'];
handler.command = ['لصوره', 'jpg', 'img'];
//handler.register = true;

export default handler;
