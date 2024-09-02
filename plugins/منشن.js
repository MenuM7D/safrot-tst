let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    // التحقق من صلاحيات الأدمن أو المالك
    if (!(isAdmin || isOwner)) {
        return m.reply('انت مش أدمن أو مالك عشان تنفذ الأمر ده.')
    }

    // جمع النص المدخل في رسالة واحدة
    let pesan = args.join(' ')
    if (!pesan) {
        return m.reply('*\`『 اكتب الرساله 🧚🏻‍♂️ 』\`*')
    }

    let oi = `*الرساله* ${pesan}`
    let teks = `*⺀ \`『 منشن جماعي🧚🏼‍♂️ 』\` ⺀*\n\n❏ ${oi}\n\n❏ *🧚🏽‍♂️*\n`

    // إضافة منشن لكل عضو في المجموعة
    for (let mem of participants) {
        teks += `➥ @${mem.id.split('@')[0]}\n`
    }

    teks += `➥ ${wm}` // تأكد أن wm معرف في مكان آخر في الكود

    // إرسال الرسالة إلى الدردشة
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}

handler.help = ['منشن الكل <رسالة>', 'استدعاء <رسالة>']
handler.tags = ['group']
handler.command = /^(tagall|منشن|استدعاء|الكل)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler