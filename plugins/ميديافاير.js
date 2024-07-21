import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';
import {mediafiredl} from '@bochilteam/scraper';

const handler = async (m, {conn, args, usedPrefix, command}) => {
  let sticker = 'https://qu.ax/Wdsb.webp';
  
  // لو مفيش رابط مدخل، يبعت رسالة للمستخدم
  if (!args[0]) {
    return conn.reply(m.chat, `⚠️ 𝙳𝙰𝙽𝙰 𝙧𝙚𝙣𝙡𝙚𝙙 𝙖 𝙫𝙖𝙡𝙞𝙙𝙤 𝙙𝙚 𝙈𝙚𝙙𝙞𝙖𝙛𝙞𝙧𝙚 𝙚𝙟:*\n${usedPrefix + command} https://www.mediafire.com/file/cv64tns6co3272q/Lolibot.zip/file`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: wm, previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}});
  }

  m.react(`🚀`);
  
  try {
    // محاولة جلب بيانات الملف من API
    const res = await fetch(`https://delirius-api-oficial.vercel.app/api/mediafire?url=${args[0]}`);
    if (!res.ok) throw new Error(`خطأ في HTTP! الحالة: ${res.status}`);
    const data = await res.json();
    const fileData = data.data;  
    let caption = `┏━━『 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 』━━•\n┃❥ 𝐍𝐨𝐦𝐛𝐫𝐞 :\n┃${fileData.filename}\n┃——————«•»——————\n┃❥ 𝐏𝐞𝐬𝐨 :\n┃${fileData.size}\n\n┃——————«•»——————\n┃❥ 𝐓𝐢𝐩𝐨 :\n┃${fileData.mime}\n╰━━━⊰ 𓃠 ${vs} ⊱━━━━•\n\n> ⏳ ᴱˢᵖᵉʳᵉ ᵘⁿ ᵐᵒᵐᵆᵍ ᵎᵃ ᵈᵉ ᵕ ᵛᶦᵒˢ ᵃʳᶜʰᶦᵛᵒˢ`.trim();
    m.reply(caption);
    await conn.sendFile(m.chat, fileData.link, fileData.filename, '', m, null, { mimetype: fileData.mime, asDocument: true });
    m.react(`✅`);
  } catch {
    try {
      // محاولة استخدام مكتبة mediafiredl
      const resEX = await mediafiredl(args[0]);
      const captionES = `┏━━『 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 』━━•\n┃❥ 𝐍𝐨𝐦𝐛𝐫𝐞 :\n┃${resEX.filename}\n┃——————«•»——————\n┃❥ 𝐏𝐞𝐬𝐨 :\n┃ ${resEX.filesizeH}\n\n┃——————«•»——————\n┃❥ 𝐓𝐢𝐩𝐨 :\n┃${resEX.ext}\n\n╰━━━⊰ 𓃠 ${vs} ⊱━━━━•\n\n> ⏳ ᴱˢᵖᵉʳᵉ ᵘⁿ ᵐᵒᵐᵆᵍ ᵎᵃ ᵈᵉ ᵕ ᵛᶦᵒˢ ᵃʳᶜʰᶦᵛᵒˢ`.trim();
      m.reply(captionES);
      await conn.sendFile(m.chat, resEX.url, resEX.filename, '', m, null, {mimetype: resEX.ext, asDocument: true});
      m.react(`✅`);
    } catch {
      try {
        // محاولة تحميل البيانات مباشرة من Mediafire
        const res = await mediafireDl(args[0]);
        const {name, size, date, mime, link} = res;
        const caption = `┏━━『 𝐌𝐄𝐃𝐈𝐀𝐅𝐈𝐑𝐄 』━━•\n┃❥ 𝐍𝐨𝐦𝐛𝐫𝐞 :\n┃${name}\n┃——————«•»——————\n┃❥ 𝐏𝐞𝐬𝐨 :\n┃${size}\n\n┃——————«•»——————\n┃❥ 𝐓𝐢𝐩𝐨 :\n┃${mime}\n\n╰━━━⊰ 𓃠 ${vs} ⊱━━━━•\n\n> ⏳ ᴱˢᵖᵉʳᵉ ᵘⁿ ᵐᵒᵐᵆᵍ ᵎᵃ ᵈᵉ ᵕ ᵛᶦᵒˢ ᵃʳᶜʰᶦᵛᵒˢ`.trim();
        await m.reply(caption);
        await conn.sendFile(m.chat, link, name, '', m, null, {mimetype: mime, asDocument: true});
        m.react(`✅`);
      } catch (error) {
        console.error(error);
        conn.sendFile(m.chat, sticker, 'error.webp', '', m, null, fake);
        m.react(`❌`);
      }
    }
  }
};

handler.help = ['mediafire', 'mediafiredl'];
handler.tags = ['downloader'];
handler.command = /^(mediafire|ميديافاير|dlmediafire)$/i;
handler.register = true;
handler.limit = 3;
export default handler;

async function mediafireDl(url) {
  const res = await axios.get(`https://www-mediafire-com.translate.goog/${url.replace('https://www.mediafire.com/', '')}?_x_tr_sl=en&_x_tr_tl=fr&_x_tr_hl=en&_x_tr_pto=wapp`);
  const $ = cheerio.load(res.data);
  const link = $('#downloadButton').attr('href');
  const name = $('body > main > div.content > div.center > div > div.dl-btn-cont > div.dl-btn-labelWrap > div.promoDownloadName.notranslate > div').attr('title').replaceAll(' ', '').replaceAll('\n', '');
  const date = $('body > main > div.content > div.center > div > div.dl-info > ul > li:nth-child(2) > span').text();
  const size = $('#downloadButton').text().replace('Download', '').replace('(', '').replace(')', '').replace('\n', '').replace('\n', '').replace('                         ', '').replaceAll(' ', '');
  let mime = '';
  const rese = await axios.head(link);
  mime = rese.headers['content-type'];
  return {name, size, date, mime, link};
                        }
