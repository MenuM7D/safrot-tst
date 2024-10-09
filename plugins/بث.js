let handler = async (m, { conn, command, usedPrefix }) => {
    let name = await conn.getName(m.sender)
    let usuario = `${m.sender.split("@")[0]}`
    let aa = `${usuario}@s.whatsapp.net`
    let _uptime = process.uptime() * 1000
    let _muptime = 0
    if (process.send) { 
        process.send('uptime')
        _muptime = await new Promise(resolve => { 
            process.once('message', resolve) 
            setTimeout(resolve, 1000) 
        }) * 1000
    }

    let fkontak = { 
        "key": { 
            "participants": "0@s.whatsapp.net", 
            "remoteJid": "status@broadcast", 
            "fromMe": false, 
            "id": "Halo" 
        }, 
        "message": { 
            "contactMessage": { 
                "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` 
            }
        }, 
        "participant": "0@s.whatsapp.net" 
    }

    let uptime = clockString(_uptime)
    let estado = `${pickRandom([
        '*\`『 يساتر🐤 』\`*',
        '*\`『 اسمي سفروت🧚🏻‍♂️ 』\`*',
        '*\`『 مش عارف تقول سفروت🧚🏻‍♂️ 』\`*',
        '*\`『 انت الي بوت🧚🏻‍♂️ 』\`*',
        '*\`『 انت الي بوت اسمي سفروت🧚🏻‍♂️ 』\`*'
    ])}`
    
    await conn.sendMessage(m.chat, {text: estado, mentions: [m.sender]}, {quoted: fkontak})
}

handler.help = ['estado']
handler.tags = ['main']
handler.command = /^(بوت(us)?)$/i
export default handler

function pickRandom(list) {
    if (list.length === 0) return 'لا يوجد حالات متاحة'
    return list[Math.floor(Math.random() * list.length)]
}

function clockString(ms) {
    let h = isNaN(ms) ? '--' : Math.floor(ms / 3600000)
    let m = isNaN(ms) ? '--' : Math.floor(ms / 60000) % 60
    let s = isNaN(ms) ? '--' : Math.floor(ms / 1000) % 60
    return [h, m, s].map(v => v.toString().padStart(2, 0)).join(':')
}