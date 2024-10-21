import { Chess } from 'chess.js'

const handler = async (m, { conn, args }) => {
  const key = m.chat
  conn.chess = conn.chess || {}
  let chessData = conn.chess[key] || {
    gameData: null,
    fen: null,
    currentTurn: null,
    players: [],
    hasJoined: [],
  }
  conn.chess[key] = chessData
  const { gameData, fen, currentTurn, players, hasJoined } = chessData
  const feature = args[0]?.toLowerCase()

  if (feature === 'حذف') {
    delete conn.chess[key]
    return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*تم حذف اللعبه بنجاح*', m)
  }

  if (feature === 'انشاء') {
    if (gameData) {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*هناك لعبه موجوده بلفعل*', m)
    }
    chessData.gameData = { status: 'انتظار', black: null, white: null }
    return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*تم بدء العبه*\n\n*يتم انتظار مشاركين للبدء*', m)
  }

  if (feature === 'انضمام') {
    const senderId = m.sender
    if (players.includes(senderId)) {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*انت بلفعل منضم الي هذه العبه*', m)
    }
    if (!gameData || gameData.status !== 'انتظار') {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*لا توجد لعبة شطرنج تنتظر انضمام الاعبين الان*', m)
    }
    if (players.length >= 2) {
      return conn.reply(
        m.chat,
        '*⦿🧞‍♂️⦿*\n\n*عدد الاعبين مكتمل بلفعل ستيم بدأ العبه تلقائيا*',
        m
      )
    }
    players.push(senderId)
    hasJoined.push(senderId)
    if (players.length === 2) {
      gameData.status = 'مستعد'
      const [black, white] =
        Math.random() < 0.5 ? [players[1], players[0]] : [players[0], players[1]]
      gameData.black = black
      gameData.white = white
      chessData.currentTurn = white
      return conn.reply(
        m.chat,
        `*⦿🧞‍♂️⦿*\n\n*الاعبين الذين قامو بلأنضمام الي العبه هم*\n\n${hasJoined.map(playerId => `- ـ@${playerId.split('@')[0]}`).join('\n\n')}\n\n*الاسود↜@${black.split('@')[0]}*\n\n*الابيض↜@${white.split('@')[0]}*\n\n*استخدم الامر↜.شطرنج بدء لبدء العبه*`,
        m,
        { mentions: hasJoined }
      )
    } else {
      return conn.reply(
        m.chat,
        '*⦿🧞‍♂️⦿*\n\n*لقد قمت بلأنضمام للعبة الشطرنج بنجاح يتم انتظار لاعبين اخرين للأنضمام*',
        m
      )
    }
  }

  if (feature === 'بدء') {
    if (gameData.status !== 'مستعد') {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*لا يمكن بدء العبه انتظر حتي ينضم لاعبان للبدء*', m)
    }
    gameData.status = 'playing'
    const senderId = m.sender
    if (players.length === 2) {
      const fen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1'
      chessData.fen = fen
      const encodedFen = encodeURIComponent(fen)
      const turn = `*⦿🧞‍♂️⦿*\n\n*دور صاحب الون الابيض↜@${gameData.white.split('@')[0]} 🧞‍♂️*`
      const flipParam = senderId === gameData.black ? '' : '&flip=true'
      const flipParam2 = senderId === gameData.black ? '' : '-flip'
      const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
      try {
        await conn.sendFile(m.chat, boardUrl, '', turn, m, false, { mentions: [gameData.white] })
      } catch (error) {
        const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`
        await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, { mentions: [gameData.black] })
      }
      return
    } else {
      return conn.reply(
        m.chat,
        '*⦿🧞‍♂️⦿*\n\n*لقد قمت بلأنضمام للعبة الشطرنج بنجاح يتم انتظار لاعبين اخرين للأنضمام*',
        m
      )
    }
  }

  if (args[0] && args[1]) {
    const senderId = m.sender
    if (!gameData || gameData.status !== 'playing') {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*هذه العبه لم تبدأ بعد*', m)
    }
    if (currentTurn !== senderId) {
      return conn.reply(
        m.chat,
        `*⦿🧞‍♂️⦿*\n\n*حان دور ${chessData.currentTurn === gameData.white ? 'اللون الابيض' : 'اللون الاسود'} ليقم بلتحرك*`,
        m,
        {
          contextInfo: {
            mentionedJid: [currentTurn],
          },
        }
      )
    }
    const chess = new Chess(fen)
    if (chess.isCheckmate()) {
      delete conn.chess[key]
      return conn.reply(
        m.chat,
        `*⦿🧞‍♂️⦿*\n\n*انتهت العبه هناك فائز كش ملك*\n\n*يالا العار ايها الفاشل↜@${m.sender.split('@')[0]} 🧞‍♂️*\n\n*مبروك ايها الفائز دومت اسطورة الشطرنج الي الابد ☝️✨*`,
        m,
        {
          contextInfo: {
            mentionedJid: [m.sender],
          },
        }
      )
    }
    if (chess.isDraw()) {
      delete conn.chess[key]
      return conn.reply(
        m.chat,
        `*⦿🧞‍♂️⦿*\n\n*النتيجه هي التعادل العبه توقفت*\n\n*الاعبون*\n${hasJoined.map(playerId => `- @${playerId.split('@')[0]}`).join('\n')}`,
        m,
        {
          contextInfo: {
            mentionedJid: hasJoined,
          },
        }
      )
    }
    const [from, to] = args
    try {
      chess.move({ from, to, promotion: 'q' })
    } catch (e) {
      return conn.reply(m.chat, '*⦿🧞‍♂️⦿*\n\n*حركة غير صالحةلا يمكن استخدامها*', m)
    }
    chessData.fen = chess.fen()
    const currentTurnIndex = players.indexOf(currentTurn)
    const nextTurnIndex = (currentTurnIndex + 1) % 2
    chessData.currentTurn = players[nextTurnIndex]
    const encodedFen = encodeURIComponent(chess.fen())
    const currentColor = chessData.currentTurn === gameData.white ? 'الابيض' : 'الاسود'
    const turn = `*⦿🧞‍♂️⦿*\n\n*الدور علي الون↜${currentColor}*\n\n*صاحب الون↜@${chessData.currentTurn.split('@')[0]} 🧞‍♂️*\n\n${chess.getComment() || ''}`
    const flipParam = senderId === gameData.black ? '' : '&flip=true'
    const flipParam2 = senderId === gameData.black ? '' : '-flip'
    const boardUrl = `https://www.chess.com/dynboard?fen=${encodedFen}&board=graffiti&piece=graffiti&size=3&coordinates=inside${flipParam}`
    try {
      await conn.sendFile(m.chat, boardUrl, '', turn, m, false, {
        mentions: [chessData.currentTurn],
      })
    } catch (error) {
      const boardUrl2 = `https://chessboardimage.com/${encodedFen + flipParam2}.png`
      await conn.sendFile(m.chat, boardUrl2, '', turn, m, false, {
        mentions: [chessData.currentTurn],
      })
    }
    chess.deleteComment()
    return
  }

  if (feature === 'مساعدة') {
    return conn.reply(
      m.chat,
      `*⦿🧞‍♂️⦿*\n\n*اهلا ايها الصديق تانجيرو هنا للمساعدة*\n\n*اوامر لعبة الشطرنج هي*\n\n*.شطرنج انشاء↜لانشاء لعبة شطرنج جديده*\n\n*.شطرنج انضمام↜للأنضمام الي لعبة شطرنج جاريه*\n\n*.شطرنج بدء↜لبدء لعبة الشطرنج الجاريه اذا انضم لعبان اليها*\n\n*.شطرنج حذف↜لحذف لعبة الشطرنج الجاريه*\n\n*.شطرنج (من) (الي) للتحرك في لعبة الشطرنج*`,
      m
    )
  }
  return conn.reply(
    m.chat,
    '*⦿🧞‍♂️⦿*\n\n*امر خاطئ او غير موجود استعمل الامر .شطرنج مساعدة لأظهار قائمة الشرح الخاصه بلعبه*',
    m
  )
}

handler.help = ['chess [from to]', 'chess delete', 'chess join', 'chess start']
handler.tags = ['game']
handler.command = /^(chess|شطرنج)$/i

export default handler
