import axios from 'axios';

let handler = async (m, { command, conn, usedPrefix }) => {
  try {
    // إرسال طلب GET إلى API
    let res = (await axios.get('https://api.popcat.xyz/car')).data;

    // التحقق من صحة الاستجابة
    if (!res || !res.image || !res.title) {
      throw new Error('استجابة API غير صحيحة');
    }

    // إرسال الصورة والمعلومات المستلمة إلى المستخدم
    await conn.sendFile(m.chat, res.image, 'car_image.jpg', `نـوع الـسياره🏎️: ${res.title}`, m);
  } catch (error) {
    // طباعة الخطأ في وحدة التحكم
    console.error('خطأ أثناء جلب البيانات:', error);

    // إرسال رسالة خطأ إلى المستخدم
    await conn.reply(m.chat, 'حدث خطأ أثناء جلب البيانات', m);
  }
};

// تعريف الأوامر المرتبطة بالمعالج
handler.command = handler.help = ['car', 'سياره'];
handler.tags = ['car'];

export default handler;
