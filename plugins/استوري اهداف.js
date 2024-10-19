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

handler.help = ['اهداف']
handler.tags = ['internet']
handler.command = /^(اهداف)$/
handler.exp = 50
handler.level = 0
export default handler

const dir =[

'https://telegra.ph/file/5fb7c13a4d93917f97ff3.mp4',

'https://telegra.ph/file/2a4e007bec39cc66385b0.mp4',

'https://telegra.ph/file/a22d5d23a85c4d7b2cdac.mp4',

'https://telegra.ph/file/148dcadb72c631e0a9d1c.mp4',

'https://telegra.ph/file/6699964c4f9486bafac22.mp4',

'https://telegra.ph/file/aec768d540e249ceb0c5b.mp4',

'https://telegra.ph/file/b2f92a40a7b869896d360.mp4',

'https://telegra.ph/file/cd611bb1e76ceac182de8.mp4',

'https://telegra.ph/file/0c4046c6477431bbed40d.mp4',

'https://telegra.ph/file/d84e53e96fb44ec4cbd23.mp4',

'https://telegra.ph/file/1286e1bf83c9901308cd8.mp4',

]

