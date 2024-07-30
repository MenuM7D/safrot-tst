let handler = async (m, { conn, text, participants, isAdmin, isOwner }) => {
    let users = participants.map(u => u.id).filter(v => v !== conn.user.jid)
    m.reply(`${text ? `${text}\n` : ''}*\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`*

*\`『 منشن جماعي 』\`*
\n` + users.map(v => '『🧚🏼‍♂️』 ⇇╎ @' + v.replace(/@.+/, '')).join`\n` + '\n*\`『 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩 』\`*', null, {
        mentions: users
    })
}

handler.help = ['منشن']
handler.tags = ['group']
handler.command = ['منشن']
handler.admin = true
handler.group = true

export default handler
