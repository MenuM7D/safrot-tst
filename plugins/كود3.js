import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    const uptime = process.uptime();
    const uptimeString = `${Math.floor(uptime / 60)} دقائق ${Math.floor(uptime % 60)} ثواني`;
    m.react('📂');

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/ac32647cede21e4adb09a.jpg'}}, { upload: conn.waUploadToServer });
        const interactiveMessage = {
            body: { text: `\n◞❐ *وقـت الـتـشـغـيـل: ${uptimeString}*`.trim() },
            footer: { text: ` *ممنوع سب للبوت لانك سبيت للبوت = سبيت المطور تمتع بالبوت ولا تكتر اسبام للبوت اذا كان لديك مشكله او تريد اضافه اوامر اخري جديده تواصل مع المطور المطور* ◞❐wa.me/201115618853`.trim() },  
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
                            title: '⌝قـائـمـه الاوامـر⌞',
                            sections: [
                                {
                                    title: 'List',
                                    highlight_label: '1',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '◡̈⃝˼‏👤˹ ━━|قسم الجروب│━━˼👤˹◡̈⃝',
                                            id: '.سفروت1'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '2',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            id: '.سفروت2'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '3',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                                            id: '.سفروت3'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '4',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                                            id: '.سفروت4'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '5',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                                            id: '.سفروت5'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '6',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                                            id: '.سفروت6'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '7',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '◡̈⃝⚙️❏━━│قسم الاديت│━━❏◡̈⃝⚙️',
                                            id: '.سفروت7'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '8',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                                            id: '.سفروت8'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '9',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '◡̈⃝📢❏━━│قسم الاصوات│━━❏◡̈⃝📢',
                                            id: '.سفروت9'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '10',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '◡̈⃝˼‏👤˹ ━━|قسم الانمي│━━˼✨˹◡̈⃝',
                                            id: '.سفروت10'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '11',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🔧◡̈⃝❏━━│قسم المطور│━━❏◡̈⃝🔧',
                                            id: '.سفروت11'
                                        }
                                    ]
                                },
                                {
                                highlight_label: '12',
                                    rows: [
                                        {

                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '◡̈⃝📸˹ ━━|قسم الصور━━˼📷˹◡̈⃝',
                                            id: '.سفروت12'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: '13',
                                    rows: [
                                        {
                                            
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🎬◡̈⃝❏━━│قسم الفديوهات│━━❏◡̈⃝🎬',
                                            id: '.سفروت13'
                                        }
                                    ]
                                }
                            ]
                        })
                    },
                    {
                        name: 'cta_url',
                        buttonParamsJson: JSON.stringify({
                            display_text: 'منصاتي🤺🔥',
                            url: 'https://www.atom.bio/safrotbob-376',
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
    audio: { url: '' }, 
    mimetype: 'audio/mpeg', 
    ptt: true
}, { quoted: m });
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i;
export default handler;
