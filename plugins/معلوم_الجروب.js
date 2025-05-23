let handler = async (m, { conn, participants, groupMetadata }) => {
    const pp = await conn.profilePictureUrl(m.chat, 'image').catch(_ => null) || './src/avatar_contact.png';
    const { isBanned, welcome, detect, sWelcome, sBye, sPromote, sDemote, antiLink, delete: del } = global.db.data.chats[m.chat];
    const groupAdmins = participants.filter(p => p.admin);
    const listAdmin = groupAdmins.map((v, i) => `${i + 1}. @${v.id.split('@')[0]}`).join('\n');
    const owner = groupMetadata.owner || groupAdmins.find(p => p.admin === 'superadmin')?.id || m.chat.split`-`[0] + '@s.whatsapp.net';
    let text = `*\`『 معلومات الجروب 』\` *\n\n*• \`『 الرقم المعرف 』\` *\n${groupMetadata.id}\n\n*• \`『 الاسم 』\` *\n${groupMetadata.subject}\n\n*• \`『 عدد الاعضاء 』\` *\n${participants.length}\n\n*• \`『 مالك الجروب 』\` *\n@${owner.split('@')[0]}\n\n*• \`『 المشرفين 』\` *\n${listAdmin}\n\n*• \`『 اعددات الجروب 』\` :*\n• \`『 الترحيب 』\`: ${welcome ? '✅' : '❌'}\n• *\`『 الحظر 』\`* ${isBanned ? '✅' : '❌'}\n• *\`『 الكشف 』\`* ${detect ? '✅' : '❌'}\n• *\`『 منع الحذف 』\`* ${del ? '✅' : '❌'}\n• *\`『 منع الروابط 』\`* ${antiLink ? '✅' : '❌'}\n\n*• \`『 اعددات الردود 』\`*\n• *\`『 االترحيب』\`* ${sWelcome}\n• *\`『 الوداع 』\`* ${sBye}\n• *\`『 االترقيه』\`* ${sPromote}\n• *\`『 التخفيض 』\`* ${sDemote}\n\n*• \`『 الوصف 』\`*\n${groupMetadata.desc?.toString() || '*\`『 غير معروف 』\`*'}`.trim();
    conn.sendFile(m.chat, pp, 'pp.jpg', text, m, false, { mentions: [...groupAdmins.map(v => v.id), owner] });
}

handler.help = ['معلومات_المجموعة'];
handler.tags = ['group'];
handler.command = ['معلومات_الجروب', 'معلوم_الجروب'];
handler.group = true;
//handler.register = true;

export default handler;
