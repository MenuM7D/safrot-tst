import fetch from 'node-fetch';
import yts from 'yt-search';
import ytdl from 'ytdl-core';
import axios from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

const handler = async (m, { conn, command, args, text, usedPrefix }) => {

    if (command === 'شغل' || command === 'شغل1') {
        if (!text) return conn.reply(m.chat, `*🧚🏼‍♂️ اكتب اسم الاغنيه*\n\n*مثال:*\n#شغل عصام صاصا`, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    description: null,
                    title: wm,
                    body: '',
                    previewType: 0,
                    thumbnail: img.getRandom(),
                    sourceUrl: redes.getRandom()
                }
            }
        });
        
        const yt_play = await search(args.join(' '));
        const texto1 = `📌 *العنوان* : ${yt_play[0].title}\n📆 *نُشر:* ${yt_play[0].ago}\n⌚ *المدة:* ${secondString(yt_play[0].duration.seconds)}`.trim();

        await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [
            ['الصوت', `${usedPrefix}ytmp3 ${yt_play[0].url}`],
            ['الفيديو', `${usedPrefix}ytmp4 ${yt_play[0].url}`]
        ], null, null, m);
    }

    if (command === 'شغل2' || command === 'شغل3') {
        if (!text) return conn.reply(m.chat, `*🧚🏼‍♂️ اكتب اسم الاغنيه الي انت عيزها*\n\n*مثال:*\n#شغل عصام صاصا`, m, {
            contextInfo: {
                externalAdReply: {
                    mediaUrl: null,
                    mediaType: 1,
                    description: null,
                    title: wm,
                    body: '',
                    previewType: 0,
                    thumbnail: img.getRandom(),
                    sourceUrl: redes.getRandom()
                }
            }
        });
        
        const yt_play = await search(args.join(' '));
        const texto1 = `📌 *العنوان* : ${yt_play[0].title}\n📆 *نُشر:* ${yt_play[0].ago}\n⌚ *المدة:* ${secondString(yt_play[0].duration.seconds)}\n👀 *المشاهدات:* ${MilesNumber(yt_play[0].views)}`.trim();

        await conn.sendButton(m.chat, texto1, botname, yt_play[0].thumbnail, [
            ['الصوت', `${usedPrefix}ytmp3 ${yt_play[0].url}`],
            ['الفيديو', `${usedPrefix}ytmp4 ${yt_play[0].url}`],
            ['مزيد من النتائج', `${usedPrefix}yts ${text}`]
        ], null, null, m);
    }
};

handler.help = ['play', 'play2'];
handler.tags = ['downloader'];
handler.command = ['شغل', 'شغل1', 'شغل2', 'شغل3'];
// handler.limit = 3;
handler.register = true;

export default handler;

async function search(query, options = {}) {
    const searchResult = await yts.search({ query, hl: 'ar', gl: 'EG', ...options });
    return searchResult.videos;
}

function MilesNumber(number) {
    const exp = /(\d)(?=(\d{3})+(?!\d))/g;
    const rep = '$1.';
    const arr = number.toString().split('.');
    arr[0] = arr[0].replace(exp, rep);
    return arr[1] ? arr.join('.') : arr[0];
}

function secondString(seconds) {
    seconds = Number(seconds);
    const d = Math.floor(seconds / (3600 * 24));
    const h = Math.floor((seconds % (3600 * 24)) / 3600);
    const m = Math.floor((seconds % 3600) / 60);
    const s = Math.floor(seconds % 60);
    const dDisplay = d > 0 ? d + (d === 1 ? ' يوم, ' : ' أيام, ') : '';
    const hDisplay = h > 0 ? h + (h === 1 ? ' ساعة, ' : ' ساعات, ') : '';
    const mDisplay = m > 0 ? m + (m === 1 ? ' دقيقة, ' : ' دقائق, ') : '';
    const sDisplay = s > 0 ? s + (s === 1 ? ' ثانية' : ' ثواني') : '';
    return dDisplay + hDisplay + mDisplay + sDisplay;
}
