# استخدام فيدورا 37 كصورة أساسية
FROM fedora:37

# تحديث النظام وتثبيت الحزم المطلوبة
RUN dnf -y update &&\
    dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm &&\
    dnf install -y git ffmpeg ImageMagick nodejs yarnpkg libwebp &&\
    dnf clean all

# استنساخ مستودع GitHub
RUN git clone https://github.com/elrebelde21/The-LoliBot-MD

# تغيير مسار العمل إلى المجلد المستنسخ
WORKDIR /root/The-LoliBot-MD

# نسخ الملفات إلى المجلد المحدد
COPY . /root/The-LoliBot-MD

# تثبيت الحزم باستخدام Yarn
RUN yarn install

# تشغيل التطبيق
CMD ["node", "index.js"]
