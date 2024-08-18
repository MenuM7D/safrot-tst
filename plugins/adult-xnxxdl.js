import fetch from 'node-fetch';
import cheerio from 'cheerio';

const handler = async (m, {conn, args, command, usedPrefix}) => {
    let صورة1 = 'https://qu.ax/bXMB.webp';
    let صورة2 = 'https://qu.ax/TxtQ.webp';
    
    if (!db.data.chats[m.chat].modohorny && m.isGroup) return conn.sendFile(m.chat, [صورة1, صورة2].getRandom(), 'sticker.webp', '', m, true, { contextInfo: { 'forwardingScore': 200, 'isForwarded': false, externalAdReply:{ showAdAttribution: false, title: `الأوامر الخاصة مش مفعلة. لو أنت أدمن وعايز تفعلها، استخدم:`, body: '#enable modohorny', mediaType: 2, sourceUrl: md, thumbnail: imagen3}}}, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100});
    
    if (!args[0]) throw `*⚠️ إنت بتدور على إيه؟ دخل لينك صحيح من xnxx*\n\n*مثال: ${usedPrefix + command} https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*`;
    
    try {
        m.react(`⌛`);
        
        let رابطXnxx = '';
        if (args[0].includes('xnxx')) {
            رابطXnxx = args[0];
        } else {
            const رقم = parseInt(args[0]) - 1;
            if (رقم >= 0) {
                if (Array.isArray(global.videoListXXX) && global.videoListXXX.length > 0) {
                    const matchingItem = global.videoListXXX.find((item) => item.from === m.sender);
                    if (matchingItem) {
                        if (رقم < matchingItem.urls.length) {
                            رابطXnxx = matchingItem.urls[رقم];
                        } else {
                            throw `*[❗] مفيش رابط للفيديو ده. دخل رقم بين 1 و ${matchingItem.urls.length}*`;
                        }
                    } else {
                        throw `*[❗] عشان تستخدم الأمر ده (${usedPrefix + command} <رقم>), لازم تعمل بحث للفيديوهات باستخدام الأمر ${usedPrefix}xnxxsearch <كلمة>*`;
                    }
                } else {
                    throw `*[❗] عشان تستخدم الأمر ده (${usedPrefix + command} <رقم>), لازم تعمل بحث للفيديوهات باستخدام الأمر ${usedPrefix}xnxxsearch <كلمة>*`;
                }
            }
        }
        
        const res = await xnxxdl(رابطXnxx);
        const json = await res.result.files;
        conn.sendMessage(m.chat, {document: {url: json.high}, mimetype: 'video/mp4', fileName: res.result.title}, {quoted: m});
        m.react(`🔥`);
    } catch {
        throw '*⚠️ إنت بتدور على إيه؟ دخل لينك صحيح من xnxx*\n\n*مثال: https://www.xnxx.com/video-14lcwbe8/rubia_novia_follada_en_cuarto_de_bano*';
    }
};

handler.help = ['xnxxdl'];
handler.tags = ['nsfw'];
handler.command = /^(xسكس)$/i;
handler.limit = 12;
//handler.register = true;

export default handler;

async function xnxxdl(URL) {
    return new Promise((resolve, reject) => {
        fetch(`${URL}`, {method: 'get'}).then((res) => res.text()).then((res) => {
            const $ = cheerio.load(res, {xmlMode: false});
            const title = $('meta[property="og:title"]').attr('content');
            const duration = $('meta[property="og:duration"]').attr('content');
            const image = $('meta[property="og:image"]').attr('content');
            const videoType = $('meta[property="og:video:type"]').attr('content');
            const videoWidth = $('meta[property="og:video:width"]').attr('content');
            const videoHeight = $('meta[property="og:video:height"]').attr('content');
            const info = $('span.metadata').text();
            const videoScript = $('#video-player-bg > script:nth-child(6)').html();
            const files = {
                low: (videoScript.match('html5player.setVideoUrlLow\\(\'(.*?)\'\\);') || [])[1],
                high: videoScript.match('html5player.setVideoUrlHigh\\(\'(.*?)\'\\);' || [])[1],
                HLS: videoScript.match('html5player.setVideoHLS\\(\'(.*?)\'\\);' || [])[1],
                thumb: videoScript.match('html5player.setThumbUrl\\(\'(.*?)\'\\);' || [])[1],
                thumb69: videoScript.match('html5player.setThumbUrl169\\(\'(.*?)\'\\);' || [])[1],
                thumbSlide: videoScript.match('html5player.setThumbSlide\\(\'(.*?)\'\\);' || [])[1],
                thumbSlideBig: videoScript.match('html5player.setThumbSlideBig\\(\'(.*?)\'\\);' || [])[1]
            };
            resolve({status: 200, result: {title, URL, duration, image, videoType, videoWidth, videoHeight, info, files}});
        }).catch((err) => reject({code: 503, status: false, result: err}));
    });
}
