
const fs = require('fs')
const chalk = require('chalk')
global.doc1 = 'application/vnd.openxmlformats-officedocument.presentationml.presentation'
global.doc2 = 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'
global.doc3 = 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
global.doc4 = 'application/zip'
global.doc5 = 'application/pdf'
global.doc6 = 'application/vnd.android.package-archive'
//==============================\

global.ownerlen = "Yuu" //ubah nama kamu
global.owner = ['62895404330700'] 
global.ownername = "Yuu"
global.ytname = "-"
global.socialm = "https://instagram.com/yuuanda_"
global.location = "Indonesia, Serang, Banten"
global.ownernomer = "62895404330700"
global.premium = ['62895404330700']
global.botname = 'Shino • Bot' 
global.linkz = "-"
global.websitex = "https://youtube.com/@xynabotzreal"
global.botscript = 'script nya di https://youtube.com'
global.themeemoji = "😋"
global.packname = "Shino"
global.author = "Bot"
global.wm = "Shino • Bot"
global.sessionName = 'session'
global.prefa = ['','!','#','&']
global.sp = ''
global.mess = {
    success: 'Berhasil Di Proses!!!', 
    admin: 'Khusus Admin Anj!!!',
    botAdmin: 'Bot Nya Aja Belum Jadi Admin Anj🗿',
    premime: 'Khusus Pengguna Premium Asu!!!',
    owner: 'Khusus Owner Cantik Gw😏!!!',
    group: 'Khusus Group Lah Kontl🗿',
    private: 'Features Used Only For Private Chat!',
    wait: 'Wait Proses Njing',
    linkm: 'Mana Link Nya Anj?',
    endLimit: 'Limit Mu Habis Kontl, Tunggu Besok Untuk Di Reset lagi!!!',
    nsfw: 'Belum Di Aktifin Sama Admin Anj!!! Ketik .nsfw On',
}
global.flaming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=sketch-name&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.fluming = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=fluffy-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flarun = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=runner-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.flasmurf = 'https://www6.flamingtext.com/net-fu/proxy_form.cgi?&imageoutput=true&script=smurfs-logo&doScale=true&scaleWidth=800&scaleHeight=500&fontsize=100&text='
global.thum = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.log0 = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.err4r = fs.readFileSync("./Maslent/pplent/maslent.jpg")
global.thumb = fs.readFileSync("./Maslent/pplent/maslent.jpg")
    global.limitawal = {
    premium: "Infinity",
    free: 100, // limit awall 
    monayawal: 1000
}
global.limitAwal = {
 prem: 'Unlimited',
 free: 100
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update'${__filename}'`))
	delete require.cache[file]
	require(file)
})
