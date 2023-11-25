import fs from 'fs'

let handler = async (m, { conn }) => {
	let rules = `Tutorial Penggunaan Bot :

1. Semua Fitur Bot Menggunakan Prefix Yaitu Harus Menggunakan Titik (.) Di Awal Perintah Agar Perintahnya Aktif.
Contoh: Ketik .allmenu

2. Jika Kamu Ingin Bermain Game Coba Lihat Di List Have Fun, Di Situ Kamu Bisa Menemukan Fitur Untuk Bersenang Senang Seperti Family100 Yang Mengharuskan Menjawab Semua Pertanyaan.
Contoh Penggunaan: Ketik .family100

3. Jika Kamu Ingin Mencari Sesuatu Kamu Bisa Lihat Di List Menu Internet, Kamu Bisa Menemukan Seperti Buka Lapak.
Contoh Penggunaan: Ketik .bukalapak Hoodie Kekinian

4. Jika Ingin Mendownload Seperti Video, Reels Fb/Ig, Story Ig, Dan Lain Sebagainya Kamu Bisa Melihat Di List Menu Download.
Contoh Penggunaan: Ketik .facebook url instagram 


5. Jika Ingin Mengubah Ataupun Menggunakan Fitur Yang Berhubungan Dengan Media Seperti Audio, Foto, Dan Video Kamu Harus Balas Chatnya Dan Ketik Perintahnya 
Contoh Penggunaan: Balas/Reply Vn Nya Terus Ketik .tomp3

6. Jika Kamu Kehabisan Limit Kamu Bisa Membelinya Dengan Cara Mengetik .shop beli limit 1. Kamu Tidak Punya Koin?, Kamu Bisa Memainkan Game Yang Ada Di Menu HaveFun, Jika Kamu Bisa Menjawab/Memenangkan Game Tersebut, Kamu Akan Mendapatkan Exp, Koin, Dan Limit.

7.Jika ingin melihat semua data kamu ketikan *.profile*

8.jika ingin memutar/mendownload youtube silakan ketikan perintah berikut :
contoh .play judul lagu

_Note: Jika Masih Tidak Mengerti Hubungin Owner Dengan Cara Mengetik .owner_
`;
	await conn.sendMessage(m.chat, { image: { url: 'https://wallpapercave.com/wp/wp6571854.jpg' }, caption: rules }, m)
}
handler.help = ['tutorial']
handler.tags = ['info']
handler.command = /^(tutorial|info)$/i;

export default handler;