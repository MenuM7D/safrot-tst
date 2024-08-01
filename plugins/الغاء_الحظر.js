let handler = async (m) => {
  if (global.db.data.chats && global.db.data.chats[m.chat]) {
    global.db.data.chats[m.chat].isBanned = false
    await m.reply(' *「 تم إلغاء الحظر 🧚🏼‍♂️ 」* ')
  } else {
    await m.reply(' *「 هذا الشات غير موجود في قاعدة البيانات 🧚🏼‍♂️ 」* ')
  }
}
handler.help = ['unbanchat']
handler.tags = ['owner']
handler.command = /^الغاء_الحظر$/i
//handler.rowner = true
export default handler
