import fetch from 'node-fetch';
import yts from 'yt-search';
import axios from 'axios';
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper';

const handler = async (m, { command, usedPrefix, conn, args, text }) => {
    if (!text) {
        await conn.sendMessage(m.chat, { text: `> *\`『 اكتب اسم الاغنيه 』\`*` }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
        return;
    }

    await conn.sendMessage(m.chat, { react: { text: '🕓', key: m.key } });

    // البحث عن الفيديو
    try {
        const yt_play = await search(args.join(' '));
        const iturl = yt_play[0].url;
        const itimg = yt_play[0].thumbnail; 

        // استدعاء دالة الفيديو أو الصوت بناءً على الأمر
        if (command === 'شغل_كفيديو') {
            await playVideo(iturl, itimg, m, conn);
        } else if (command === 'اغنيه','اغنية') {
            await playAudio(iturl, itimg, m, conn);
        }

    } catch {
        await conn.sendMessage(m.chat, { text: `> *\`『 الرابط غلط اتاكد منو🧚🏻‍♂️ 』\`*` }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '❌', key: m.key } });
    }
};

handler.command = /^(شغل_كفيديو|اغنيه|اغنية)$/i;
export default handler;

// دالة للبحث في YouTube
async function search(query, options = {}) {
    const search = await yts.search({ query, hl: 'ar', gl: 'AR', ...options });
    return search.videos;
}

// دالة إرسال الفيديو
async function playVideo(url, thumbnail, m, conn) {
    try {
        const playVideo = await getVideoUrl(url);
        const { title, videoUrl } = playVideo;

        await conn.sendMessage(m.chat, {
            video: { url: videoUrl },
            caption: `*${title}*\n\n*𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓*`,
            mimetype: 'video/mp4',
            contextInfo: {
                externalAdReply: {
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: url,
                    title: title,
                    body: "𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓", 
                    sourceUrl: url,
                    thumbnail: await (await conn.getFile(thumbnail)).data 
                }
            }
        }, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch {
        await conn.reply(m.chat, '- *❗ حدث خطأ عند جلب الفيديو.*', m);
    }
}

// دالة إرسال الصوت
async function playAudio(url, thumbnail, m, conn) {
    try {
        const playmp3 = await getmp3url(url);
        const { title, videoUrl } = playmp3;

        let doc = { 
            audio: { 
                url: videoUrl 
            }, 
            mimetype: 'audio/mpeg', 
            fileName: `${title}.mp3`, 
            contextInfo: { 
                externalAdReply: { 
                    showAdAttribution: true,
                    mediaType: 2,
                    mediaUrl: url,
                    title: title,
                    body: "*𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓*",
                    sourceUrl: url,
                    thumbnail: await (await conn.getFile(thumbnail)).data 
                }
            }
        };

        await conn.sendMessage(m.chat, doc, { quoted: m });
        await conn.sendMessage(m.chat, { react: { text: '✅', key: m.key } });
    } catch {
        await conn.reply(m.chat, '- *❗ حدث خطأ عند جلب الأغنية.*', m);
    }
}

// دالة للحصول على رابط الفيديو
async function getVideoUrl(url) {
    const fetchUrl = `https://rembotapi.vercel.app/api/yt?url=${encodeURIComponent(url)}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    
    if (!data.status) {
        throw new Error(`❌ _Error:_ ${data.message || 'لم يتم العثور على الفيديو'}`);
    }

    return data.data; 
}

// دالة للحصول على رابط الصوت
async function getmp3url(url) {
    const fetchUrl = `https://rembotapi.vercel.app/api/yt?url=${encodeURIComponent(url)}`;
    const response = await fetch(fetchUrl);
    const data = await response.json();
    
    if (!data.status) {
        throw new Error(`❌ _Error:_ ${data.message || 'لم يتم العثور على الفيديو'}`);
    }

    return data.data;
}
