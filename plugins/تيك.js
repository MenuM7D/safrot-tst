import fetch from 'node-fetch';
import fs from 'fs';

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
  if (!text) throw `*╮┄╌〔 ≪ 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 ≫ 〕╌╌•*\n*┆❌ بتستخدم الامر غلط*\n*┆✔️ الاستخدام الصح*\n*┆❕ مثال: ${usedPrefix + command} ورابط الفيديو*\n*╯────ׂ─ׂ─ׂ─ׂ─────╌─╌─╌*`;
    await conn.sendMessage(m.chat, { react: { text: '⏳', key: m.key } });

  try {
    let mediaURL = await zoro(text);

    if (!mediaURL) throw '❮ ❌ ┇ حدث خطأ  ❯';

    conn.sendFile(m.chat, mediaURL, '', '「 تـفـضـل طـلـبـك ⌋', m, false, { mimetype: 'video/mp4' });
 await conn.sendMessage(m.chat, { react: { text: '✔️', key: m.key } });
  } catch (error) {
await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    throw `*╮┄╌〔 ≪ 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 ≫ 〕╌╌•*\n*┆❌ ضيف رابط الفيديو صح*\n*╯────ׂ─ׂ─ׂ─ׂ─────╌─╌─╌*`;
  }
try{
  let mediaURL = await zoro(text);
  conn.sendMessage(m.chat, {audio: {url: mediaURL}, ptt: true, mimetype: 'audio/mpeg', fileName: `shawaza_zizo_2024.opp`}, {quoted: m});
} catch (error){
  return
  } 
};

async function zoro(text) {
  let res = await fetch(`https://zoro-api-zoro-bot-5b28aebf.koyeb.app/api/tiktok?url=${encodeURIComponent(text)}`);
  if (!res.ok) return false;

  const fileName = 'Zezo_tiktok_video.mp4';
  const fileStream = fs.createWriteStream(fileName);
  res.body.pipe(fileStream);

  await new Promise((resolve, reject) => {
    fileStream.on('finish', resolve);
    fileStream.on('error', reject);
  });

  return fileName;
}

handler.help = ['tiktok'];
handler.tags = ['downloader'];
handler.command = /^(tiktokdl|tt|تيكتوك|تيك)$/i;

export default handler;
