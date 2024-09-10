import {webp2png} from '../lib/webp2mp4.js';


const handler = async (m, {conn, usedPrefix, command}) => {
  
  const notStickerMessage = '*\`『 اعمل ريب ع الملصق🧚🏼‍♂️ 』\`*';
  if (!m.quoted) throw notStickerMessage;
  const q = m.quoted || m;
  const mime = q.mediaType || '';
  if (!/sticker/.test(mime)) throw '*\`『 ده م ملصق ع اعملو صوره 』\`*';
  const media = await q.download();
  const out = await webp2png(media).catch((_) => null) || Buffer.alloc(0);
  await conn.sendFile(m.chat, out, 'error.png', null, m);
};
handler.help = ['toimg (reply)'];
handler.tags = ['sticker'];
handler.command = ['toimg', 'لصوره'];
export default handler;
