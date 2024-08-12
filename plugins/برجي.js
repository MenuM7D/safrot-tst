let handler = (m, { usedPrefix, command, text }) => {
    if (!text) return m.reply(`مثال:\n${usedPrefix + command} 2003 02 25`)

    const date = new Date(text)
    if (isNaN(date.getTime())) return m.reply('*تاريخ غير صالح، جرب بالشكل التالي: سنة شهر يوم* مثال: *2005 07 07*')
    
    const d = new Date()
    const [السنة, الشهر, اليوم] = [d.getFullYear(), d.getMonth() + 1, d.getDate()]
    const birth = [date.getFullYear(), date.getMonth() + 1, date.getDate()]
    
    const zodiac = getZodiac(birth[1], birth[2])
    const ageD = new Date(d - date)
    const age = ageD.getFullYear() - new Date(1970, 0, 1).getFullYear()

    const birthday = [السنة + (birth[1] < الشهر), ...birth.slice(1)]
    const cekusia = الشهر === birth[1] && اليوم === birth[2] ? `${age} - كل سنة وانت طيب 🥳` : age

    const teks = `
تاريخ الميلاد: ${birth.join('-')}
عيد الميلاد الجاي: ${birthday.join('-')}
السن: ${cekusia}
البرج: ${zodiac}
`.trim()
    m.reply(teks)
}

handler.help = ['zodiac *2002 02 25*']
handler.tags = ['tools']
//handler.limit = 1
//handler.register = true 
handler.command = /^برجي$/i

export default handler

const zodiak = [
    ["الجدي", new Date(1970, 0, 1)],
    ["الدلو", new Date(1970, 0, 20)],
    ["الحوت", new Date(1970, 1, 19)],
    ["الحمل", new Date(1970, 2, 21)],
    ["الثور", new Date(1970, 3, 21)],
    ["الجوزاء", new Date(1970, 4, 21)],
    ["السرطان", new Date(1970, 5, 22)],
    ["الأسد", new Date(1970, 6, 23)],
    ["العذراء", new Date(1970, 7, 23)],
    ["الميزان", new Date(1970, 8, 23)],
    ["العقرب", new Date(1970, 9, 23)],
    ["القوس", new Date(1970, 10, 22)],
    ["الجدي", new Date(1970, 11, 22)]
].reverse()

function getZodiac(month, day) {
    let d = new Date(1970, month - 1, day)
    return zodiak.find(([_,_d]) => d >= _d)[0]
      }
