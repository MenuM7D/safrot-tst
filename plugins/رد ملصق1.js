let axios = require('axios')
const { MessageType } = require('@adiwajshing/baileys')

let handler = async (m, { conn }) => {
    try {
        await conn.sendMessage(m.chat, '*خد حط ده فطيزك🦦🤣*', MessageType.text, { quoted: m })
        let res = await axios.get('https://telegra.ph/file/cffe0af145671ef774d10.jpg', { responseType: 'arraybuffer' })
        if (!res.data) throw 'Failed to fetch data'
        let sticker = await conn.sticker(res.data, false, { packname: 'Sticker Pack', author: '@example' })
        await conn.sendMessage(m.chat, sticker, MessageType.sticker, { quoted: m })
        await conn.sendMessage(m.chat, 'Here is your sticker!', MessageType.text, { quoted: m })
    } catch (error) {
        await conn.sendMessage(m.chat, 'Sorry, something went wrong.', MessageType.text, { quoted: m })
    }
}

handler.command = /^(سكس)$/i
