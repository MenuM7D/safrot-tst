let handler = async (m, { conn, args, text, usedPrefix, command }) => {
    if (!text) throw `*\`『 اكتب الرقم  』\`*`;
    if (text.includes('+')) throw `*لا تــضـع هـذه الـعـلـامـه +*`;
    if (isNaN(text)) throw '*دخــل الـرقـم بـدـون مـسافـات !*';
    
    let number = text.trim(); 
    let message = "هذه رسالة تجريبية"; 
    
    await conn.reply(number + '@s.whatsapp.net', message, m, { mentions: [m.sender] });
    m.reply(`*تم إرسال الرسالة إلى ${number}*`);
}

handler.help = ['send <20xxx>'];
handler.tags = ['general'];
handler.command = ['send']; 
handler.group = false;
handler.private = false;
handler.owner = false;
handler.botAdmin = false;

export default handler;
