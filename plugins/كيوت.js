import fetch from 'node-fetch';
const handler = async (m, {conn, command}) => {
  const ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text();
  const nek = ne.split('\n');
  const neko = await nek[Math.floor(Math.random() * nek.length)];
  if (neko == '') throw 'خطأ';
  
  // عرض الزر فقط
  conn.sendButton(m.chat, '*`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』`*', '🥺💕', neko, [['🧚🏻‍♂️ صوره تاني ', `/${command}`]], m);
};
handler.command = /^(كيوت|كيت)$/i;
handler.tags = ['انمي'];
handler.help = ['نيكو'];
export default handler;
