import yts from 'yt-search';

let handler = async (m, { conn, command, args, text, usedPrefix }) => {
    if (!text) {
        return conn.reply(m.chat, '> *\`『 اكتب الي عايز تشغلو 🧚🏻‍♂️ 』\`*', m);
    }

    await m.react('🕓');
    let res = await yts(text);
    let play = res.videos[0];

    if (!play) {
        throw '> *\`『 حدث خطلء 』\`* ';
    }

    let { title, thumbnail, ago, timestamp, views, videoId, url } = play;

    let txt = '*✧━═══━⊰🎶⊱━═══━✧*\n';
    txt += `*❐⤶ العنوان ↜* _${title}_\n\n`;
    txt += `*❐⤶ رابط المقطع ↜* _https://www.youtube.com/watch?v=${videoId}_\n`;
    txt += `*❐⤶ تم النشر منذ ↜* _${ago}_\n`;
    txt += `*❐⤶ مدة الفيديو ↜* _${timestamp}_\n`;
    txt += `*❐⤶ عدد المشاهدات ↜* _${views.toLocaleString()}_\n`;
    txt += `*✠ ── ✷ ─ ‹🧚🏻‍♂️› ─ ✷ ── ✠*`;

    
    await conn.sendButton(m.chat, 
        txt, 
        '*𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓*', 
        thumbnail, 
        [
            ['📀 الصوت', `${usedPrefix}اغنية ${url}`],
            ['📁 ملف صوت', `${usedPrefix}شغل_كصوت ${text}`],
            ['🎥 الفديو', `${usedPrefix}شغل_كفيديو ${url}`],
            ['📁 ملف فديو', `${usedPrefix}شغل_كفيديو2 ${url}`]
        ], 
        m
    );

    await m.react('✅');
};

handler.help = ['play', 'play2', 'ytmp3'];
handler.tags = ['dl'];
handler.command = ['شغل'];

export default handler;
