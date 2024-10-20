import fetch from 'node-fetch';

const handler = async (m, { conn, args, usedPrefix, command }) => {
  fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/kpop/blackpink.txt')
    .then((res) => res.text())
    .then((body) => {
      const randomkpop = body.split('\n');
      const randomkpopx = randomkpop[Math.floor(Math.random() * randomkpop.length)]; // اختيار عشوائي من القائمة

      // إرسال الصورة مع الزر
      conn.sendButton(m.chat, `_${command}_`, '𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓', randomkpopx, [['🔄 𝚂𝙸𝙶𝚄𝙸𝙴𝙽𝚃𝙴 🔄', `/${command}`]], m);
    })
    .catch(err => console.error(err)); // معالجة الأخطاء في حالة حدوثها
};

handler.help = ['blackpink'];
handler.tags = ['internet'];
handler.command = /^(بلاك-بينك)$/i;

export default handler;
