import {googleImage} from '@bochilteam/scraper';

const handler = async (m, {conn, text, usedPrefix, command}) => {
  if (!text) return conn.reply(m.chat, `*اكتب اسم الصوره الي بدور عليها🧚🏼‍♂️*\n•  مثال\n*${usedPrefix + command} خلفيه*`, m, {contextInfo: {externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: iig, body: ' 𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿 ', previewType: 0, thumbnail: img.getRandom(), sourceUrl: redes.getRandom()}}});
  
  if (m.text.includes('gore') || m.text.includes('cp') || m.text.includes('porno') || m.text.includes('Gore') || m.text.includes('rule') || m.text.includes('CP') || m.text.includes('Rule34') || m.text.includes('xxx','سكس','نودز','شرموطه','كس','نيك','سكسي','عهيرات','شراميط','لبوه','اكساس','xnxx')) 
    throw 'طلبك مرفود يكسمك🙄';
  
  const res = await googleImage(text);
  const image = await res.getRandom();
  const link = image;
  
  conn.sendButton(m.chat, `🧚🏼‍♂️ *البحث*: ${text}`, botname, link, [['🧚🏼‍♂️ صوره تاني 🧚🏼‍♂️', `/${command} ${text}`]], null, null, m, null, fake);
};

handler.help = ['صوره2'];
handler.tags = ['buscadores'];
handler.command = /^(gimage|صوره|صور|imagen)$/i;
//handler.register = true;
handler.limit = 1;

export default handler;
