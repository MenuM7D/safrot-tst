let toM = a => '@' + a.split('@')[0]
function handler(m, { groupMetadata }) {
let ps = groupMetadata.participants.map(v => v.id)
let a = ps.getRandom()
let b
do b = ps.getRandom()
while (b === a)
m.reply(`◤━───━ ◆ ━───━◥
┃
 > *\`『 اكتر حد بيحبك اهو 🧚🏻‍♂️ 』\`*
⚉─❧ ${toM(a)} 
┃
◤━───━ ◆ ━───━◥`, null, {
mentions: [a, b]
})}
handler.help = ['✓ ◡̈⃝ ✓│بيحبني🧸💜']
handler.tags = ['game']
handler.command = ['بيحبني']
handler.group = true
export default handler
