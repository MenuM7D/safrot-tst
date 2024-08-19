import acrcloud from 'acrcloud'
import { youtubedl, youtubedlv2 } from '@bochilteam/scraper'
import yts from 'yt-search'

let acr = new acrcloud({
  host: 'identify-eu-west-1.acrcloud.com',
  access_key: 'c33c767d683f78bd17d4bd4991955d81',
  access_secret: 'bvgaIAEtADBTbLwiPGYlxupWqkNGIjT7J9Ag2vIu'
})
let handler = async (m, { conn, usedPrefix, command }) => {
  let q = m.quoted ? m.quoted : m
  let mime = (q.msg || q).mimetype || q.mediaType || ''
  if (/video|audio/.test(mime)) {
    let buffer = await q.download()
    let user = global.db.data.users[m.sender]
    await m.react('🕓')
    let { status, metadata } = await acr.identify(buffer)
    if (status.code !== 0) throw status.msg 
    let { title, artists, album, genres, release_date } = metadata.music[0]
    let res = await yts(title)
    let vid = res.videos[0]
    let v = vid.url
    let yt = await youtubedl(v).catch(async () => await youtubedlv2(v))
    let url = await yt.audio['128kbps'].download()
    let title2 = await yt.title
    let txt = '`🧚🏻‍♂️  أداة معرفة الموسيقى`\n\n'
        txt += `	✩   *العنوان* : ${title}${artists ? `\n	✩   *الفنانين* : ${artists.map(v => v.name).join(', ')}` : ''}`
        txt += `${album ? `\n	✩   *الألبوم* : ${album.name}` : ''}${genres ? `\n	✩   *النوع* : ${genres.map(v => v.name).join(', ')}` : ''}\n`
        txt += `	✩   *تاريخ الإصدار* : ${release_date}\n\n`
    await conn.sendFile(m.chat, vid.thumbnail, 'thumbnail.jpg', txt, m)
    await conn.sendFile(m.chat, url, title2 + '.mp3', null, m, false, { mimetype: 'audio/mpeg', asDocument: user.useDocument })
    await m.react('✅')
  } else return conn.reply(m.chat, '*\`『 اعمل ريب ع اغنيه في فيديو قصير او ملف صوتي وهجبلك التفصيل وهنزلك الصوت🧚🏻‍♂️ 』\`*', m)
}
handler.help = ['موسيقى *<صوت/فيديو>*']
handler.tags = ['tools']
handler.command = ['موسيقى', 'اعرف']

export default handler
