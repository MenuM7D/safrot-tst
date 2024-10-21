let handler = async (m, { conn, text, usedPrefix, command }) => {
    let mentionedUser = m.mentionedJid[0]; // تحديد الشخص المذكور

    if (!mentionedUser) throw `*محتاج تذكر الشخص اللي هيتضاف له بريميوم باستخدام @.*`;
    
    let txt = text.replace('@' + mentionedUser.split`@`[0], '').trim(); // إزالة اسم الشخص

    if (!txt) throw `*محتاج تدخل مدة البريميوم.*`;

    let duration = parseDuration(txt); // تحويل النص إلى مدة

    if (!duration) throw `*محتاج تدخل مدة صحيحة مثل 10ث أو 5د أو 1س.*`;

    let user = global.db.data.users[mentionedUser] || {}; // جلب بيانات المستخدم
    let now = new Date() * 1;

    if (now < user.premiumTime) {
        user.premiumTime += duration; // إضافة المدة إلى الوقت الحالي
    } else {
        user.premiumTime = now + duration; // تعيين الوقت الجديد
    }
    user.premium = true;

    conn.reply(m.chat, `*🎟️ دلوقتي @${mentionedUser.split`@`[0]} أصبح بريميوم!!!*\n*🕐 الوقت: ${msToTime(duration)}*`, m, { contextInfo: { mentionedJid: [mentionedUser] } });
};

function parseDuration(text) {
    let match = text.match(/^(\d+)(ث|د|س)$/); // البحث عن العدد ووحدته
    if (!match) return null;

    let num = parseInt(match[1]);
    switch (match[2]) {
        case 'ث': return num * 1000; // ثواني
        case 'د': return num * 60 * 1000; // دقائق
        case 'س': return num * 60 * 60 * 1000; // ساعات
    }
}

function msToTime(duration) {
    var seconds = Math.floor((duration / 1000) % 60);
    var minutes = Math.floor((duration / (1000 * 60)) % 60);
    var hours = Math.floor((duration / (1000 * 60 * 60)) % 24);
    return `${hours} ساعة ${minutes} دقيقة ${seconds} ثانية`;
}

handler.help = ['بريم [@user] <time>'];
handler.tags = ['owner'];
handler.command = ['بريم'];
handler.group = true;
handler.owner = true;

export default handler;
