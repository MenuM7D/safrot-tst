import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';
import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';

let handler = async (m, { conn, args, usedPrefix, command }) => {
  let fkontak = {
    "key": {
      "participants": "0@s.whatsapp.net",
      "remoteJid": "status@broadcast",
      "fromMe": false,
      "id": "Halo"
    },
    "message": {
      "contactMessage": {
        "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`
      }
    },
    "participant": "0@s.whatsapp.net"
  };
  
  if (!args[0]) return await conn.reply(m.chat, '*انت بتدور على إيه؟ 🤔 دخّل رابط يوتيوب لتحميل الصوت*', m, {
    contextInfo: {
      externalAdReply: {
        mediaUrl: null,
        mediaType: 1,
        description: null,
        title: mg,
        body: ' 💫 بوت سوبر للواتساب 🥳 ',
        previewType: 0,
        thumbnail: img.getRandom(),
        sourceUrl: redes.getRandom()
      }
    }
  });

  if (command == 'ytmp3' || command == 'fgmp3') {
    let youtubeLink = '';
    if (args[0].includes('you')) {
      youtubeLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0 && Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find(item => item.from === m.sender);
        if (matchingItem && index < matchingItem.urls.length) {
          youtubeLink = matchingItem.urls[index];
        } else {
          return await conn.reply(m.chat, `⚠️ ما فيش لينكات للرقم ده، من فضلك دخّل رقم بين 1 و ${matchingItem.urls.length}*`, fkontak, {
            contextInfo: {
              externalAdReply: {
                mediaUrl: null,
                mediaType: 1,
                description: null,
                title: fg,
                body: ' 💫 بوت سوبر للواتساب 🥳 ',
                previewType: 0,
                thumbnail: img.getRandom(),
                sourceUrl: redes.getRandom()
              }
            }
          });
        }
      }
    }
    
    conn.reply(m.chat, [`*⌛ استنى لحظة... بنحمل الصوت بتاعك 🍹*`, `⌛ جارٍ المعالجة...\n*بجرب أحمّل الصوت بتاعك، استنى شوية 🏃‍♂️💨*`, `اهدى شوية، بدور على الأغنية 😎\n\n*لو أمر *play مش شغال، استخدم أمر *ytmp3*`].getRandom(), m, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          description: null,
          title: wm,
          body: ' 💫 بوت سوبر للواتساب 🥳 ',
          previewType: 0,
          thumbnail: img.getRandom(),
          sourceUrl: redes.getRandom()
        }
      }
    });
    
    try {
      let q = '128kbps';
      let v = youtubeLink;
      const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v));
      const dl_url = await yt.audio[q].download();
      const ttl = await yt.title;
      const size = await yt.audio[q].fileSizeH;
      await conn.sendFile(m.chat, dl_url, ttl + '.mp3', null, m, false, { mimetype: 'audio/mp4' });
    } catch {
      try {
        let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytaudio2?apikey=${lolkeysapi}&url=${youtubeLink}`);
        let lolh = await lolhuman.json();
        let n = lolh.result.title || 'error';
        await conn.sendMessage(m.chat, { audio: { url: lolh.result.link }, fileName: `${n}.mp3`, mimetype: 'audio/mp4' }, { quoted: m });
      } catch {
        try {
          let searchh = await yts(youtubeLink);
          let __res = searchh.all.map(v => v).filter(v => v.type == "video");
          let infoo = await ytdl.getInfo('https://youtu.be/' + __res[0].videoId);
          let ress = await ytdl.chooseFormat(infoo.formats, { filter: 'audioonly' });
          conn.sendMessage(m.chat, { audio: { url: ress.url }, fileName: __res[0].title + '.mp3', mimetype: 'audio/mp4' }, { quoted: m });
        } catch {}
      }
    }
  }

  if (command == 'ytmp4' || command == 'fgmp4') {
    let youtubeLink = '';
    if (args[0].includes('you')) {
      youtubeLink = args[0];
    } else {
      const index = parseInt(args[0]) - 1;
      if (index >= 0 && Array.isArray(global.videoList) && global.videoList.length > 0) {
        const matchingItem = global.videoList.find(item => item.from === m.sender);
        if (matchingItem && index < matchingItem.urls.length) {
          youtubeLink = matchingItem.urls[index];
        } else {
          return await conn.reply(m.chat, `⚠️ ما فيش لينكات للرقم ده، من فضلك دخّل رقم بين 1 و ${matchingItem.urls.length}*`, fkontak, {
            contextInfo: {
              externalAdReply: {
                mediaUrl: null,
                mediaType: 1,
                description: null,
                title: fg,
                body: ' 💫 بوت سوبر للواتساب 🥳 ',
                previewType: 0,
                thumbnail: img.getRandom(),
                sourceUrl: redes.getRandom()
              }
            }
          });
        }
      }
    }
    
    conn.reply(m.chat, [`*⌛ استنى لحظة... بنحمل الفيديو بتاعك 🍹*`, `⌛ جارٍ المعالجة...\n*بجرب أحمّل الفيديو بتاعك، استنى شوية 🏃‍♂️💨*`, `اهدى شوية، بدور على الفيديو بتاعك 😎\n\n*لو أمر *play مش شغال، استخدم أمر *ytmp4*`].getRandom(), m, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          description: null,
          title: wm,
          body: ' 💫 بوت سوبر للواتساب 🥳 ',
          previewType: 0,
          thumbnail: img.getRandom(),
          sourceUrl: redes.getRandom()
        }
      }
    });
    
    try {
      let qu = args[1] || '360';
      let q = qu + 'p';
      let v = youtubeLink;
      const yt = await youtubedl(v).catch(async _ => await youtubedlv2(v));
      const dl_url = await yt.video[q].download();
      const ttl = await yt.title;
      const size = await yt.video[q].fileSizeH;
      await conn.sendMessage(m.chat, { video: { url: dl_url }, fileName: `${ttl}.mp4`, mimetype: 'video/mp4', caption: `🔰 هنا الفيديو بتاعك \n🔥 العنوان: ${ttl}`, thumbnail: await fetch(yt.thumbnail) }, { quoted: m });
    } catch (E1) {
      try {  
        let mediaa = await ytMp4(youtubeLink);
        await conn.sendMessage(m.chat, { video: { url: mediaa.result }, fileName: `error.mp4`, caption: `_${wm}_`, thumbnail: mediaa.thumb, mimetype: 'video/mp4' }, { quoted: m });
      } catch (E2) {  
        try {
          let lolhuman = await fetch(`https://api.lolhuman.xyz/api/ytvideo2?apikey=${lolkeysapi}&url=${youtubeLink}`);
          let lolh = await lolhuman.json();
          let n = lolh.result.title || 'error';
          let n2 = lolh.result.link;
          let n3 = lolh.result.size;
          let n4 = lolh.result.thumbnail;
          await conn.sendMessage(m.chat, { video: { url: n2 }, fileName: `${n}.mp4`, mimetype: 'video/mp4', caption: `🔰 هنا الفيديو بتاعك \n🔥 العنوان: ${n}`, thumbnail: await fetch(n4) }, { quoted: m });
        } catch (E3) {}
      }
    }
  }
};

handler.help = ['ytmp4', 'ytmp3'];
handler.tags = ['downloader'];
handler.command = /^ytmp3|ytmp4|fgmp4|audio|fgmp3|dlmp3?$/i;
//export default handler

function bytesToSize(bytes) {
return new Promise((resolve, reject) => {
const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB'];
if (bytes === 0) return 'n/a';
const i = parseInt(Math.floor(Math.log(bytes) / Math.log(1024)), 10);
if (i === 0) resolve(`${bytes} ${sizes[i]}`);
resolve(`${(bytes / (1024 ** i)).toFixed(1)} ${sizes[i]}`)})};

async function ytMp3(url) {
return new Promise((resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.mimeType == 'audio/webm; codecs=\"opus\"') {
let { contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { audio: item.url, size: bytes }}};
let resultFix = result.filter(x => x.audio != undefined && x.size != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].audio}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, result2: resultFix, thumb })}).catch(reject)})}

async function ytMp4(url) {
return new Promise(async(resolve, reject) => {
ytdl.getInfo(url).then(async(getUrl) => {
let result = [];
for(let i = 0; i < getUrl.formats.length; i++) {
let item = getUrl.formats[i];
if (item.container == 'mp4' && item.hasVideo == true && item.hasAudio == true) {
let { qualityLabel, contentLength } = item;
let bytes = await bytesToSize(contentLength);
result[i] = { video: item.url, quality: qualityLabel, size: bytes }}};
let resultFix = result.filter(x => x.video != undefined && x.size != undefined && x.quality != undefined) 
let tiny = await axios.get(`https://tinyurl.com/api-create.php?url=${resultFix[0].video}`);
let tinyUrl = tiny.data;
let title = getUrl.videoDetails.title;
let thumb = getUrl.player_response.microformat.playerMicroformatRenderer.thumbnail.thumbnails[0].url;
resolve({ title, result: tinyUrl, rersult2: resultFix[0].video, thumb })}).catch(reject)})};

async function ytPlay(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getAudio = await ytMp3(random);
resolve(getAudio)}).catch(reject)})};

async function ytPlayVid(query) {
return new Promise((resolve, reject) => {
yts(query).then(async(getData) => {
let result = getData.videos.slice( 0, 5 );
let url = [];
for (let i = 0; i < result.length; i++) { url.push(result[i].url) }
let random = url[0];
let getVideo = await ytMp4(random);
resolve(getVideo)}).catch(reject)})};
