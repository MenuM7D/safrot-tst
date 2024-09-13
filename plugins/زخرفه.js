import fetch from 'node-fetch'
import { JSDOM } from 'jsdom'

let handler = async (m, { conn, text }) => {
    conn.reply(m.chat, Object.entries(await stylizeText(text ? text : m.quoted && m.quoted.text ? m.quoted.text : m.text)).map(([name, value]) => `*${name}*\n${value}`).join`\n\n`, m)
}

handler.help = ['style'].map(v => v + ' *<هات النص معا الامر🧚🏼‍♂️>*')
handler.tags = ['tools']
handler.command = /^(style|زخرفه|زخرفة(text)?)$/i
//handler.register = true
handler.limit = 1

export default handler

async function stylizeText(text) {
    let res = await fetch('http://qaz.wtf/u/convert.cgi?text=' + encodeURIComponent(text))
    let html = await res.text()
    let dom = new JSDOM(html)
    let table = dom.window.document.querySelector('table').children[0].children
    let obj = {}
    for (let tr of table) {
        let name = tr.querySelector('.aname').innerHTML
        let content = tr.children[1].textContent.replace(/^\n/, '').replace(/\n$/, '')
        obj[name + (obj[name] ? '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿' : '')] = content
    }
    return obj
      }
