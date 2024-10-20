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

handler.help = ['بانكاي']
handler.tags = ['internet']
handler.command = /^(بانكاي)$/
handler.exp = 50
handler.level = 0
export default handler

const dir = [
'https://telegra.ph/file/987344d9c6841418bc170.mp4',
'https://telegra.ph/file/e6b33aa0ceb8ec7bb576c.mp4',
'https://telegra.ph/file/d57e756e836871b5a65b9.mp4',
'https://telegra.ph/file/c8018a1b758f7310e4a81.mp4',
'https://telegra.ph/file/4a7cde118df379c38fbeb.mp4',
'https://telegra.ph/file/3db04906097fcd8f2c0a5.mp4',
'https://telegra.ph/file/a7bcb72d63b7cbbf26a2e.mp4',
'https://telegra.ph/file/7b92b25179ab827a6ab07.mp4',
'https://telegra.ph/file/b860839b84a10c85f6d91.mp4',
'https://telegra.ph/file/adf61affee439820a4bdf.mp4',
'https://telegra.ph/file/86112c3bb88d41794edde.mp4',
];
