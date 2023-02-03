let handler = async (m, { conn }) => {
let ppown = await conn.profilePictureUrl(global.owner[0][0] + '@s.whatsapp.net', 'image').catch(_ => 'https://telegra.ph/file/f14cb0033a6489eafff32.jpg') 
let teksbio = `*───────[ BIODATA OWNER ]───────*
*💌 Nama* : ARMANDD
*✉️ Nama RL* : ARMAND
*🕋 Agama* : Islam
*⏰ Tanggal lahir* : 13 Juni 2002
*🧩 Hobby* : Makan tidur berak
*🗺️ Tinggal* : Indo, Riau, Pekanbaru
*───────[ SOSIAL MEDIA ]───────*
*📷 Github* : https://github.com/armndd
*🏮 Instagram* : instagram.com/armnd.at
`
conn.sendHydrated(m.chat, teksbio, global.botName, ppown, "wa.me/" + global.owner[0][0], "💬 ᴄʜᴀᴛs", null,null, [[null, null], [null, null],[null,null]], m, { viewOnce: m })
}
handler.help = ['bioowner']
handler.tags = ['info']
handler.command = /^(bioowner)$/i

export default handler