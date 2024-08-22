 import { igdl } from 'ruhend-scraper';

const handler = async (m, { text, conn, args, usedPrefix, command }) => {
  // إرسال رد فعل "انتظار" عند البدء
  await m.react('🕓');

  if (!args[0]) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 هات لينك الفديو الي عايز تحملو من الفيسبوك معا الامر🧚🏻‍♂️ 』\`*', m);
  }

  let res;
  try {
    res = await igdl(args[0]);
  } catch (error) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 حصل خطاء في جلب الباينات🧚🏻‍♂️ 』\`*', m);
  }

  let result = res.data;
  if (!result || result.length === 0) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 مافيش نتاج او اللنك معطل🚯 』\`*', m);
  }

  let data;
  try {
    data = result.find(i => i.resolution === "720p (HD)") || result.find(i => i.resolution === "360p (SD)");
  } catch (error) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 حصل خطاء في معالج الباينات🧚🏻‍♂️ 』\`*', m);
  }

  if (!data) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 الجوه مش مناسبه 』\`*', m);
  }

  let video = data.url;
  try {
    await conn.sendMessage(m.chat, { video: { url: video }, caption: '*\`『 اتفضل يحب🧚🏻‍♂️ 』\`*', fileName: 'fb.mp4', mimetype: 'video/mp4' }, { quoted: m });
    await m.react('✅');
  } catch (error) {
    await m.react('✖️');
    return conn.reply(m.chat, '*\`『 حدث خطاء في جلب الفديو عيد.في لنك تاني🧚🏻‍♂️ 』\`*', m);
  }
};

handler.command = /^(فيس|فيسبوك|فيسو)$/i;

export default handler;
