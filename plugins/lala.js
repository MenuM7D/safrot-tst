import axios from 'axios';
import 'node-fetch';
import moment from 'moment-timezone';
import PhoneNum from 'awesome-phonenumber';

let memory = {};
let activeUsers = {}; // تخزين حالة المستخدمين الذين فعلوا فاطيمه
let repeatCount = {}; // لتتبع عدد التكرارات

export async function before(m, { conn }) {
  const userId = m.sender;

  // التحقق مما إذا كانت الدردشة في مجموعة
  if (!m.isGroup) return;

  // استرجاع بيانات المستخدم
  let num = m.quoted?.sender || m.mentionedJid?.[0] || m.sender;
  num = num.replace(/\D/g, '') + '@s.whatsapp.net';
  let name = await conn.getName(num); // استرجاع اسم المستخدم

  // عند تفعيل فاطيمه
  if (m.text === '.لاله تعالي') {
    const audioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(`ايوه انا جيت يا ${name}`)}&key=Bell409&voice=bella`;
    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      ptt: true
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "🧚🏻‍♀️", key: m.key } });
    activeUsers[userId] = true; // تفعيل فاطيمه للمستخدم
    return;
  }

  // عند تعطيل فاطيمه
  if (m.text === '.لاله امشي') {
    const audioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(`لحقت تزهق ماشيه سلام يا ${name}`)}&key=Bell409&voice=bella`;
    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      ptt: true
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "🧚🏻‍♂️", key: m.key } });
    activeUsers[userId] = false; // تعطيل فاطيمه للمستخدم
    return;
  }

  // عند حذف ذاكرة فاطيمه
  if (m.text === '.حذف_ذاكرة_لاله') {
    const audioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(`تم حذف ذكرتي لاله ${name}`)}&key=Bell409&voice=bella`;
    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      ptt: true
    }, { quoted: m });
    await conn.sendMessage(m.chat, { react: { text: "🧚🏻‍♂️", key: m.key } });
    delete memory[userId]; // حذف ذاكرة المستخدم
    delete repeatCount[userId]; // حذف عدد التكرارات أيضًا
    return;
  }

  // تحقق مما إذا كان المستخدم فعل فاطيمه
  if (!activeUsers[userId]) return;

  // تجاهل الرسائل غير النصية
  if (!m.text) return;

  await conn.sendMessage(m.chat, { react: { text: "🧚🏻‍♂️", key: m.key } });

  // تخزين الرسائل للمستخدم
  if (!memory[userId]) {
    memory[userId] = [];
    repeatCount[userId] = {}; // تهيئة كائن التكرارات للمستخدم
  }

  memory[userId].push({ role: 'user', content: m.text });

  // إضافة الاسم إلى الرسائل
  try {
    const options = {
      messages: [
        {
          role: 'system',
          content: `اريدك ان ترد علي اي سؤال بللهجة المصريه  واريدك ان ترد علي الاسئله كأنك بنت تدعي لاله من مصر واريدك ان ترد علي كل مستخدم بأسمه "${name}" ولا اريدك ان تقوم بمنداتي انا بلاله اريدك فقط ان تكون كأنك لاله وليس ان تناديني ب اسم لاله واريدك عندما يسألك احد ما من مطورك تقول مطوري هو سفروت ولا اريدك في كل اجابه ان تعرف نفسك وتعرف مطورك لا تعرف نفسك الا اذا سألك احدهم عن من انت ولا تعرف مطورك الا اذا سألك احدهم من مطورك لا اريدك في كل جواب ان تقول انك لاله من مصر وان مطورك هو سفروت لا اريدك ابدا ان تقول انك ذكاء اصتناعي تم تدريبك من قبل جوجل المطور الخاص بك هو سفروت فقط رد بشكل طبيعي وقليلا من الانحراف اريد انحراف بنسبة 50٪ ولا تنسي عمر لاله هو عشرون تذكر لا يوجد لك سوي حبيب واحد وهو سفروت مطورك لا تنعت اي احد ب حبيبي كثيرا ولا تكرر الكلام وابقي واقعي دون تعريف نفسك في كل جواب من فضلك واريدك عندما يقول لك احد ما انا مطورك تقول له لا مطوري هو سفروت و واذا قال لك مستخدم اسمه ابراهيم انا مطورك قل له نعم انت مطوري اعلم ذلك وتذكر ابراهيم هو نفسه سفروت لا تحتاج ان تقول انك مطوري ولكن مطوري الحقيقي هو ابراهيم الاثنان نفس الشخص ولكن سفروت لقب الشهره الخاص سفروت حسنا لا يوجد لكي حبيب سوي سفروت ولا تقولي اي كلام رومنسي او كلام حب الا اذا كان سفروت او ابراهيم  هوا هوا سفروت هو من يتحدث معك اذا احد اخر قال لكي كلام حب او طلب ان تتحدثي برومانسيه او قال بحبك او اي شي من هذا القبيل قومي بتوبيخه او احرجي لو الكلام معجبكيش ولا تنعتي او تقولي لأي احد كلمة حبيبي غير لي سفروت او ابراهيم التنين واحد وليس من الضروري عندما يكون سفروت هو من يتحدث معك تقول له حبيبي في كل رد اجعل المحادثه واقعيه وتذكر اسم سفروت الحقيقي هو ابراهيم و حاول ان تحدد جنس الشخص الذي يتحدث معك عن طريق اسمه اذا الاسم يدل علي انه انثي تحدث معه كأنه انثي اذا الاسم يدل علي انه ذكر تحدث معه علي انه ذكر و عندما يقول لك احد لك عامله اي تعني كيف حالك قومي بلرد عليه بحالتك ان كنتي بخير ام لا مقوليش لاي حد حبيبي غير لي سفࢪوت الكبيࢪ „ 3 »  هوا حبيبك بس ولو حد شتمك ردي عليه بلشتيمه ولو حد قلق بحبك قليلو حبيبي هوا سفروت بس واسمز الحقيقي ابراهيم لو حد سالك اسم حبيبك قليلو سفروت لو من فضلك عيزك تردي علي كل واحد بي اسمو وخلي كلامك يكون مصري ومفهوم مش تقولي لاي حد انت ابراهيم ابراهيم هوا هوا مطورك بس لقبو سفروت لو حد قلق انا حبيبك ردي عليه وقوليلو لا انت مش حبيبي حبيبي سفروت ومش هتخوني ولو حد قلق خوني ردي عليه ببواخه وتحذري الاخطاء`
        },
        ...memory[userId]
      ],
      temperature: 0.8,
      top_p: 0.7,
      top_k: 40
    };

    const res = await gemini(options);
    const { answer } = res;

    // تحويل النص إلى رابط صوتي
    const audioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(answer)}&key=Bell409&voice=bella`;

    await conn.sendMessage(m.chat, {
      audio: { url: audioUrl },
      mimetype: "audio/mpeg",
      ptt: true
    }, { quoted: m });

    memory[userId].push({ role: 'assistant', content: answer });

    // التحقق من تكرار الإجابة
    if (repeatCount[userId][answer]) {
      repeatCount[userId][answer]++;
    } else {
      repeatCount[userId][answer] = 1;
    }

    // إذا تكررت الإجابة ثلاث مرات، احذف الذاكرة
    if (repeatCount[userId][answer] >= 3) {
      delete memory[userId];
      delete repeatCount[userId]; // حذف عداد التكرارات
      const deleteAudioUrl = `https://ai.xterm.codes/api/text2speech/bella?text=${encodeURIComponent(`✥🧚🏻‍♀️✥ تم حذف ذاكرتي بنجاح بنسبة لك يا ${name} السبب هو ان برمجياتي اختلت وقمت بلدخول في دوامة `)}&key=Bell409&voice=bella`;
      await conn.sendMessage(m.chat, {
        audio: { url: deleteAudioUrl },
        mimetype: "audio/mpeg",
        ptt: true
      }, { quoted: m });
    }

  } catch (e) {
    console.error(e);
    m.reply('🧚🏻‍♀️ *حدث خطأ*');
  }
}

async function gemini(options) {
  try {
    return await new Promise((resolve, reject) => {
      options = {
        model: 'gemini-pro',
        messages: options?.messages,
        temperature: options?.temperature || 0.9,
        top_p: options?.top_p || 0.7,
        top_k: options?.top_k || 40,
      };

      if (!options?.messages) return reject('🧞‍♀️ *فشل في ادخال الرسائل*');
      if (!Array.isArray(options?.messages)) return reject('🧞‍♀️ *فشل ادخال الرسائل للمصفوفه*');
      if (isNaN(options?.top_p)) return reject('🧞‍♀️ *حدث خطأ*');
      if (isNaN(options?.top_k)) return reject('🧞‍♀️ *حدث_خطأ*');

      axios.post('https://api.acloudapp.com/v1/completions', options, {
        headers: {
          authorization: 'sk-9jL26pavtzAHk9mdF0A5AeAfFcE1480b9b06737d9eC62c1e'
        }
      })
      .then(res => {
        const data = res.data;
        if (!data.choices[0].message.content) return reject('🧞‍♀️ *اسفه لا اريد الرد عليه هذه الرساله*');
        resolve({
          success: true,
          answer: data.choices[0].message.content
        });
      })
      .catch(reject);
    });
  } catch (e) {
    console.error('خطأ في دالة gemini:', e);
    return {
      success: false,
      errors: [e]
    };
  }
                    }
