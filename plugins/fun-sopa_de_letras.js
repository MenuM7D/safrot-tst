//CREADO POR @gata_dios
 
let fila, columna, sopaNube, sopaPalabra, sopaDir, userSP, cambioLetra, diamante = null
let intentos = 0
let handler = async (m, { conn, text, usedPrefix, command}) => {

if (!userSP) { 
userSP = m.sender.split("@")[0]
await conn.reply(m.chat, `*@${m.sender.split("@")[0]} مُسجَّل في اللعبة* ✅`, m, { mentions: [m.sender] })
}
  
async function generarSopaDeLetras() {
const LADO = 16 // إذا كانت القيمة مرتفعة أو منخفضة، قد يحدث خطأ، اتركها كما هي
let sopaDeLetras = new Array(LADO);
  
for (let i = 0; i < LADO; i++) {
sopaDeLetras[i] = new Array(LADO)
}
  
const PALABRAS = ['كَلِمَات = ['الخوارزميات', 'أندرويد', 'أنيمي', 'مهندس معماري', 'فن', 'علم الفلك', 'أفاتار', 'علم الأحياء', 'علم الخرائط', 'الحركية', 'علم', 'الترميز', 'الكلمات المتقاطعة', 'كلمات متقاطعة', 'لوحة', 'مصمم', 'اقتصاد', 'أينشتاين', 'موسوعة', 'دول', 'استوديوهات', 'سودوكو', 'تاي تشي', 'تكنولوجيا', 'المدمر', 'تتريس', 'أسطورة زيلدا', 'تيك توك', 'تورينغ', 'كون', 'ألعاب الفيديو', 'فيروس', 'واركرافت', 'واتساب', 'إكس بوكس', 'زنوفيرس', 'يوغا', 'يوتيوب', 'زيلدا', 'زينون', 'تشريح', 'رياضة', 'بكتيريا', 'علم النبات', 'تصنيف', 'رقص', 'كشف', 'دراغون بول', 'إلكترونيات', 'فضاء', 'تطور', 'أشباح', 'خيال علمي', 'تصوير فوتوغرافي', 'غاتابوت', 'جغرافيا', 'جيثب', 'هيب هوب', 'تاريخ', 'ابتكار', 'بستنة', 'كاراتيه', 'لغة', 'أدب', 'سحر', 'مارفل', 'مصفوفات', 'موسيقى', 'سباحة', 'علم الأعصاب', 'علم الأعداد', 'علم الطيور', 'بينتبول', 'بيتزا', 'سياسة', 'ربما', 'صناعة الساعات', 'روبوتات', 'صحة', 'خيال علمي', 'علم الجنس', 'سيمبسونز', 'نظم', 'موهبة', 'تاروت', 'علم المساحة', 'تقليد', 'تريفيا', 'تخطيط المدن', 'يوتوبي', 'طب بيطري', 'رحلات', 'علم الحيوان', 'ناروتو', 'دراغون بول', 'قطعة واحدة', 'هجوم العمالقة', 'مذكرة الموت', 'بليتش', 'الخيميائي الكامل', 'سيف الفن على الإنترنت', 'حكاية الجنية', 'أكاديمية البطل', 'قاتل الشياطين', 'كفر أسود', 'صياد', 'طوكيو', 'بطلي الأكاديمي', 'كاوبوي بيبوب', 'كود جياس', 'إيفانجيليون', 'كيميتسو', 'ستينز', 'جينتاما', 'يو يو هاكوشو', 'جيرين لاغان', 'جوجو مغامرات غريبة', 'رجل لكمة واحدة', 'كي-أون', 'كلاناد', 'هاي-كيو', 'أكيرا', 'شبح في القشرة', 'كذبك في أبريل', 'بحار القمر', 'بوكيمون', 'ديجمون', 'أميرة', 'روحي', 'قلعة متحركة', 'توتورو الخاص بي', 'رسم', 'رسم', 'رسم تقريبي', 'ألوان مائية', 'نحت', 'صورة شخصية', 'مجرد', 'منظر طبيعي', 'حرفية', 'طباعة', 'ورش عمل', 'خزف', 'طباعة', 'رسام', 'معارض', 'تصوير فوتوغرافي', 'طباعة', 'متاحف', 'فنانين', 'كوميديا', 'أعمال فنية', 'مشهد مسرحي', 'أكريليك', 'نقوش', 'تاريخ', 'الفنون الجميلة', 'رسامين', 'صور شخصية', 'تصوير', 'طباعة', 'أكريليك', 'بخاخة', 'منحوتات', 'نقوش بارزة', 'صبغات', 'فحم', 'طباعة', 'تصوير', 'رسم', 'فينيل', 'إيبوكسي', 'تصوير', 'حرفية', 'ورش', 'فن أسود', 'فنية', 'لوح رسم', 'جيزيلز', 'تماثيل', 'طبيعة صامتة', 'رسم', 'ألوان مائية', 'نحات', 'ثلاثية اللوحات', 'جدارية', 'مزارات', 'طبيعة صامتة', 'نقاشة', 'دورة فن', 'أعمال يدوية', 'رسام', 'تصفيح', 'نحاتات', 'لمسة فرشاة', 'ورق مقوى', 'استنسل', 'طباعة', 'طابعة', 'فرشاة', 'نقطة', 'نقاش', 'زيوت', 'نسج', 'صباغة', 'تيزيان', 'فن الزهور', 'الفنون الجميلة', 'برونز', 'تصوير', 'متحف', 'لوحة', 'لوحات', 'فن الخداع', 'منطقة الفن', 'أكريليك', 'نحات', 'طباعة', 'تصوير', 'فنان جداري', 'مناظر طبيعية', 'رسامات', 'قبل التاريخ', 'رسم', 'قوالب', 'ألوان مائية', 'بخاخ', 'باروك', 'طبيعة صامتة', 'فحم', 'ورق مقوى', 'دورات فن', 'رسامين', 'استنسل', 'تصوير', 'نقاشة', 'تصفيح', 'نقاشة', 'زيوت', 'قطع الورق', 'لمسة فرشاة', 'نقطة', 'نقاش', 'ورش', 'نسج', 'تيزيان', 'حداثة', 'فينيل', 'تمثال', 'عرض أزياء', 'فساتين', 'عارضات', 'طباعة', 'أحذية', 'إكسسوارات', 'متجر', 'موضة', 'إبرة', 'خيط', 'موضة', 'علامات تجارية', 'منسوجات', 'قص', 'طباعة', 'مظهر', 'خياطة', 'حياكة', 'إكسسوار', 'طباعة', 'عاشق الموضة', 'جلامور', 'لون', 'بريق', 'طباعة', 'قماش', 'طباعة', 'شغف', 'متجر', 'ملابس', 'حذاء', 'عرض', 'خياطة', 'مصمم', 'سترة', 'جلد', 'قميص', 'طباعة', 'تي شيرت', 'تسريحة', 'ماكياج', 'أسلوب', 'ملابس', 'مجلة', 'فورت نايت', 'أوفرواتش', 'ليج أوف ليجيندز', 'دوتا', 'وارفريم', 'ديستني', 'ماين كرافت', 'هيرثستون', 'عالم الحرب', 'كاونتر سترايك', 'روبلكس', 'رون سكيب', 'تيراريا', 'بالادينز', 'سمايت', 'آرش إيج', 'جيلد وورز', 'بلاك ديزرت', 'تيرا', 'ألبون أونلاين', 'براولهالا', 'أبيكس ليجيندز', 'فالورانت', 'تيك تيم', 'ببجي', 'حارس الهالة', 'بحر اللصوص', 'ستاركرافت', 'أبطال العاصفة', 'وورلد أوف ووركرافت', 'اللفيفة القديمة', 'ديابلو', 'فاينل فانتسي', 'الهروب من', 'صدأ', 'بيننا', 'المحتال', 'سقوط الرجال', 'رهاب الشبح', 'صاروخ الدوري', 'لأجل الشرف', 'المكسيك', 'البرازيل', 'فرنسا', 'ألمانيا', 'إيطاليا', 'اليابان', 'الصين', 'روسيا', 'كندا', 'أستراليا', 'إسبانيا', 'الأرجنتين', 'كولومبيا', 'البرتغال', 'سويسرا', 'السويد', 'النرويج', 'هولندا', 'بلجيكا', 'الدنمارك', 'بولندا', 'المجر', 'النمسا', 'كرواتيا', 'صربيا', 'رومانيا', 'بلغاريا', 'اليونان', 'تركيا', 'مصر', 'المغرب', 'جنوب أفريقيا', 'نيجيريا', 'كينيا', 'إثيوبيا', 'تشيلي', 'بيرو', 'الإكوادور', 'بوليفيا', 'باراغواي', 'أوروغواي', 'كوبا', 'جامايكا', 'هايتي', 'بورتوريكو', 'جمهورية الدومينيكان', 'فنزويلا', 'نيكار']
const PALABRA = PALABRAS[Math.floor(Math.random() * PALABRAS.length)]
  
let filaInicial = Math.floor(Math.random() * LADO)
let columnaInicial = Math.floor(Math.random() * LADO)
const DIRECCIONES = ["horizontal", "vertical", "diagonalDerecha", "diagonalIzquierda"]
const DIRECCION = DIRECCIONES[Math.floor(Math.random() * DIRECCIONES.length)]

let palabraAgregada = false
while (!palabraAgregada) {
filaInicial = Math.floor(Math.random() * LADO)
columnaInicial = Math.floor(Math.random() * LADO)

// Algoritmo para garantizar la palabra 
let palabraEntra = true;
for (let i = 0; i < PALABRA.length; i++) {
if (DIRECCION === "horizontal" && (columnaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "vertical" && (filaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "diagonalDerecha" && (filaInicial + i >= LADO || columnaInicial + i >= LADO)) {
palabraEntra = false
break;
} else if (DIRECCION === "diagonalIzquierda" && (filaInicial + i >= LADO || columnaInicial - i < 0)) {
palabraEntra = false
break;
}
}

// Si la palabra entra, agregar a la sopa de letras
if (palabraEntra) {
for (let i = 0; i < PALABRA.length; i++) {
if (DIRECCION === "horizontal") {
sopaDeLetras[filaInicial][columnaInicial + i] = PALABRA.charAt(i)
} else if (DIRECCION === "vertical") {
sopaDeLetras[filaInicial + i][columnaInicial] = PALABRA.charAt(i)
} else if (DIRECCION === "diagonalDerecha") {
sopaDeLetras[filaInicial + i][columnaInicial + i] = PALABRA.charAt(i)
} else {
sopaDeLetras[filaInicial + i][columnaInicial - i] = PALABRA.charAt(i)
}
}
palabraAgregada = true;
}
}

// Diseño 
const LETRAS_POSIBLES = "ⒶⒷⒸⒹⒺⒻⒼⒽⒾⒿⓀⓁⓜⓃⓄⓅⓆⓇⓈⓉⓊⓋⓌⓍⓎⓏ"
const numerosUni = ["⓿", "❶", "❷", "❸", "❹", "❺", "❻", "❼", "❽", "❾", "❿", "⓫", "⓬", "⓭", "⓮", "⓯", "⓰", "⓱", "⓲", "⓳", "⓴"]
let sopaDeLetrasConBordes = ""
sopaDeLetrasConBordes += "     " + [...Array(LADO).keys()].map(num => numerosUni[num]).join(" ") + "\n"
//sopaDeLetrasConBordes += "   *╭" + "┄".repeat(LADO) + '┄┄' + "╮*\n"

for (let i = 0; i < LADO; i++) {
let fila = numerosUni[i] + " "

for (let j = 0; j < LADO; j++) {
if (sopaDeLetras[i][j]) {
fila += sopaDeLetras[i][j] + " "
} else {
let letraAleatoria = LETRAS_POSIBLES.charAt(Math.floor(Math.random() * LETRAS_POSIBLES.length))
fila += letraAleatoria + " "
}
}
fila += ""
sopaDeLetrasConBordes += fila + "\n"
}
//sopaDeLetrasConBordes += "   *╰" + "┄".repeat(LADO) + '┄┄' + "╯*"
sopaDeLetrasConBordes = sopaDeLetrasConBordes.replace(/[a-zA-Z]/g, letra => LETRAS_POSIBLES[letra.charCodeAt() - 65] || letra)

await m.reply(`🔠 *SOPA DE LETRAS* 🔠
*PALABRA:* \`\`\`"${PALABRA}"\`\`\`
*TIENE 3 MINUTOS PARA ENCONTRAR LA RESPUESTA CORRECTA!!*

*ESCRIBA EL NÚMERO DE FILA Y COLUMNA DEL COMIENZO DE LA PRIMERA LETRA _"${PALABRA.charAt(0)}"_ DE LA PALABRA _"${PALABRA}"_ TIENE _${intentos}_ INTENTOS!!*

*EJEMPLO:*
❇️ \`\`\`${usedPrefix + command} 28\`\`\`
➡️ \`\`\`FILA 2\`\`\`    ⬇️ \`\`\`COLUMNA 8\`\`\``.trim())
await m.reply(`🔠 *${PALABRA.split("").join(" ")}* 🔠\n\n` + sopaDeLetrasConBordes.trimEnd())
fila = filaInicial 
columna = columnaInicial
sopaNube = sopaDeLetrasConBordes
sopaPalabra = PALABRA 
sopaDir = DIRECCION.replace(/([A-Z])/g, ' $1').toLowerCase().replace(/^./, str => str.toUpperCase())
}

// Condiciones del juego
cambioLetra = sopaDir
let tagUser = userSP + '@s.whatsapp.net'
if (userSP != m.sender.split("@")[0]) {
await conn.reply(m.chat, `*@${tagUser.split("@")[0]} ESTA JUGANDO SOPA DE LETRAS 🔠 ACTUALEMENTE*`, m, { mentions: [tagUser] })
return
}
if (intentos === 0) {
intentos = 3  
generarSopaDeLetras()
resetUserSP(sopaDir)

async function resetUserSP() {
await new Promise((resolve) => setTimeout(resolve, 2 * 60 * 1000)) // 2 min
if (intentos !== 0) {
await conn.reply(m.chat, `*@${m.sender.split("@")[0]} TE QUEDA UN MINUTO!!* 😨`, m, { mentions: [m.sender] })
}
await new Promise((resolve) => setTimeout(resolve, 3 * 60 * 1000)) // 3 min
if (intentos !== 0) {
await conn.reply( m.chat, `*@${m.sender.split("@")[0]} EL TIEMPO SE HA ACABADO!!* 😧\n\n*LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${sopaDir}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`, m, { mentions: [m.sender] })
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
}
}}else {
if (`${fila}${columna}` == text) {
if (sopaPalabra.length <= 4) {
diamante = 4
} else if (sopaPalabra.length <= 8) {
diamante = 8
} else if (sopaPalabra.length <= 11) {
diamante = 24
} else {
diamante = 32
}
global.db.data.users[m.sender].limit += diamante

await m.reply(`\`\`\`🎊 HAS GANADO ${diamante} ${rpgshop.emoticon('limit')}!!\`\`\`\n\n*CORRECTO!! LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${cambioLetra}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`)
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
return
}else{
if (intentos === 1) {
fila = null, columna = null, sopaNube = null, sopaPalabra = null, sopaDir = null, userSP = null, cambioLetra = null
intentos = 0
await m.reply(`🫡 *AGOTASTE LOS INTENTOS!! LA PALABRA _"${sopaPalabra}"_ SE ENCONTRABA EN LA DIRECCIÓN _${cambioLetra}_ DE LA FILA _${fila}_ Y COLUMNA _${columna}_*`)
return  
} else {
intentos -= 1
await m.reply(`😮‍💨 *INCORRECTO. TE QUEDAN _${intentos}_ INTENTOS!!*${intentos === 1 ? '' : `\n*PALABRA A ENCONTRAR:* \`\`\`${sopaPalabra}\`\`\``}\n\n${intentos === 1 ? `\`\`\`💡 PISTA!!\`\`\`\n*LA PALABRA _${sopaPalabra}_ SE ENCUENTRA EN LA DIRECCIÓN _"${cambioLetra}"_*\n\n` : ''}${sopaNube}`)
return
}}
}}
handler.help = ['sopa', 'buscarpalabras']; 
 handler.tags = ['game']; 
handler.command = /^(buscarpalabra|sopa|soup|wordsearch|wordfind|spdeletras|spletras|sppalabras|spalabras|spdepalabras)$/i
handler.register = true
export default handler
