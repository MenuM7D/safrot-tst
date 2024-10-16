import fetch from 'node-fetch';

const gameDuration = 60000; 
const basePoints = 500; 
const maxQuestions = 50; 
const maxHelps = 2;
const maxHints = 1; 
const maxResponses = 1; 
const maxReducedOptions = 1; 

const difficultyLevels = {
    easy: 1,
    medium: 2,
    hard: 3
}; 

const tips = [
    { question: 'ما هو الشيء الذي له عين ولا يرى؟', answer: 'الإبرة' },
    { question: 'كلمة تتكون من 3 حروف إذا أضفت حرف تصبح أكبر؟', answer: 'الميزان' },
    { question: 'ما هو الشيء الذي يكسر ولكن لا يقع؟', answer: 'الزجاج' },
    { question: 'ما هو الشيء الذي يمشي بلا أرجل؟', answer: 'الساعة' },
    { question: 'ما هو الشيء الذي يكتب ولا يقرأ؟', answer: 'القلم' },
    { question: 'ما هو الشيء الذي لا يمكن لمسه ولكنه موجود؟', answer: 'الهواء' },
    { question: 'ما هو الشيء الذي ينام ويستيقظ في نفس الوقت؟', answer: 'الليل' },
    { question: 'شيء لا يتكلم وإذا جاع يسمع صوته؟', answer: 'الجرس' },
    { question: 'ما هو الشيء الذي يزداد كلما أخذت منه؟', answer: 'الحفرة' },
    { question: 'ما هو الشيء الذي يذهب ولا يعود؟', answer: 'الوقت' },
    { question: 'ما هو الشيء الذي يتسع ويضيق في نفس الوقت؟', answer: 'الملابس' },
    { question: 'ما هو الشيء الذي يملك أسنان لكنه لا يعض؟', answer: 'المشط' },
    { question: 'ما هو الشيء الذي يتحرك حولك ولا تراه؟', answer: 'الظل' },
    { question: 'شيء إذا شربته تموت؟', answer: 'الماء المالح' },
    { question: 'ما هو الشيء الذي يرفع ولا يمشي؟', answer: 'الرافعة' },
    { question: 'ما هو الشيء الذي يكتب بخط جميل لكنه لا يظهر؟', answer: 'الحلم' },
    { question: 'ما هو الشيء الذي لا يحترق ولا يذوب؟', answer: 'الجليد' },
    { question: 'ما هو الشيء الذي له قلب ولا ينبض؟', answer: 'الخشب' },
    { question: 'ما هو الشيء الذي إذا كسرته فلا يمكنك إصلاحه؟', answer: 'الثقة' },
    { question: 'ما هو الشيء الذي يمكنك أن تأخذه إلى المنزل لكنه ليس حقيقيًا؟', answer: 'الصورة' },
    { question: 'ما هو الشيء الذي لا ينام لكن يستريح؟', answer: 'البحر' },
    { question: 'ما هو الشيء الذي عندما تضعه في الماء لا يبتل؟', answer: 'الظل' },
    { question: 'ما هو الشيء الذي يتغير لونه حسب المكان؟', answer: 'السماء' },
    { question: 'ما هو الشيء الذي يبدأ صغيرًا وينمو ليصبح كبيرًا؟', answer: 'البذور' },
    { question: 'ما هو الشيء الذي يحمل ألوانًا كثيرة لكنه يبقى ثابتًا؟', answer: 'اللوحة' },
    { question: 'ما هو الشيء الذي يقضي يومه في السطح لكنه لا يتكلم؟', answer: 'الساعة' },
    { question: 'ما هو الشيء الذي لا يمكن رؤيته في النهار؟', answer: 'القمر' },
    { question: 'ما هو الشيء الذي يأتي بعد الفرح؟', answer: 'الحزن' },
    { question: 'ما هو الشيء الذي يتقدم لكنه لا يعود؟', answer: 'الوقت' },
    { question: 'ما هو الشيء الذي في جيبك ولكنه أكبر من جيبك؟', answer: 'الفوطة' },
    { question: 'ما هو الشيء الذي لا يمتلك قلبًا ومع ذلك يحب؟', answer: 'الحب' },
    { question: 'ما هو الشيء الذي يختفي عندما تتحدث عنه؟', answer: 'الصمت' },
    { question: 'ما هو الشيء الذي يسير دون أن يتحرك؟', answer: 'الساعة' },
    { question: 'ما هو الشيء الذي يسمع بلا أذن ويتكلم بلا لسان؟', answer: 'الهاتف' },
    { question: 'ما هو الشيء الذي لا ينام ولكن يسترخي؟', answer: 'السماء' },
    { question: 'ما هو الشيء الذي ينكسر عند ذكره؟', answer: 'السكوت' },
    { question: 'ما هو الشيء الذي يضحك بلا صوت؟', answer: 'الابتسامة' },
    { question: 'ما هو الشيء الذي يمشي بلا أرجل؟', answer: 'الوقت' },
    { question: 'ما هو الشيء الذي يذهب بعيدًا لكن يعود في النهاية؟', answer: 'الوقت' },
    { question: 'ما هو الشيء الذي له أسنان لكنه لا يأكل؟', answer: 'المشط' },
    { question: 'ما هو الشيء الذي يزداد كلما قمت بتقليله؟', answer: 'العمر' },
    { question: 'ما هو الشيء الذي يعيش في البحر ويتنفس تحت الماء؟', answer: 'السمكة' },
    { question: 'ما هو الشيء الذي يحمل الكواكب والنجوم؟', answer: 'الفضاء' },
    { question: 'ما هو الشيء الذي لا يتغير لونه؟', answer: 'الظل' },
    { question: 'ما هو الشيء الذي لا يمكن لمسه؟', answer: 'الهواء' },
    { question: 'ما هو الشيء الذي يتبعك أينما ذهبت؟', answer: 'الظل' },
    { question: 'ما هو الشيء الذي يكون في جيبك ويحب الدفء؟', answer: 'البطاقة' },
    { question: 'ما هو الشيء الذي لا يمكن شراؤه؟', answer: 'السعادة' },
    { question: 'ما هو الشيء الذي يخفيه الجميع؟', answer: 'الأسرار' },
    { question: 'ما هو الشيء الذي يأتي قبل الشمس؟', answer: 'الفجر' },
    { question: 'ما هو الشيء الذي لا يمكن رؤيته بالعين المجردة؟', answer: 'الهواء' },
    { question: 'ما هو الشيء الذي يحفظ الأسرار؟', answer: 'الصندوق' },
    { question: 'ما هو الشيء الذي يمكنك أن تأخذه ولكن لا يمكنك استرجاعه؟', answer: 'الكلمات' },
    { question: 'ما هو الشيء الذي يضيء في الظلام؟', answer: 'النجم' },
    { question: 'ما هو الشيء الذي يطير بدون أجنحة؟', answer: 'الخيال' },
    { question: 'ما هو الشيء الذي ينتقل من مكان لآخر دون أن يتحرك؟', answer: 'الأفكار' },
];

export async function handler(m, { command, text, conn }) {
    let id = m.chat;

    conn.millionGame = conn.millionGame || {};

    let currentGame = conn.millionGame[id];

    if (!currentGame) {
        if (!text) {
            let currentLevel = 1;
            startNewQuestion(conn, m, id, currentLevel);
        } else {
            m.react('👇🏻');
            conn.sendButton(m.chat, `> *لعبة جديدة قد بدأت.*`, null, null, [[`↬ السؤال`, `.فزوره`]], null, null);
        }
        return;
    }

    const currentQuestion = currentGame[1]; // استرجاع السؤال الحالي

    if (text === currentQuestion.answer) {
        m.react('✅');
        let currentLevel = currentGame[4];
        let points = basePoints * currentLevel;

        // نظام مكافأة السرعة
        let timeTaken = gameDuration - (Date.now() - currentGame[2].startTime);
        let speedBonus = Math.max(0, Math.floor((timeTaken / 1000) * 50)); // مكافأة السرعة
        let totalPoints = points + speedBonus;

        global.db.data.users[m.sender].exp += totalPoints;

        conn.sendButton(m.chat, `> *🎊 مبروك! لقد ربحت ${totalPoints} نقطة (بما في ذلك ${speedBonus} مكافأة السرعة)! المستوى الحالي: ${currentLevel}*`, null, null, [[`↬ السؤال التالي`, `.فزوره`]], null, null);
        
        // التأكد من مستوى التقدم
        if (currentLevel === 5 || currentLevel === 10) {
            conn.reply(m.chat, `> 🎉 مبروك! لقد وصلت إلى المستوى ${currentLevel} وحصلت على مكافأة إضافية!`, m);
            global.db.data.users[m.sender].exp += 1000; // إضافة مكافأة 1000 نقطة
        }

        clearTimeout(currentGame[3]);
        currentLevel++;

        
if (currentLevel > maxQuestions) {
            conn.reply(m.chat, '> *🎉 مبروك! لقد ربحت !*', m);
            delete conn.millionGame[id];
        } else {
            startNewQuestion(conn, m, id, currentLevel);
        }

    } else if (text === "انسحاب") {
        m.react('❌');
        conn.sendButton(m.chat, `> *لقد انسحبت من اللعبة!*`, null, null, [[`↬ لعبة جديدة`, `.فزوره`]], null, null);
        delete conn.millionGame[id]; // إنهاء اللعبة
    } else {
        m.react('❌');
        conn.sendButton(m.chat, `> *❌ الإجابة خاطئة. الإجابة الصحيحة كانت: ${currentQuestion.answer}*`, null, null, [[`↬ لعبة جديدة`, `.فزوره`]], null, null);
        delete conn.millionGame[id];
    }
}

// دالة بدء السؤال الجديد
async function startNewQuestion(conn, m, id, level) {
    const question = tips[Math.floor(Math.random() * tips.length)];
    
    conn.millionGame[id] = [m, question, { startTime: Date.now() }, setTimeout(() => {
        delete conn.millionGame[id];
        conn.sendButton(m.chat, `> * الوقت خلص وانت لسه كحيان مجوبتش 😹 الاجابه 👈🏻 ${question.answer} *`, null, null, [[`↬ لعبة جديدة`, `.فزوره`]], null, null);
    }, gameDuration), level];

    // إنشاء خيارات مع 3 إجابات
    const correctAnswer = question.answer;
    const wrongAnswers = tips
        .filter(t => t.answer !== correctAnswer) // استبعاد الإجابة الصحيحة
        .sort(() => 0.5 - Math.random()) // خلط الإجابات
        .slice(0, 2) // اختيار إجابتين خاطئتين
        .map(t => t.answer); // استخراج الإجابات

    const options = [correctAnswer, ...wrongAnswers].sort(() => Math.random() - 0.5); // خلط الخيارات

    let message = `
> *السؤال: ${question.question}*
> *وقت الإجابة: ${(gameDuration / 1000).toFixed(2)} ثواني*
> *الجائزة: ${basePoints * level} نقطة*
> *دوس ع زر انسحب لو مش عارف الاجابه*

> *\`『 𝐒𝐀𝐅𝐑𝐎𝐓-𝐁𝐎𝐓 』\`*
`;

    await conn.sendButton(m.chat, message, null, null, [
        [` ${options[0]}`, `.فزوره ${options[0]}`],
        [` ${options[1]}`, `.فزوره ${options[1]}`],
        [` ${options[2]}`, `.فزوره ${options[2]}`],
        [`انسحاب`, `.فزوره انسحاب`] // زر الانسحاب
    ], null, null);
}

handler.help = ['فزوره'];
handler.tags = ['العاب'];
handler.command = /^فزوره$/i;

export default handler;