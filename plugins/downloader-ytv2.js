const handler = async (m, { conn, text, command }) => {
if (!text) throw 'Linknya Mana.??'
m.reply(wait)
try {
const url = `https://yt-downloader.akkun3704.repl.co/?url=${text}&filter=audioandvideo&quality=lowestvideo&contenttype=video/mp4`
conn.sendFile(m.chat, url, 'anu.mp4', '_Nih Kak Videonya_', m)
} catch (e) {
m.reply(eror)
}
}

handler.command = /^(ytmp42|ytv2)$/i
handler.help = ["ytv2"]
handler.tags = ['downloader']
handler.limit = true

export default handler