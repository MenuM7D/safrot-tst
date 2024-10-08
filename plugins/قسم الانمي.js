import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys';

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (device !== 'desktop' && device !== 'web') {      
        var imageMessageMedia = await prepareWAMessageMedia({ image: { url: 'https://i.ibb.co/Cv42zDr/file.jpg' } }, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: '*\`『 قسم الانمي بلازرار 』\`*\n *🧚🏻‍♂️دوس علي زر اخطار علشان تخطار الزر الصور الي تينزبك* '.trim() },
            footer: { text: `©𝑺𝐴𝐹𝑹O𝑇-𝐵O𝑇`.trim() },  
            header: {
                sourceUrl: 'https://www.atom.bio/safrotbob-376/',
                hasMediaAttachment: true,
                imageMessage: imageMessageMedia.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        "name": "single_select",
                        "buttonParamsJson": `{"title":"اخطار","sections":[
                            {"rows":[{"title":"『 كيوت 』","id":"/كيوت"}]},
                            {"rows":[{"title":"『 اكياما 』","id":"/اكياما"}]},
                            {"rows":[{"title":"『 اسونا 』","id":"/اسونا"}]},
                            {"rows":[{"title":"『 ايوزاوا 』","id":"/ايوزاوا"}]},
                            {"rows":[{"title":"『 بوروتو 』","id":"/بوروتو"}]},
                            {"rows":[{"title":"『 شينوبو 』","id":"/شينوبو"}]},
                            {"rows":[{"title":"『 شيتوجي 』","id":"/شيتوجي"}]},
                            {"rows":[{"title":"『 ديدارا 』","id":"/ديدارا"}]},
                            {"rows":[{"title":"『 ايرزا 』","id":"/ايرزا"}]},
                            {"rows":[{"title":"『 ايبا 』","id":"/ايبا"}]},
                            {"rows":[{"title":"『 ايملي 』","id":"/ايملي"}]},
                            {"rows":[{"title":"『 هيستيا 』","id":"/هيستيا"}]},
                            {"rows":[{"title":"『 هيناتا 』","id":"/هيناتا"}]},
                            {"rows":[{"title":"『 اينوري 』","id":"/اينوري"}]},
                            {"rows":[{"title":"『 ايسوزو 』","id":"/ايسوزو"}]},
                            {"rows":[{"title":"『 ايتاشي 』","id":"/ايتاشي"}]},
                            {"rows":[{"title":"『 كاغا 』","id":"/كاغا"}]},
                            {"rows":[{"title":"『 اننا 』","id":"/اننا"}]},
                            {"rows":[{"title":"『 كاوري 』","id":"/كاوري"}]},
                            {"rows":[{"title":"『 كانيكي 』","id":"/كانيكي"}]},
                            {"rows":[{"title":"『 كوتوري 』","id":"/كوتوري"}]},
                            {"rows":[{"title":"『 كاغورا 』","id":"/كاغورا"}]},
                            {"rows":[{"title":"『 ميكاسا 』","id":"/ميكاسا"}]},
                            {"rows":[{"title":"『 مادارا 』","id":"/مادارا"}]},
                            {"rows":[{"title":"『 ميكو 』","id":"/ميكو"}]},
                            {"rows":[{"title":"『 ميناتو 』","id":"/ميناتو"}]},
                            {"rows":[{"title":"『 ناروتو 』","id":"/ناروتو"}]},
                            {"rows":[{"title":"『 نيزيكو 』","id":"/نيزيكو"}]},
                            {"rows":[{"title":"『 نيكو 』","id":"/نيكو"}]},
                            {"rows":[{"title":"『 اويفو 』","id":"/اويفو"}]},
                            {"rows":[{"title":"『 بنت 』","id":"/بنت"}]},
                            {"rows":[{"title":"『 مراتي 』","id":"/مراتي"}]},
                            {"rows":[{"title":"『 الينا 』","id":"/الينا"}]},
                            {"rows":[{"title":"『 تشيهو 』","id":"/تشيهو"}]},
                            {"rows":[{"title":"『 كورومي 』","id":"/كورومي"}]},  // قسم جديد
                            {"rows":[{"title":"『 قريبا 』","id":"/قريبا"}]}, // قسم جديد
                            {"rows":[{"title":"『 قريبا 』","id":"/قريبا"}]}, // قسم جديد
                            {"rows":[{"title":"『 قريبا 』","id":"/قريبا"}]}  // قسم جديد
                        ]}`
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
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};

handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(سفروت10)$/i;
export default handler;
