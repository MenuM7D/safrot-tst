const handler = async (m, {conn}) => {
  const revoke = await conn.groupRevokeInvite(m.chat);
  await conn.reply(m.chat, `*\`『 تم تغير رابط الجروب🧚🏼‍♂️ 』\`*\n♾ • الرابط الجديد: ${'https://chat.whatsapp.com/' + revoke}`, m);
};
handler.help = ['رستر']
handler.tags = ['group']
handler.command = ['رستر'];
handler.botAdmin = true;
handler.admin = true;
handler.group = true;
export default handler;
