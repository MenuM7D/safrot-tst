
import fetch from 'node-fetch';

const handler = async (m, { conn, text, usedPrefix, command }) => {

  try {

    const name = "سفروت";

    const anime = "مطوري سفروت"; 
    if (!text) {
      return conn.reply(m.chat, `*\`『 🧚🏻‍♂️قول عايز اي معا الامر سفروت 』\`*`, m);
    }
      
    const response = await fetch(`https://joanimi-apis-for-devs.vercel.app/api/cai/v1?name=${name}&anime=${anime}&text=${text}`);
    const data = await response.json();
    const result = data.result;
    if (!result) {
      return conn.reply(m.chat, 'للاسف مافيش اجابه.', m);
    }
    conn.reply(m.chat, result, m);
  } catch (error) {
    throw error
  }
};

handler.help = ['سفروت'];
handler.tags = ['ai'];
handler.command = /^(سفروت)$/i;
export default handler;
