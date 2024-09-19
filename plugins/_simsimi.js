import fetch from 'node-fetch';
const handler = (m) => m;

handler.before = async (m) => {
  const chat = global.db.data.chats[m.chat];
  
  if (chat.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(m.text)) return;

    let النص = m.text;

    if (
      m.text.includes('serbot') || 
      m.text.includes('bots') || 
      m.text.includes('jadibot') || 
      m.text.includes('menu') || 
      m.text.includes('play') || 
      m.text.includes('play2') || 
      m.text.includes('playdoc') || 
      m.text.includes('tiktok') || 
      m.text.includes('facebook') || 
      m.text.includes('menu2') || 
      m.text.includes('infobot') || 
      m.text.includes('estado') || 
      m.text.includes('ping') || 
      m.text.includes('instalarbot') || 
      m.text.includes('sc') || 
      m.text.includes('sticker') || 
      m.text.includes('s') || 
      m.text.includes('wm') || 
      m.text.includes('qc')
    ) return;
    
    try {
      await conn.sendPresenceUpdate('composing', m.chat);

      let gpt = await fetch(`https://deliriusapi-official.vercel.app/tools/simi?text=${encodeURIComponent(النص)}`);
      let res = await gpt.json();
      
      await m.reply(res.data.message);
    } catch {
      if (النص.includes('Hola')) النص = النص.replace('Hola', 'Hello');
      if (النص.includes('hola')) النص = النص.replace('hola', 'hello');
      if (النص.includes('HOLA')) النص = النص.replace('HOLA', 'HELLO');

      const reis = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=' + النص);
      const resu = await reis.json();
      const الاسم = m.pushName || '1';
      const api = await fetch('http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=' + الاسم + '&msg=' + resu[0][0][0]);
      const res = await api.json();
      
      // تعديل الترجمة هنا للعربية بدل الإسبانية
      const reis2 = await fetch('https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=ar&dt=t&q=' + res.cnt);
      const resu2 = await reis2.json();
      
      await m.reply(resu2[0][0][0]);
    }
    
    return !0;
  }
  
  return true;
};

export default handler;
