import { sticker } from '../lib/sticker.js'
let handler = async(m, { conn }) => {
 
    const s = [
"https://telegra.ph/file/38b0f2095cd7216586911.jpg"
    ];  
    
    let stiker = await sticker(null, s[Math.floor(Math.random() * s.length)])
    if (stiker) {
        conn.sendFile(m.chat, stiker, 'sticker.webp', '', m)
    }
}

handler.customPrefix = /(سكس|هات سكس|.سكس|.هات سكس)$/i;
handler.command = new RegExp
handler.exp = 50
export default handler
