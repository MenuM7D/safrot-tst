import axios from 'axios';
const {
  generateWAMessageContent,
  generateWAMessageFromContent,
  proto
} = (await import("@whiskeysockets/baileys"))["default"];

let handler = async (m, { conn, text, usedPrefix, command }) => {
  if (!text) {
    return conn.reply(m.chat, "[🧚🏼‍♂️] *\`『 اكتب الي بدور عليه علي بينترست 』\`*", m);
  }

  async function getImageMessage(imageUrl) {
    const { imageMessage } = await generateWAMessageContent({
      'image': {
        'url': imageUrl
      }
    }, {
      'upload': conn.waUploadToServer
    });
    return imageMessage;
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
  }

  let messages = [];
  let { data } = await axios.get("https://www.pinterest.com/resource/BaseSearchResource/get/?source_url=%2Fsearch%2Fpins%2F%3Fq%3D" + text + "&data=%7B%22options%22%3A%7B%22isPrefetch%22%3Afalse%2C%22query%22%3A%22" + text + "%22%2C%22scope%22%3A%22pins%22%2C%22no_fetch_context_on_resource%22%3Afalse%7D%2C%22context%22%3A%7B%7D%7D&_=1619980301559");
  let imageUrls = data.resource_response.data.results.map(result => result.images.orig.url);
  shuffleArray(imageUrls);
  let selectedImages = imageUrls.splice(0, 5);
  let counter = 1;

  for (let url of selectedImages) {
    messages.push({
      'body': proto.Message.InteractiveMessage.Body.fromObject({
        'text': "الصورة -" + (" " + counter++)
      }),
      'footer': proto.Message.InteractiveMessage.Footer.fromObject({
        'text': wm
      }),
      'header': proto.Message.InteractiveMessage.Header.fromObject({
        'title': '',
        'hasMediaAttachment': true,
        'imageMessage': await getImageMessage(url)
      }),
      'nativeFlowMessage': proto.Message.InteractiveMessage.NativeFlowMessage.fromObject({
        'buttons': [{
          'name': "cta_url",
          'buttonParamsJson': "{\"display_text\":\"رابط 📫\",\"Url\":\"https://www.pinterest.com/search/pins/?rs=typed&q=" + text + "\",\"merchant_url\":\"https://www.pinterest.com/search/pins/?rs=typed&q=" + text + "\"}"
        }]
      })
    });
  }

  const messageContent = generateWAMessageFromContent(m.chat, {
    'viewOnceMessage': {
      'message': {
        'messageContextInfo': {
          'deviceListMetadata': {},
          'deviceListMetadataVersion': 0x2
        },
        'interactiveMessage': proto.Message.InteractiveMessage.fromObject({
          'body': proto.Message.InteractiveMessage.Body.create({
            'text': "[❗] نتيجة بحث لـ : " + text
          }),
          'footer': proto.Message.InteractiveMessage.Footer.create({
            'text': "🔎 `بِـينتِرِست - بَحْث`"
          }),
          'header': proto.Message.InteractiveMessage.Header.create({
            'hasMediaAttachment': false
          }),
          'carouselMessage': proto.Message.InteractiveMessage.CarouselMessage.fromObject({
            'cards': [...messages]
          })
        })
      }
    }
  }, {
    'quoted': m
  });

  await conn.relayMessage(m.chat, messageContent.message, {
    'messageId': messageContent.key.id
  });
};

handler.help = ["pinterest"];
handler.tags = ["downloader"];
handler.command = /^(pinterest|بينترست)$/i;

export default handler;
