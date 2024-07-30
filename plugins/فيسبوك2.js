import fetch from 'node-fetch';
let enviando = false;

const handler = async (m, { conn, args, command, usedPrefix }) => {
  if (!args[0]) throw `_*لينك الفيسبوك فين؟*_\n\n*مثال: ${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/*`;

  const linkface = await isValidFacebookLink(args[0]);

  if (!linkface) throw `_*اللينك ده مش شغال.*_\n\n*مثال: ${usedPrefix + command} https://fb.watch/fOTpgn6UFQ/*`;

  if (!enviando) enviando = true;
  try {
    await m.reply(`_*التحميل هيبدأ حالاً...*`);
    const d2ata = await fetch(`${global.MyApiRestBaseUrl}/api/facebook?url=${args[0]}&apikey=${global.MyApiRestApikey}`);
    const r2es = await d2ata.json();
    let linkdl = '';

    if (r2es?.status === true) {
      linkdl = `${r2es.resultado.data}`;
    } else {
      linkdl = XD;
      enviando = false;
    }

    conn.sendMessage(m.chat, { video: { url: linkdl }, filename: 'error.mp4', caption: `_*الفيديو جاهز للتحميل.*_` }, { quoted: m });
    enviando = false;
  } catch (err1) {
    enviando = false;
    console.log('Error: ' + err1.message);
    throw '_*\`『🧚🏼‍♂️ حصل خطاء في التحميل 』\`*_';
  }
};

handler.command = /^(facebook|فيسبوك|فيس)$/i;
export default handler;

async function isValidFacebookLink(link) {
  const validPatterns = [
    /facebook\.com\/[^/]+\/videos\//i,
    /fb\.watch\//i,
    /fb\.com\/watch\//i,
    /fb\.me\//i,
    /fb\.com\/video\.php\?v=/i,
    /facebook\.com\/share\/v\//i,
    /facebook\.com\/share\/r\//i,
    /fb\.com\/share\/v\//i,
    /fb\.com\/share\/r\//i,
    /facebook\.com\/[^/]+\/posts\/[^/]+\//i,
    /facebook\.com\/reel\/[^/]+\//i
  ];
  return validPatterns.some(pattern => pattern.test(link));
        }
