import axios from 'axios';
let handler = async(m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-akiyama.json`)).data;
    let url = await res[Math.floor(res.length * Math.random())];
    await conn.sendButton(m.chat, "اكـيـامـا 🐤", " 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓", url, [['🧚🏻‍♂️ تاني ', `${usedPrefix + command}`]], m);
}

handler.help = ['اكياما'];
handler.tags = ['internet'];
handler.command = /^(akiyama|اكياما)$/i;

export default handler;
