let handler = async (m, { conn, args, command }) => {
await m.reply('*\`『 حاضر يا مطوري انا خارج باي معا السلامه 🥺💗 』\`*') 
await  conn.groupLeave(m.chat)}
handler.command = /^(out|leavegc|اخرج|برا)$/i
handler.group = true
handler.rowner = true
export default handler
