import { generateWAMessageFromContent } from "@whiskeysockets/baileys";
import os from "os";
import util from "util";
import sizeFormatter from "human-readable";
import MessageType from "@whiskeysockets/baileys";
import fs from "fs";
import { performance } from "perf_hooks";
const handler = async (m, { conn, usedPrefix }) => {
  const _uptime = process.uptime() * 1000;
  const uptime = clockString(_uptime);
  const totalusrReg = Object.values(global.db.data.users).filter((user) => user.registered == true).length;
  const totalusr = Object.keys(global.db.data.users).length;
  const chats = Object.entries(conn.chats).filter(
    ([id, data]) => id && data.isChats,
  );
  const groupsIn = chats.filter(([id]) => id.endsWith("@g.us"));
  const groups = chats.filter(([id]) => id.endsWith("@g.us"));
  const used = process.memoryUsage();
  const { restrict, antiCall, antiprivado, modejadibot } =
    global.db.data.settings[conn.user.jid] || {};
  const { autoread, gconly, pconly, self } = global.opts || {};
  const old = performance.now();
  const neww = performance.now();
  const rtime = (neww - old).toFixed(7);
  const wm = 'The Mvro Bot';
  const info = ` _*\`『 معلومات البوت 』\`*_

  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 المطور : سفࢪوت افقدان 』\`*
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *رقم المطور:* wa.me/201115618853
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 دعم 』\`* https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46

  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 بينغ 』\`* ${rtime}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 وقت التشغيل 』\`* ${uptime}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 بدء الامر 』\`* ${usedPrefix}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 الوضع 』\`* ${self ? "برايفت" : "عام"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 المسجلين 』\`* ${totalusrReg}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 المستخدمين 』\`* ${totalusr}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 البوت الفرعي 』\`* ${(conn.user.jid == global.conn.user.jid ? '' :  `بوت فرعي:\n ▢ +${global.conn.user.jid.split`@`[0]}`) || 'ليس بوت فرعي '}
 
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 البرايفت 』\`* ${chats.length - groups.length}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 الجروبات 』\`* ${groups.length}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 الدردشات 』\`* ${chats.length}
 
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 الصحين 』\`* ${autoread ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 التقيد 』\`* ${restrict ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 الكمبيوتر 』\`* ${pconly ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 جروب 』\`* ${gconly ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 برايفت 』\`* ${antiprivado ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 مكلمات 』\`* ${antiCall ? "نشط" : "غير نشط"}
  🧚🏼‍♂️◡̈⃝🕊⤺┇❯ *\`『 بوت فرعي 』\`* ${modejadibot ? "نشط" : "غير نشط"}`.trim();
  const doc = [
    "pdf",
    "zip",
    "vnd.openxmlformats-officedocument.presentationml.presentation",
    "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    "vnd.openxmlformats-officedocument.wordprocessingml.document",
  ];
  const document = doc[Math.floor(Math.random() * doc.length)];
  const Message = {
    document: { url: `https://wa.me/201115618853` },
    mimetype: `application/${document}`,
    fileName: `Documento`,
    fileLength: 99999999999999,
    pageCount: 200,
    contextInfo: {
      forwardingScore: 200,
      isForwarded: true,
      externalAdReply: {
        mediaUrl: "https://wa.me/201115618853",
        mediaType: 2,
        previewType: "pdf",
        title: "𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩",
        body: "Repositorio - GitHub",
        thumbnail: imagen1,
        sourceUrl: "https://wa.me/201115618853",
      },
    },
    caption: info,
    footer: wm,
    headerType: 6,
  };
  conn.sendMessage(m.chat, Message, { quoted: m });
};

handler.command = /^(ping|info|بينغ|estado)$/i;
export default handler;

function clockString(ms) {
  const h = Math.floor(ms / 3600000);
  const m = Math.floor(ms / 60000) % 60;
  const s = Math.floor(ms / 1000) % 60;
  console.log({ ms, h, m, s });
  return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");
                                                                 }
