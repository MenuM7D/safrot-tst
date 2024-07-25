const { Client, Buttons } = require('whatsapp-web.js');
const fetch = require("node-fetch");
const cheerio = require("cheerio");

const client = new Client();

client.on('qr', (qr) => {
    console.log('QR RECEIVED', qr);
});

client.on('ready', () => {
    console.log('Client is ready!');
});

client.on('message', async msg => {
    if (msg.body.startsWith('رقم')) {
        const cap = `╮────────────────────────╭ـ\n│ *مرحبا أنا خدمة /Fake Number Ai*/\n│ خدمة قادرة على صنع الأرقام الوهمية.\n│[دولة] لعرض قائمة الدول.\n│[أرقام] لعرض قائمة الارقام للدولة.\n│[رسائل] لعرض قائمة الرسائل للرقم \n╯────────────────────────╰ـ`;
        const link = 'https://temporary-phone-number.com';
        const link2 = 'https://temporary-phone-number.com/countrys/';

        let [feature, ...args] = msg.body.split(" ");
        let additionalLink = args.join(" ").trim();

        if (!["دولة", "أرقام", "رسائل"].includes(feature)) {
            const buttons = new Buttons(cap, [
                { body: 'دولة' },
                { body: 'أرقام' },
                { body: 'رسائل' }
            ], 'Fake Number Ai', 'اختر أمر');
            client.sendMessage(msg.from, buttons);
            return;
        }

        if (feature === 'دولة') {
            try {
                let response = await fetch(link2);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                let html = await response.text();
                const $ = cheerio.load(html);

                let countryLinks = [];
                $('a.checkout-box').each((i, el) => {
                    const href = $(el).attr('href');
                    const countryName = $(el).text().trim();

                    if (href) {
                        const parts = countryName.split('\n');
                        let name, number;
                        if (parts.length === 2) {
                            name = parts[0];
                            number = parts[1].replace(/\s+/g, '');
                        } else {
                            name = countryName;
                            number = '';
                        }

                        countryLinks.push({ name: name, number: number, shortLink: href, fullLink: `${link}${href}` });
                    }
                });

                let countryText = "╮────────────────────────╭ـ\n│ *قائمة الدول وروابطها:*\n╯────────────────────────╰ـ\n\n" + countryLinks.map((country, index) =>
                    `╮────────────────────────╭ـ\n│نتيجة: [${index + 1}]\n│دولة: ${country.name}\n│المتاح: ${country.number}\n│ عنوان: ${country.shortLink}\n│ رابط: ${country.fullLink}\n╯────────────────────────╰ـ`
                ).join("\n\n<─────────────────────────>\n\n");

                client.sendMessage(msg.from, countryText);
            } catch (error) {
                console.log(error);
                client.sendMessage(msg.from, "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا.");
            }

        } else if (feature === 'أرقام') {
            if (!additionalLink) {
                client.sendMessage(msg.from, "يرجى إدخال الرابط بعد الأمر \"أرقام\".");
                return;
            }

            try {
                let response = await fetch(additionalLink);
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                let html = await response.text();
                const $ = cheerio.load(html);

                let countryNumbers = [];
                $('a.checkout-box').each((i, el) => {
                    const href = $(el).attr('href');
                    const countryNumber = $(el).text().trim();

                    if (href) {
                        countryNumbers.push({ number: countryNumber, shortLink: href, fullLink: `${link}${href}` });
                    }
                });

                let numbersText = "╮────────────────────────╭ـ\n│ *قائمة الأرقام وروابطها:*\n╯────────────────────────╰ـ\n\n" + countryNumbers.map((number, index) =>
                    `╮────────────────────────╭ـ\n│نتيجة: [${index + 1}]\n│ رقم: ${number.number}\n│ عنوان: ${number.shortLink}\n│ رابط: ${number.fullLink}\n╯────────────────────────╰ـ`
                ).join("\n\n<─────────────────────────>\n\n");

                client.sendMessage(msg.from, numbersText);
            } catch (error) {
                console.log(error);
                client.sendMessage(msg.from, "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا.");
            }
        } else if (feature === 'رسائل') {
            // معالجة الأمر "رسائل" هنا
        }
    }
});

client.initialize();
