import similarity from 'similarity'
const threshold = 0.72
let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!this.tekateki || !(id in this.tekateki)) return !0

    if (m.text.toLowerCase() == '.انسحب') {
        global.db.data.users[m.sender].exp -= this.tekateki[id][2]
        m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*\n*\`『 تم النسحاب 』\`*\n
- *الاجابه كانت${this.tekateki[id][1].response}*\n*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
        clearTimeout(this.tekateki[id][3])
        delete this.tekateki[id]
        return !0
    }

    if (m.text.toLowerCase() == '.تلميح') {
        // التأكد من وجود اللعبة في الدردشة
        if (!(id in this.tekateki)) return

        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        let answer = json.response;

        // حساب نصف طول الإجابة
        const halfLength = Math.ceil(answer.length / 2);
        const hint = answer.substring(0, halfLength); // أخذ النصف الأول من الإجابة

        // خصم 25% من قيمة الجائزة
        const deduction = Math.floor(this.tekateki[id][2] * 0.25);
        global.db.data.users[m.sender].exp -= deduction; // خصم الجائزة

        m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
- *🪢 نص الاجابه هــي↜${hint}*

*\`『 تم اظهار نص الاجابه 🧚🏻‍♂️ 』\`*

*📛  تـم خصم ${deduction} XP كجزء من استخدام التلميح*

*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
        return !0
    }

    if (!m.quoted || !m.quoted.fromMe || !/^/i.test(m.quoted.text)) return !0
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
*\`『 الاجابه صح 🧚🏻‍♂️ 』\`*

- *🎁 جازتك ${this.tekateki[id][2]} XP*

*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
            m.reply(`*━━━━━━❰･𓃦･❱━━━━━━*
*\`『 قربت من الاجابه 』\`*

- *\`『 عيد المحوله 』\`*

*━━━━━━❰･𓃦･❱━━━━━━*`.trim())
        } else {
            m.reply('- *\`『 اجابه غلط 』\`*'.trim())
        }
    }
    return !0
}

handler.exp = 0

export default handler