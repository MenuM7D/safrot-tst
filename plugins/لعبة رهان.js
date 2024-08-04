import db from '../lib/database.js'

let buatall = 1
let cooldowns = {}

let handler = async (m, { conn, args, usedPrefix, command, DevMode }) => {
    let user = global.db.data.users[m.sender]
    let randomaku = `${Math.floor(Math.random() * 101)}`.trim()
    let randomkamu = `${Math.floor(Math.random() * 55)}`.trim()
    let Aku = (randomaku * 1)
    let Kamu = (randomkamu * 1)
    let count = args[0]
    let who = m.fromMe ? conn.user.jid : m.sender
    let username = conn.getName(who)
    
    let tiempoEspera = 15
    
    if (cooldowns[m.sender] && Date.now() - cooldowns[m.sender] < tiempoEspera * 1000) {
        let tiempoRestante = segundosAHMS(Math.ceil((cooldowns[m.sender] + tiempoEspera * 1000 - Date.now()) / 1000))
        conn.reply(m.chat, `🍭 انت بدأت رهان بالفعل، استنى *⏱ ${tiempoRestante}* علشان تقدر تراهن تاني`, m)
        return
    }
    
    cooldowns[m.sender] = Date.now()
    
    count = count ? /all/i.test(count) ? Math.floor(global.db.data.users[m.sender].limit / buatall) : parseInt(count) : args[0] ? parseInt(args[0]) : 1
    count = Math.max(1, count)
    if (args.length < 1) return conn.reply(m.chat, '🍭 اكتب كمية ' + `*🍬 الحلويات*` + ' اللي عايز تراهن بيها ضد' + ` *Sumi Sakurasawa*` + `\n\n` + '`مثال:`\n' + `> *${usedPrefix + command}* 100`, m)

    if (user.limit >= count * 1) {
        user.limit -= count * 1
        if (Aku > Kamu) {
            conn.reply(m.chat, '`🍟 يلا نشوف الأرقام!`\n\n'+ `➠ *🧚🏼‍♂️ \`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *خسرت* ${formatNumber(count)} 🍬 حلويات.`.trim(), m)
        } else if (Aku < Kamu) {
            user.limit += count * 2
            conn.reply(m.chat, '`🍟 يلا نشوف الأرقام!`\n\n'+ `➠ *🧚🏼‍♂️\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username}, *كسبت* ${formatNumber(count * 2)} 🍬 حلويات.`.trim(), m)
        } else {
            user.limit += count * 1
            conn.reply(m.chat, '`🍟 يلا نشوف الأرقام!`\n\n'+ `➠ *🧚🏼‍♂️\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`* : ${Aku}\n➠ *${username}* : ${Kamu}\n\n> ${username} حصلت على ${formatNumber(count * 1)} 🍬 حلويات.`.trim(), m)
        }
    } else conn.reply(m.chat, `معندكش *${formatNumber(count)} 🍬 حلويات* تراهن بيهم!`.trim(), m)
}

handler.help = ['رهان *<كمية>*']
handler.tags = ['game']
handler.command = /^(رهان|casino)$/i
handler.register = true

handler.fail = null

export default handler

function pickRandom(list) {
    return list[Math.floor(Math.random() * list.length)]
}

function segundosAHMS(seconds) {
    let remainingSeconds = seconds % 60
    return `${remainingSeconds} ثواني`
}

function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}
