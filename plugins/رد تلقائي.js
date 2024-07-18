let handler = m => m; 

handler.all = async function (m) { 
    let chat = global.db.data.chats[m.chat]; 
    let responses; 
    
    if (/^تست$/i.test(m.text)) { 
        responses = [ '*شغال يسطا🥂*' ]; 
    } else if (/^السلام عليكم|سلام عليكم ورحمه الله وبركاته|سلام عليكم|السلام عليكم ورحمه الله وبركاته$/i.test(m.text)) { 
        responses = [ '*🧚🏼‍♂️وعليكم السلام*' ]; 
    } else if (/^سفروت|سفرووت$/i.test(m.text)) { 
        responses = [ '*قلب سفروت🧚🏼‍♂️*', '*معاك🧚🏼‍♂️*', '*اي يسطا🧚🏼‍♂️*', '*قلبه🦦*' ]; 
    } else if (/^سفروت مين عمك|سفروت عمك$/i.test(m.text)) { 
        responses = [ '*سفروت اككيد😩❤‍🔥*' ]; 
    } else if (/^سفروت انت مرتبط$/i.test(m.text)) { 
        responses = [ '*لا ولا أريد الارتباط🏌🏻‍♂💔*' ]; 
    } else if (/^سفروت بتحبني|بوت بتحبني$/i.test(m.text)) { 
        responses = [ '*اموت فيك 🌚💔*', '*اكرهك🙂💔*', '*احبك نص حب 🙃💔*' ]; 
    } else if (/^سفروت تكرهني\?$/i.test(m.text)) { 
        responses = [ '*ماعاش من يكرهكك حبي 🙁*', '*لا بس لا تتعب نفسك لحبك🫥*', '*ااي اكرهك🙄*' ]; 
    } else if (/^هاي|هالو$/i.test(m.text)) { 
        responses = [ '*منور🌚♥*' ]; 
    } else if (/^بحبك/i.test(m.text)) { 
        responses = [ '*بحبك اكتر🌚❤*', '*ونا كمان بحبني🦦🤍*', '*ونا كمان يحته😹🤍*' ]; 
    } else if (/^عيب$/i.test(m.text)) { 
        responses = [ '*العيب في الجيب😹*' ]; 
    } else if (/^احبك$/i.test(m.text)) { 
        responses = [ '*مـي تو 🙂🫀*' ]; 
    } else if (/^اوك|اوكي|اوككي|اوكيي|اوكك$/i.test(m.text)) { 
        responses = [ '*اوك*' ]; 
    } else if (/^تحبني$/i.test(m.text)) { 
        responses = [ '🌚♥اكيد' ]; 
    } else if (/^اهلا$/i.test(m.text)) { 
        responses = [ '*اهلا♥*' ]; 
    } else if (/^مساء الخير$/i.test(m.text)) { 
        responses = [ 'مساء الخير' ]; 
    } else if (/^صباح الخير$/i.test(m.text)) { 
        responses = [ '*صباح الورد🧚🏼‍♂️*', '*صباح الفل🧚🏼‍♂️*', '*صباح العسل🧚🏼‍♂️*', '*احلي صباح🧚🏼‍♂️*' ]; 
    } else if (/^اوامر$/i.test(m.text)) { 
        responses = [ '*لا تنسى ال .*' ]; 
    } else if (/^بوت$/i.test(m.text)) { 
        responses = [ '*اسمي سفروت يسطا🧚🏼‍♂️*', '*اسمي سفروت🧚🏼‍♂️*' ]; 
    } else if (/^حد صاحي$/i.test(m.text)) { 
        responses = [ '*انا😹*' ]; 
    }
    
    if (responses) { 
        let randomIndex = Math.floor(Math.random() * responses.length); 
        conn.reply(m.chat, responses[randomIndex], m); 
    }
    
    return true; 
}; 

export default handler;
