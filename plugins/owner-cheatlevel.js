let handler  = async (m, { conn, usedPrefix: _p }) => {
let anu = `selamat anda sekarang di level ${level}! `
let info = `
=> global.db.data.users[m.sender].level = 100
`.trim()

        conn.fakeReply(m.chat, anu, '0@s.whatsapp.net', '*SUKSES CHEAT LEVEL*', 'status@broadcast')

}
handler.tags = ['owner']
handler.help = ['cheatlevel']
handler.command = /^(cheatlevel)$/i
handler.owner = true
handler.mods = false
handler.premium = true
handler.group = false
handler.private = false

handler.admin = false
handler.botAdmin = false

handler.fail = null

export default handler 
