import similarity from 'similarity'
const threshold = 0.72
export async function before(m) {
    let id = m.chat
    if (!m.quoted || !m.quoted.fromMe || !m.quoted.isBaileys || !m.text || !/Ketik.*teka/i.test(m.quoted.text) || /.*(hint|teka)/i.test(m.text))
        return !0
    this.tebakkata = this.tebakkata ? this.tebakkata : {}
    if (!(id in this.tebakkata))
        return conn.reply(m.chat, 'lu telat :v', m)
    if (m.quoted.id == this.tebakkata[id][0].id) {
        let json = JSON.parse(JSON.stringify(this.tebakkata[id][1]))
        // m.reply(JSON.stringify(json, null, '\t'))
        if (m.text.toLowerCase() == json.jawaban.toLowerCase().trim()) {
            global.db.data.users[m.sender].exp += 500
            global.db.data.users[m.sender].limit += 1
            global.db.data.users[m.sender].koin += 200
            conn.reply(m.chat, `*✓ Benar!*\nSelamat Kamu Mendapatkan:\n• 500 Exp\n• 200 Koin\n• 1 Limit`, m)
            clearTimeout(this.tebakkata[id][3])
            delete this.tebakkata[id]
        } else if (similarity(m.text.toLowerCase(), json.jawaban.toLowerCase().trim()) >= threshold)
            m.reply(`*Dikit Lagi!*`)
        else
            m.reply(`*pinter dikit napa !!*`)
    }
    return !0
}
export const exp = 0
