import gtts from 'node-gtts';
import {readFileSync, unlinkSync} from 'fs';
import {join} from 'path';
const defaultLang = 'es'; // اللغة الافتراضية هي الإسبانية
const handler = async (m, {conn, args, usedPrefix, command}) => {
  let lang = args[0];
  let text = args.slice(1).join(' ');
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted?.text) text = m.quoted.text;
  conn.sendPresenceUpdate('recording', m.chat); // إرسال تحديث الحالة إلى "تسجيل"
  let res;
  try {
    res = await tts(text, lang);
  } catch (e) {
    m.reply(e + '');
    text = args.join(' ');
    if (!text) throw `*🧚🏼‍♂️ اكتب النص اللي عايز تحوله لملاحظة صوتية، مثال:* ${usedPrefix + command} es Hola negros`;
    res = await tts(text, defaultLang);
  } finally {
    if (res) conn.sendFile(m.chat, res, 'tts.opus', null, m, null, fake, true);
  }
};
handler.help = ['tts <lang> <teks>'];
handler.tags = ['convertidor'];
handler.command = /^g?tts$/i;
handler.register = true;
export default handler;

function tts(text, lang = 'es') {
  console.log(lang, text);
  return new Promise((resolve, reject) => {
    try {
      const tts = gtts(lang);
      const filePath = join(global.__dirname(import.meta.url), '../tmp', (1 * new Date) + '.wav');
      t
