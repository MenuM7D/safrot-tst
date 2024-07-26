import axios from 'axios';

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

function isValidBinary(binary) {
    return /^[01\s]+$/.test(binary);
}

function isValidBase64(base64) {
    try {
        return base64Decode(base64) !== '';
    } catch {
        return false;
    }
}

// Function to decode using magictool.ai
async function decodeUsingMagicTool(text) {
    try {
        const response = await axios.post('https://magictool.ai/tool/unicode-decoder-encoder/ar/', {
            text: text
        });
        return response.data.decodedText || '';
    } catch (error) {
        console.error('Error decoding with magictool.ai:', error);
        return '';
    }
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
    } else if (command === 'فك-شفرة') {
        let decodedMessages = [];

        if (isValidBinary(content)) {
            try {
                const originalTextBinary = binaryToText(content);
                decodedMessages.push(`*النص الأصلي من العد الثنائي🧑🏻‍💻:*\n${originalTextBinary}`);
            } catch (error) {
                decodedMessages.push('*❌ حدث خطأ في فك الشفرة من العد الثنائي.*');
            }
        }

        if (isValidBase64(content)) {
            try {
                const originalTextBase64 = base64Decode(content);
                decodedMessages.push(`*النص الأصلي من Base64🧑🏻‍💻:*\n${originalTextBase64}`);
            } catch (error) {
                decodedMessages.push('*❌ حدث خطأ في فك الشفرة من Base64.*');
            }
        }

        try {
            const decodedTextMagicTool = await decodeUsingMagicTool(content);
            if (decodedTextMagicTool) {
                decodedMessages.push(`*النص الأصلي باستخدام magictool.ai🧑🏻‍💻:*\n${decodedTextMagicTool}`);
            }
        } catch (error) {
            decodedMessages.push('*❌ حدث خطأ في فك الشفرة باستخدام magictool.ai.*');
        }

        if (decodedMessages.length > 0) {
            m.reply(decodedMessages.join('\n\n'));
        } else {
            m.reply('*❌ لا يمكن فك الشفرة. يرجى التأكد من إدخال شفرة صحيحة.*');
        }
    } else {
        m.reply(`*❌ أمر غير معروف. يرجى استخدام ${usedPrefix}تشفير أو ${usedPrefix}فك.*`);
    }
}

handler.command = ['تشفير', 'فك'];
handler.tags = ['tools'];

export default handler;
