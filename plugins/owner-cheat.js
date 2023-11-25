let handler = async (m, { conn }) => {
    let user = global.db.data.users[m.sender]
        global.db.data.users[m.sender].koin = 999999999999999
        global.db.data.users[m.sender].limit = 999999999999999
        global.db.data.users[m.sender].exp = 99999999999999
        global.db.data.users[m.sender].money = 9999999999
        m.reply(`*Selamat Kamu Mendapatkan*:\n*money*:9999999999\n*Koin:* 999999999999\n*Limit:* 999999999999\n*Exp:* 99999999999999`)
}
handler.tags = ['owner']
handler.help = ['cheat']
handler.command = /^(cheat)$/i
handler.owner = true

export default handler