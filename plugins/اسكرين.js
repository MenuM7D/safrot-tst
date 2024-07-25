. gps crr|const handler = async (m, { text, conn }) => {
  if (!text) {
    return conn.sendMessage(m.chat, { text: `*فين الرابط اللي هتجيبلو اسكرين ي حوب 🧚🏼‍♂️*` }, { quoted: m });
  }

  const screenshotUrl = `https://image.thum.io/get/fullpage/${text}`;
  const loadingMessage = await conn.sendMessage(m.chat, { text: '𝐋𝐨𝐚𝐝𝐢𝐧𝐠, 𝐰𝐚𝐢𝐭 𝐦𝐨𝐦𝐞𝐧𝐭...' }, { quoted: m });

  try {
    await conn.sendMessage(m.chat, { image: { url: screenshotUrl }, mimetype: 'image/png', fileName: 'screen.png' }, { quoted: m });
  } catch (error) {
    await conn.sendMessage(m.chat, { text: `*حدث خطأ أثناء جلب الصورة. حاول مرة أخرى لاحقًا.*` }, { quoted: m });
  }
};

handler.command = /^(screen|سكرين)$/i;
export default handler;
