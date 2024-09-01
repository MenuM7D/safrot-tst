let handler = async (m, { conn, isAdmin }) => {
    if (m.fromMe) throw '*\`『 مش هقدر اخليك ادمن يا مطوري🥺 』\`*'
    if (isAdmin) throw '*\`『 انت اصلا ادمن يا مطوري🥺 』\`*'
    await conn.groupParticipantsUpdate(m.chat, [m.sender], "promote")
}

handler.help = ['autoadmin']
handler.tags = ['owner']
handler.command = /^رول|ارفعني|autoadmin$/i
handler.rowner = true
handler.botAdmin = true

export default handler
