let handler = async (m, { conn, usedPrefix, command, text }) => {
    let img1 = 'https://i.ibb.co/2ZXTWjJ/file.jpg';
    let img2 = 'https://i.ibb.co/2SjJKVp/file.jpg';
    let img3 = 'https://i.ibb.co/2ZXTWjJ/file.jpg';
    let img4 = 'https://i.ibb.co/2SjJKVp/file.jpg';
    let img5 = 'https://i.ibb.co/2ZXTWjJ/file.jpg';
    let img6 = 'https://i.ibb.co/2SjJKVp/file.jpg'; // تأكد من تكرار الصورة إذا كان مقصود
    let img7 = 'https://i.ibb.co/2ZXTWjJ/file.jpg';
    let img8 = 'https://i.ibb.co/2SjJKVp/file.jpg';
    let img9 = 'https://i.ibb.co/2ZXTWjJ/file.jpg';

    const messages = [
        [
            "",
            "",
            img1,
            [["*ほالـمــــجــــمــــوعـــــــات⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــناتــــي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img2,
            [["*ほالفعاليات⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــناتــــي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img3,
            [["*ほالــــتـــــــرفــــيـــــه⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img4,
            [["Menu", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img5,
            [["*ほالتحميل⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img6,
            [["*ほالذكاء⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img7,
            [["*ほالتحويل⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img8,
            [["*ほالدعم⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ],
        [
            "",
            "",
            img9,
            [["*ほالمطور⤣🧚🏻‍♂️⤤〆*", ".menu"]],
            [],
            [
                ['「🧚🏻‍♂️ ╎الـمــطـور╎🧚🏻‍♂️ 」', 'https://wa.me/+201115618853'],
                ['「🧚🏻‍♂️ ╎قــنــاتـي╎🧚🏻‍♂️ 」', 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'],
                ['「🧚🏻‍♂️ ╎الجروب╎🧚🏻‍♂️ 」', 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY']
            ],
            []
        ]
    ];

    // إرسال رسالة الكيروسيل
    await conn.sendCarousel(m.chat, `بسم الله الرحمن الرحيم
> انا لست مسؤولا عن أي اساءة لاستخدام مزايا وأوامر البوت
────────────────⟢
⤣🧚🏻‍♂️⤤ يمنع استخدام البوت في الخاص
⤣🧚🏻‍♂️⤤ يمنع شتم أو سب البوت
⤣🧚🏻‍♂️⤤ يمنع البحث عن محتوى إباحي بواسطة البوت
────────────────⟢`, '*\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*', '*\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*', messages, m);
}

handler.command = /^(شير)$/i; // الأمر لتشغيل دالة المعالج

export default handler;
