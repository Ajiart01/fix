import fetch from 'node-fetch'
import uploadImage from '../lib/uploadImage.js'

let handler = async (m, { 
conn, 
usedPrefix, 
command
 }) => {
	var q = m.quoted ? m.quoted : m
	var mime = (q.msg || q).mimetype || q.mediaType || ''
	if (/image/g.test(mime) && !/webp/g.test(mime)) {
		await conn.reply(m.chat, wait, m)
		try {
			const img = await q.download?.()
			let out = await uploadImage(img)
			let old = new Date()
			let res = await fetch(`https://aemt.me/toanime?url=${out}`)
			let convert = await res.json()
			let buff = await fetch(convert.url.img_crop_single)
  .then(res => res.buffer())
			await conn.sendMessage(m.chat, { image: buff, caption: `*Lari ada wibu*:v \n\n🍟 *sukses convert dalam* : ${((new Date - old) * 1)} ms` }, { quoted: m })
		} catch (e) {
			console.log(e)
			m.reply(`[ ! ] Identifikasi Gagal\n\nCoba foto yang lain.`)
		}
	} else {
		m.reply(`Kirim gambar dengan caption *${usedPrefix + command}* atau tag gambar yang sudah dikirim`)
	}
};
handler.help = ['jadianime']
handler.tags = ['convert', 'ai']
handler.command = /^(toanime|jadianime)$/i
handler.limit = 5

export default handler