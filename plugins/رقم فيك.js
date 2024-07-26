import fetch from "node-fetch";
import cheerio from "cheerio";

let handler = async (m, { conn, text }) => {
    const cap = `╮────────────────────────╭ـ\n│ *مرحبا أنا خدمة /Fake Number Ai*/\n│ خدمة قادرة على صنع الأرقام الوهمية.\n│[دولة] لعرض قائمة الدول.\n│[أرقام] لعرض قائمة الأرقام للدولة.\n│[رسائل] لعرض قائمة الرسائل للرقم \n╯────────────────────────╰ـ`;

    let lister = ["دولة", "أرقام", "رسائل"];

    const link = 'https://getfreesmsnumber.com/';
    const link2 = 'https://getfreesmsnumber.com/virtual-phone';

    let [feature, ...args] = text.split(" ");
    let additionalLink = args.join(" ").trim(); // Extract the additional link after the command

    if (!lister.includes(feature)) {
        return conn.sendMessage(m.chat, { text: cap }, { quoted: m });
    }

    // Helper function to introduce delay
    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));

    if (feature == "دولة") {
        try {
            let response = await fetch(link2);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Introduce delay while processing the response
            await delay(2000); // Delay for 2 seconds

            let html = await response.text();
            const $ = cheerio.load(html);

            let countryLinks = [];
            $('.col-12.col-lg-3.col-md-4.col-sm-6.p-2').each((i, el) => {
                const href = $(el).find('a.btn.btn-primary').attr('href').trim();
                const countryName = $(el).find('.card-title h3').text().trim();
                const number = $(el).find('.card-text p.font-weight-bold').text().trim();

                if (href) {
                    countryLinks.push({
                        name: countryName,
                        number: number,
                        shortLink: href,
                        fullLink: `${link}${href.trim()}`
                    });
                }
            });

            let countryText = "╮────────────────────────╭ـ\n│ *قائمة الدول وروابطها:*\n╯────────────────────────╰ـ\n\n" + countryLinks.map((country, index) => 
                `╮────────────────────────╭ـ\n│نتيجة: [${index + 1}]\n│دولة: ${country.name}\n│المتاح: ${country.number}\n│ عنوان: ${country.shortLink}\n│ رابط: ${country.fullLink}\n╯────────────────────────╰ـ`
            ).join("\n\n<─────────────────────────>\n\n");

            return conn.sendMessage(m.chat, { text: countryText }, { quoted: m });

        } catch (error) {
            console.log(error);
            return conn.sendMessage(m.chat, { text: "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا." }, m);
        }

    } else if (feature == "أرقام") {
        if (!additionalLink) {
            return conn.sendMessage(m.chat, { text: "يرجى إدخال رابط بعد الأمر \"أرقام\"." }, { quoted: m });
        }

        try {
            let response = await fetch(additionalLink);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Introduce delay while processing the response
            await delay(2000); // Delay for 2 seconds

            let html = await response.text();
            const $ = cheerio.load(html);

            let numberLinks = [];
            $('.col-12.col-lg-3.col-md-4.col-sm-6.p-2').each((i, el) => {
                const href = $(el).find('a.btn.btn-primary').attr('href').trim();
                const numberText = $(el).find('.card-text p.font-weight-bold').text().trim();
                const latestText = $(el).find('.card-text p.small').text().trim();

                if (href && numberText) {
                    numberLinks.push({
                        number: numberText,
                        shortLink: href,
                        fullLink: `${link}${href}`,
                        latest: latestText
                    });
                }
            });

            let numberText = "╮────────────────────────╭ـ\n│ *قائمة الأرقام وروابطها:*\n╯────────────────────────╰ـ\n\n" + numberLinks.map((num, index) => 
                `╮────────────────────────╭ـ\n│نتيجة: [${index + 1}]\n│رقم: ${num.number}\n│ أحدث: ${num.latest}\n│ عنوان: ${num.shortLink}\n│ رابط: ${num.fullLink}\n╯────────────────────────╰ـ`
            ).join("\n\n<─────────────────────────>\n\n");

            return conn.sendMessage(m.chat, { text: numberText }, { quoted: m });

        } catch (error) {
            console.log(error);
            return conn.sendMessage(m.chat, { text: "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا." }, m);
        }

    } else if (feature == "رسائل") {
        if (!additionalLink) {
            return conn.sendMessage(m.chat, { text: "يرجى إدخال رابط بعد الأمر \"رسائل\"." }, { quoted: m });
        }

        try {
            let response = await fetch(additionalLink);
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            // Introduce delay while processing the response
            await delay(2000); // Delay for 2 seconds

            let html = await response.text();
            const $ = cheerio.load(html);

            let messages = [];
            $('.card.m-2.text-center').each((i, el) => {
                const from = $(el).find('.card-header span a').text().trim();
                const time = $(el).find('.blockquote-footer.float-right').text().trim();
                const text = $(el).find('.card-body').html().replace(/<[^>]*>/g, '').trim();

                messages.push({
                    from: from,
                    time: time,
                    text: text
                });
            });

            let messageText = "╮────────────────────────╭ـ\n│ *قائمة الرسائل:*\n╯────────────────────────╰ـ\n\n" + messages.map((msg, index) => 
                `╮────────────────────────╭ـ\n│نتيجة: [${index + 1}]\n│من: ${msg.from}\n│ الوقت: ${msg.time}\n│ الرسالة: ${msg.text}\n╯────────────────────────╰ـ`
            ).join("\n\n<─────────────────────────>\n\n");

            return conn.sendMessage(m.chat, { text: messageText }, { quoted: m });

        } catch (error) {
            console.log(error);
            return conn.sendMessage(m.chat, { text: "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا." }, m);
        }
    }
};

handler.help = ["facknumbar"];
handler.tags = ["fack"];
handler.command = /^(رقم_فيك)$/i;
export default handler;
