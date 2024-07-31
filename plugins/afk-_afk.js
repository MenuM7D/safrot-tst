export function before(m) {
  const user = global.db.data.users[m.sender];
  if (user.afk > -1) {
    m.reply(`╭━─━─━─≪☣️≫─━─━─━╮
┃رجعت من وضع AFK
┃${user.afkReason ? '🔸️ *السبب :* ' + user.afkReason : ''}*
┃🔸 *كنت غايب لمدة* ${(new Date - user.afk).toTimeString()}*
╰━─━─━─≪☣️≫─━─━─━╯ `.trim());
    user.afk = -1;
    user.afkReason = '';
  }
  const jids = [...new Set([...(m.mentionedJid || []), ...(m.quoted ? [m.quoted.sender] : [])])];
  for (const jid of jids) {
    const user = global.db.data.users[jid];
    if (!user) {
      continue;
    }
    const afkTime = user.afk;
    if (!afkTime || afkTime < 0) {
      continue;
    }
    const reason = user.afkReason || '';
    m.reply(`💤 ﻣﺗﻌﻣﻠﺷ ﻣﻧﺷﻧﺍﺕ لﻟﻧﺎﺱ ﻓﻭﺿﻊ ﺍﻟﺧﻣﻭﻝ (AFK) 💤
ﺍﻟﺷﺧﺹ ﺍﻟﻠﻲ ﺫﻛﺭﺗﻪ ﺩﻭﺕ ﻓﻭﺿﻊ ﺍﻟﺧﻣﻭﻝ (AFK)

*🔸 ${reason ? 'سبب الغياب (AFK): ' + reason : 'سبب الغياب (AFK): المستخدم ماحددش سبب للغياب'}*
*🔸 مدة الغياب (AFK): ${(new Date - afkTime).toTimeString()}*
  `.trim());
  }
  return true;
    }
