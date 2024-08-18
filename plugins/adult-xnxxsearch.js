import fetch from 'node-fetch';

const handler = async (m, {text, usedPrefix, command}) => {
    let صورة1 = 'https://qu.ax/bXMB.webp';
    let صورة2 = 'https://qu.ax/TxtQ.webp';

    if (!db.data.chats[m.chat].modohorny && m.isGroup) {
        return conn.sendFile(m.chat, [صورة1, صورة2].getRandom(), 'sticker.webp', '', m, true, { 
            contextInfo: { 
                'forwardingScore': 200, 
                'isForwarded': false, 
                externalAdReply: { 
                    showAdAttribution: false, 
                    title: `الأوامر الخاصة مش مفعلة. لو أنت أدمن وعايز تفعلها، استخدم:`, 
                    body: '#enable modohorny', 
                    mediaType: 2, 
                    sourceUrl: md, 
                    thumbnail: imagen3
                }
            }
        }, { quoted: m, ephemeralExpiration: 24*60*100, disappearingMessagesInChat: 24*60*100 });
    }

    if (!text) throw `*⚠️ مثال على استخدام الأمر ${usedPrefix + command} مع بنت خالتي*`;

    try {
        const vids_ = {
            from: m.sender,
            urls: [],
        };

        if (!global.videoListXXX) {
            global.videoListXXX = [];
        }

        if (global.videoListXXX[0]?.from == m.sender) {
            global.videoListXXX.splice(0, global.videoListXXX.length);
        }

        const res = await xnxxsearch(text);
        const json = res.result;
        let cap = `*🔍 نتائج البحث:* ${text.toUpperCase()}\n\n`;
        let count = 1;

        for (const v of json) {
            const linkXXX = v.link;
            vids_.urls.push(linkXXX);
            cap += `*[${count}]*\n• *🎬 العنوان:* ${v.title}\n• *🔗 الرابط:* ${v.link}\n• *❗ المعلومات:* ${v.info}`;
            cap += '\n\n' + '••••••••••••••••••••••••••••••••' + '\n\n';
            count++;
        }

        m.reply(cap);
        global.videoListXXX.push(vids_);
    } catch {
        throw e;
    }
};

handler.help = ['xnxxsearch'].map((v) => v + ' <الكلمة>');
handler.tags = ['nsfw'];
handler.command = /^xnxxsearch|xnxxs$/i;
handler.limit = 10;
//handler.register = true;

export default handler;

async function xnxxsearch(query) {
    return new Promise((resolve, reject) => {
        const baseurl = 'https://www.xnxx.com';
        fetch(`${baseurl}/search/${query}/${Math.floor(Math.random() * 3) + 1}`, {method: 'get'}).then((res) => res.text()).then((res) => {
            const $ = cheerio.load(res, {xmlMode: false});
            const title = [];
            const url = [];
            const desc = [];
            const results = [];
            $('div.mozaique').each(function(a, b) {
                $(b).find('div.thumb').each(function(c, d) {
                    url.push(baseurl + $(d).find('a').attr('href').replace('/THUMBNUM/', '/'));
                });
            });
            $('div.mozaique').each(function(a, b) {
                $(b).find('div.thumb-under').each(function(c, d) {
                    desc.push($(d).find('p.metadata').text());
                    $(d).find('a').each(function(e, f) {
                        title.push($(f).attr('title'));
                    });
                });
            });
            for (let i = 0; i < title.length; i++) {
                results.push({title: title[i], info: desc[i], link: url[i]});
            }
            resolve({code: 200, status: true, result: results});
        }).catch((err) => reject({code: 503, status: false, result: err}));
    });
              }
