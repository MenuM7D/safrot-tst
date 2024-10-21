import cp from 'child_process';
import { promisify } from 'util';
const exec = promisify(cp.exec).bind(cp);
const handler = async (m) => {
  await conn.reply(m.chat, '> *\`『 ويت🧚🏻‍♂️ 』\`*', m);
  let o;
  try {
    o = await exec('python3 speed.py');
  } catch (e) {
    o = e;
  } finally {
    const { stdout, stderr } = o;
    if (stdout.trim()) {
      const arabicOutput = stdout
        .replace(/< INFO - SPEEDTEST \/>/, '> *\`『 معلومات الاخطبار 』\`*')
        .replace(/Iniciando prueba.../, '> *\`『 بداء الاخطبار 』\`*')
        .replace(/Buscando servidor.../, '> *\`『 البحث عن الخادم 』\`*')
        .replace(/Se selecionó el mejor servidor.../, '> *\`『 تم الخطبار 』\`*')
        .replace(/ISP:/, '> *\`『 مزود الخدمه 』\`*')
        .replace(/Servidor:/, '> *\`『 الخادم 』\`*')
        .replace(/Ubicación:/, '> *\`『 الموقع 』\`*')
        .replace(/Latencia:/, '> *\`『 الزمن المستغرق 』\`*')
        .replace(/Descarga:/, '> *\`『 سرعة التنزيل 』\`*')
        .replace(/Subida:/, '>*\`『 سرعة الرفع 』\`*');
        
      m.reply(arabicOutput);
    }
    if (stderr.trim()) m.reply(stderr);
  }
};
handler.help = ['سرعه'];
handler.tags = ['معلومات'];
handler.command = /^(speedtest?|test?speed)|سرعه$/i;

export default handler;