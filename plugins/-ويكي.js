import axios from 'axios';
import fetch from 'node-fetch';
import cheerio from 'cheerio';

async function wikipedia(query) {
  try {
    const link = await axios.get(`https://es.wikipedia.org/wiki/${query}`);
    const $ = cheerio.load(link.data);
    const judul = $('#firstHeading').text().trim();
    const thumb = $('#mw-content-text').find('div.mw-parser-output > div:nth-child(1) > table > tbody > tr:nth-child(2) > td > a > img').attr('src') || `//i.ibb.co/nzqPBpC/http-error-404-not-found.png`;
    const isi = [];
    $('#mw-content-text > div.mw-parser-output').each(function (rayy, Ra) {
      const penjelasan = $(Ra).find('p').text().trim();
      isi.push(penjelasan);
    });
    for (const i of isi) {
      const data = {
        status: link.status,
        result: {
          judul: judul,
          thumb: 'https:' + thumb,
          isi: i
        }
      };
      return data;
    }
  } catch (err) {
    const notFound = {
      status: link.status,
      message: err.message
    };
    return notFound;
  }
}

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) throw `*[❗️] أنت بتستخدم الأمر غلط!!*\n*الاستخدام الصحيح:*\n*${usedPrefix + command} الكلمة اللي عايز تدور عليها*\n\n*مثال:*\n*${usedPrefix + command} نجوم*`;
  
  wikipedia(`${text}`).then((res) => {
    m.reply(`*هنا عندك المعلومات اللي لقيتها:*\n\n` + res.result.isi);
  }).catch(() => {
    m.reply('*[❗️] ملقتش أي معلومات، اتأكد إنك كتبت كلمة واحدة وكتبتها صح*');
  });
};

handler.help = ['wikipedia'].map((v) => v + ' <كلمة>');
handler.tags = ['بحث'];
handler.command = /^(wiki|ويكي|wikipedia)$/i;
handler.register = true;
handler.limit = 1;

export default handler;
