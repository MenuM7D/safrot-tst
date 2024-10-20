import cp from "child_process";
import { promisify } from "util";

const exec = promisify(cp.exec).bind(cp);

var handler = async (m, { conn }) => {
    let o;
    await conn.reply(m.chat, global.wait, m); // بيرد على المستخدم وبيقوله استنى
    try {
        o = await exec('python3 speed.py --secure --share'); // بيشغل الأمر الخاص بقياس السرعة
        const { stdout, stderr } = o;
        if (stdout.trim()) {
            const match = stdout.match(/http[^"]+\.png/); // بيشوف إذا في رابط صورة
            const urlImagen = match ? match[0] : null;
            await conn.sendMessage(m.chat, { image: { url: urlImagen }, caption: stdout.trim() }, { quoted: m }); // بيبعت النتيجة وصورة السرعة لو لقاها
        }
        if (stderr.trim()) {
            const match2 = stderr.match(/http[^"]+\.png/); // نفس الموضوع لو في خطأ
            const urlImagen2 = match2 ? match2[0] : null;
            await conn.sendMessage(m.chat, { image: { url: urlImagen2 }, caption: stderr.trim() }, { quoted: m });
        }
    } catch (e) {
        o = e.message;
        return m.reply(o); // بيرد بالرسالة لو حصل خطأ
        console.log(e);
    }
}
handler.help = ["اختبارسرعة"]; // المساعدة للكود
handler.tags = ["رئيسي"]; // العلامات
handler.command = /^(اختبار|اختبارسرعة)$/i; // الأمر المستخدم في الشات

export default handler;
