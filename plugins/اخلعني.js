let toM = a => '@' + a.split('@')[0]

Array.prototype.getRandom = function() {
  return this[Math.floor(Math.random() * this.length)];
}

function handler(m, { groupMetadata }) {
  let ps = groupMetadata.participants.map(v => v.id);
  let a = ps.getRandom();
  let b;
  
  do {
    b = ps.getRandom();
  } while (b === a);
  
  let user = m.sender;
  
  m.reply(`@${user.split('@')[0]}  *\`『 يلا ي حربوقه انتي متنفعيش تبقي مراتي 😹🐤 』\`*  ${toM(b)}, 😹`, null, {
    mentions: [user, b]
  });
}

handler.help = ['formarpareja'];
handler.tags = ['main', 'fun'];
handler.command = ['اخلعني'];
handler.group = true;

export default handler;
