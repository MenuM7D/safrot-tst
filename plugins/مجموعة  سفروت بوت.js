let handler = async (m, { conn, usedPrefix: _p }) => {
    let info = `*✅ أهلاً وسهلاً في المجموعات الرسمية*

  1) *${nn}*
  
  2) *${nnn}*

➤ *مجموعة  سفروت بوت*
 *${nnnt}*

➤ *مجموعة  سفروت بوت*
*${nnnt2}*

➤ *مجموعة التعاون 3 (من غير حد)*
*${nnntt}*

➤ معلومات عن التحديثات الجديدة للبوت
*${nna}*
 
➤ *زور كل الروابط الرسمية في مكان واحد!*
https://www.atom.bio/safrotbob-376

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*♯ЅᗩFᏒOT꙯*
*${nnnttt}*`.trim() 
    conn.reply(m.chat, info, m) 
    //conn.fakeReply(m.chat, info, '0@s.whatsapp.net', '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿', 'status@broadcast')
}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = /^linkgc|grupos|gruposgatabot|gatabotgrupos|gruposdegatabot|groupofc|gruposgb|grupogb|groupgb$/i
handler.register = true 
export default handler
