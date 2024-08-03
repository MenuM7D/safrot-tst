import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';
import yts from 'yt-search';
import fs from 'fs';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (!text) throw `⚠️ *يجب كتابة النص للبحث عنه في YouTube*`;

    if (device !== 'desktop' && device !== 'web') {
        const results = await yts(text);
        const videos = results.videos.slice(0, 20);
        const randomIndex = Math.floor(Math.random() * videos.length);
        const randomVideo = videos[randomIndex];

        var messa = await prepareWAMessageMedia({ image: { url: randomVideo.thumbnail } }, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `*—◉ النتائج المحصل عليها:* ${results.videos.length}\n*—◉ فيديو عشوائي:*\n*-› العنوان:* ${randomVideo.title}\n*-› المؤلف:* ${randomVideo.author.name}\n*-› المشاهدات:* ${randomVideo.views}\n*-› الرابط:* ${randomVideo.url}\n*-› الصورة:* ${randomVideo.thumbnail}`.trim() },
            footer: { text: `${global.wm}`.trim() },
            header: {
                title: `*< بحث YouTube />*\n`,
                hasMediaAttachment: true,
                imageMessage: messa.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: 'اختار',
                            sections: videos.map((video) => ({
                                title: video.title,
                                rows: [
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: 'صوت',
                                        id: `${prefijo}play.1 ${video.url}`
                                    },
                                    {
                                        header: video.title,
                                        title: video.author.name,
                                        description: 'فيديو',
                                        id: `${prefijo}play.2 ${video.url}`
                                    }
                                ]
                            }))
                        })
                    }
                ],
                messageParamsJson: ''
            }
        };

        let msg = generateWAMessageFromContent(m.chat, {
            viewOnceMessage: {
                message: {
                    interactiveMessage,
                },
            },
        }, { userJid: conn.user.jid, quoted: m });

        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        const results = await yts(text);
        const tes = results.all;
        const teks = results.all.map((v) => {
            switch (v.type) {
                case 'video': return `
° *_${v.title}_*
↳ 🫐 *_الرابط_* ${v.url}
↳ 🕒 *_المدة_* ${v.timestamp}
↳ 📥 *_منذ_* ${v.ago}
↳ 👁 *_المشاهدات_* ${v.views}`;
            }
        }).filter((v) => v).join('\n\n◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦◦\n\n');
        conn.sendFile(m.chat, tes[0].thumbnail, 'error.jpg', teks.trim(), m);
    }
};

handler.help = ['ytsearch <نص>'];
handler.tags = ['search'];
handler.command = /^(فيديو|مهرجان|اغاني|اغنيه1|فيديو2|يوتيوب)$/i;

export default handler;
