let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw `*\`『 اكتب الرقم الي عايز تبعتلو دعوه 』\`*\n*مــثـال :\n*${usedPrefix + command} 201115618853`;
    if (text.includes('+')) throw `*لا تــضـع هـذه الـعـلـامـه +*`;
    if (isNaN(text)) throw '*دخــل الـرقـم بـدـون مـسافـات !*';
    
    let number = text.trim(); // الرقم الذي سيتم إرسال الرسالة إليه
    let message = "هذه رسالة تجريبية"; // الرسالة التي سيتم إرسالها
    
    await conn.reply(number + '@s.whatsapp.net', message, m, { mentions: [m.sender] });
    m.reply(`*تم إرسال الرسالة إلى ${number}*`);
}

handler.help = ['send <20xxx>'];
handler.tags = ['general'];
handler.command = ['send']; // يمكنك تغيير اسم الأمر حسب ما تفضل
handler.group = false;
handler.private = false;
handler.owner = false;
handler.botAdmin = false;

export default handler;
