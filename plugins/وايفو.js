import fetch from 'node-fetch';
const handler = async (m, {conn, usedPrefix, command}) => {
  const res = await fetch('https://api.waifu.pics/sfw/waifu');
  if (!res.ok) throw await res.text();
  const json = await res.json();
  if (!json.url) throw 'Error!';
  
  // تفعيل الزر لعرض الصورة
  conn.sendButton(m.chat, '*\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`*', '🙈💕', json.url, [['صوره تاني🧚🏻‍♂️', `/${command}`]], m);
};
handler.help = ['waifu'];
handler.tags = ['anime'];
handler.command = /^(waifu|وايفو)$/i;
export default handler;
