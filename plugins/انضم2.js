const linkRegex = /chat\.whatsapp\.com\/([0-9A-Za-z]{20,24})/i;
const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

let handler = async (m, { conn, text, isMods, isOwner }) => {
  let link = (m.quoted ? m.quoted.text : text) || text;
  let [_, code] = link.match(linkRegex) || [];

  if (!code) throw ` *استخدم الامر كده ياحب \n\nمثال:\n#انضم ${nn}`;

  if (isMods || isOwner || m.fromMe) {
    m.reply(` *البوت انضم للمجموعة بنجاح ✅* `);
    await delay(1000);
    let res = await conn.groupAcceptInvite(code);
  } else {
    const data = global.owner.filter(([number, _, isDeveloper]) => isDeveloper && number);
    await delay(1000);
    await m.reply(` *✅ \`『 تم ارسال الرابط لمطوري 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n *\`『 وهوا هيكرر يقبل ولي لا 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n❕ *\`『 طلبم ممكن يترفض للاسباب دي 』\`*\n1️⃣ *\`『 البوت مشغول 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n2️⃣ *\`『 حد طرد البوت قبل كده 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n3️⃣ *\`『 الاعضاء مبيحترموش البوت ومش ملتزمين 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n4⃣ *\`『 المجموعة لازم يكون فيها على الأقل 80 مشارك عشان نتجنب المجموعات الغير نشطة 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n5⃣ *\`『 رابط الجروب متغير او مش شغال 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n6️⃣ *\`『 البوت مش هيضاف في الجروب غير بكرار المطور 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n🧚🏽‍♂️ *\`『 الطلبات ممكن تاخد ساعات للرد عليها، من فضلك اتحلى بالصبر 』\`*\n┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈\n`);

    await delay(4000);

    for (let jid of data.map(([id]) => `${id}@s.whatsapp.net`).filter(v => v != conn.user.jid)) {
      await m.reply(` *⪨ طلب إضافة البوت لمجموعة ⪩*\n\n👤 رقم الطالب:\n wa.me/${m.sender.split('@')[0]}\n\n🔮 رابط المجموعة:\n ${link}`, jid);
    }
  }
};

handler.help = ['join [chat.whatsapp.com]'];
handler.tags = ['owner'];
handler.command = /^unete|انضم|خش|ادخل|ادخل الجروب|خش الجروب|بوت خش|entrar$/i;
//handler.register = true;

export default handler;
