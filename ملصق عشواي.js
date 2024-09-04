import { sticker } from '../lib/sticker.js';

const handler = async (m, { conn }) => {

  const images = [
    "https://telegra.ph/file/0f6b7d5dfc1f08de9604d.jpg",
    "https://telegra.ph/file/20aa662b697496b6fab61.jpg",
    "https://telegra.ph/file/751c822ced4b767c7de31.jpg",
    "https://telegra.ph/file/98b7ac1c56ec98e3b528d.jpg",
    "https://telegra.ph/file/8c1590f9a89adf13de6e6.jpg",
    "https://telegra.ph/file/434bc3fdfdc8d9c7880a0.jpg",
    "https://telegra.ph/file/4548aae21a5c5a39f3099.jpg"
  ];

  // التأكد من إن الشات مش متبند وإن الملفات الصوتية مفعلة
  const chat = global.db.data.chats[m.chat];
  if (!chat.isBanned && chat.audios) {

    // تحديد المشاركين في الشات اللي ممكن يتبعتلهم ملصق
    const participants = m.participants.filter(p => p.jid !== m.sender && !p.isAdmin && !p.isSuperAdmin);
    if (participants.length > 0) {
      // اختيار مستخدم عشوائي من المشاركين
      const randomParticipant = participants[Math.floor(Math.random() * participants.length)].jid;

      // اختيار صورة عشوائية وتحويلها لملصق
      const vn = images[Math.floor(Math.random() * images.length)];
      let stiker = await sticker(false, vn, global.packname, global.author);

      // إرسال الملصق للمستخدم العشوائي
      if (stiker) {
        conn.sendPresenceUpdate('recording', randomParticipant);
        conn.sendFile(randomParticipant, stiker, 'sticker.webp', '', null);
      }
    }
  }
  return true;
};

export default handler;
