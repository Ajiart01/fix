let badwordRegex = /anj(k|g)|ajn?(g|k)|a?njin(g|k)|bajingan|b(a?n)?gsa?t|ko?nto?l|me?me?(k|q)|pe?pe?(k|q)|meki|titi(t|d)|pe?ler|tetek|toket|sex|sexx|ngewe|go?blo?k|to?lo?l|idiot|nge?nto?(t|d)|jembut|bego|dajj?al|janc(u|o)k|pantek|puki?(mak)?|kimak|kampang|lonte|col(i|mek?)|pelacur|henceu?t|nigga|fuck|dick|bitch|asw|tits|bastard|asshole/i// tambahin sendiri
export async function before(m, { isBotAdmin }) {
    if (m.isBaileys && m.fromMe) return 
    let chat = global.db.data.chats[m.chat]
    let user = global.db.data.users[m.sender]
    let isBadword = badwordRegex.exec(m.text)
    if (chat.antiBadword && isBadword && m.isGroup) {
        user.warn += 1
        m.reply(`${user.warn >= 5 ? '*📮 Warning Kamu Sudah Mencapai 5 Maka Kamu Akan Dikick!*' : '*📮 Kata Kata Toxic Terdeteksi*'}

あ Warning: ${user.warn} / 5

[❗] Jika warning mencapai 5 Kamu akan dikeluarkan dari group

“Barang siapa yang beriman kepada Allah dan Hari Akhir maka hendaklah dia berkata baik atau diam” (HR. al-Bukhari dan Muslim).`)
        if (user.warn >= 5) {
            user.warn = 0
           await time(1000) 
conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
        }
    }
    return !0
}

const time = async (ms) => {
            return new Promise(resolve => setTimeout(resolve, ms));
        }