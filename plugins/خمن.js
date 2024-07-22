import fs from 'fs'
import fetch from 'node-fetch';
import axios from 'axios';

let timeout = 30000
let poin = 500 
 
let handler = async (m, { conn, command, usedPrefix }) => {
let fkontak = { "key": { "participants":"0@s.whatsapp.net", "remoteJid": "status@broadcast", "fromMe": false, "id": "Halo" }, "message": { "contactMessage": { "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:Sy;Bot;;;\nFN:y\nitem1.TEL;waid=${m.sender.split('@')[0]}:${m.sender.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD` }}, "participant": "0@s.whatsapp.net" }   
conn.tekateki = conn.tekateki ? conn.tekateki : {}
let id = m.chat
if (id in conn.tekateki) {
conn.reply(m.chat, '*لسه في لعبة مش محلولة في الشات ده*🧚🏼‍♂️', conn.tekateki[id][0])
throw false
}

try {    
if (command == 'acertijo' || command == 'acert' || command == 'adivinanza' || command == 'tekateki') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/acertijo.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثواني
*• المكافأة:* +${poin} نقطة
`.trim()
conn.tekateki[id] = [
await conn.sendMessage(m.chat, { text: caption, contextInfo:{forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `• 𝐀𝐂𝐄𝐍𝐓𝐈𝐉𝐎 •`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `*👾 خسرت*\n\nالوقت انتهى!`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)]}

if (command == 'advpe' || command == 'adv' || command == 'peliculas' || command == 'pelicula') {    
let tekateki = JSON.parse(fs.readFileSync(`./src/game/peliculas.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ *${json.question}*

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثواني
*• المكافأة:* +${poin} نقطة
`.trim()
conn.tekateki[id] = [
await conn.sendMessage(m.chat, { text: caption, contextInfo:{forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `• خمن الفيلم بالإيموجي •`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}), json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `*👾 خسرت*\n\nالوقت انتهى!`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'cancion' || command == 'canción') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
const id = m.chat;
if (id in conn.tebaklagu) {
conn.reply(m.chat, 'لسه في أغاني مش محلولة في الشات ده.', conn.tebaklagu[id][0]);
throw false;
} 
const res = await fetchJson(`https://raw.githubusercontent.com/elrebelde21/LoliBot-MD/master/src/JSON/tebaklagu.json`);
const json = res[Math.floor(Math.random() * res.length)];
const caption = `• *الوقت :* ${(timeout / 1000).toFixed(2)} ثواني\n• *اكتب :* ${usedPrefix}pista عشان تاخد تلميح ♨️\n• *المكافأة :* ${poin} نقطة⚡
`.trim();
conn.tebaklagu[id] = [
await conn.reply(m.chat,  caption, m, {contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, description: null, title: 'خمن الأغنية', body: '𝐒𝐮𝐩𝐞𝐫 𝐁𝐨𝐭 𝐃𝐞 𝐖𝐡𝐚𝐭𝐬𝐀𝐩𝐩', previewType: 0, thumbnail: imagen4, sourceUrl: [md, yt, tiktok].getRandom()}}}), 
json, poin, setTimeout(() => {
if (conn.tebaklagu[id]) conn.reply(m.chat, `*👾 خسرت*\n\nالوقت انتهى!`, conn.tebaklagu[id][0]);
delete conn.tebaklagu[id];
}, timeout),
];
const aa = await conn.sendMessage(m.chat, {audio: {url: json.link_song}, fileName: `error.mp3`, mimetype: 'audio/mpeg'}, {quoted: m});
if (!aa) return conn.sendFile(m.chat, json.link_song, 'جرب-تاني.mp3', '', m);
};

if (command == 'trivia' || command == 'triviador') {
let tekateki = JSON.parse(fs.readFileSync(`./src/game/trivia.json`))
let json = tekateki[Math.floor(Math.random() * tekateki.length)]
let _clue = json.response
let clue = _clue.replace(/[A-Za-z]/g, '_')
let caption = `
ⷮ${json.question}

*• الوقت:* ${(timeout / 1000).toFixed(2)} ثواني
*• المكافأة:* +${poin} نقطة
`.trim()
conn.tekateki[id] = [
await conn.sendMessage(m.chat, { text: caption, contextInfo:{forwardingScore: 9999999, isForwarded: true, "externalAdReply": {"showAdAttribution": true, "containsAutoReply": true, "body": `• 𝐓𝐑𝐈𝐕𝐈𝐀 •`, "previewType": "PHOTO", thumbnail: imagen1, sourceUrl: md}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100}),
json, poin, setTimeout(async () => {
if (conn.tekateki[id]) await conn.reply(m.chat, `الوقت انتهى!`, conn.tekateki[id][0])
delete conn.tekateki[id]
}, timeout)
]}

if (command == 'hint' || command == 'pista') {
conn.tebaklagu = conn.tebaklagu ? conn.tebaklagu : {};
const id = m.chat;
if (!(id in conn.tebaklagu)) throw false;
const json = conn.tebaklagu[id][1];
const nya = json.jawaban;
const nyanya = nya.replace(/[bcdfghjklmnñpqrstvwxyzBCDEFGHJKLMNÑPQRSTVWXYZ]/g, '_');
m.reply('' + nyanya + '');
}} catch (e) {
console.log(e)}}
handler.help = ['خمن', 'تخمين', 'يخمن', 'trivia', 'pista']
handler.tags = ['game'];
handler.command = /^(خمن|تخمين|يخمن|tekateki|advpe|adv|peliculas|pelicula|cancion|canción|palabra|word|ordenar|order|trivia|triviador|hint|pista)$/i
handler.register = true
export default handler

async function fetchJson(url, options) {
  try {
options ? options : {};
const res = await axios({method: 'GET', url: url, headers: {'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/95.0.4638.69 Safari/537.36'}, ...options});
return res.data;
  } catch (err) {
    return err;
  }
                                }
