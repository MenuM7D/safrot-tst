let handler = async (m, { conn, participants, usedPrefix, command }) => {

    let developers = ['201115618853@s.whatsapp.net'];   

    let kickte = '*\`『 اعمل ريب او منشن للي عايز تطردو🧚🏻‍♂️ 』\`*';

    
    if (!m.mentionedJid[0] && !m.quoted) return m.reply(kickte, m.chat, { mentions: conn.parseMention(kickte) });

    let user = m.mentionedJid[0] ? m.mentionedJid[0] : m.quoted.sender;


    if (developers.includes(user)) {
        return m.reply('*\`『 احا عايز تطرد مطوري 🥺 』\`*');
    }


    await conn.groupParticipantsUpdate(m.chat, [user], 'remove');

   
    m.reply('*\`『 تم الطرد وديتو الجحيم😹 』\`*');

 
    let admins = participants.filter(participant => participant.admin).map(participant => participant.id);
    let alertMessage = `*🧚🏻‍♂️┃ تم طرد ${user} من المجموعة*`;

    conn.sendMessage(m.chat, { text: alertMessage, mentions: admins });
}

handler.help = ['kick @user'];
handler.tags = ['group'];
handler.command = ['kick', 'طرد'];
handler.admin = true;
handler.group = true;
handler.botAdmin = true;

export default handler;
