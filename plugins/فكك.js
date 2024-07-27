import fs from 'fs';

let timeout = 60000; // الوقت المخصص للإجابة بالمللي ثانية
let poin = 500; // النقاط المخصصة للجائزة

let handler = async (m, { conn, usedPrefix }) => {
    // التأكد من وجود كائن اللعبة في الاتصال
    conn.tekateki = conn.tekateki ? conn.tekateki : {};
    let id = m.chat;

    // التحقق مما إذا كان هناك سؤال لم يتم الإجابة عليه بعد
    if (id in conn.tekateki) {
        conn.reply(m.chat, '❐┃لم يتم الاجابة علي السؤال بعد┃❌ ❯', conn.tekateki[id][0]);
        throw false;
    }

    // قراءة بيانات اللعبة من الملف
    let tekateki = JSON.parse(fs.readFileSync(`./src/game2/miku2.json`));
    let json = tekateki[Math.floor(Math.random() * tekateki.length)];
    let _clue = json.response;
    let clue = _clue.replace(/[A-Za-z]/g, ''); // استبدال الأحرف بالنص الفارغ
    let caption = `
ⷮ ${json.question}

❐↞┇الـوقـت⏳↞ ${(timeout / 1000).toFixed(2)} ثانية┇
❐↞┇الـجـائـزة💰↞ ${poin} نقاط┇
『𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩』
`.trim();

    // تسجيل السؤال في اللعبة الحالية
    conn.tekateki[id] = [
       await conn.reply(m.chat, caption, m),
        json, poin,
        setTimeout(async () => {
            if (conn.tekateki[id]) {
                await conn.reply(m.chat, `❮ ⌛┇انتهي الوقت┇⌛❯\n ❐↞┇الاجـابـة✅↞ ${json.response}┇`, conn.tekateki[id][0]);
                delete conn.tekateki[id];
            }
        }, timeout)
    ];
};

handler.help = ['miku'];
handler.tags = ['game'];
handler.command = /^(فكك)$/i;

export default handler;
