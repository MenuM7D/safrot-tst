// import { areJidsSameUser } from '@adiwajshing/baileys'
let areJidsSameUser = (await import(global.baileys)).default;
let handler = async (m, { conn, text, participants, args, command }) => {
  let member = participants.map(u => u.id);
  if (!text) {
    var sum = member.length;
  } else {
    var sum = text;
  }
  var total = 0;
  var sider = [];
  for (let i = 0; i < sum; i++) {
    let users = m.isGroup ? participants.find(u => u.id == member[i]) : {};
    if ((typeof global.db.data.users[member[i]] == 'undefined' || global.db.data.users[member[i]].chat == 0) && !users.isAdmin && !users.isSuperAdmin) {
      if (typeof global.db.data.users[member[i]] !== 'undefined') {
        if (global.db.data.users[member[i]].whitelist == false) {
          total++;
          sider.push(member[i]);
        }
      } else {
        total++;
        sider.push(member[i]);
      }
    }
  }
  const delay = time => new Promise(res => setTimeout(res, time));
  switch (command) {
    case "fantasmas":
      if (total == 0) return conn.reply(m.chat, `*⚠️ المجموعة دي نشيطة ومفيهاش فانتاسمات :D*`, m);
      m.reply(`⚠️ *فحص الناس الخاملة ⚠️*\n\n*المجموعة:* ${await conn.getName(m.chat)}\n*عدد الأعضاء:* ${sum}\n\n*👻 قائمة الفانتاسمات 👻*\n${sider.map(v => '  👉🏻 @' + v.replace(/@.+/, '')).join('\n')}\n\n*ملاحظة: ممكن مش كلهم فانتاسمات بنسبة 100%، البوت بيبدأ يحسب الرسائل من وقت تفعيله في المجموعة.*`, null, { mentions: sider });
      break;
    case "kickfantasmas":
      if (total == 0) return conn.reply(m.chat, `*⚠️ المجموعة دي نشيطة ومفيهاش فانتاسمات :D*`, m);
      await m.reply(`⚠️ *حذف الناس الخاملة ⚠️*\n\n*المجموعة:* ${await conn.getName(m.chat)}\n*عدد الأعضاء:* ${sum}\n\n*👻 الفانتاسمات المحذوفة 👻*\n${sider.map(v => '@' + v.replace(/@.+/, '')).join('\n')}\n\n*البوت هيبدأ يحذف القائمة المذكورة بعد 20 ثانية، وكل 10 ثواني هيحذف رقم.*`, null, { mentions: sider });
      await delay(20 * 1000);
      let chat = global.db.data.chats[m.chat];
      chat.welcome = false;
      try {
        let users = m.mentionedJid.filter(u => !areJidsSameUser(u, conn.user.id));
        let kickedGhost = sider.map(v => v.id).filter(v => v !== conn.user.jid);
        for (let user of users)
          if (user.endsWith('@s.whatsapp.net') && !(participants.find(v => areJidsSameUser(v.id, user)) || { admin: true }).admin) {
            let res = await conn.groupParticipantsUpdate(m.chat, [user], 'remove');
            kickedGhost.concat(res);
            await delay(10 * 1000);
          }
      } finally {
        chat.welcome = true;
      }
      break;
  }
};
handler.command = /^(fantasmas|kickfantasmas)$/i;
handler.group = handler.botAdmin = handler.admin = true;
handler.fail = null;
export default handler;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

// desarrollado por https://github.com/ReyEndymion
// participa en desactivacion de despedida https://github.com/BrunoSobrino/
