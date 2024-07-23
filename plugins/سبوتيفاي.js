// TheMystic-Bot-MD@BrunoSobrino - descargas-spotify.js
// الشكر للـ @darlyn1234 على الأكواد والتصميم لـ @ALBERTO9883
import fetch from 'node-fetch';
import fs from 'fs';
import axios from 'axios';

const handler = async (m, { conn, text, usedPrefix, command }) => {
 if (!text) return await conn.reply(m.chat, `أنت بتدور على إيه؟ اكتب اسم الأغنية اللي عايز تحملها من Spotify، مثال:* ${usedPrefix + command} ozuna`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: mg, body: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})    
m.react(`⌛`) 
  try {
    const res = await fetch(global.API('CFROSAPI', '/api/spotifysearch?text=' + text))
    const data = await res.json()
    const linkDL = data.spty.resultado[0].link;
    const musics = await fetch(global.API('CFROSAPI', '/api/spotifydl?text=' + linkDL))
    const music = await conn.getFile(musics.url)
    const infos = await fetch(global.API('CFROSAPI', '/api/spotifyinfo?text=' + linkDL))
    const info = await infos.json()
    const spty = info.spty.resultado
    const img = await (await fetch(`${spty.thumbnail}`)).buffer()  

let spotifyi = `*• العنوان:* ${spty.title}
*• الفنان:* ${spty.artist}
*• الألبوم:* ${spty.album}
*• السنة:* ${spty.year}

> 🚀 *جاري إرسال الأغنية، استنى شوية...*`
await conn.reply(m.chat, spotifyi, fkontak, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, body: '', previewType: 0, thumbnail: spty.data.cover_url, sourceUrl: redes.getRandom()}}}) 
await conn.sendMessage(m.chat, {audio: music.data, fileName: `${spty.name}.mp3`, mimetype: 'audio/mpeg'}, {quoted: m})
m.react(`✅`) 
handler.limit = 1
  } catch (error) {
    console.error(error);
m.react(`❌`) 
  }};
handler.help = ['spotify']
handler.tags = ['downloader']
handler.command = /^(spotify|سبوتيفي|سبوتيفاي)$/i
handler.register = true
//handler.limit = 1
handler.level = 2
export default handler;
