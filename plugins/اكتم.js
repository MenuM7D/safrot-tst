import axios from 'axios';

// banChat.js
const handler = async (m, {conn, command, args}) => {
  if (!args[0] || !['ث', 'د', 'س', 'ي'].includes(args[0].slice(-1))) {
    return m.reply('> *\`『 اكتب المده يحب🧚🏻‍♂️ 』\`*');
  }

  const timeUnits = {
    'ث': 1000,      // ثانية
    'د': 60000,     // دقيقة
    'س': 3600000,   // ساعة
    'ي': 86400000   // يوم
  };

  const timeValue = parseInt(args[0].slice(0, -1)); // الحصول على القيمة الرقمية
  const timeUnit = args[0].slice(-1); // الحصول على الوحدة الزمنية

  if (!timeUnits[timeUnit] || isNaN(timeValue)) {
    return m.reply('> *\`『 اكتب المده يحب🧚🏻‍♂️ 』\`*');
  }

  const duration = timeUnits[timeUnit] * timeValue;
  await conn.sendMessage(m.chat, { react: { text: "🔕", key: m.key } });

  const banUntil = Date.now() + duration;
  global.db.data.chats[m.chat].banUntil = banUntil;
  global.db.data.chats[m.chat].isBanned = true;

  // تحميل الصورة من الإنترنت
  let imageUrl = 'https://f.uguu.se/GPmXnURT.jpg';
  let response = await axios.get(imageUrl, { responseType: 'arraybuffer' });
  let imageBuffer = Buffer.from(response.data, 'binary');

  // إرسال الصورة مع رسالة الحظر
  await conn.sendMessage(m.chat, {
    image: imageBuffer,
    caption: '> *\`『 تم كتم البوت 』\`*\n\n- *مدة الكتم${args[0]}*'
  });

  // إزالة الحظر تلقائيًا بعد انتهاء المدة المحددة
  setTimeout(async () => {
    global.db.data.chats[m.chat].isBanned = false;
    global.db.data.chats[m.chat].banUntil = null;
    await conn.sendMessage(m.chat, { react: { text: "🧚🏻‍♂️", key: m.key } });
    conn.reply(m.chat, '> *\`『 تم فك الكتم🧚🏻‍♂️ 』\`*');
  }, duration);
};

// Check ban status before executing other commands
const checkBan = async (m, next) => {
  if (global.db.data.chats[m.chat]?.isBanned) {
    if (Date.now() > global.db.data.chats[m.chat].banUntil) {
      // Ban period expired, lift the ban
      global.db.data.chats[m.chat].isBanned = false;
      global.db.data.chats[m.chat].banUntil = null;
      m.reply('> *\`『 تم فك الكتم 🧚🏻‍♂️ 』\`*');
    } else {
      // Still banned
      const remainingTime = global.db.data.chats[m.chat].banUntil - Date.now();
      const days = Math.floor(remainingTime / (24 * 60 * 60 * 1000));
      const hours = Math.floor((remainingTime % (24 * 60 * 60 * 1000)) / (60 * 60 * 1000));
      const minutes = Math.floor((remainingTime % (60 * 60 * 1000)) / (60 * 1000));
      const seconds = Math.floor((remainingTime % (60 * 1000)) / 1000);
      m.reply(`*⌜🧚🏻‍♂️⌝*\n*هذا الشات محظور من استعمالي*\n\n- *⏳ الوقت المتبقي ليكون بأمكانكم استعمالي مره اخري هو ${days} يوم ${hours} ساعة ${minutes} دقيقه ${seconds} ثانيه*`);
      return;
    }
  }
  next();
};

handler.checkBan = checkBan;
handler.help = ['اكتم'];
handler.tags = ['ow'];
handler.command = /^اكتم|كتم$/i;
handler.owner = true;
export default handler;
