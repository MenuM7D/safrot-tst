import 'node-fetch';

let handler = async (m, { conn, text }) => {

    if (!text) {

        return m.reply('*\`『 اكتب الي عيزني اقولو بلصوت معا الامر🧚🏻‍♂️ 』\`*');

    }

    const audioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(text)}&key=Bell409&voice=bella`;

    

    conn.sendMessage(m.chat, {

        audio: { url: audioUrl },

        mimetype: "audio/mpeg",

        ptt: true

    }, { quoted: m });

};

handler.command = ["انطقي", "قولي"];

handler.help = ["elevenlab3", "thomas_shelby"];

handler.tags = ['ai'];

export default handler;
