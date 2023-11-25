import fetch from 'node-fetch'

let handler = async (m, { conn, command }) => {
	let url = `https://aemt.me/japan`
	conn.sendFile(m.chat, url, 'anu.jpg', '_Nih Kak_', m)
}
handler.command = /^(japan|jepang)$/i
handler.tags = ['asupan']
handler.help = ['japan']
handler.premium = false
handler.limit = true

export default handler