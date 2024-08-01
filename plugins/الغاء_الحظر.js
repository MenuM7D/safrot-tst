let handler = async (m) => {
global.db.data.chats[m.chat].isBanned = false
m.reply(' *\`『 تم الغاء الحظر 🧚🏼‍♂️ 』\`* ')
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^الغاء_الحظر$/i
//handler.rowner = true
export default handler
