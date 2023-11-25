import fetch from 'node-fetch'
let handler = async(m, { conn, text }) => {
await conn.reply(m.chat, wait, m)
  if (!text) throw `Mau Nanya Apa?`
    let res = await fetch(`https://aemt.me/openai?text=${text}`) 
    let zel = await res.json()
   m.reply(zel.result)
}
handler.help = ['ai']
handler.tags = ['ai']
handler.command = /^(ai|openai|bot)$/i
handler.limit = false
export default handler