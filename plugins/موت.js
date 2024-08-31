let handler = async (m, { conn }) => {
    // الحصول على JID الشخص المستهدف
    let who = m.quoted ? m.quoted.sender : (m.mentionedJid && m.mentionedJid[0]) ? m.mentionedJid[0] : (m.fromMe ? conn.user.jid : m.sender)

    // الحصول على اسم الشخص المستهدف
    let name = await conn.getName(who) // استخدم await هنا للحصول على الاسم

    // الحصول على صورة الملف الشخصي أو استخدام الصورة الافتراضية
    let pp = await conn.profilePictureUrl(who, 'image').catch(_ => './mob.jpg')

    // إرسال الصورة مع الرسالة
    conn.sendFile(m.chat, global.API('https://some-random-api.com', '/canvas/overlay/wasted', {
        avatar: pp,
    }), 'waste.png', `*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*⌝🪦┇لقد مات┇🪦⌞*
*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*♡↵》كان راجل جدع*
*♡↵》المرحوم『 ${name} 』•*
*‏◉ ⊱━─━─━ •♦️• ━─━─━⊰ ◉*
『 ₛₐfᵣₒₜ↯bₒₜ 』
*⎔❯╼╾╾╃❖⟪ 🍥 ⟫❖╃╼╾╾❮⎔*
*⧉↵╎「تـوقـيـع ✍🏻」*
~*♯◡̈⃝ЅᗩFᏒOT꙯*~`, m)
}

handler.help = ['waste @user']
handler.tags = ['fun']
handler.command = ['موت'] 

export default handler