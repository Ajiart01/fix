import { youtubeSearch } from '@bochilteam/scraper'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper-sosmed'
let handler = async (m, { conn, command, text, usedPrefix }) => {
  if (!text) throw `🚩 Use example ${usedPrefix}${command} naruto blue bird`
 // let res = await youtubeSearch(text)
  let vid = (await youtubeSearch(text)).video[0]
  await conn.sendMessage(m.chat, { react: { text: "⏳",key: m.key,}
  })  
  if (!vid) throw 'Tidak di temukan, coba untuk membalikkan judul dan author nya'
  let { authorName, title, description, thumbnail, videoId, durationH, viewH, publishedTime } = vid
  const url = 'https://www.youtube.com/watch?v=' + videoId
let vap = `
Now Playing:

*${title}*

by song ${authorName}

⇄   ◁◁   𝚰𝚰   ▷▷   ↻
00:38 ━━●━━───── 03:23
Volume:  ■■■■■■■■□□ 80%

🗂 *Title:* ${title}
📤 *Published:* ${publishedTime}
⏰ *Duration:* ${durationH}
👁️ *Views:* ${viewH}
🔗 *Url:* ${url}
📔 *Description:* ${description}
`.trim()

conn.sendMessage(m.chat, {
text: vap,
contextInfo: {
externalAdReply: {
title: 'POWERED BY BGS-BOT MD',
thumbnailUrl: thumbnail,
mediaType: 1,
renderLargerThumbnail: true
}}}, { quoted: m}) 
  const yt = await youtubedl(url).catch(async () => await youtubedlv2(url))
const link = await yt.audio['128kbps'].download()
  let doc = { 
  audio: 
  { 
    url: link 
}, 
mimetype: 'audio/mp4', fileName: `${title}`, contextInfo: { externalAdReply: { showAdAttribution: true,
mediaType:  2,
mediaUrl: url,
title: title,
body: 'silakan di putar...',
sourceUrl: url,
thumbnail: await(await conn.getFile(thumbnail)).data                                                                     
                                                                                                                 }
                       }
  }
  return conn.sendMessage(m.chat, doc, { quoted: m })
}
handler.help = ['play'].map(v => v + ' <pencarian>')
handler.tags = ['downloader']
handler.command = /^play$/i

handler.exp = 0
handler.limit = 5
export default handler

function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}