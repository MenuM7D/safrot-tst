import similarity from 'similarity'

const threshold = 0.72

let handler = m => m

handler.before = async function (m) {
    let id = m.chat

    // التحقق من صحة الرسالة المقتبسة
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !/^ⷮ/i.test(m.quoted.text)) return !0

    // إدارة الأحاجي
    this.tekateki = this.tekateki ? this.tekateki : {}
    if (!(id in this.tekateki)) return m.reply('هذا اللغز قد انتهى!')

    // التحقق من الإجابة
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`*إجابة صحيحة!*\n+${this.tekateki[id][2]} XP`)
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
            m.reply('قريب جدًا!')
        } else {
            m.reply('إجابة غير صحيحة!')
        }
    }

    return !0
}

handler.exp = 0
export default handler
