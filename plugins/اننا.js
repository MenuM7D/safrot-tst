import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-anna.json`)).data  
  let url = res[Math.floor(res.length * Math.random())]
  
  conn.sendButton(m.chat, `*عشوائي 🗿*`, author, url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
}

handler.help = ['anna']
handler.tags = ['internet']
handler.command = /^(anna|اننا)$/i

export default handler
