const {
  proto,
  generateWAMessage,
  areJidsSameUser
} = (await import('@whiskeysockets/baileys')).default;

export async function all(m, chatUpdate) {
  if (m.isBaileys) return; // لو الرسالة من Baileys، اخرج
  if (!m.message) return; // لو الرسالة مش موجودة، اخرج
  if (!m.msg.fileSha256) return; // لو الـ SHA256 للملف مش موجود، اخرج
  if (!(Buffer.from(m.msg.fileSha256).toString('base64') in global.db.data.sticker)) return; // لو الـ SHA256 مش موجود في قاعدة البيانات، اخرج

  let hash = global.db.data.sticker[Buffer.from(m.msg.fileSha256).toString('base64')];
  let { text, mentionedJid } = hash;
  let messages = await generateWAMessage(m.chat, { text: text, mentions: mentionedJid }, {
    userJid: this.user.id,
    quoted: m.quoted && m.quoted.fakeObj
  });
  messages.key.fromMe = areJidsSameUser(m.sender, this.user.id); // تحقق إذا كان المرسل هو نفس المستخدم
  messages.key.id = m.key.id;
  messages.pushName = m.pushName;
  if (m.isGroup) messages.participant = m.sender; // إذا كانت الرسالة في مجموعة، أضف المشارك
  let msg = {
    ...chatUpdate,
    messages: [proto.WebMessageInfo.fromObject(messages)],
    type: 'append' // أضف الرسالة إلى التحديث
  };
  this.ev.emit('messages.upsert', msg); // أرسل التحديث
}
