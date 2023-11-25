import fetch from 'node-fetch'

let handler = async (m, { conn, usedPrefix, args, command, text }) => {
if (!text) throw `Linknya?\nExample: *.igdl https://www.instagram.com/reel/CsC2PQCNgM1/?igshid=NTc4MTIwNjQ2YQ==*`
m.reply(wait)
  let res = await fetch(`https://aemt.me/download/igdl?url=${text}`)
  let json = await res.json()
  let cap = `_Nih Kak Videonya >,<_`
  conn.sendMessage(m.chat, { video: { url: json.result[0].url }, caption: cap }, m)
}
handler.help = ['instagram']
handler.tags = ['downloader']
handler.command = /^(instagram|igdl|ig|instagramdl)$/i
handler.limit = 5

export default handler