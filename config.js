import { watchFile, unwatchFile } from 'fs';
import chalk from 'chalk';
import { fileURLToPath } from 'url';
import cheerio from 'cheerio';
import fetch from 'node-fetch';
import axios from 'axios';
import moment from 'moment-timezone';

global.owner = [['201115618853', '♯ЅᗩFᏒOT꙯', true], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853'], ['201115618853']];
global.mods = [];
global.prems = [];

//BETA: Si quiere evitar escribir el número que será bot en la consola, agregué desde aquí entonces:
//Sólo aplica para opción 2 (ser bot con código de texto de 8 digitos)
global.botNumberCode = ""; //Ejemplo: +59309090909
global.confirmCode = "";

//---------[ APIS GLOBAL ]---------

global.openai_key = 'sk-...OzYy'; /* Consigue tu ApiKey en este enlace: https://platform.openai.com/account/api-keys */
global.openai_org_id = 'HITjoN7H8pCwoncEB9e3fSyW'; /* Consigue tu ID de organizacion en este enlace: https://platform.openai.com/account/org-settings */
global.Key360 = ['964f-0c75-7afc']; //key de violetics
global.keysZens = ['LuOlangNgentot', 'c2459db922', '37CC845916', '6fb0eff124', 'hdiiofficial', 'fiktod', 'BF39D349845E', '675e34de8a', '0b917b905e6f'];
global.keysxxx = global.keysZens[Math.floor(global.keysZens.length * Math.random())];
global.keysxteammm = ['29d4b59a4aa687ca', '5LTV57azwaid7dXfz5fzJu', 'cb15ed422c71a2fb', '5bd33b276d41d6b4', 'HIRO', 'kurrxd09', 'ebb6251cc00f9c63'];
global.keysxteam = global.keysxteammm[Math.floor(global.keysxteammm.length * Math.random())];
global.keysneoxrrr = ['5VC9rvNx', 'cfALv5'];
global.keysneoxr = global.keysneoxrrr[Math.floor(global.keysneoxrrr.length * Math.random())];
global.lolkeysapi = "GataDiosV2";
global.itsrose = ['4b146102c4d500809da9d1ff'];
global.baileys = '@whiskeysockets/baileys';

global.APIs = {
  xteam: 'https://api.xteam.xyz',
  dzx: 'https://api.dhamzxploit.my.id',
  lol: 'https://api.lolhuman.xyz',
  violetics: 'https://violetics.pw',
  neoxr: 'https://api.neoxr.my.id',
  zenzapis: 'https://api.zahwazein.xyz',
  akuari: 'https://api.akuari.my.id',
  akuari2: 'https://apimu.my.id',
  fgmods: 'https://api-fgmods.ddns.net',
  botcahx: 'https://api.botcahx.biz.id',
  ibeng: 'https://api.ibeng.tech/docs',
  rose: 'https://api.itsrose.site',
  popcat : 'https://api.popcat.xyz',
  xcoders : 'https://api-xcoders.site'
};

global.APIKeys = {
  'https://api.xteam.xyz': global.keysxteam,
  'https://api.lolhuman.xyz': global.lolkeysapi,
  'https://api.neoxr.my.id': global.keysneoxr,
  'https://violetics.pw': 'beta',
  'https://api.zahwazein.xyz': global.keysxxx,
  'https://api-fgmods.ddns.net': 'fg-dylux',
  'https://api.botcahx.biz.id': 'Admin',
  'https://api.ibeng.tech/docs': 'tamvan',
  'https://api.itsrose.site': 'Rs-Zeltoria',
  'https://api-xcoders.site': 'Frieren'
};

global.cheerio = cheerio;
global.fs = require('fs');
global.fetch = fetch;
global.axios = axios;
global.moment = moment;

//------------------------[ Stickers ]-----------------------------

global.packname = 'ₛₐfᵣₒₜ bₒₜ';
global.author = '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿';

//------------[ Versión | Nombre | cuentas ]------------

global.wm = '𝙎𝙖𝙛𝙧𝙤𝙩-𝙈𝘿';
global.botname = 'ₛₐfᵣₒₜ bₒₜ';
global.vs = '1.9.5';
global.yt = 'https://youtube.com/@SAFROT?si=N5KKoTotLOgpG6-z';
global.tiktok = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY';
global.md = 'https://www.atom.bio/safrotbob-376';
global.fb = 'https://www.facebook.com/safrotbob?mibextid=ZbWKwL';
global.face = 'https://www.facebook.com/safrotbob?mibextid=ZbWKwL';

global.nna = 'https://whatsapp.com/channel/0029VaeXAKJAjPXLKGuZSr46'; //Update
global.nn = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //Grupo 1
global.nnn = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //Grupo 2
global.nnnt = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //Grupo del Colaboracion
global.nnnt2 = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; // Grupo COL 2
global.nnntt = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //Grupo COL 3
global.nnnttt = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //enlace lolibot
global.nnntttt = 'https://chat.whatsapp.com/ClNQxTnKyFx6eZnJcvqsPY'; //Grupo ayuda sobre el bot
global.bot = 'Wa.me/201115618853';
global.asistencia = global.fb;
global.redes = [global.nna, global.yt, global.nn, global.md, global.tiktok, global.fb, global.nnn, global.face];

//------------------------[ Info | Datos ]---------------------------

global.wait = 'Calmao pa estoy procesando😎\n\n> *❗Por favor no hacer spam👏❗*';
global.waitt = '*⌛ _Cargando..._ ▬▬▭▭▭*';
global.waittt = '*⌛ _Cargando..._ ▬▬▬▬▭▭*';
global.waitttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▭*';
global.waittttt = '*⌛ _Cargando..._ ▬▬▬▬▬▬▬*';
global.rg = '『✅ 𝙍𝙀𝙎𝙐𝙇𝙏𝘼𝘿𝙊𝙎 ✅』\n\n';
global.resultado = global.rg;
global.ag = '『⚠️ 𝘼𝘿𝙑𝙀𝙍𝙏𝙀𝙉𝘾𝙄𝘼 ⚠️』\n\n';
global.advertencia = global.ag;
global.iig = '『❕ 𝙄𝙉𝙁𝙊𝙍𝙈𝘼𝘾𝙄𝙊𝙉 』\n\n';
global.informacion = global.iig;
global.fg = '『❌ 𝙀𝙍𝙍𝙊𝙍 ❌』\n\n';
