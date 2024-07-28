import yts from 'yt-search';

let handler = async (m, { conn, usedPrefix, text, args, command }) => {
  if (!text) return m.reply(`*\`『 نسيت اسم الاغنيه معا الامر يحب🧚🏼‍♂️ 』\`*\n*• مثال*\n*${usedPrefix + command}* عمرو دياب`);
  m.react('📀');

  let result = await yts(text);
  let ytres = result.videos;
  let listSections = [];
  for (let index in ytres) {
    let v = ytres[index];
    listSections.push({
      title: `${index} | ${v.title}`,
      rows: [
        {
          header: '• • •「 🅐🅤🅓🅘🅞 」• • •',
          title: "",
          description: `▢ ⌚ المدة: ${v.timestamp}\n▢ 👀 المشاهدات: ${v.views}\n▢ 📌 تم النشر: ${v.title}\n▢ 📆 تم الرفع: ${v.ago}\n`,
          id: `${usedPrefix}fgmp3 ${v.url}`
        }, 
        {
          header: "• • •「 🅥🅘🅓🅔🅞 」• • •",
          title: "",
          description: `▢ ⌚ المدة: ${v.timestamp}\n▢ 👀 المشاهدات: ${v.views}\n▢ 📌 تم النشر: ${v.title}\n▢ 📆 تم الرفع: ${v.ago}\n`,
          id: `${usedPrefix}fgmp4 ${v.url}`
        }, 
        {
          header: "• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❸ 」• • •",
          title: "",
          description: `▢ ⌚ المدة: ${v.timestamp}\n▢ 👀 المشاهدات: ${v.views}\n▢ 📌 تم النشر: ${v.title}\n▢ 📆 تم الرفع: ${v.ago}\n`,
          id: `${usedPrefix}ytmp3doc ${v.url}`
        }, 
        {
          header: "• • •「 🅓🅞🅒🅤🅜🅔🅝🅣🅞🅢 🅜🅟❹ 」• • •",
          title: "",
          description: `▢ ⌚ المدة: ${v.timestamp}\n▢ 👀 المشاهدات: ${v.views}\n▢ 📌 تم النشر: ${v.title}\n▢ 📆 تم الرفع: ${v.ago}\n`,
          id: `${usedPrefix}ytmp4doc ${v.url}`
        }
      ]
    });
  }

  await conn.sendList(m.chat, `*• النتائج لـ: ${text}*\n\n> *اختار خيار واضغط إرسال*`, wm, `🚀 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 🚀`, ytres[0].image, listSections, m);
};

handler.help = ['playlist', 'yts'];
handler.tags = ['downloader'];
handler.command = ['اغنية', 'playlist', 'playlista', 'yts', 'ytsearch'];
//handler.register = true;

export default handler;
