import fetch from 'node-fetch'
import fs from 'fs'
let handler = async (m, { conn, args, participants, usedPrefix }) => {
  let users = Object.entries(global.db.data.users).map(([key, value]) => { 
    return {...value, jid: key}
  })

  let sortedExp = users.map(toNumber('exp')).sort(sort('exp'))
  let sortedLim = users.map(toNumber('limit')).sort(sort('limit'))
  let sortedLevel = users.map(toNumber('level')).sort(sort('level'))
  let sortedRole = users.map(toNumber('role')).sort(sort('role'))
  let sortedMoney = users.map(toNumber('money')).sort(sort('money'))
  let sortedJoincount = users.map(toNumber('joincount')).sort(sort('joincount'))
  let sortedPremium = users.map(toNumber('premium')).sort(sort('premium'))

  let usersExp = sortedExp.map(enumGetKey)
  let usersLim = sortedLim.map(enumGetKey)
  let usersLevel = sortedLevel.map(enumGetKey)
  let usersRole = sortedRole.map(enumGetKey)
  let usersMoney = sortedMoney.map(enumGetKey)
  let usersJoincount = sortedJoincount.map(enumGetKey)
  let usersPremium = sortedPremium.map(enumGetKey)

  console.log(participants)
  let len = args[0] && args[0].length > 0 ? Math.min(100, Math.max(parseInt(args[0]), 10)) : Math.min(10, sortedExp.length)
  let text = `🏆 *جدول الترتيب*
    
  💠 *أعلى ${len} XP 🎯* 
  انت: *${usersExp.indexOf(m.sender) + 1}* من *${usersExp.length} مستخدمين*

  ${sortedExp.slice(0, len).map(({ jid, exp }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${exp} ⚡*`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} ماس 💎* 
  انت: *${usersLim.indexOf(m.sender) + 1}* من *${usersLim.length} مستخدمين*

  ${sortedLim.slice(0, len).map(({ jid, limit }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${limit} 💎*`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} مستوى 💪* 
  انت: *${usersLevel.indexOf(m.sender) + 1}* من *${usersLevel.length} مستخدمين*

  ${sortedLevel.slice(0, len).map(({ jid, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${level} 🔅*`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} دور 🌟* 
  انت: *${usersLevel.indexOf(m.sender) + 1}* من *${usersLevel.length} مستخدمين*

  ${sortedLevel.slice(0, len).map(({ jid, role, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} ${role}`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} مستخدمين مميزين 🎟️* 
  انت: *${usersLevel.indexOf(m.sender) + 1}* من *${usersLevel.length} مستخدمين*

  ${sortedLim.slice(0, len).map(({ jid, premium, level }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${premium ? `✅` : `❌`} 🎟️*`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} توكنز 🧿* 
  انت: *${usersJoincount.indexOf(m.sender) + 1}* من *${usersJoincount.length} مستخدمين*

  ${sortedJoincount.slice(0, len).map(({ jid, joincount }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${joincount} 🧿*`).join('\n')}

  ┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈┈

  💠 *أعلى ${len} سفروت كوينز 🪙*
  انت: *${usersMoney.indexOf(m.sender) + 1}* من *${usersMoney.length} مستخدمين*

  ${sortedMoney.slice(0, len).map(({ jid, money }, i) => `${i + 1}. ${participants.some(p => jid === p.jid) ? `(${conn.getName(jid)}) wa.me/` : '@'}${jid.split`@`[0]} *${money} 🪙*`).join('\n')}
  `.trim()

  await m.reply(text, null, { mentions: conn.parseMention(text) })
}

handler.help = ['top']
handler.tags = ['econ']
handler.command = ['المصدرين', 'lb', 'top'] 
handler.register = true
handler.fail = null
handler.exp = 0

export default handler

function sort(property, ascending = true) {
  if (property) return (...args) => args[ascending & 1][property] - args[!ascending & 1][property]
  else return (...args) => args[ascending & 1] - args[!ascending & 1]
}

function toNumber(property, _default = 0) {
  if (property) return (a, i, b) => {
    return {...b[i], [property]: a[property] === undefined ? _default : a[property]}
  }
  else return a => a === undefined ? _default : a
}

function enumGetKey(a) {
  return a.jid
}
