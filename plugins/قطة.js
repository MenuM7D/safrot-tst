import fetch from 'node-fetch'
import { sticker } from '../lib/sticker.js'

let handler = async (m, { conn }) => {
try {
    let res = await fetch(global.API('https://nekos.life/api/v2', '/img/meow'))
    let json = await res.json()
    let stiker = await sticker(null, json.url, global.packname, global.author)
    if (stiker) return conn.sendFile(m.chat, stiker, 'sticker.gif', '', m, false, {
        asSticker: true
    })
    throw stiker.toString()
} catch {
await m.react('✖️')
}}
handler.help = ['قطة']
handler.tags = ['ستيكر']
handler.command = /^قطة|ستيكر_قطة|قطة_ستيكر$/i

export default handler
