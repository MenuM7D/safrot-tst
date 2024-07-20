import { prepareWAMessageMedia, generateWAMessageFromContent, getDevice } from '@whiskeysockets/baileys'

const handler = async (m, { conn, text, usedPrefix: prefijo }) => {
    const device = await getDevice(m.key.id);
    const mentionId = m.key.participant || m.key.remoteJid;

    const uptime = process.uptime();
    const uptimeString = `${Math.floor(uptime / 60)} دقائق ${Math.floor(uptime % 60)} ثواني`;
    m.react('📂');

    if (device !== 'desktop' && device !== 'web') {      
        var joanimiimg = await prepareWAMessageMedia({ image: {url: 'https://telegra.ph/file/b63528315a84c3205ed98.jpg'}}, { upload: conn.waUploadToServer });
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
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '◡̈⃝˼‏📖˹ ━━|قسم الادمن│━━˼‏📖˹◡̈⃝',
                                            id: '.سفروت1'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            title: 'ₛₐfᵣₒₜ bₒₜ',
                                            description: '🚻 ◡̈⃝☠︎︎━━ |قسم الاعضاء│━━☠︎︎🚻 ◡̈⃝‎',
                                            id: '.سفروت2'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                                            title: '',
                                            description: '🂱◡̈⃝📿━━│قسم الديني│━━◡̈⃝🂱📿',
                                            id: '.سفروت3'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                                            title: '',
                                            description: '◡̈⃝˼‏🏌˹ ━━|قسم الترفيه│━━˼‏🕺🏻˹◡̈⃝',
                                            id: '.سفروت4'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                                            title: '',
                                            description: '⬇️◡̈⃝ ━━│ قسم التحميل │━━◡̈⃝⬇️',
                                            id: '.سفروت5'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                                            title: 'ₛₐfᵣₒₜ↯bₒₜ',
                                            description: '🔃✠━━│قسم الـتحـويل│━━✠◡̈⃝🔃',
                                            id: '.سفروت6'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝⚙️❏━━│قسم الادوات│━━❏◡̈⃝⚙️',
                                            title: '',
                                            description: '◡̈⃝⚙️❏━━│قسم الايدت│━━❏◡̈⃝⚙️',
                                            id: '.سفروت7'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                                            title: '',
                                            description: '🏦❏━━│قسم البنك│━━❏◡̈⃝🏦',
                                            id: '.سفروت8'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝🤴🏻❏━━│قسم المطوࢪ│━━❏◡̈⃝🧏🏻',
                                            title: '',
                                            description: '◡̈⃝🤴🏻❏━━│قسم المطوࢪ│━━❏◡̈⃝🧏🏻',
                                            id: '.سفروت9'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '◡̈⃝🤴🏻❏━━│مطوري|━━❏◡̈⃝👑',
                                            title: '',
                                            description: '◡̈⃝🤴🏻❏━━│مطوري|━━❏◡̈⃝👑',
                                            id: '.المطور'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🔧❏━━│قسم جديد│━━❏◡̈⃝🔧',
                                            title: '',
                                            description: '🔧❏━━│قسم جديد│━━❏◡̈⃝🔧',
                                            id: '.جديد'
                                        }
                                    ]
                                },
                                {
                                    highlight_label: 'ON',
                                    rows: [
                                        {
                                            header: '🌟❏━━│قسم إضافي│━━❏◡̈⃝🌟',
                                            title: '',
                                            description: '🌟❏━━│قسم إضافي│━━❏◡̈⃝🌟',
                                            id: '.إضافي'
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
    }    
};
handler.help = ['imgboton'];
handler.tags = ['For Test'];
handler.command = /^(help|الاوامر|menu|أوامر|menu|اوامر)$/i;
export default handler;
