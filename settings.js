/* ═════════════════════════════════
 *  🚀  MALVIN KING TECH - YT
 * ═════════════════════════════════
 *  
 *  📺  YouTube    : https://www.youtube.com/@malvintech2
 *  💻  GitHub     : https://github.com/XdKing2
 *  🌐  Website    : Coming Soon
 *  🪀  WhatsApp  : https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S
 *  
 *  👨‍💻  Developer  : Malvin King
 *  📧  Contact    : Available on GitHub
 *  
 *  ⚠️   Please do not remove this watermark
 * ═════════════════════════════════
 *  © 2025 Malvin Tech - All Rights Reserved
 * ════════════════════════════════ */

const fs = require('fs')
const chalk = require('chalk')

//———————[ Owner Config ]——————————//

global.ownernumber = '918078186676' // Change to your number
global.ownername = 'ᴍᴀʟᴠɪɴ ᴋɪɴɢ' // add ur name
global.botMode ='public' // change to public or self

//————————[ Bot Config ]—————————//

global.SESSION_ID = "starcore~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibUpoRjZGdG02L2kwQlBCYVVmU3ZPY3R2WEE3QktDam5LYlgrZkx1SHpsYz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiUGdZZXg1Z0tpWlZNUkxCWUF1di9ERkdXeDZiOGVTT3UvSnJ6WGVwMzhHST0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJRSkNkbnZEbXhuTksyVktUejIrZ0gwM1VMWjA0YndvY1BlUUVBV2tha21nPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJuZk5ML0x5aWo4RHZqOUdGN3huemJjM1dsV0loYi9JZUNlTUZWNUVxWmhZPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InFLMVcxOTdxVUpzU2RzMkdTanB4QTg3eW12bHpGcStGS2wvNllWR3RTVXc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkRVa1hvRVZnV3lvZ25NdUh4eUJhRmdDbyt6Y3crSnZPNWxueVU5WU5PMWs9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0NlSktyK0dIK0dxQnpEdTUzLzlXV0NMMDlSK2dpekhWdkQ5YXo2Z2Mzcz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoibHJsYlhLbENPWXVkWG92ZzZ1M292TnNDVHNDQmcxUEFkSVY2ekpGd3FrST0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlhekV5REt4SGRuL0NZWWJpYXVNM3VEb3JRcUJYVytkREN0blBFZm93c3Vad21xSnJDS3FtYXd3RE95b1ZKUyt3d0lnQlFuc2RpRVJwYk1qWjYvZWlRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6NzAsImFkdlNlY3JldEtleSI6IklxN01ad0dEeVdnOTNMdWp2c0MveVRmT3RkVS9nNXE3MmxncjR2T1pDc0k9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbXSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjAsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkpMWDhVd19rVDdhZXp2ZW1EYWJXdWciLCJwaG9uZUlkIjoiMzY2MzM5YTQtZDhkOS00OTEyLThlN2ItZDk1MTM0ODVkYWE4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Iis3bnpSc3U0cXFyeTE0UzQ3WW1ZWVRwRnBGaz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiIxNUlWRThZRHg1a3EyaWdPV0lNZ05aSkk3T2M9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVJNQUxWSU4iLCJtZSI6eyJpZCI6IjkxODA3ODE4NjY3NjozM0BzLndoYXRzYXBwLm5ldCIsImxpZCI6IjkwMjQ1OTUzNTI3ODYwOjMzQGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTFRMM01FSEVLRFluY2dHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5Ijoic3A1WWMvYkd1WUtuNTJJUERpcEMwTG5MR1BYSU0zc3dtM3NlaWpvT0FDbz0iLCJhY2NvdW50U2lnbmF0dXJlIjoiRDNkeFlzbFpJWTJ0Q3BYZHI0QTJBNE1JTUNFQWFCZmdsN1lnY3l1VGp1QXBMNEY0QVhZN0Evb1p1MDhZZXRiMURBd3FRa1V6Vm5HTVQxUGJvL1M1RFE9PSIsImRldmljZVNpZ25hdHVyZSI6IjRlQjRmZU1xVE0xbEh2UnRYQWJyZ29KSlZpSmVYcDhaVytDMklQZ2pJbk5SRlcvdzVxT1lwRldhZEc4T3RzYzBLWXpycVZyWU41dVJzUVR2c3RFSmlBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTE4MDc4MTg2Njc2OjMzQHMud2hhdHNhcHAubmV0IiwiZGV2aWNlSWQiOjB9LCJpZGVudGlmaWVyS2V5Ijp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQmJLZVdIUDJ4cm1DcCtkaUR3NHFRdEM1eXhqMXlETjdNSnQ3SG9vNkRnQXEifX1dLCJwbGF0Zm9ybSI6ImFuZHJvaWQiLCJyb3V0aW5nSW5mbyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkNBTUlDQT09In0sImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTc2MjA5NDEyNX0="; // add ur session id starts with starcore~
global.namabot = "ᴍᴋ-ʙᴏᴛ"
global.nomorbot = '263714757857' // Change to yourbot number
global.pair = "MRMALVIN"
global.version = '1.0.1'
global.autojoingc = false
global.anticall = false
global.autoreadsw = false
global.autoread = false

//——————[ Social Media Config ]———————//
global.web = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.linkSaluran = "https://whatsapp.com/channel/0029VbB3YxTDJ6H15SKoBv3S"
global.idSaluran = "120363402507750390@newsletter"
global.nameSaluran = "Malvin Tech Ch."

//————————[ Watermark Config ]———————//
global.packname = 'Stick By Mk'
global.author = 'YT Malvin King Tech'
global.foother = 'Made By Malvin King'


//———————[ Media Config ]—————————//
global.img = "https://files.catbox.moe/641pvo.jpg"
global.thumbxm = "https://files.catbox.moe/q57r0k.jpg"
global.thumbbc = "https://files.catbox.moe/641pvo.jpg"
global.thumb = [ 
    "https://files.catbox.moe/641pvo.jpg",
    "https://i.ibb.co/Z1zG8ndV/malvin-xd.jpg"

]

//—————[ Broadcast Config ]——————————//
// Delay Jpm & Pushctc || 1000 = 1 second
global.delayJpm = 3500
global.delayPushkontak = 5000
global.namakontak = "AutoSave M-K"

//——————[ Message Config ]——————————//
global.mess = {
    success: 'sᴜᴄᴄᴇssғᴜʟʏ',
    admin: '[ !! ] *sʏsᴛᴇᴍ*\nᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘ ᴀᴅᴍɪɴ',
    botAdmin: '[ !! ] *sʏsᴛᴇᴍ*\nʙᴏᴛ ɪs ɴᴏᴛ ᴀᴅᴍɪɴ ʏᴇᴛ',
    creator: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴏᴡɴᴇʀ',
    group: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ɢʀᴏᴜᴘs',
    private: '[ !! ] *sʏsᴛᴇᴍ*\nᴛʜɪs ғᴇᴀᴛᴜʀᴇ ɪs ᴏɴʟʏ ғᴏʀ ᴘʀɪᴠᴀᴛᴇ ᴄʜᴀᴛ',
    wait: '[ !! ] *sʏsᴛᴇᴍ*\nᴘʟᴇᴀsᴇ ᴡᴀɪᴛ, ᴘʀᴏᴄᴇssɪɴɢ...',
}

// *** message *** 
global.closeMsgInterval = 30; // 30 minutes. maximum 60 minutes, minimum 1 minute
global.backMsgInterval = 2; // 2 hours. maximum 24 hours, minimum 1 hour

let file = require.resolve(__filename)
fs.watchFile(file, () => {
    fs.unwatchFile(file)
    console.log(chalk.redBright(`Update ${__filename}`))
    delete require.cache[file]
    require(file)
})
