import axios from 'axios'

let handler = async (m, { conn, usedPrefix, command }) => {
  let res = (await axios.get(`https://raw.githubusercontent.com/BrunoSobrino/TheMystic-Bot-MD/master/src/JSON/anime-chiho.json`)).data  
  let url = res[Math.floor(res.length * Math.random())]
  
  // إرسال الزر مع الصورة
  conn.sendButton(m.chat, `_*تشيهو عشوائيه 🌚*_`, author, url, [['🧚🏻‍♂️ صوره تاني', `${usedPrefix + command}`]], m)
}

handler.help = ['anna']
handler.tags = ['internet']
handler.command = /^(chiho|تشيهو)$/i

export default handler
