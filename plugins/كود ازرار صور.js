import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    const uptime = process.uptime();
    const uptimeString = `${Math.floor(uptime / 60)} دقائق ${Math.floor(uptime % 60)} ثواني`;
    m.react('🦦');

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/ac32647cede21e4adb09a.jpg'}}, { upload: conn.waUploadToServer });
        const interactiveMessage = {
        
            footer: { text: ` *دوس علي زر اخطار علشان يظهرلك القائمة وتختار انت يحب🧚🏻‍♂️* 𝙎𝙖𝙛𝙧𝙤𝙩-𝘽𝙤𝙩`.trim() },  
            header: {
                title: `◞❐*نورت يحب قائمة الاوامر*\n*◞❐ تفضل القائمة يا:* @${mentionId.split('@')[0]}`,
                subtitle: ``,
                hasMediaAttachment: true,
                imageMessage: joanimiimg.imageMessage,
            },
            nativeFlowMessage: {
                buttons: [
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            title: '*\`『 اخطا 』\`*',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: '1',
                                    rows: [
                                        {
                                            header: '*\`『 صور جبل 』\`*',
                                            title: ' ',
                                            description: ' 🧗‍♀️',
                                            id: '.جبل'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '2',
                                    rows: [
                                        {
                                            header: '*\`『 صور ببجي 』\`*',
                                            title: ' ',
                                            description: '🥷🏻‎',
                                            id: '.ببجي'
                                        }
                                    ]                               },
                                {
                                    highlight_label: '3',
                                    rows: [
                                        {
                                            header: '*\`『 صور.جيمينج 』\`*',
                                            title: ' ',
                                            description: '🧟‍♂️',
                                            id: '.جيمينج'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '4',
                                    rows: [
                                        {
                                            header: '*\`『 صور عشوائي 』\`*',
                                            title: ' ',
                                            description: '🔁',
                                            id: '.عشوائي'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '5',
                                    rows: [
                                        {
                                            header: '*\`『 صور كوكب 』\`*',
                                            title: ' ',
                                            description: '🌏',
                                            id: '.كوكب'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '6',
                                    rows: [
                                        {
                                            header: '*\`『 صور انميز 』\`*',
                                            title: ' ',
                                            description: '🙅🏻',
                                            id: '.انميز'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '7',
                                    rows: [
                                        {
                                            header: '*\`『 صور كرتون 』\`*',
                                            title: '◡',
                                            description: '📦',
                                            id: '.كرتون'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '8',
                                    rows: [
                                        {
                                            header: '*\`『 صور هكر 』\`*',
                                            title: '◡',
                                            description: '👨🏻‍💻',
                                            id: '.هكر'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '9',
                                    rows: [
                                        {
                                            header: '*\`『 صور درايمون 』\`*',
                                            title: '◡',
                                            description: '🧸',
                                            id: '.درايمون'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '10',
                                    rows: [
                                        {
                                            header: '*\`『 صور ماتشينج 』\`*',
                                            title: '◡',
                                            description: '👥',
                                            id: '.ماتشينج'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '11',
                                    rows: [
                                        {
                                            header: '*\`『 صور خلفيات 』\`*',
                                            title: '◡',
                                            description: '🎑',
                                            id: '.سفروت11'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '12',
                                    rows: [
                                        {
                                            header: '*\`『 صور كابلز 』\`*',
                                            title: '◡',
                                            description: '👩‍❤️‍👨',
                                            id: '.كابلز'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: '*\`『 🧚🏻‍♂️المطور 』\`*',
                            url: 'https://wa.me/201115618853',
                            merchant_url: ''
                        })
                    },
                    {
                        name: 'single_select',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'call',
                            id: '.صوره'
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
        msg.message.viewOnceMessage.message.interactiveMessage.contextInfo = { mentionedJid: [mentionId] };
        conn.relayMessage(m.chat, msg.message, { messageId: msg.key.id });

    } else {
        conn.sendFile(m.chat, 'JoAnimi•Error.jpg', m);      
    };  
    conn.sendMessage(m.chat, {
    ptt: true
}, { quoted: m });
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(احو)$/i;
export default handler;
