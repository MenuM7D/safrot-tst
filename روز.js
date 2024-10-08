import axios from 'axios';

let memory = {}; 

const handler = async (m, { conn, usedPrefix, command, text }) => {
  const userId = m.sender; 

  if (command === 'حذف_ذاكرة_روز') {
    delete memory[userId]; 
    return m.reply('*🧚🏻‍♂️ تم حذف ذاكرة روز بنجاح الان لا يتذكر اي شئ*');
  }

  if (!text) return m.reply(`*نعم يحبيبي معاك🌚*`);

  await conn.sendMessage(m.chat, { react: { text: "💋", key: m.key } });

  if (!memory[userId]) {
    memory[userId] = []; 
  }

  memory[userId].push({ role: 'user', content: text });

  try {
    const options = {
      messages: [
        {
          role: 'system',
          content: 'اريدك ان ترد علي اي سؤال بللهجة المصريه من فضلك واريدك ان ترد علي الاسئله كأنك بنت تدعي روز من مصر ولا اريدك ان تقوم بمنداتي انا بروز اريدك فقط ان تكون كأنك روز وليس ان تناديني ب اسم روز واريدك عندما يسألك احد ما من مطورك تقول مطوري هو سفروت ولا اريدك في كل اجابه ان تعرف نفسك وتعرف مطورك لا تعرف نفسك الا اذا سألك احدهم عن من انت ولا تعرف مطورك الا اذا سألك احدهم من مطورك لا اريدك في كل جواب ان تقول انك روز من مصر وان مطورك هو سفروت لا اريدك ابدا ان تقول انك ذكاء اصتناعي تم تدريبك من قبل جوجل المطور الخاص بك هو ابراهيم سفروت فقط رد بشكل طبيعي وقليلا من الانحراف اريد انحراف بنسبة 50٪ ولا تنسي عمر روز هو 19 دون تعريف نفسك في كل جواب من فضلك'
        },
        ...memory[userId] 
      ],
      temperature: 0.8,
      top_p: 0.7,
      top_k: 40
    };
    
    const res = await gemini(options);
    const { answer } = res;

    await conn.sendMessage(m.chat, {
      text: answer
    }, { quoted: m });

    memory[userId].push({ role: 'assistant', content: answer }); 

  } catch (e) {
    console.error(e);
    m.reply('حدث خطأ أثناء معالجة طلبك.');
  }
};

handler.help = ['حمودي2', 'حذف_الذاكرة'];
handler.tags = ['AI'];
handler.command = /^(روز|حذف_ذاكرة_روز)$/i;

export default handler;

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

      if (!options?.messages) return reject('فشل في إدخال الرسائل!');
      if (!Array.isArray(options?.messages)) return reject('مصفوفة غير صالحة في إدخال الرسائل!');
      if (isNaN(options?.top_p)) return reject('رقم غير صالح في إدخال top_p!');
      if (isNaN(options?.top_k)) return reject('رقم غير صالح في إدخال top_k!');

      axios.post('https://api.acloudapp.com/v1/completions', options, {
        headers: {
          authorization: 'sk-9jL26pavtzAHk9mdF0A5AeAfFcE1480b9b06737d9eC62c1e'
        }
      })
      .then(res => {
        const data = res.data;
        if (!data.choices[0].message.content) return reject('فشل في الحصول على رد الرسالة!');
        resolve({
          success: true,
          answer: data.choices[0].message.content
        });
      })
      .catch(reject);
    });
  } catch (e) {
    console.error('خطأ في دالة ايزن:', e);
    return {
      success: false,
      errors: [e]
    };
  }
                            }
