let handler = async(m, { conn, text }) => {

  const usageMessage = '*\`『 اعمل ريب ع الي عايز تبعبصو😹🐤 』\`*';

  const who = m.mentionedJid[0] 
    || (m.quoted ? m.quoted.sender : text ? text.replace(/[^0-9]/g, '') + '@s.whatsapp.net' : false);

  if (!who) return conn.reply(m.chat, usageMessage, m, { mentions: [m.sender] });

  let user = who.split('@')[0];

  let sender = m.sender.split('@')[0];

  let cap;
  if (user === '201115618853' || user === '201023553649') {  // اضافة الرقمين الممنوعين هنا
    cap = `*@${sender} يبعبص نفسه*`;
  } else {
    cap = `*@${sender} يبعبص طيز @${user}*`;
  }

  let {key} = conn.sendMessage(m.chat, {text: cap, mentions: [m.sender, who]}, { quoted: m });

}

handler.customPrefix = ['بعبص'];
handler.command = new RegExp;
export default handler;