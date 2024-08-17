var handler = async (m, { conn, usedPrefix, command, text }) => {
    var number;

    if (isNaN(text) && !text.match(/@/g)){
        return conn.reply(m.chat, `🧚🏼‍♂️ *\`『 الرقم غلط أو غير معرف 』\`*`, m);
    } else if (isNaN(text)) {
        number = text.split`@`[1];
    } else if (!isNaN(text)) {
        number = text;
    }

    if (!text && !m.quoted) 
        return conn.reply(m.chat, `🧚🏼‍♂️ *\`『 امنشن للمشرف الي هتنزلو 』\` *`, m);

    if (number.length > 13 || (number.length < 11 && number.length > 0)) 
        return conn.reply(m.chat, `🧚🏼‍♂️ *\`『 الرقم غلط 』\`*`, m);

    var user;
    try {
        if (text) {
            user = number + '@s.whatsapp.net';
        } else if (m.quoted && m.quoted.sender) {
            user = m.quoted.sender;
        } else if (m.mentionedJid) {
            user = number + '@s.whatsapp.net';
        } 
    } catch (e) {
        console.error(e);
    } finally {
        if (user) {
            await conn.groupParticipantsUpdate(m.chat, [user], 'demote');
            conn.reply(m.chat, `🚯 *\`『 كنت ادمن فاشل 』\`*`, m);
        }
    }
}

handler.help = ['demote'];
handler.tags = ['grupo'];
handler.command = ['خفض', 'تخفيض'];

handler.group = true;
handler.admin = true;
handler.botAdmin = true;
handler.fail = null;

export default handler;
