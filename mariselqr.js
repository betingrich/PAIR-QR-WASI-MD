const PastebinAPI = require('pastebin-js'),
pastebin = new PastebinAPI('EMWTMkQAVfJa9kM-MRUrxd5Oku1U7pgL')
const {makeid} = require('./id');
const QRCode = require('qrcode');
const express = require('express');
const path = require('path');
const fs = require('fs');
let router = express.Router()
const pino = require("pino");
const {
	default: King_Marisel,
	useMultiFileAuthState,
	jidNormalizedUser,
	Browsers,
	delay,
	makeInMemoryStore,
} = require("@whiskeysockets/baileys");

function removeFile(FilePath) {
	if (!fs.existsSync(FilePath)) return false;
	fs.rmSync(FilePath, {
		recursive: true,
		force: true
	})
};
const {
	readFile
} = require("node:fs/promises")
router.get('/', async (req, res) => {
	const id = makeid();
	async function King_Marisel_qr() {
		const {
			state,
			saveCreds
		} = await useMultiFileAuthState('./temp/' + id)
		try {
			let Qr_Code_By_King_Marisel= Wasi_Tech({
				auth: state,
				printQRInTerminal: false,
				logger: pino({
					level: "silent"
				}),
				browser: Browsers.macOS("Desktop"),
			});

			Qr_Code_By_King_Marisel.ev.on('creds.update', saveCreds)
			Qr_Code_By_King_Marisel.ev.on("connection.update", async (s) => {
				const {
					connection,
					lastDisconnect,
					qr
				} = s;
				if (qr) await res.end(await QRCode.toBuffer(qr));
				if (connection == "open") {
					await delay(5000);
					let data = fs.readFileSync(__dirname + `/temp/${id}/creds.json`);
					await delay(800);
				   let b64data = Buffer.from(data).toString('base64');
				   let session = await Qr_Code_By_King_Marisel.sendMessage(Qr_Code_By_King_Marisel.user.id, { text: '' + b64data });
	
				   let KING_MARISEL_TEXT = `
*_Session Connected By King Marisel_*
*_Made With 𓃵_*
______________________________________
╔════◇
║ *『𝑲𝒊𝒏𝒈 𝑴𝒂𝒓𝒊𝒔𝒆𝒍 𝒊𝒔 𝒄𝒐𝒏𝒏𝒆𝒄𝒕𝒆𝒅』*
║ _𝑭𝒊𝒓𝒔𝒕 𝒔𝒕𝒆𝒑 𝒄𝒐𝒎𝒑𝒍𝒆𝒕𝒆𝒅._
╚════════════════════════╝
╔═════◇
║  『••• 𝗩𝗶𝘀𝗶𝘁 𝗙𝗼𝗿 𝗛𝗲𝗹𝗽 •••』
║❒ *Ytube:* _youtube.com/@wemacomic
║❒ *Owner:* _https://wa.me/254740007567_
║❒ *Repo:* _https://github.com/betingrich/_
║❒ *WaGroup:* _https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x_
║❒ *WaChannel:* _https://whatsapp.com/channel/0029Vajvy2kEwEjwAKP4SI0x_
║❒ *Plugins:* _https://github.com/betingrich
╚════════════════════════╝
_____________________________________
	
_Don't Forget To Give Star To My Repo_`
	 await Qr_Code_By_King_Marisel.sendMessage(Qr_Code_By_King_Marisel.user.id,{text:KING_MARISEL_TEXT},{quoted:session})



					await delay(100);
					await Qr_Code_By_King_Marisel.ws.close();
					return await removeFile("temp/" + id);
				} else if (connection === "close" && lastDisconnect && lastDisconnect.error && lastDisconnect.error.output.statusCode != 401) {
					await delay(10000);
					WASI_MD_QR_CODE();
				}
			});
		} catch (err) {
			if (!res.headersSent) {
				await res.json({
					code: "Service is Currently Unavailable"
				});
			}
			console.log(err);
			await removeFile("temp/" + id);
		}
	}
	return await KING_MARISEL()
});
module.exports = router
