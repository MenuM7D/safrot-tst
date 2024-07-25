import fetch from "node-fetch";
import cheerio from "cheerio";

let handler = async (m, { conn, text }) => {
    const cap = `╮────────────────────────╭ـ\n│ *مرحبا أنا خدمة /Fake Number Ai*/\n│ خدمة قادرة على صنع الأرقام الوهمية.\n│[دولة] لعرض قائمة الدول.\n│[أرقام] لعرض قائمة الارقام للدولة.\n│[رسائل] لعرض قائمة الرسائل للرقم \n╯────────────────────────╰ـ`;

    let lister = ["دولة", "أرقام", "رسائل"];

    const link = 'https://temporary-phone-number.com';
    const link2 = 'https://temporary-phone-number.com/countrys/';

    let [feature, ...args] = text.split(" ");
    let additionalLink = args.join(" ").trim(); // Extract the additional link after the command

    if (!lister.includes(feature)) {
        return conn.sendMessage(m.chat, { text: cap }, { quoted: m });
    }

    if (feature == "دولة") {
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

            return conn.sendMessage(m.chat, { text: countryText }, { quoted: m });

        } catch (error) {
            console.log(error);
            return conn.sendMessage(m.chat, { text: "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا." }, { quoted: m });
        }

    } else if (feature == "أرقام") {

        if (!additionalLink) {
            return conn.sendMessage(m.chat, { text: "يرجى إدخال الرابط بعد الأمر \"أرقام\"." }, { quoted: m });
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

            return conn.sendMessage(m.chat, { text: numbersText }, { quoted: m });

        } catch (error) {
            console.log(error);
            return conn.sendMessage(m.chat, { text: "حدث خطأ أثناء جلب البيانات. حاول مرة أخرى لاحقًا." }, { quoted: m });
        }

    } else if (feature == "رسائل") {
        // معالجة الأمر "رسائل" هنا
    }
};

handler.help = ["facknumbar"];
handler.tags = ["fack"];
handler.command = /^(رقم)$/i;
export default handler;
