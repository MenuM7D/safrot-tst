import { googleImage } from '@bochilteam/scraper';

const handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, `*اكتب اسم الصوره الي بدور عليها🧚🏼‍♂️*\n• مثال\n*${usedPrefix + command} خلفيه*`, m, {
      contextInfo: {
        externalAdReply: {
          mediaUrl: null,
          mediaType: 1,
          description: null,
          title: 'بحث صور', // تم تعيين عنوان افتراضي
          body: ' 𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿 ',
          previewType: 0,
          thumbnail: null, // يمكنك تعيين صورة افتراضية هنا
          sourceUrl: null // يمكنك تعيين رابط افتراضي هنا
        }
      }
    });
  }

  const blockedWords = ['gore', 'cp', 'porno', 'rule34', 'xxx', 'سكس', 'نودز', 'شرموطه', 'كس', 'نيك', 'سكسي', 'عهيرات', 'شراميط', 'لبوه', 'اكساس', 'xnxx'];
  if (blockedWords.some(word => m.text.toLowerCase().includes(word))) {
    throw 'طلبك مرفوض يكسمك🙄';
  }

  try {
    const res = await googleImage(text);
    const image = await res.getRandom();
    const link = image;

    conn.sendButton(m.chat, `🧚🏼‍♂️ *البحث*: ${text}`, 'اسم البوت', link, [['🧚🏼‍♂️ صوره تاني 🧚🏼‍♂️', `/${command} ${text}`]], m);
  } catch (error) {
    console.error(error);
    conn.reply(m.chat, 'حدث خطأ أثناء البحث عن الصورة، حاول مرة أخرى.', m);
  }
};

handler.help = ['صوره2'];
handler.tags = ['buscadores'];
handler.command = /^(gimage|صوره|صورة|imagen)$/i;
// handler.register = true;
handler.limit = 1;

export default handler;
