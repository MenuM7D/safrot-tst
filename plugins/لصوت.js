import {toAudio} from '../lib/converter.js';

const handler = async (m, {conn, usedPrefix, command}) => {
  const q = m.quoted ? m.quoted : m;
  const mime = (q || q.msg).mimetype || q.mediaType || '';
  
  if (!/video|audio/.test(mime)) throw `*⚠️ فين الفيديو؟ رد على فيديو أو ملاحظة صوتية عشان أحولها لـ MP3*`;
  
  const media = await q.download();
  if (!media) throw '*⚠️ حصل خطأ مش عارف إيه اللي حصل؟ إنت تعرف؟* :)';
  
  m.reply(`استنى شوية بعمل تحويل 😎\n\n> *بحول من MP4 لـ MP3 🔄*`);
  
  const audio = await toAudio(media, 'mp4');
  if (!audio.data) throw '*⚠️ مش عارف إنت فاهم تستخدم الأمر إزاي؟ رد على فيديو أو ملاحظة صوتية يا غبي*';
  
  conn.sendMessage(m.chat, {audio: audio.data, mimetype: 'audio/mpeg', fake}, {quoted: m});
};

handler.help = ['tomp3'];
handler.tags = ['convertidor'];
handler.command = /^to(mp3|لصوت|audio)$/i;
handler.register = true;

export default handler;
