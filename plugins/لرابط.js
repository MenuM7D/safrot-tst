import uploadFile from '../lib/uploadFile.js';
import uploadImage from '../lib/uploadImage.js';

const handler = async (m) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q.msg || q).mimetype || '';
  if (!mime) throw '*🧚🏼‍♂️ فين الصورة أو الفيديو؟ رد على صورة أو فيديو اللي عايز تحوله لرابط*';
  const media = await q.download();
  const isTele = /image\/(png|jpe?g|gif)|video\/mp4/.test(mime);
  const link = await (isTele ? uploadImage : uploadFile)(media);
  m.reply(link);
};

handler.help = ['tourl <reply image>'];
handler.tags = ['convertidor']
handler.command = /^(لرابط|tourl)$/i;
handler.register = true
export default handler;
