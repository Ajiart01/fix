// S C R I P T  O R I  B Y  Aldi Lesmana🔭

// - - THANKS TO - -
// • Allah SWT
// • WH MODS DEV
// • ZYKO-MD
// • Dll

//[!] Jangan Lupa Ganti Ownernya

// Contact ZIRO :  wa.me/6281228070013
// WEB : website.ziromd.repl.co
// DONASI : https://saweria.co/ZiroMD
// YT : https://youtube.com/@Ziro-MD_Official
import { watchFile, unwatchFile } from 'fs'
import fs from 'fs'
import chalk from 'chalk'
import { fileURLToPath } from 'url'
import moment from 'moment-timezone'
import { group } from 'console'
import PhoneNumber from 'awesome-phonenumber'
/*============= WAKTU =============*/
let wibh = moment.tz('Asia/Jakarta').format('HH')
    let wib = moment.tz('Asia/Jakarta').format('HH:mm:ss')
    let wibm = moment.tz('Asia/Jakarta').format('mm')
    let wibs = moment.tz('Asia/Jakarta').format('ss')
    let wktuwib = `${wibh} H ${wibm} M ${wibs} S`
    
    let d = new Date(new Date + 3600000)
    let locale = 'id'
    let weton = ['Pahing', 'Pon', 'Wage', 'Kliwon', 'Legi'][Math.floor(d / 84600000) % 5]
    let week = d.toLocaleDateString(locale, { weekday: 'long' })
    let date = d.toLocaleDateString(locale, {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    })
    let dateIslamic = Intl.DateTimeFormat(locale + '-TN-u-ca-islamic', {
      day: 'numeric',
      month: 'long',
      year: 'numeric'
    }).format(d)
    const more = String.fromCharCode(8206)
const readMore = more.repeat(4001)

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA SOSSIAL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.sig = 'https://instagram.com'
global.tautanwa = 'https://wa.me/6285702259120'
global.sgh = 'https://github.com/Bgs' //github
global.sgc = 'https://chat.whatsapp.com/GDEn4xm3XOIB0GeWC1NqcO'  //group whatsapp
global.sdc = '-' //discord
global.linkyt = 'https://youtube.com/@bgs_Official'
global.syt = 'https://youtube.com/@bgs_Official'
global.sfb = 'https://www.facebook.com/bgs'// facebook
global.snh = 'https://chat.whatsapp.com/GDEn4xm3XOIB0GeWC1NqcO'
global.media = 'https://telegra.ph/file/c68c91db8659e2d49444c.jpg'
global.wame = 'https://wa.me/ 6285725865449'
//⫹⫺ ╳╶┈ ⎝ NOOWNER,NOBOT,NAMAOWNER,NAMABOT  ⎞ ┈╾╴╳ ⫹⫺
global.owner = [['6285725865449', true, '6285702259120', true]]
global.rowner = '6285725865449'
global.mods = ['']
global.prems = ['']
global.nomorbot = '6285702259120' //pasang no bot lo 
global.nomorown = '6285725865449' //pasang no own lo
global.nomorown1 = '6285702259120'
global.nomorown2 = '6285725865449'
global.nomorwa = '0'
global.nameown = 'BGS-MD '
global.gcname = 'Group botz'
global.author = 'BGS MD'
global.v = 'BGS-BOT | MD'
global.namabot = '⫹⫺ BGS MD'
global.namebot = 'BGS BOTZ'
global.packname2 = 'BGS BOTZ'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OWNER INFO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.nameown1= 'BGS-MD'
global.nameown2 = 'BGS-MD '

/*============== STAFF ==============*/
//kosong
//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WM ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.readMore = readMore
global.wm = 'BGS-BOT | MD'
global.wm2 = 'BGS-BOT | md'
global.wm3 = `⫹⫺ BGS BOTZ MD`
global.packname = 'Created By BGS BOTZ'
global.watermark = namabot
global.titlebot = `BGS -MD`
global.footer = 'ꜱɪᴍᴘʟᴇ ᴡʜᴀᴛꜱᴀᴘᴘ ʙᴏᴛ ᴍᴀᴅᴇ ʙʏ BGS ッ'
/*Fake*/

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ NAMA STICKER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.stickpack = 'Made by'
global.stickauth = `⫹⫺ BGS BOTZ MD`

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TIME INFO  ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.botdate = `⫹⫺ 𝐃𝐀𝐓𝐄 : ${week} ${date}\n⫹⫺ 𝐓𝐈𝐌𝐄 : ${wktuwib}`
global.jb = `⌚ JAM ${wib}`
global.bottime = `JAM SEKARANG : ${wktuwib}`
global.ya = `${date}`
global.week = `${week} ${date}`
global.datee = `${week} ${date}`
global.islamic = `${dateIslamic}`
global.wibb = `${wktuwib}`

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ INTRO ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.intro = 'https://telegra.ph/file/c68c91db8659e2d49444c.jpg'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ MEDIA LINK ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.Linkgc = 'Bentar'
global.lynk = 'https://saweria.co/BGS'
global.ig = 'https://instagram.com'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ DONASI ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.pdana = ' 6285702259120'//pasang no lo sinih buat donasi 
global.povo = '-' 
global.pgopay = '-'
global.plinkaja = '-' //link aja
global.ppulsa = ' 6285702259120' // Pulsa indosat
global.ppulsa2 = '6285702259120' // Pulsa axis 
global.psaweria = '-'
global.donasikabul = 'Gadaa'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.Hargasewa = '├ 5 Hari IDR 3.000\n├ 7 Hari IDR 5.000\n├ 15+5 Hari IDR 10.000\n├ 30 Hari IDR 15.000'

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ TAMPILAN ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.LyAtas1 = '☰ ━━━ ❨'
global.LyAtas2 = '❩ ━━┄┈ •⟅'
global.Ly = '┃'
global.lybwh = '┗━━┈┈ ⳻⳻'
global.sym = '◈▻'
global.sym2 = '➭'
global.dmenut = 'ଓ═┅═━–〈' //top
global.dmenub = '┊↬' //body
global.dmenub2 = '┊' //body for info cmd on Default menu
global.dmenuf = '┗––––––––––✦' //footer
global.dashmenu = '┅═┅═❏ *DASHBOARD* ❏═┅═┅'
global.cmenut = '❏––––––『' //top
global.cmenuh = '』––––––' //header
global.cmenub = '┊✎ ' //body
global.cmenuf = '┗━═┅═━––––––๑\n' //footer
global.cmenua = '\n⌕ ❙❘❙❙❘❙❚❙❘❙❙❚❙❘❙❘❙❚❙❘❙❙❚❙❘❙❙❘❙❚❙❘ ⌕\n     '
global.pmenus = '✎'
global.htki = '––––––『' // Hiasan Titile (KIRI)
global.htka = '』––––––' // Hiasan Title  (KANAN)
global.lopr = 'Ⓟ' //LOGO PREMIUM ON MENU.JS
global.lolm = 'Ⓛ' //LOGO LIMIT/FREE ON MENU.JS
global.htjava = '⫹⫺'
global.hsquere = ['⛶','❏','⫹⫺']

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.stiker_wait = '▰▰▰▰▰▰▱▱ 98% 𝚠𝚊𝚒𝚝!!'
global.wait = pickRandom(["ʟᴏᴀᴅɪɴɢ", "ᴛᴜɴɢɢᴜ", "ᴘʀᴏsᴇs", "ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ", "ᴅᴀʟᴀᴍ ᴘʀᴏsᴇs", "𝘁𝘂𝗻𝗴𝗴𝘂 𝗹𝗼𝗮𝗱𝗶𝗻𝗴", "𝘁𝘂𝗻𝗴𝗴𝘂 𝘀𝗲𝗯𝗲𝗻𝘁𝗮𝗿", "𝗽𝗿𝗼𝘀𝗲𝘀", "𝗱𝗮𝗹𝗮𝗺 𝗽𝗿𝗼𝘀𝗲𝘀", "𝗺𝗼𝗵𝗼𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝘀𝗲𝗯𝗲𝗻𝘁𝗮𝗿", "𝘀𝗮𝗯𝗮𝗿 𝗸𝗮𝗸", "𝘀𝗮𝗯𝗮𝗿 𝗼𝗺"])
global.md = pickRandom(["ʟᴏᴀᴅɪɴɢ", "ᴛᴜɴɢɢᴜ", "ᴘʀᴏsᴇs", "ᴛᴜɴɢɢᴜ sᴇʙᴇɴᴛᴀʀ", "ᴅᴀʟᴀᴍ ᴘʀᴏsᴇs", "𝘁𝘂𝗻𝗴𝗴𝘂 𝗹𝗼𝗮𝗱𝗶𝗻𝗴", "𝘁𝘂𝗻𝗴𝗴𝘂 𝘀𝗲𝗯𝗲𝗻𝘁𝗮𝗿", "𝗽𝗿𝗼𝘀𝗲𝘀", "𝗱𝗮𝗹𝗮𝗺 𝗽𝗿𝗼𝘀𝗲𝘀", "𝗺𝗼𝗵𝗼𝗻 𝘁𝘂𝗻𝗴𝗴𝘂 𝘀𝗲𝗯𝗲𝗻𝘁𝗮𝗿", "𝘀𝗮𝗯𝗮𝗿 𝗸𝗮𝗸", "𝘀𝗮𝗯𝗮𝗿 𝗼𝗺"])
global.eror = 'Mohon Maaf Server Kami Sedang Error!'
global.rwait = '⌛'
global.dmoji = '🤭'
global.done = '✅'
global.error = '❌' 
global.xmoji = '🔥' 

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RESPOND GEME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.benar = 'benar sekali! '
global.salah = 'coba lagi !'
global.dikit = "waduh dikit lagii!!"

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ RPG GAME ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.multiplier = 69 // The higher, The harder levelup 
global.rpg = {
  emoticon(string) {
    string = string.toLowerCase()
    let emot = {
      agility: '🤸‍♂️',
      arc: '🏹',
      armor: '🥼',
      bank: '🏦',
      bibitanggur: '🍇',
      bibitapel: '🍎',
      bibitjeruk: '🍊',
      bibitmangga: '🥭',
      bibitpisang: '🍌',
      bow: '🏹',
      bull: '🐃',
      cat: '🐈',
      chicken: '🐓',
      common: '📦',
      cow: '🐄',
      crystal: '🔮',
      darkcrystal: '♠️',
      diamond: '💎',
      dog: '🐕',
      dragon: '🐉',
      elephant: '🐘',
      emerald: '💚',
      exp: '✉️',
      fishingrod: '🎣',
      fox: '🦊',
      gems: '🍀',
      giraffe: '🦒',
      gold: '👑',
      health: '❤️',
      horse: '🐎',
      intelligence: '🧠',
      iron: '⛓️',
      keygold: '🔑',
      keyiron: '🗝️',
      knife: '🔪',
      legendary: '🗃️',
      level: '🧬',
      limit: '🌌',
      lion: '🦁',
      magicwand: '⚕️',
      mana: '🪄',
      money: '💵',
      mythic: '🗳️',
      pet: '🎁',
      petFood: '🍖',
      pickaxe: '⛏️',
      pointxp: '📧',
      potion: '🥤',
      rock: '🪨',
      snake: '🐍',
      stamina: '⚡',
      strength: '🦹‍♀️',
      string: '🕸️',
      superior: '💼',
      sword: '⚔️',
      tiger: '🐅',
      trash: '🗑',
      uncommon: '🎁',
      upgrader: '🧰',
      wood: '🪵'
    }
    let results = Object.keys(emot).map(v => [v, new RegExp(v, 'gi')]).filter(v => v[1].test(string))
    if (!results.length) return ''
    else return emot[results[0][0]]
  }
}


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ WEBSITE APIKEY ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.zenzkey = 'b8040941f7'
global.lolkey = pickRandom(["e54205a4ca2caa368cc067bb", "8e66d0934cf741bfd2182c16", "327a6596e4c4baa20c756132", "a9833ea315a69ae67c84dafb", "85faf717d0545d14074659ad", "ed78c137a46873c5b8e5fe3b"])
  //'292e8d36a318282908bd07f7' // PUNYA WAHID 357d3c85079c4e0818731e6b
// Cdgn Lolkey ed78c137a46873c5b8e5fe3b
global.botcahx = 'df09e048'
global.zahwazein = 'zenzkey_1af4665954'
global.xyro = 'FfscjBb7tF'
global.botcahx = 'df09e048'
global.openai = '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'  //api key bisa didapatkan dari https://openai.com/api/
global.org = 'org-VKTbfzIGL0EfLb8RgRfbLvbu'  //openAI Organization name
global.deepai = 'quickstart-QUdJIGlzIGNvbWluZy4uLi4K' // https://deepai.org
global.caliph = 'Lwlct6wi'
global.rose = 'Rs-Danil_Elistz'
global.zeltoria = 'Elistz'
global.xcode = 'Frieren'
global.ibeng = 'LaqYsQAYUY'
global.xcode = 'zN6lXzriMMNMBNM'
global.xyro = 'xyro'
global.APIs = { // API Prefix
  // name: 'https://website'
  nrtm: 'https://nurutomo.herokuapp.com',
  rey: 'https://server-api-rey.herokuapp.com',
  xteam: 'https://api.xteam.xyz',
  zahir: 'https://zahirr-web.herokuapp.com',
  lol: 'https://api.lolhuman.xyz',
  dhnjing: 'https://dhnjing.xyz',
  neoxr: 'https://neoxr-api.herokuapp.com',
  zeks: 'https://api.zeks.me',
  pencarikode: 'https://pencarikode.xyz',
  ana: 'https://anabotofc.herokuapp.com/',
  amel: 'https://melcanz.com',
  hardianto: 'https://hardianto.xyz',
  botstyle: 'https://botstyle-api.herokuapp.com',
  adiisus: 'https://adiixyzapi.herokuapp.com',
  kanx: 'https://kannxapi.herokuapp.com/', 
  violetics : 'https://violetics.pw',
  ziy : 'https://ziy.herokuapp.com',
  males : 'https://malesin.xyz',
  dham : 'https://api.dhamzxploit.my.id', 
  pasha : 'https://api.nataganz.com',
  reysekha : 'https://web-production-d795.up.railway.app/',
  zahwazein : 'https://api.zahwazein.xyz/',
  rey : 'https://web-production-d795.up.railway.app/',
  botcahx : 'https://api.tiodevhost.my.id/', 
  xyro : 'https://api.xyroinee.xyz/', 
  popcat : 'https://api.popcat.xyz'
}
//⳹ NOTE !! EXAMPLE ➢ Name Api: 'website api'

global.APIKeys = { // APIKey Here
  // 'https://website': 'apikey'
  'https://api.xteam.xyz': 'HIRO',
  'https://anabotofc.herokuapp.com/': 'AnaBot',
  'https://api.lolhuman.xyz': 'f280f82ea8f93160db4f31e8',// 8e66d0934cf741bfd2182c16
  'https://zahirr-web.herokuapp.com': 'zahirgans',
  'https://api.zeks.me': 'apivinz',
  'https://pencarikode.xyz': 'pais',
  'https://melcanz.com': 'melcantik',
  'https://neoxr-api.herokuapp.com': 'yntkts',
  'https://server-api-rey.herokuapp.com': 'apirey',
  'https://botstyle-api.herokuapp.com': 'Apikeymu',
  'https://hardianto.xyz': 'hardianto',
  'https://violetics.pw': 'beta',
  'https://ziy.herokuapp.com': 'xZiyy',
  'https://api.nataganz.com': 'Pasha', 
  'https://api.xyroinee.xyz': 'FfscjBb7tF',
  'https://api-xcoders.site': 'Frieren',
  'https://api.zeltoria.my.id': 'Elistz', 
  'https://api.ibeng.tech': 'tamvan'
}
//⳹ NOTE !! EXAMPLE ➢ 'https://WebsiteApi': 'Apikey'


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ OTHER ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.dpptx = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.ddocx = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.dxlsx = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.dpdf = 'application/pdf'
global.drtf = 'text/rtf'
//OPTIONS
global.optsnsfw = true // Untuk mematikan Dan Menyalakan Nsfw
global.premnsfw = true // Nsfw Mode Premium?

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ THUMBNAIL ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺
global.fotonya1 = 'https://telegra.ph/file/c68c91db8659e2d49444c.jpg' //ganti jadi foto bot mu
global.fotonya2 = 'https://telegra.ph/file/c68c91db8659e2d49444c.jpg' //ini juga ganti 

//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ Main Thumbnail ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.pp = fs.readFileSync('./media/thumb.jpg') 
global.pepe = fs.readFileSync('./media/thumb.jpg')
global.fp = fs.readFileSync('./media/thumb.jpg')
global.thumb = fp
global.dbnya = `src/database.json`
global.sesinya = `sessions/BGS -MD`
global.dtu = 'ɪɴꜱᴛᴀɢʀᴀᴍ'
global.urlnya = "https://instagram.com"
global.dtc = 'ᴄᴀʟʟ ᴏᴡɴᴇʀ'
global.phn = '6285702259120'

//------ FUNCTION
function pickRandom(list) {
  return list[Math.floor(list.length * Math.random())]
}


//⫹⫺ ╳╶╼╶╶╶╶┈ ⎝ JNGN DI UBAhH ⎞ ┈╴╴╴╴╾╴╳ ⫹⫺

global.fsizedoc = '99999999999999'
global.fpagedoc = '999'
global.thumbdoc = 'https://telegra.ph/file/6e45318d7c76f57e4a8bd.jpg'

let file = fileURLToPath(import.meta.url)
watchFile(file, () => {
  unwatchFile(file)
  console.log(chalk.redBright("Update 'config.js'"))
  import(`${file}?update=${Date.now()}`)
})