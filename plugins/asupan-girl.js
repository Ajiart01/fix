import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = 'https://api-fgmods.ddns.net/api/img/girl?apikey=aWwJmcZv'
	conn.sendFile(m.chat, url, null, 'nih asupan buat lu', m)
}
handler.command = /^(girl)$/i
handler.tags = ['asupan']
handler.help = ['girl']
handler.premium = false
handler.limit = true

export default handler