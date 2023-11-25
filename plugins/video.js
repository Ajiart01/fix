let handler = async (m, { conn, usedPrefix, command }) => {
let who = m.mentionedJid && m.mentionedJid[0] ? m.mentionedJid[0] : m.fromMe ? conn.user.jid : m.sender
let name = conn.getName(who)
  conn.sendFile(m.chat, pickRandom(vbokep), null, `Nih *${name}* Video bokepnya..`, m)
}
handler.help = ['bokep']
handler.tags = ['asupan']
handler.command = /^(bokep)$/i

handler.premium = false
handler.limit = true

handler.fail = null
handler.register = false

export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}

const vbokep = [

"https://lobfile.com/file/05Aj.mp4",
"https://lobfile.com/file/05Aj.mp4",
"https://lobfile.com/file/ZvzL.mp4",
"https://lobfile.com/file/2HPw.mp4",
"https://lobfile.com/file/yDof.mp4",
"https://lobfile.com/file/wcoL.mp4",
"https://lobfile.com/file/oz6y.mp4",
"https://lobfile.com/file/3Xty.mp4",
"https://lobfile.com/file/TSFQ.mp4",
"https://lobfile.com/file/YIOoW.mp4",
"https://lobfile.com/file/3aTZ.mp4",
"https://lobfile.com/file/5JgA.mp4",
"https://lobfile.com/file/OTJ7.mp4",
"https://lobfile.com/file/Esh2.mp4",
"https://lobfile.com/file/03Qw.mp4",
"https://lobfile.com/file/QB66.mp4",
"https://lobfile.com/file/LZxa.mp4",
]