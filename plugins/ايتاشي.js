import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-itachi.json`)).data  
  let url = res[Math.floor(res.length * Math.random())]
  
  conn.sendButton(m.chat, `_*إيـتـاشـي 🤤*_`, author, url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
}

handler.help = ['anna']
handler.tags = ['internet']
handler.command = /^(itachi|ايتاشي)$/i

export default handler
