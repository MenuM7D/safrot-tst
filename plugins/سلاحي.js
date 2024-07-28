import axios from 'axios'
let handler = async(m, { conn, usedPrefix, command }) => {
let res = (await axios.get(`https://raw.githubusercontent.com/Darkshadow201293/ShadowMedia-MD/main/Shadow.json`)).data  
let url = await res[Math.floor(res.length * Math.random())]
conn.sendFile(m.chat, url, 'error.jpg', `انت بمواجهة زومبي عددهم ${Math.floor(Math.random() * 150)}  وانت عدك ${Math.floor(Math.random() * 150)}  طلقة، نسبة أنك تبقى عايش: ${Math.floor(Math.random() * 100)} % وسلاحك هو: `, m)}

handler.help = ['سلاحي']
handler.tags = ['سلاحي']
handler.command = /^(سلاح|سلاحي)$/i
export default handler
