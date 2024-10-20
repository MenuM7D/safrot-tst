import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
    // إذا كنت بحاجة لهذا الشرط، تأكد من أن db موجودة وتحقق من قيمته.
    /*if (!db.data.chats[m.chat].modohorny && m.isGroup) throw `${lenguajeGB['smsContAdult']()}`*/

    let pies = dir; // تأكد من تعريف مصفوفة pies
    let url = pies[Math.floor(Math.random() * pies.length)];

    // تأكد من أن url ليست فارغة
    if (url) {
        conn.sendButton(m.chat, `𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 `, author, url, [['فديو تاني🧚🏻‍♂️', `/${command}`]], m);
    } else {
        console.error("رابط الفيديو غير متوفر");
    }
}

handler.help = ['دراغون-بول']
handler.tags = ['internet']
handler.command = /^(ايديت2)$/
handler.exp = 50
handler.level = 0
export default handler

const dir = [
'https://telegra.ph/file/9a0f6b39c5b05e92ff99f.mp4',
'https://telegra.ph/file/3eed3d41604ee00666843.mp4',
'https://telegra.ph/file/383a3e4176e484a54d268.mp4',
'https://telegra.ph/file/bbed53cc5791f58ab600d.mp4',
'https://telegra.ph/file/4d7500079c9f47811fa03.mp4',
'https://telegra.ph/file/a793e73ffc9752acd320f.mp4',
'https://telegra.ph/file/6efa8cbc26c4b974f0209.mp4',
'https://telegra.ph/file/908b84dd566d546c80e19.mp4',
'https://telegra.ph/file/138b5a3c77b9c3c91a46c.mp4',
'https://telegra.ph/file/ec9276502edd0dd842687.mp4',
'https://telegra.ph/file/04e1e9a4393f62e56917e.mp4',
'https://telegra.ph/file/1a19e3e1dd1871b3c1c6c.mp4',
'https://telegra.ph/file/165844994cbf10a092841.mp4',
'https://telegra.ph/file/1aa64590b5dedb6410395.mp4', 
'https://telegra.ph/file/a39202ea9aa63ef954a88.mp4',
'https://telegra.ph/file/ba37664fae35af7414bcc.mp4',
'https://telegra.ph/file/dffb85c7854c74870b448.mp4',
'https://telegra.ph/file/4af303231dd0d5a4af8ad.mp4',
'https://telegra.ph/file/9c35207d1c13a6eee4827.mp4',
'https://telegra.ph/file/40e5981d9b01a644cb365.mp4',
'https://telegra.ph/file/f30f4b4b6c99fc118b3f6.mp4',
'https://telegra.ph/file/b3ee81264350b76b55a10.mp4', 
'https://telegra.ph/file/1572e68dcb805a049f23d.mp4',
'https://telegra.ph/file/a78e3334515a19a18997a.mp4',
'https://telegra.ph/file/020cdb4b78bca55b9fa0f.mp4',
'https://telegra.ph/file/948768021700f32c1e8fb.mp4', 

];
