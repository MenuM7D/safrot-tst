import fetch from 'node-fetch'
let handler = async (m, { conn, command }) => {
  let ne = await (await fetch('https://raw.githubusercontent.com/ArugaZ/grabbed-results/main/random/anime/neko.txt')).text()
  let nek = ne.split('\n')
  let neko = pickRandom(nek)
  
  // إرسال الزر فقط لعرض الصورة
  conn.sendButton(m.chat, '~ 🐾💗', '𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩', neko, [['صوره تاني🧚🏻‍♂️', `/${command}`]], null, null, m)
}

handler.command = /^(neko|نيكو)$/i
handler.tags = ['anime']
handler.help = ['neko']
export default handler

function pickRandom(list) {
  return list[Math.floor(Math.random() * list.length)]
    }
