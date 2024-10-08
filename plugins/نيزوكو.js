import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
    let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-nezuko.json`)).data  
    let url = await res[Math.floor(res.length * Math.random())]
    conn.sendButton(m.chat, "*نيزيكو 🐤*", author, url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
}

handler.help = ['نيزيكو']
handler.tags = ['internet']
handler.command = /^(نيزيكو|نيزوكو)$/i

export default handler
