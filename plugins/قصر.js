import fetch from 'node-fetch';
let handler = async (m, {conn, args, text}) => {
    try {
        if (!text) return m.reply('*\`『 هات الرابط الي عايز تقصرو🧚🏻‍♂️ 』\`*')
        let shortUrl1 = await (await fetch(`https://tinyurl.com/api-create.php?url=${args[0]}`)).text();
        if (!shortUrl1) return m.reply(`🚩 من فضلك ادخل الرابط اللي عايز تقصره.`)
        let done = `*» الرابط بعد التقصير* : ${shortUrl1}`
        m.reply(done)
    } catch { 
        await m.react('✖️')
    }
}
handler.help = ['قصر'].map((v) => v + ' *<رابط>*')
handler.tags = ['أدوات']
handler.command = /^(tinyurl|short|قصر|قصير)$/i;

export default handler
