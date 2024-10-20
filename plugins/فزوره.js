import fs from 'fs';

const timeout = 60000;

const questions = {
 سهل: [ 
    { question: 'ما الشيء الذي كلما أخذت منه كبر؟', response: 'الحفرة' },
{ question: 'ما الشيء الذي يجري ولا يمشي؟', response: 'الماء' },
{ question: 'ما الشيء الذي تأكل منه وهو لا يؤكل؟', response: 'الطبق' },
{ question: 'ما هو الشيء الذي يملك أربعة أرجل ولا يستطيع المشي؟', response: 'الكرسي' },
{ question: 'ما الشيء الذي يكون أخضر في الأرض وأسود في السوق وأحمر في البيت؟', response: 'الشاي' },
{ question: 'ما هو الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟', response: 'الهاتف' },
{ question: 'ما هو الشيء الذي ينبض بلا قلب؟', response: 'الساعة' },
{ question: 'ما هو الشيء الذي إذا دخل الماء لا يبتل؟', response: 'الظل' },
{ question: 'ما هو الشيء الذي يكتب ولا يقرأ؟', response: 'القلم' },
{ question: 'ما هو الشيء الذي له أسنان ولا يعض؟', response: 'المشط' },
{ question: 'ما هو الشيء الذي يذهب ولا يرجع؟', response: 'الدخان' },
{ question: 'ما هو الشيء الذي يزداد ولا ينقص؟', response: 'العمر' },
{ question: 'ما هو البيت الذي ليس فيه أبواب ولا نوافذ؟', response: 'بيت الشعر' },
{ question: 'ما هو الشيء الذي يتحرك حولك دائمًا ولكنك لا تراه؟', response: 'الهواء' },
{ question: 'ما هو الشيء الذي يحملك وتحمله في نفس الوقت؟', response: 'الحذاء' },
{ question: 'ما هو الشيء الذي لا يمشي إلا بالضرب؟', response: 'المسمار' },
{ question: 'ما هو الشيء الذي يملأ الغرفة ولا يشغل أي مساحة؟', response: 'الضوء' },
{ question: 'ما هو الشيء الذي يكسر دون أن يُلمس؟', response: 'الوعد' },
{ question: 'ما هو الشيء الذي له عين ولا يرى؟', response: 'الابره' },
{ question: 'ما هو الشيء الذي يدخل القفص ولا يأكل ولا يشرب؟', response: 'السيارة' }
  ],
  متوسط: [ 
    { question: 'ما هو الشيء الذي يُكسَر إذا ذُكِر؟', response: 'الصمت' },
{ question: 'ما هو الشيء الذي ليس له بداية ولا نهاية؟', response: 'الدائرة' },
{ question: 'ما هو الشيء الذي يتحدث جميع لغات العالم؟', response: 'الصدى' },
{ question: 'ما هو الشيء الذي كلما زاد نقص؟', response: 'العمر' },
{ question: 'ما هو الشيء الذي يقرصك دون أن تراه؟', response: 'الجوع' },
{ question: 'ما هو الشيء الذي لا يُؤكل في الليل؟', response: 'الغداء' },
{ question: 'ما هو الشيء الذي إذا وضعته في الماء لا يبتل؟', response: 'الملح' },
{ question: 'ما هو الشيء الذي له رقبة ولكن ليس له رأس؟', response: 'الزجاجة' },
{ question: 'ما هو الشيء الذي يحترق ليعطي ضوءًا؟', response: 'الشمعة' },
{ question: 'ما هو الشيء الذي يذهب بلا رجوع؟', response: 'العمر' },
{ question: 'ما هو الشيء الذي يُولد مرة واحدة في الشهر؟', response: 'القمر' },
{ question: 'ما هو الشيء الذي يمشي بلا أرجل ويبكي بلا عيون؟', response: 'السحاب' },
{ question: 'ما هو الشيء الذي يمكنه أن يملأ الغرفة ولكنه لا يزن شيئًا؟', response: 'الهواء' },
{ question: 'ما هو الشيء الذي يطير بلا جناحين؟', response: 'الوقت' },
{ question: 'ما هو الشيء الذي كلما أخرجته قل؟', response: 'النور' },
{ question: 'ما هو الشيء الذي لا يدخل إلا إذا ضُرب على رأسه؟', response: 'المسمار' },
{ question: 'ما هو الشيء الذي ينام ولا يستيقظ؟', response: 'الموت' },
{ question: 'ما هو الشيء الذي يُؤخذ منك قبل أن يُعطى لك؟', response: 'الصورة' },
{ question: 'ما هو الشيء الذي تراه في الليل ثلاث مرات وفي النهار مرة واحدة؟', response: 'حرف اللام' },
{ question: 'ما هو الشيء الذي يكون طويلًا عندما يكون صغيرًا ويصبح قصيرًا عندما يكبر؟', response: 'الشمعة' }
  ],
  صعب: [ 
    { question: 'ما هو الشيء الذي يراك ولا تراه؟', response: 'الهواء' },
{ question: 'ما هو الشيء الذي إذا لمسته صرخ؟', response: 'الجرس' },
{ question: 'ما هو الشيء الذي ينبض بلا قلب؟', response: 'الساعة' },
{ question: 'ما هو البيت الذي لا يحتوي على أبواب ولا نوافذ؟', response: 'بيت الشعر' },
{ question: 'ما هو الشيء الذي يحملك وتحمله في نفس الوقت؟', response: 'الحذاء' },
{ question: 'ما هو الشيء الذي له عين ولا يرى؟', response: 'الابره' },
{ question: 'ما هو الشيء الذي يمكنه أن يمر عبر الزجاج دون أن يكسره؟', response: 'الضوء' },
{ question: 'ما هو الشيء الذي يبتل كلما نشف؟', response: 'المنشفة' },
{ question: 'ما هو الشيء الذي تملكه ولكن الآخرين يستخدمونه أكثر منك؟', response: 'اسمك' },
{ question: 'ما هو الشيء الذي يجري ولكن لا يمكنه المشي؟', response: 'النهر' },
{ question: 'ما هو الشيء الذي له أسنان ولكن لا يعض؟', response: 'المشط' },
{ question: 'ما هو الشيء الذي تأكله كله ولا تستفيد إلا من نصفه؟', response: 'البطيخ' },
{ question: 'ما هو الشيء الذي يتحرك دائمًا حولك ولكنك لا تراه؟', response: 'الهواء' },
{ question: 'ما هو الشيء الذي يكسو الناس وهو عارٍ؟', response: 'الابره' },
{ question: 'ما هو الشيء الذي لا يمكنك الاحتفاظ به طويلاً حتى وإن كنت في أمسّ الحاجة إليه؟', response: 'انفاسك' },
{ question: 'ما هو الشيء الذي يتحدث بدون لسان ويسمع بدون أذنين؟', response: 'الهاتف' },
{ question: 'ما هو الشيء الذي يزن أكثر إذا كان أخف؟', response: 'الفراغ' },
{ question: 'ما هو الشيء الذي يدخل الماء ولا يبتل؟', response: 'الظل' },
{ question: 'ما هو الشيء الذي يكبر ويصغر دون أن يتحرك؟', response: 'الظل' },
{ question: 'ما هو الشيء الذي يملك بحيرات بلا ماء وجبال بلا صخور؟', response: 'الخريطة' }
  ]
};

const handler = async (m, { conn }) => {
  const args = m.text.split(' ').slice(1);
  const level = args[0]; 
  
  const id = m.chat;

  if (!level) {
    conn.reply(m.chat, '*⦧🕹️⦨ الـاســتــخــدام الــصــحــيــح*\n\n- *🔱 .فوازير سهل*\n\n- *🔱 .فوازير متوسط*\n\n- *🔱 .فوازير صعب*\n\n*ʙy:ᴛᴀɴᴊɪʀᴏ𖣬ʙᴏᴛ*', m);
    return;
  }

  if (!['سهل', 'متوسط', 'صعب'].includes(level)) {
    conn.reply(m.chat, '- *🔱 مــســتــوي صــعــوبــه غــيــر مــوجــود*', m);
    return;
  }

  if (id in conn.tekateki) {
    conn.reply(m.chat, '*⦧🕹️⦨ مــا زال هـنـاك لـعـبـة جــاريــة*\n\n- *لـلـانـسـحـاب↜.انسحب*', conn.tekateki[id][0]);
    throw false;
  }

  
  const tekateki = questions[level][Math.floor(Math.random() * questions[level].length)];

   let reward;

  if (level === 'سهل') {
    reward = 750;
  } else if (level === 'متوسط') {
    reward = 1500;
  } else if (level === 'صعب') {
    reward = 2500;
  }
await conn.sendMessage(m.chat, { react: { text: "🧩",key: m.key,}
  })
  const caption = `ⷮ *✧━════━⊰🕷️⊱━════━✧*

*┇❒ السؤال: ${tekateki.question}*

*【⏳┇الـوقـت ⟢ 60.00】*

*【💰┇الـجـائـزة ⟢ ${reward} XP】*

*✠ ──── ✷ ─ ‹✵› ─ ✷ ─── ✠*

*☜ ⧉ اكتب \`.انسحب\` للخروج ❯*

*☜ ⧉ اكتب \`.تلميح\` لاظهار تلميح ❯*

*☜ ⧉ جاوب مع ريبلاي ع السؤال ❯*

*✧━════━⊰🕷️⊱━════━✧*

> *\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*`.trim();

  conn.tekateki[id] = [
    await conn.sendFile(m.chat, 'https://l.arzfun.com/TtInX', '', caption, m), 
    tekateki,
    reward,
    setTimeout(async () => {
      if (conn.tekateki[id]) {
        await conn.reply(m.chat, `*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*\n*⦧🕹️⦨ انــتــهــي الــوقــت*\n- *الـاجـابـة كـــانــت↜${tekateki.response}*\n*✦━━━━━✦⊰🕷️⊱✦━━━━━✦*`, conn.tekateki[id][0]);
      }
      delete conn.tekateki[id];
    }, timeout)
  ];
};

handler.help = ['فوازير'];
handler.tags = ['ga'];
handler.command = /^فوازير|فزوره|فزورة$/i;

export default handler;
