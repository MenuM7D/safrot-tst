  let handler = async (m, { conn, args, usedPrefix, command }) => {
  const pp ='https://telegra.ph/file/c73aac3f5ad3201fd4717.jpg'
  const fakecontact = { 'key': { 'participants': '0@s.whatsapp.net', 'remoteJid': 'status@broadcast', 'fromMe': false, 'id': '𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩' }, 'message': { 'contactMessage': { 'vcard': `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` } }, 'participant': '0@s.whatsapp.net' };
  let isClose = { // Switch Case Like :v
      'فتح': 'not_announcement',
      'قفل': 'announcement',
  }[(args[0] || '')]
  if (isClose === undefined)
      return conn.sendButton(
      m.chat,
      'اخـتـر', 
      '𝘽𝙔: 𝙎𝙖𝙛𝙧𝙤𝙩 𝘽𝙊𝙏',
      pp,
      [
        ['open group ', `${usedPrefix + command} فتح`],
        ['close group ', `${usedPrefix + command} قفل`]
      ], null, 
      m
    );
  await conn.groupSettingUpdate(m.chat, isClose)
}
handler.help = ['group *open/close*']
handler.tags = ['group']
handler.command = ['روم', 'جروب','room'] 
handler.admin = true
handler.botAdmin = true

export default handler
