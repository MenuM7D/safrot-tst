import fg from 'api-dylux';
import axios from 'axios';
import cheerio from 'cheerio';
import {tiktok} from '@xct007/frieren-scraper';
import {generateWAMessageFromContent} from '@whiskeysockets/baileys';
import {tiktokdl} from '@bochilteam/scraper';
const CFROSAPI = global.APIs.CFROSAPI;

const handler = async (m, {conn, text, args, usedPrefix, command}) => {
  if (!text) return conn.reply(m.chat, `⚠️ *فين لينك تيك توك؟ 🤔*\n\n⚡ *ادخل لينك تيك توك لتحميل الفيديو*\n*مثال:* ${usedPrefix + command} https://vm.tiktok.com/ZM6T4X1RY/`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: mg, body: ' 💫 𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐚𝐩𝐩 🥳 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}})    
  if (!/(?:https:?\/{2})?(?:w{3}|vm|vt|t)?\.?tiktok.com\/([^\s&]+)/gi.test(text)) throw `❌ خطأ`
  const { key } = await conn.sendMessage(m.chat, {text: `⌛ استنى شوية ✋\n▰▰▰▱▱▱▱▱▱\nبجرب تحميل الفيديو من تيك توك 🔰`}, {quoted: m});
  await delay(1000 * 2);
  await conn.sendMessage(m.chat, {text: `⌛ استنى شوية ✋ \n▰▰▰▰▰▱▱▱▱\nبجرب تحميل الفيديو من تيك توك 🔰`, edit: key});
  await delay(1000 * 2);
  await conn.sendMessage(m.chat, {text: `⌛ قربت اخلص 🏃‍♂️💨\n▰▰▰▰▰▰▰▱▱`, edit: key});

  try {
    const dataFn = await conn.getFile(`${CFROSAPI}/api/tiktokv2?url=${args[0]}`);   
    await conn.sendMessage(m.chat, {video: dataFn.data, caption: `*✅ هنا فيديو تيك توك بتاعك*`}, {quoted: m});
    await conn.sendMessage(m.chat, {text: `✅  خلصنا\n▰▰▰▰▰▰▰▰▰\nهنا الفيديو بتاعك 💫`, edit: key});         
  } catch (ee1) {
    try {
      const dataF = await tiktok.v1(args[0]);
      await conn.sendMessage(m.chat, {video: {url: dataF.play}, caption: `*✅ هنا فيديو تيك توك بتاعك*`}, {quoted: m});
      await conn.sendMessage(m.chat, {text: `✅  خلصنا\n▰▰▰▰▰▰▰▰▰\nهنا الفيديو بتاعك 💫`, edit: key});           
    } catch (e1) {
      try {
        const tTiktok = await tiktokdlF(args[0]);
        await conn.sendMessage(m.chat, {video: {url: tTiktok.video}, caption: `*🔰 هنا فيديو تيك توك بتاعك*`}, {quoted: m});
        await conn.sendMessage(m.chat, {text: `✅  خلصنا\n▰▰▰▰▰▰▰▰▰\nهنا الفيديو بتاعك 💫`, edit: key});             
      } catch (e2) {
        try {
          const p = await fg.tiktok(args[0]);
          await conn.sendMessage(m.chat, {video: {url: p.nowm}, caption: `*✅ هنا فيديو تيك توك بتاعك*`}, {quoted: m});
          await conn.sendMessage(m.chat, {text: `✅  خلصنا\n▰▰▰▰▰▰▰▰▰\nهنا الفيديو بتاعك 💫`, edit: key});               
        } catch (e3) {
          try {
            const {author: {nickname}, video, description} = await tiktokdl(args[0]);
            const url = video.no_watermark2 || video.no_watermark || 'https://tikcdn.net' + video.no_watermark_raw || video.no_watermark_hd;
            await conn.sendMessage(m.chat, {video: {url: url}, caption: `✅ هنا فيديو تيك توك بتاعك`}, {quoted: m});
            await conn.sendMessage(m.chat, {text: `✅  خلصنا\n▰▰▰▰▰▰▰▰▰\nهنا الفيديو بتاعك 💫`, edit: key});                 
          } catch (e) {
            m.reply(`\`\`\`⚠️ حصل خطأ ⚠️\`\`\`\n\n> *بلغ عن الخطأ دا لصاحب البوت باستخدام الأمر:* #report\n\n> خطأ >>> ${e} <<<< `); 
            m.react(`❌`);         
          }
        }
      }
    }
  }
};

handler.help = ['tiktok']
handler.tags = ['downloader']
handler.command = /^(tt|تيك|dl|nowm)?$/i
handler.limit = 1
//export default handler;

const delay = time => new Promise(res => setTimeout(res, time));

async function tiktokdlF(url) {
  if (!/tiktok/.test(url)) return `_*< DESCARGAS - TIKTOK />*_\n\n*[ ℹ️ ] ادخل لينك تيك توك.*\n\n*[ 💡 ] مثال:* _${usedPrefix + command} https://vm.tiktok.com/ZM686Q4ER/_`;
  const gettoken = await axios.get('https://tikdown.org/id');
  const $ = cheerio.load(gettoken.data);
  const token = $('#download-form > input[type=hidden]:nth-child(2)').attr('value');
  const param = {url: url, _token: token};
  const {data} = await axios.request('https://tikdown.org/getAjax?', {method: 'post', data: new URLSearchParams(Object.entries(param)), headers: {'content-type': 'application/x-www-form-urlencoded; charset=UTF-8', 'user-agent': 'Mozilla/5.0 (Windows NT 6.3; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/100.0.4896.88 Safari/537.36'}});
  const getdata = cheerio.load(data.html);
  if (data.status) {
    return {status: true, thumbnail: getdata('img').attr('src'), video: getdata('div.download-links > div:nth-child(1) > a').attr('href'), audio: getdata('div.download-links > div:nth-child(2) > a').attr('href')};
  } else {
    return {status: false};
  }
                                                                                                                                                                                                                }
