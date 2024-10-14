import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `يرجى استخدام الأمر مع رابط فيديو من تيكتوك\nمثال: ${usedPrefix + command} https://vt.tiktok.com/ZS2CQ96qp/`;
  m.react('⏳');

  try {
    let mediaURL = await obito(text); // تغيير هنا
    if (!mediaURL) throw new Error('لم يتم العثور على رابط تحميل الفيديو');
    await conn.sendFile(m.chat, mediaURL, '', 'تم تحميل الفيديو بنجاح', m, false, { mimetype: 'video/mp4' });
  } catch (error) {
    throw `حدث خطأ ما في تحميل الفيديو: ${error.message}`;
  }
};

async function obito(text) { // تغيير هنا
  try {
    let res = await fetch(`https://api-streamline.vercel.app/dltiktok?url=${encodeURIComponent(text)}`);
    if (!res.ok) throw new Error('الـ API لم يعيد استجابة صحيحة');
    let json = await res.json();
    if (!json.play) throw new Error('لم يتم العثور على رابط الفيديو');
    return json.play;
  } catch (error) {
    return false;
  }
}

handler.help = ['instagramdl'];
handler.tags = ['downloader'];
handler.command = /^(تيك|تيكتوك|tiktok)$/i;

export default handler;
