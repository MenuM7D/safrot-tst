import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);

    if (device !== 'desktop' || device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://i.ibb.co/dGTKqbC/file.jpg'}}, { upload: conn.waUploadToServer })
        const interactiveMessage = {
            body: { text: '*\`『 اتفضل يحب القائمه 』\`*\n *🧚🏻‍♂️دوس علي زر اخطار علشان تخطار الزر الصور الي تينزبك* '.trim() },
            footer: { text: `©𝑺𝐴𝐹𝑹O𝑇-𝐵O𝑇`.trim() },  
            header: {
                
                sourceUrl: 'https://www.atom.bio/safrotbob-376/',
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        "name": "single_select",
                        "buttonParamsJson": `{\"title\":\"اخطار\",\"sections\":[
                            {\"title\":\"『 بيجبلك صور جيبال 』\",\"highlight_label\":\"1\",\"rows\":[{\"title\":\"『 صور جبل 』\",\"id\":\"/جبل\"}]},
                            {\"title\":\"『 بيجبلك صور ببجي  』\",\"highlight_label\":\"2\",\"rows\":[{\"title\":\"『 صور ببجي 』\",\"id\":\"/ببجي\"}]},
                            {\"title\":\"『 بيجبلك صور جيمينج  』\",\"highlight_label\":\"3\",\"rows\":[{\"title\":\"『 صور جيمينج 』\",\"id\":\"/جيمينج\"}]},
                            {\"title\":\"『 بيجبلك صور عسوائي 』\",\"highlight_label\":\"4\",\"rows\":[{\"title\":\"『 صور عشوائي 』\",\"id\":\"/عشوائي\"}]},
                            {\"title\":\"『 بيجبلك صور كوكب وكده 』\",\"highlight_label\":\"5\",\"rows\":[{\"title\":\"『 صور كوكب 』\",\"id\":\"/كوكب\"}]},
                            {\"title\":\"『 بيجبلك صور انميز 』\",\"highlight_label\":\"6\",\"rows\":[{\"title\":\"『 صور انميز 』\",\"id\":\"/انميز\"}]},
                            {\"title\":\"『 بيجبلك صور كرتون 』\",\"highlight_label\":\"7\",\"rows\":[{\"title\":\"『 صور كرتون 』\",\"id\":\"/كرتون\"}]},
                            {\"title\":\"『 بيجبلك صور خلفيات هكر 』\",\"highlight_label\":\"8\",\"rows\":[{\"title\":\"『 صور هكر 』\",\"id\":\"/هكر\"}]},
                            {\"title\":\"『 بيجبلك صور درايمون 』\",\"highlight_label\":\"9\",\"rows\":[{\"title\":\"『 صور درايمون 』\",\"id\":\"/درايمون\"}]},
                            {\"title\":\"『 بيجبلك صور كابلز 』\",\"highlight_label\":\"10\",\"rows\":[{\"title\":\"『 صور ماتشينج 』\",\"id\":\"/ماتشينج\"}]},
                            {\"title\":\"『 بيجبلك صور خلفيات』\",\"highlight_label\":\"11\",\"rows\":[{\"title\":\"『 صور خلفيات 』\",\"id\":\"/خلفيات\"}]}
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
        }, { userJid: conn.user.jid, quoted: m })
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id});

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(سفروت12)$/i;
export default handler;
