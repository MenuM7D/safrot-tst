import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';

const handler = async (m, { text, command, args, usedPrefix }) => {
  if (!text) return conn.reply(m.chat, `🧚🏼‍♂️ اكتب نص عشان تبدأ تتكلم مع سمسم مثال .سمسم عندك كام سنه.`, m)
  try {
    const api = await fetch('https://api.simsimi.net/v2/?text=' + text + '&lc=ar');
    const resSimi = await api.json();
    m.reply(resSimi.success);
  } catch {
    try {
      if (text.includes('مرحبا')) text = text.replace('مرحبا', 'Hello');
      if (text.includes('اهلا')) text = text.replace('اهلا', 'Hello');
      if (text.includes('اهلين')) text = text.replace('اهلين', 'Hello');
      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + text);
      const resu = await reis.json();
      const nama = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + nama + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      await conn.reply(m.chat, resu2[0][0][0], m)
    } catch {
      // خطأ إضافي
    }
  }
};

handler.help = ['simi', 'bot']
handler.tags = ['fun']
handler.command = /^((sim)?simi|سمسم|alexa|cortana)$/i

export default handler;
