import { sticker } from '../lib/sticker.js';

let handler = async (m, { conn }) => {};

const stickers = [
    "https://i.ibb.co/TRLBc0D/file.png",
    "https://i.ibb.co/2nvvmSJ/file.png",
    "https://i.ibb.co/JvYHNNK/file.png",
    "https://i.ibb.co/w0z9hK9/file.png",
    "https://i.ibb.co/9bw4RKh/file.png",
    "https://i.ibb.co/XD8cB1C/file.png",
    "https://d.uguu.se/YcDvkZFj.png",
    "https://f.uguu.se/hwzUApeW.png",
    "https://f.uguu.se/rMGntdNE.png",
    "https://d.uguu.se/zVyGPWaj.png",
    "https://f.uguu.se/pSOrhMPx.png",
    "https://d.uguu.se/lwYDwvct.png",
    "https://f.uguu.se/fYMzbYzt.png",
    "https://d.uguu.se/iHThANPV.png",
    "https://d.uguu.se/hVcheYlE.png",
    "https://f.uguu.se/euqoVHdk.png",
    "https://f.uguu.se/vgiTrOTE.png",
    "https://d.uguu.se/QwXlvoZV.png",
    "https://f.uguu.se/sLFRxSVX.png",
    "https://f.uguu.se/dMRLQkxr.png",
    "https://d.uguu.se/RfJSTCDA.png",
    "https://d.uguu.se/TjpVwjJt.png",
    "https://f.uguu.se/YLowYfFW.png",
    "https://f.uguu.se/KMliWCdg.png",
    "https://d.uguu.se/wyHqilUv.png",
    "https://f.uguu.se/mSSWfOLJ.png",
    "https://d.uguu.se/NjBhQLOq.png",
    "https://d.uguu.se/xRoQduSz.png",
    "https://f.uguu.se/XcrNdtrL.png",
    "https://d.uguu.se/NLlgSoQN.png",
    "https://d.uguu.se/hSMVwgjc.png",
    "https://f.uguu.se/XgbRcvjb.png",
    "https://d.uguu.se/OEZaUdgN.png",
    "https://d.uguu.se/ZDVOaYtd.png",
    "https://d.uguu.se/vvTnHcLo.png",
    "https://d.uguu.se/MYLKbApm.png",
    "https://d.uguu.se/TheOlEoM.png",
    "https://f.uguu.se/EsuSKHhS.png",
    "https://f.uguu.se/AehEyQKH.png",
    "https://f.uguu.se/CKpUJMgb.png",
    "https://d.uguu.se/PWqrEePb.png",
    "https://i.ibb.co/5kcJ8Bf/file.png"
];

let lastExecuted = 0; 

handler.all = async function (m) {
    const chat = global.db.data.chats[m.chat];
    
    const currentTime = Date.now();

    // تغيير الوقت ليكون 2 دقيقة (120000 ملي ثانية)
    if (currentTime - lastExecuted < 120000) {
        return; 
    }

    if (!chat.isBanned) {
        let randomUrl = stickers[Math.floor(Math.random() * stickers.length)];

        try {
            let stiker = await sticker(null, randomUrl, {
                packname: global.packname 
            });

            if (stiker) {
                await conn.sendFile(m.chat, stiker, 'sticker.webp', '', m, {
                    caption: global.packname 
                });
                lastExecuted = currentTime; 
            } else {
                console.error('تعذر إنشاء الملصق من الرابط المحدد.');
            }
        } catch (error) {
            console.error(error);
            m.reply('حدث خطأ أثناء إنشاء الملصق.');
        }
    }
    return !0;
};

export default handler;
