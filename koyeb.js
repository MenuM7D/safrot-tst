# استخدم قاعدة Fedora 37
FROM fedora:37

# تحديث النظام وتثبيت الحزم المطلوبة
RUN dnf -y update && \
    dnf install -y https://mirrors.rpmfusion.org/free/fedora/rpmfusion-free-release-$(rpm -E %fedora).noarch.rpm https://mirrors.rpmfusion.org/nonfree/fedora/rpmfusion-nonfree-release-$(rpm -E %fedora).noarch.rpm && \
    dnf install -y git ffmpeg ImageMagick nodejs yarnpkg libwebp && \
    dnf clean all

# نسخ مشروع The-LoliBot-MD إلى جذر النظام
RUN git clone https://github.com/elrebelde21/The-LoliBot-MD /root/The-LoliBot-MD

# تعيين دليل العمل إلى مشروع LoliBot
WORKDIR /root/The-LoliBot-MD

# تثبيت التبعيات باستخدام Yarn
RUN yarn install

# بدء تشغيل البوت
CMD ["node", "index.js"]
