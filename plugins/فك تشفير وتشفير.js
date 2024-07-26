// Helper functions
function textToBinary(text) {
    return text.split('').map(char => {
        return char.charCodeAt(0).toString(2).padStart(8, '0');
    }).join(' ');
}

function binaryToText(binary) {
    return binary.split(' ').map(bin => {
        return String.fromCharCode(parseInt(bin, 2));
    }).join('');
}

function base64Encode(text) {
    return Buffer.from(text).toString('base64');
}

function base64Decode(base64) {
    return Buffer.from(base64, 'base64').toString('utf-8');
}

// Main handler function
const handler = async (m, { text, usedPrefix, command }) => {
    if (!text) {
        return m.reply(`*❌ يرجى كتابة نص بعد الأمر، مثل: ${usedPrefix}${command} النص*`);
    }

    const content = text.trim();

    if (command === 'تشفير') {
        const binary = textToBinary(content);
        const base64 = base64Encode(content);
        m.reply(`*النص المُشفر بالعد الثنائي🧑🏻‍💻🚫:*\n${binary}\n\n*النص المُشفر بBase64🧑🏻‍💻🚫:*\n${base64}`);
    } else if (command === 'فك') {
        try {
            const originalTextBinary = binaryToText(content);
            const originalTextBase64 = base64Decode(content);
            m.reply(`*النص الأصلي من العد الثنائي🧑🏻‍💻:*\n${originalTextBinary}\n\n*النص الأصلي من Base64🧑🏻‍💻:*\n${originalTextBase64}`);
        } catch (error) {
            m.reply('*❌ حدث خطأ في فك الشفرة. يرجى التأكد من إدخال شفرة العد الثنائي أو Base64 الصحيحة.*');
        }
    } else {
        m.reply(`*❌ أمر غير معروف. يرجى استخدام ${usedPrefix}تشفير أو ${usedPrefix}فك-شفرة.*`);
    }
}

handler.command = ['تشفير', 'فك'];
handler.tags = ['tools'];

export default handler;
