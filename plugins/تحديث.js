import { execSync } from 'child_process'

let handler = async (m, { conn, text }) => {
    await m.react('🕓')
    if (conn.user.jid == conn.user.jid) {
        try {
            // تحقق من أن الدليل هو مستودع Git
            execSync('git status')
            // تنفيذ الأمر git pull
            let stdout = execSync('git pull' + (m.fromMe && text ? ' ' + text : ''))
            await conn.reply(m.chat, stdout.toString(), m)
            await m.react('✅')
        } catch (error) {
            // التعامل مع الخطأ إذا لم يكن الدليل مستودع Git
            await conn.reply(m.chat, 'غلط: ده مش مستودع Git (أو أي من الأدلة العليا)', m)
            await m.react('❌')
        }
    }
}

handler.help = ['تحديث']
handler.tags = ['owner']
handler.command = ['تحديث', 'actualizar', 'fix', 'fixed'] 
//handler.rowner = true

export default handler
