import axios from 'axios';
let handler = async(m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-boruto.json`)).data;
    let url = await res[Math.floor(res.length * Math.random())];
    await conn.sendButton(m.chat, "بـوروتـو 🔥", "𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓", url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m);
}

handler.help = ['anna'];
handler.tags = ['internet'];
handler.command = /^(boruto|بوروتو)$/i;

export default handler;
