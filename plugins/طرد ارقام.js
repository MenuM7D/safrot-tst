/*              كود إنشاء بواسطة سفروت الفقدان

*/
const handler = async (m, {conn, args, groupMetadata, participants, usedPrefix, command, isBotAdmin, isSuperAdmin}) => {
  if (!args[0]) return m.reply(`*[❗]  أدخل كود البلد اللي عاوز تدور على أرقام منه في الجروب ده، مثال: ${usedPrefix + command} 52*`);
  if (isNaN(args[0])) return m.reply(`*[❗]  أدخل كود البلد اللي عاوز تدور على أرقام منه في الجروب ده، مثال: ${usedPrefix + command} 52*`);
  const lol = args[0].replace(/[+]/g, '');
  const ps = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
  const bot = global.db.data.settings[conn.user.jid] || {};
  if (ps == '') return m.reply(`*[❗]  مفيش أي رقم في الجروب ده يبدأ بالكود +${lol}*`);
  const numeros = ps.map((v)=> '⭔ @' + v.replace(/@.+/, ''));
  const delay = (time) => new Promise((res)=>setTimeout(res, time));
  switch (command) {
    case 'listanum': case 'listnum':
      conn.reply(m.chat, `*قائمة بالأرقام اللي بتبدأ بالكود +${lol} الموجودة في الجروب ده:*\n\n` + numeros.join`\n`, m, {mentions: ps});
      break;
    case 'kicknum':
      if (!bot.restrict) return m.reply('*[❗]  مالك البوت مش مفعّل القيود (#enable restrict)، اتواصل معاه عشان يفعلها*');
      if (!isBotAdmin) return m.reply('*[❗]  البوت مش أدمن، مش ممكن يطرد الأشخاص*');
      conn.reply(m.chat, `*[❗]  هيبدأ طرد الأرقام اللي بتبدأ بالكود +${lol}، كل ١٠ ثواني هيتم طرد مستخدم واحد*`, m);
      const ownerGroup = m.chat.split`-`[0] + '@s.whatsapp.net';
      const users = participants.map((u) => u.id).filter((v) => v !== conn.user.jid && v.startsWith(lol || lol));
      for (const user of users) {
        const error = `@${user.split('@')[0]}  تم طرده أو غادر الجروب بالفعل*`;
        if (user !== ownerGroup + '@s.whatsapp.net' && user !== global.conn.user.jid && user !== global.owner + '@s.whatsapp.net' && user.startsWith(lol || lol) && user !== isSuperAdmin && isBotAdmin && bot.restrict) {
          await delay(2000);
          const responseb = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
          if (responseb[0].status === '404') m.reply(error, m.chat, {mentions: conn.parseMention(error)});
          await delay(10000);
        } else return m.reply('*[❗]  خطأ*');
      }
      break;
  }
};
handler.command = /^(listanum|kicknum|listnum)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
