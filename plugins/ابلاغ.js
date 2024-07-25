let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) 
    return conn.reply(m.chat, `⚠️ إكتب الخطأ أو الأمر مع سبب المشكلة\n\n*مثال:* ${usedPrefix + command} اللاصق مش شغال`, m, {contextInfo: { externalAdReply: { mediaUrl: null, mediaType: 1, description: null, title: mg, previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}});
  
  if (text.length < 8) 
    throw `🧚🏼‍♂️ *\`『 لازم علشان تقدر تبعت البلاغ تكون معدي ال15 حرف 』\`*`;
  
  if (text.length > 1000) 
    throw `🧚🏼‍♂️ *\`『 الحد  الأقصى هو 1000 حرف عشان تعمل التقرير 』\`*`;
  
  let teks = `┏╼╾╼⧼⧼⧼ \`『 تحذير 』\` ⧽⧽⧽╼╼╼┓
╏• *\`『 رقم 』\`:* Wa.me/${m.sender.split`@`[0]}
╏• *\`『 رساله 』\`:* ${text}
┗╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼╼`;

  await delay(1 * 1000);
  
  conn.reply(m.chat, `🧚🏼‍♂️ *\`『 الابلاغ  تم إرساله لمطور البوت، هتلقى رد قريب، لو كان الابلاغ غير صحيح هيتم تجاهله 』\`*`, m, {contextInfo: { externalAdReply: { mediaUrl: null, mediaType: 1, description: null, body: 'ناجح', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}});
  
  // إرسال التقرير للمدير
  await delay(3 * 3000);
  conn.reply('201115618853@s.whatsapp.net', m.quoted ? teks + m.quoted.text : teks, null, {contextInfo: {mentionedJid: [m.sender]}});
}

handler.help = ['reporte', 'request'].map(v => v + ' <teks>');
handler.tags = ['main'];
handler.exp = 25; 
handler.command = /^(تقرير|ابلاغ|reporte|bugs|bug|report-owner|reportes|reportar)$/i; 
//handler.register = true; 
export default handler;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));
