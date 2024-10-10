let handler = async (m, { isOwner, isAdmin, conn, text, participants, args, command }) => {
    // التحقق من صلاحيات الأدمن أو المالك
    if (!(isAdmin || isOwner)) {
        return m.reply('انت مش أدمن أو مالك عشان تنفذ الأمر ده.')
    }

    // التحقق من وجود المشاركين
    if (!participants || participants.length === 0) {
        return m.reply('مفيش أعضاء في المجموعة.')
    }

    // جمع النص المدخل في رسالة واحدة
    let pesan = args.join(' ')
    if (!pesan) {
        return m.reply('برجاء كتابة الرسالة اللي عايز تبعتها.')
    }

    let oi = `*الرسالة* ${pesan}`
    let teks = `*⺀ \`『 منشن جماعي🧚🏼‍♂️ 』\` ⺀*\n\n❏ ${oi}\n\n❏ *🧚🏽‍♂️*\n`

    // إضافة منشن لكل عضو في المجموعة
    for (let mem of participants) {
        teks += `➥ @${mem.id.split('@')[0]}\n`
    }

    const wm = '*\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*'
    teks += `➥ ${wm}`

    // إرسال الرسالة إلى الدردشة
    await conn.sendMessage(m.chat, { text: teks, mentions: participants.map(a => a.id) })
}

handler.help = ['منشن الكل <رسالة>', 'استدعاء <رسالة>']
handler.tags = ['group']
handler.command = /^(tagall|منشن|استدعاء|الكل)$/i
handler.admin = true
handler.group = true
handler.botAdmin = true

export default handler
