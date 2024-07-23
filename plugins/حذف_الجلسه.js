import { readdirSync, unlinkSync, existsSync, promises as fs, rmSync } from 'fs';
import path from 'path';

const handler = async (m, { conn, usedPrefix }) => {
  if (global.conn.user.jid !== conn.user.jid) {
    return conn.sendMessage(m.chat, {text: '*استخدم هذا الأمر مباشرة من الرقم الرئيسي للروبوت*'}, {quoted: m});
  }
  const chatId = m.isGroup ? [m.chat, m.sender] : [m.sender];
  const sessionPath = './sessions'
  try {
    const files = await fs.readdir(sessionPath);
    let filesDeleted = 0;
    for (const file of files) {
      for (const id of chatId) {
        if (file.includes(id.split('@')[0])) {
          await fs.unlink(path.join(sessionPath, file));
          filesDeleted++;
          break;
        }
      }
    } 
    if (filesDeleted === 0) {
      await conn.sendMessage(m.chat, {text: '*ملقيناش أي ملف بيحتوي على معرف الدردشة*'}, {quoted: m});
    } else {
      await conn.sendMessage(m.chat, {text: `*تم حذف ${filesDeleted} ملفات جلسة*`}, {quoted: m});
    }
  } catch (err) {
    console.error('حصل خطأ أثناء قراءة المجلد أو ملفات الجلسة:', err);
    await conn.sendMessage(m.chat, {text: '*حصل خطأ أثناء حذف ملفات الجلسة*'}, {quoted: m});
  }
  await conn.sendMessage(m.chat, {text: `*أهلاً، تقدر تشوفني دلوقتي؟*`}, {quoted: m});
};

handler.help = ['ds'];
handler.tags = ['tools'];
handler.command = /^(حذف_الجلسه|ds)$/i;

export default handler;
