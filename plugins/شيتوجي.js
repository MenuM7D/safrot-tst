import axios from 'axios';
let handler = async(m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-chitoge.json`)).data;
    let url = await res[Math.floor(res.length * Math.random())];
    await conn.sendButton(m.chat, "شيتوجي 😽", "𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓", url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m);
}

handler.help = ['anna'];
handler.tags = ['internet'];
handler.command = /^(chitoge|شيتوجي)$/i;

export default handler;
