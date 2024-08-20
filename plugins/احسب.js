let handler = async (m, { conn, text }) => {
  let id = m.chat
  conn.math = conn.math ? conn.math : {}
  if (id in conn.math) {
    clearTimeout(conn.math[id][3])
    delete conn.math[id]
    m.reply('.... ')
  }
  
  let val = text
    .replace(/[^0-9\-\/+*×÷πEe()piPI/]/g, '')
    .replace(/×/g, '*')
    .replace(/÷/g, '/')
    .replace(/π|pi/gi, 'Math.PI')
    .replace(/e/gi, 'Math.E')
    .replace(/\/+/g, '/')
    .replace(/\++/g, '+')
    .replace(/-+/g, '-')

  let format = val
    .replace(/Math\.PI/g, 'π')
    .replace(/Math\.E/g, 'e')
    .replace(/\//g, '÷')
    .replace(/\*/g, '×')
  
  try {
    console.log(val)
    let result = (new Function('return ' + val))()
    if (result === undefined) throw result
    m.reply(`*${format}* = _${result}_`)
  } catch (e) {
    if (e == undefined) return m.reply('*\`『 هات عدد الارقام الي عايز تحسبها مثال .احسب 5+5 او 5×5 زي مانت عايز 🧚🏻‍♂️ 』\`*')
    return m.reply('تنسيق غير صحيح، استخدم الأرقام 0-9 والرموز -, +, *, /, ×, ÷, π, e, (, ) فقط')
  }
}

handler.help = ['احسب *<معادلة>*']
handler.tags = ['أدوات']
handler.command = ['احسب', 'calc', 'calcular', 'calculadora']

export default handler
