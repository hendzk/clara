


require("./module")

global.owner = "6285133270996"
global.namabot = "ClaraXV4"
global.botnumber = "6285133270996"
global.namaCreator = "PAEDULZ"
global.teksmenu = "`SC MASIH MODE BET`"
global.autoJoin = false //NOT CHANGE / JANGAN GANTI
global.antilink = false //NOT CHANGE / JANGAN GANTI

global.imageurl = '-' //GANTI PP MU MENGGUNAKAN LINK TELEGRA PH
global.isLink = '-' ///GANTI MENGGUNAKAN LINK GRUBMU YA
global.chsaluran = '-' //GANTI PAKE LINK SALURAN WA LU
global.thumb = fs.readFileSync("./thumb.png") ///NOT CHANGE / JANGAN GANTI
global.audionya = fs.readFileSync("./all/sound.mp3") //NOT CHANGE / JANGAN GANTI
global.simbol = '⨠' //GANTI AJA BEBAS
global.tekspushkon = "" //NOT CHANGE / JANGAN GANTI
global.tekspushkonv2 = "" //NOT CHANGE / JANGAN GANTI
global.packname = "PAEDULZ" //GANTI AJ
global.author = "" //GANTI SERAH MU
global.jumlah = "5" ////NOT CHANGE / JANGAN GANTI

let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})