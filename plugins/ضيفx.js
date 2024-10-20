import axios from 'axios';

let handler = async (m, { conn, usedPrefix, args }) => {
    let target = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.sender;
    let user = global.db.data.users[target];
    let username = m.sender ? conn.getName(m.sender) : null;

    if (!user) 
        throw `*⌜🧚🏻‍♂️⌝*
*هذا المستخدم لم يستعملني من قبل وبلتالي لا يوجد له بيانات في قاعدة بياناتي*`;

    let xpToAdd = args[1] ? parseInt(args[1]) : 1;

    if (isNaN(xpToAdd) || xpToAdd < 1) 
        throw '*⌜🧚🏻‍♂️⌝*\n*ادخل كمية الاكسبي الذي تريد اضافتها للعضو*\n\n- *مـثـال↜.اضافة_اكسبي @المنشن 500*';
await conn.sendMessage(m.chat, { react: { text: "🎯",key: m.key,}
  })
    user.exp += xpToAdd;

    const emojis = ['👍', '👏', '🎉', '💼', '🎯'];

    let message = `*⌜🧞‍♂️⌝*
*تم اضافة الاكسبي بنجاح🤝*

- *👑 الاونر↜${username}*

- *🏮 الاكسبي المضاف↜${xpToAdd}*

- *🎉 مبروك يا سعيد الحظ*`.trim();

    try {
        const imgUrl = 'https://l.arzfun.com/pBfD9';
        const responseImg = await axios.get(imgUrl, { responseType: 'arraybuffer' });
        await conn.sendFile(m.chat, responseImg.data, "thumbnail.jpg", message, m);
    } catch (e) {
        await conn.reply(m.chat, message, m);
    }

    for (const emoji of emojis) {
        await m.react(emoji);
    }
}

handler.help = ['اضافة_اكسبي', 'ا_ا'];
handler.tags = ['economy'];
handler.command = ['ضيفx', 'اضافة_اكسبي'];
handler.owner = true;

export default handler;
