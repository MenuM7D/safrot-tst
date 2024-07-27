let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    // التحقق من صلاحيات الأدمن أو المالك
    if (!(isAdmin || isOwner)) {
        global.dfail('admin', m, conn)
        throw false
    }

    // جمع النص المدخل في رسالة واحدة
    let pesan = args.join(' ')
    let oi = `*الرساله* ${pesan}`
    let teks = `*⺀ \`『 منشن جماعي🧚🏼‍♂️ 』\` ⺀*\n\n❏ ${oi}\n\n❏ *🧚🏽‍♂️*\n`

    // إضافة منشن لكل عضو في المجموعة
    for (let mem of participants) {
        teks += `➥ @${mem.id.split('@')[0]}\n`
    }

    teks += `➥ ${wm}`

    // إرسال الرسالة إلى الدردشة
    conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}

handler.help = ['tagall <mesaje>', 'invocar <mesaje>']
handler.tags = ['group']
handler.command = /^(tagall|منشن|invocacion|todos|invocación)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
