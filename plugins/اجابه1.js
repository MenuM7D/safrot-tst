import similarity from 'similarity'
const threshold = 0.72
let handler = async (m, { conn, command, usedPrefix }) => {
    conn.tebakbendera = conn.tebakbendera ? conn.tebakbendera : {}
    let id = m.chat
    if (id in conn.tebakbendera) {
        conn.reply(m.chat, '', conn.tebakbendera[id][0])
        throw false
    }
    
    let src = await (await fetch('')).json()
    let json = src[Math.floor(Math.random() * src.length)]
    let caption = ``.trim()

    conn.tebakbendera[id] = [
        await conn.sendFile(m.chat, json.img, '', caption, m),
        json, poin,
        setTimeout(() => {
            if (conn.tebakbendera[id]) {
                m.reply(``, conn.tebakbendera[id][0])
                delete conn.tebakbendera[id]
            }
        }, timeout)
    ]
}

handler.before = async function (m) {
    let id = m.chat
    if (!conn.tebakbendera || !(id in conn.tebakbendera)) return !0

    if (m.text.toLowerCase() == '.انسحب') {
        global.db.data.users[m.sender].exp -= conn.tebakbendera[id][2]
        m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*\n*⦧🚶‍♂️⦨ تـم الانسحاب*\n
- *الـاجــابــة كــانــت↜${conn.tebakbendera[id][1].name}*\n*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`.trim())
        clearTimeout(conn.tebakbendera[id][3])
        delete conn.tebakbendera[id]
        return !0
    }

    if (m.text.toLowerCase() == '.تلميح') {
        if (!(id in conn.tebakbendera)) return

        let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
        let answer = json.name
        const halfLength = Math.ceil(answer.length / 2)
        const hint = answer.substring(0, halfLength)

        const deduction = Math.floor(conn.tebakbendera[id][2] * 0.25)
        global.db.data.users[m.sender].exp -= deduction

        m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
> *🧚🏻‍♂️ نص الاجابـة اهي↜${hint}*

> *\`『🧚🏻‍♂️ تم اظهار نص الاجابه 』\`*

> *📛 قــد تــم خصم ${deduction} XP كجزء من استخدام التلميح*

━━━━━━❰･𓃦･❱━━━━━━`.trim())
        return !0
    }

    if (!m.quoted || !m.quoted.fromMe || !/^/i.test(m.quoted.text)) return !0
    if (m.quoted.id == conn.tebakbendera[id][0].id) {
        let json = JSON.parse(JSON.stringify(conn.tebakbendera[id][1]))
        if (m.text.toLowerCase() == json.name.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += conn.tebakbendera[id][2]
            m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
> *\`『 🧚🏻‍♂️ اجابه صح 』\`*

- *🎁 جــازتك↜${conn.tebakbendera[id][2]} XP*

*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
            clearTimeout(conn.tebakbendera[id][3])
            delete conn.tebakbendera[id]
        } else if (similarity(m.text.toLowerCase(), json.name.toLowerCase().trim()) >= threshold) {
            m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
> *\`『 قربت من الاجابه 』\`*

> *\`『 عيد المحوله 』\`*

*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
        } else {
            m.reply(`- > *🧚🏻‍♂️ الاجابه غلط*`.trim())
        }
    }
    return !0
}

handler.exp = 0

export default handler
