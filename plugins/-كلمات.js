import {find_lyrics} from '@brandond/findthelyrics';
import {getTracks} from '@green-code/music-track-data';
import {googleImage} from '@bochilteam/scraper';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  const teks = text ? text : m.quoted && m.quoted.text ? m.quoted.text : '';
  if (!teks) throw `*🧚🏼‍♂️ اكتب الي يدور علي كليماتو بعد الامر:* ${usedPrefix + command} ozuna te vas`;
  
  try {
    const result = await getTracks(teks);
    const lyrics = await find_lyrics(`${result[0].artist} ${result[0].title}`);
    const res = await fetch(global.API('https://some-random-api.com', '/lyrics', {title: result[0].artist + result[0].title}));
    const json = await res.json();
    let img;
    
    try {
      img = result.album.artwork;
    } catch {
      try { 
        img = json.thumbnail.genius;
      } catch {
        const bochil = await googleImage(`${result[0].artist} ${result[0].title}`);
        img = await bochil.getRandom();
      }
    }
    
    const textoLetra = `*🎤 عنوان:* ${result[0].title || ''}\n*👤 موالف:* ${result[0].artist || ''}\n\n*📃🎵 الكلمات:*\n${lyrics || ''}`;
    await conn.sendButton(m.chat, textoLetra, botname, img, [['🧚🏼‍♂️ تحميل الصوت 🧚🏼‍♂️', `/ytmp3doc ${result[0].title || ''}`]], null, null, m);   
    //conn.sendMessage(m.chat, {image: {url: img}, caption: textoLetra}, {quoted: m});
    //await conn.sendMessage(m.chat, {audio: {url: result[0].preview}, fileName: `${result[0].artist} ${result[0].title}.mp3`, mimetype: 'audio/mp4'}, {quoted: m});
  } catch {
    throw `*[❗] حصل خطأ، حاول تاني من فضلك*`;
  }
};

handler.help = ['lirik', 'letra'].map((v) => v + ' <Apa>');
handler.tags = ['buscadores'];
handler.command = /^(كلمات|lyrics|lyric|letra)$/i;
handler.register = true;
export default handler;
