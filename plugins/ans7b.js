import similarity from 'similarity'
const threshold = 0.72
let handler = m => m

handler.before = async function (m) {
    let id = m.chat
    if (!this.tekateki || !(id in this.tekateki)) return !0

    if (m.text.toLowerCase() == '.انسحب') {
        global.db.data.users[m.sender].exp -= this.tekateki[id][2]
        m.reply(`*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*\n*⦧🕹️⦨ تـــم الـانـسـحـاب*\n
- *الـاجــابــة كــانــت↜${this.tekateki[id][1].response}*\n*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`.trim())
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
        
        m.reply(`*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*
- *🔱 نــصــف الـاجــابــة هــي↜${hint}*

*⦑🕷️⦒ ❐ لـقــد تــم اظــهــار نـص الـاجــابــة لـتـســاعــدك! 🥱👋*

*📛 قــد تــم خصم ${deduction} XP كجزء من استخدام التلميح*

*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`.trim())
        return !0
    }

    if (!m.quoted || !m.quoted.fromMe || !/^/i.test(m.quoted.text)) return !0
    if (m.quoted.id == this.tekateki[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tekateki[id][1]))
        if (m.text.toLowerCase() == json.response.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += this.tekateki[id][2]
            m.reply(`*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*
*⦧🕹️⦨ اجــابــة صـحـيـحـة*

- *🎁 جــائــزتــك↜${this.tekateki[id][2]} XP*

*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`.trim())
            clearTimeout(this.tekateki[id][3])
            delete this.tekateki[id]
        } else if (similarity(m.text.toLowerCase(), json.response.toLowerCase().trim()) >= threshold) {
            m.reply(`*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*
*🔱 اجـابـتـك قــريـبـة*

- *اعــد الــمــحــاولــة مــرة اخــري*

*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`.trim())
        } else {
            m.reply(`- *🔱 اجــابــتــك خــاطــئــه حــاول مــره مــرة اخـــري*`.trim())
        }
    }
    return !0
}

handler.exp = 0

export default handler
