import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-kaga.json`)).data  
  let url = res[Math.floor(res.length * Math.random())]
  
  conn.sendButton(m.chat, `*_كـاغـا 🤗*_`, author, url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
}

handler.help = ['anna']
handler.tags = ['internet']
handler.command = /^(kaga|كاغا)$/i

export default handler
