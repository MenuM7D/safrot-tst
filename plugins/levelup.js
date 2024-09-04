import { canLevelUp } from '../lib/levelling.js'

export async function before(m, { conn }) {
    let user = global.db.data.users[m.sender]
    
    if (!user) {
        console.error(`User not found for sender: ${m.sender}`);
        return !0;
    }
    
    if (!user.autolevelup)
        return !0;
        
    let before = user.level * 1;
    
    while (canLevelUp(user.level, user.exp, global.multiplier))
        user.level++;
        
    let roleData = global.rpg.role(user.level);
    if (!roleData || !roleData.name) {
        console.error(`Role data not found for level: ${user.level}`);
        return !0;
    }
    
    user.role = roleData.name;
    
    if (before !== user.level) {
        m.reply(`
*▢ مبروك المستوي الجديد يحب*

 *${before}* ‣  *${user.level}*
 Role : *${user.role}*

 _لتعطيل الميزه_
_*/off autolevelup*_
  `.trim());
    }
}
