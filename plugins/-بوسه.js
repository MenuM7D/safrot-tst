import fs from 'fs';
const handler = (m) => m;
handler.all = async function(m) {
  const vn = 'https://f.uguu.se/bpwyPgte.opus';
  const chat = global.db.data.chats[m.chat];
  if (/^بوسه|بوسة|مح|مواه|مواا|موو$/i.test(m.text) && !chat.isBanned) {
    conn.sendPresenceUpdate('recording', m.chat);
    
  m.conn.sendMessage(m.chat, {audio: {url: vn}, fileName: 'error.mp3', mimetype: 'audio/mpeg', ptt: true}, {quoted: m});
   
  }
  return !0;
};
export default handler;
