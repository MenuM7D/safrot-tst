let media = img.getRandom()
let handler = async (m, { conn, command }) => {
  let name = await conn.getName(m.sender)
  await conn.sendMessage(m.chat, {
    text: `*\`[💖 التبرع 💖 ]\`*

◈ منور ياً ${name} 🧚🏻‍♂️

*بشكرك على دعمك واستخدامك للبوت بتاعي. لو حابب تدعم المشروع ده علشان يفضل متحدث دايمًا تقدر تتبرع عن طريق PayPal أو Mercado Pago.*

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*• PayPal :* https://paypal.me/OfcGB
*• Mercado Pago :*
*• Alias :* OficialGB
*• CVU :* 0000003100059201491917

┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*لو حابب تدعم بطرق تانية تقدر تتبرع برقم علشان يبقى بوت، اتكلم مع صانع البوت. كمان ممكن تدعمنا على السوشيال ميديا 👇*

*• YouTube | اشترك 🔕*
${yt}

*•𝙏𝙝𝙚𝙎𝙖𝙛𝙧𝙤𝙩𝘽𝙤𝙩*
${md}

*• الروابط الرسمية كلها في مكان واحد! 👇*
https://www.atom.bio/safrotbob-376

*• Facebook*
${face}

 ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

*• 𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿:*
https://wa.me/+201115618853`,
    contextInfo: {
      forwardingScore: 9999999,
      isForwarded: true,
      mentionedJid: [m.sender],
      "externalAdReply": {
        "showAdAttribution": true,
        "renderLargerThumbnail": true,
        "thumbnail": imagen3,
        "title": '*ممكن تدعم مستودعنا بنجمة🧚🏼‍♂️*',
        "containsAutoReply": true,
        "mediaType": 1,
        "mediaUrl": md,
        "sourceUrl": md,
      }
    }
  }, { quoted: m })
}
handler.help = ['donar']
handler.tags = ['main']
handler.command = /^dona(te|si)|donar|apoyar|تبرع|هتبرع|creditos$/i

export default handler

function toNum(number) {
  if (number >= 1000 && number < 1000000) {
    return (number / 1000).toFixed(1) + 'k'
  } else if (number >= 1000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else if (number <= -1000 && number > -1000000) {
    return (number / 1000).toFixed(1) + 'k'
  } else if (number <= -1000000) {
    return (number / 1000000).toFixed(1) + 'M'
  } else {
    return number.toString()
  }
 }
