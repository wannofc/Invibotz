const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')
const Client = require('./lib/simple.js')

const WAConnection = Client.WAConnection(_WAConnection)

const { Functions, banner, start, success, getGroupAdmins } = require("./lib/functions");
const { color, bgcolor } = require('./lib/color')

const fs = require("fs-extra")
const figlet = require('figlet')

const { uncache, nocache } = require('./lib/loader')
const setting = JSON.parse(fs.readFileSync('./setting.json'))
const welcome = require('./message/group')
baterai = 'unknown'
charging = 'unknown'

fakenomor = '6285640068416@s.whatsapp.net'
const gcrevoke = ["6285640068416-6285640068416@g.us"]
prefix = '#'
shp = '⬡'
owner = "6285640068416@s.whatsapp.net"
spc1 = '         '

spc2 = '\n                           '

spc3 = '                   '

spc4 = '               '



//nocache



global.media = require('./src/json/media.json');



global.functions = new Functions();



global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };



require('./wan.js')



nocache('../wan.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))



require('./message/group.js')



nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))







const starts = async (wann = new WAConnection()) => {
	wann.logger.level = 'warn'
	
console.log(color(figlet.textSync('INVI BOT', {

		font: 'Standard',

		horizontalLayout: 'default',

		vertivalLayout: 'default',

		width: 80,

		whitespaceBreak: false

	}), 'cyan'))

console.log(color(`${spc2}[ • CREATOR BOT WANN OFFICIAL• ]` ,'cyan'))

console.log(color(`${spc4}< =========================[ INVIBOTZ ]==================== >`, 'cyan'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Hai        : Pengguna InviBotz`, 'red'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 1.1.0`, 'red'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))

console.log(color(`${spc3}[•]`, 'aqua'), color(`Depelover  : WannBotz`, 'white'))

console.log(color(`${spc4}< ===========================[ SUCCES ]======================= >`, 'cyan'))



    console.log(color('⎇','red'), color('𝗦𝗰𝗿𝗶𝗽𝘁 𝗜𝗻𝗶 𝗚𝘄 𝗦𝘂𝘀𝘂𝗻 𝗦𝗲𝗻𝗱𝗶𝗿𝗶!\n𝗡𝗼𝘁𝗲: 𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 Wann Botz シ︎', 'aqua'))

    console.log(color('⎇','red'), color('𝗦𝗼𝘂𝗿𝗰𝗲 𝗖𝗼𝗱𝗲 𝗩𝗲𝗿𝘀𝗶𝗼𝗻:', 'aqua'))

    console.log(color('⎇','red'), color('𝗕𝘂𝗴? 𝗘𝗿𝗿𝗼𝗿? 𝗦𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻? 𝗩𝗶𝘀𝗶𝘁 𝗛𝗲𝗿𝗲:', 'aqua'), color('https://wa.me/6285640068416'))

    console.log(color('[SELF-BOT]'), color('𝗦𝗲𝗹𝗳𝗯𝗼𝘁 Wann Botz 𝗜𝘀 𝗢𝗻𝗹𝗶𝗻𝗲 ㋛︎', 'aqua'))

    console.log(color('[DEV]', 'cyan'), color('𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗕𝗮𝗰𝗸, 𝗢𝘄𝗻𝗲𝗿! 𝗛𝗼𝗽𝗲 𝗬𝗼𝘂 𝗔𝗿𝗲 𝗗𝗼𝗶𝗻𝗴 𝗪𝗲𝗹𝗹~', 'aqua'))

    console.log(color('⎇','green'), color('𝗠𝗮𝗸𝗮𝘀𝗶𝗵 𝗗𝗵 𝗣𝗮𝗸𝗲', 'aqua'))
console.log(color('|WRN|', 'yellow'), color('Confirm To Developer InviBotz', 'cyan'))
 wann.sendMessage(`6285640068416@s.whatsapp.net`, `*Hai Owner InviBotz Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`  VERIFICATION SUCCES \`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer InviBotz ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./Invi.jpg'),sourceUrl:"https://wa.me/6285640068416?text=Assalamualaikum"}}})


	// Menunggu QR Muncul



	wann.on('qr', () => {



		console.log(color('[', 'blue'), color('!', 'red'), color(']', 'white'), color('Please scan qr code'))



	})







	// Menghubungkan Kack



	fs.existsSync(`./${setting.sessionName}.json`) && wann.loadAuthInfo(`./${setting.sessionName}.json`)



	wann.on('connecting', () => {



		console.log(color('[ WANN STORE ]', 'cyan'), color('Menghubungkan....'));



	})







	//connect



	wann.on('open', () => {



		console.log(color('[ WANN STORE ]', 'cyan'), color('Bot Sudah Online!'));



	})







	// session



	await wann.connect({



		timeoutMs: 30 * 1000



	})



	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(wann.base64EncodedAuthInfo(), null, '\t'))







	// Baterai



	wann.on('CB:action,,battery', json => {



		global.batteryLevelStr = json[2][0][1].value



		global.batterylevel = parseInt(batteryLevelStr)



		baterai = batterylevel



		if (json[2][0][1].live == 'true') charging = true



		if (json[2][0][1].live == 'false') charging = false



		console.log(json[2][0][1])



		console.log('Baterai : ' + batterylevel + '%')



	})



	global.batrei = global.batrei ? global.batrei : []



	wann.on('CB:action,,battery', json => {



		const batteryLevelStr = json[2][0][1].value



		const batterylevel = parseInt(batteryLevelStr)



		global.batrei.push(batterylevel)



	})







	// welcome



	wann.on('group-participants-update', async (anu) => {



		await welcome(wann, anu)



	})



  



  wann.on("message-delete", async (m) => {



    if (m.key.remoteJid == "status@broadcast") return;



    if (!m.key.fromMe && m.key.fromMe) return;



    m.message =



      Object.keys(m.message)[0] === "ephemeralMessage"



        ? m.message.ephemeralMessage.message



        : m.message;



    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));



    const isGroup = m.key.remoteJid.endsWith("@g.us")



    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;



    const moment = require("moment-timezone");



    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");



    let d = new Date();



    let locale = "id";



    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();



    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][



      Math.floor((d * 1 + gmt) / 84600000) % 5



    ];



    let week = d.toLocaleDateString(locale, { weekday: "long" });



    let calender = d.toLocaleDateString(locale, {



      day: "numeric",



      month: "long",



      year: "numeric",



    });



    const type = Object.keys(m.message)[0];



    if (!isAntidel) return



    wann.sendMessage(



      m.key.remoteJid,



      `\`\`\`「 Anti Delete 」\`\`\`



  •> Nama : @${m.participant.split("@")[0]}



  •> Waktu : ${jam} ${week} ${calender}



  •> Type : ${type}`,



      MessageType.text,



      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }



    );

    wann.copyNForward(m.key.remoteJid, m.message);



  });

	wann.on('chat-update', async (message) => {

		require('./wan.js')(wann, message)
	})
}

starts();