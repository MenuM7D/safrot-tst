import uploadFile from '../lib/uploadFile.js'

const handler = async (m, {command, conn, usedPrefix}) => {
    let q = m.quoted ? m.quoted : m
    let mime = (q.msg || q).mimetype || ''
    
    if (!mime) throw '*قم بالرد على الفيديو أو الصوت الذي ترغب في تحويله إلى MP3*'
    
    // تحقق من أن نوع الميديا هو صوت أو فيديو
    let isAudio = /audio/.test(mime)
    let isVideo = /video/.test(mime)
    
    if (isAudio || isVideo) {
        let media = await q.download()
        let link = await uploadFile(media) // رفع الملف

        // إرسال الرد بصيغة MP3 كرسالة نصية
        conn.sendMessage(m.chat, {audio: {url: link}, mimetype: 'audio/mpeg', fileName: `converted_audio.mp3`}, {quoted: m});
    } else {
        throw '*الملف ليس صوت أو فيديو*'
    }
}; 

handler.help = ['لصوت <رد على فيديو أو صوت>']
handler.tags = ['convert'] 
handler.command = /^(لصوت|لصوتي)$/i

export default handler