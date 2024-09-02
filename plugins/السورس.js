let handler = async (m, { conn, command, text }) => {
let love = `‏

*\`✥━─━⌬〘𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩〙⌬━─━✥\`*

*\`『 نورت يا حب بوت سفروت 』\`*

*\`『 اتفصل قائمة السور 』\`*

*✥━─━⌬〘🕊◡̈⃝🧚🏼‍♂️〙⌬━─━✥*

*\`『 تم تطويري وبرمجتي 』\`*
*\`『 بوسطة ♯ЅᗩFᏒOT꙯ 』\`*
*\`『 البوت شغال في الخاص 』\`*
*\`『 وشغال بردو جروبات 』\`*

*✥━─━⌬〘🕊◡̈⃝🧚🏼‍♂️〙⌬━─━✥*


*\`『 رقم المطور 』\`*

*⏣⊰ https://wa.me/201115618853 ⊱⏣*


*✥━─━⌬〘\`『 ₛₐfᵣₒₜ↯bₒₜ 』\`〙⌬━─━✥*
 `.trim()
m.reply(love, null, { mentions: conn.parseMention(love) })}
handler.help = ['love']
handler.tags = ['fun']
handler.command = /^(السورس|سورس)$/i
export default handler
