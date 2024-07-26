import _0x3f611b from "node-fetch";
const handler = _0x34e1be => _0x34e1be;
handler.before = async _0x134797 => {
  const _0x1c0499 = global.db.data.chats[_0x134797.chat];
  if (_0x1c0499.simi) {
    if (/^.*false|disnable|(turn)?off|0/i.test(_0x134797.text)) {
      return;
    }
    let _0xfa8511 = _0x134797.text;
    try {
      const _0x12eb56 = await _0x3f611b("https://api.simsimi.net/v2/?text=" + encodeURIComponent(_0xfa8511) + "&lc=ar");
      const _0x393c3d = await _0x12eb56.json();
      if (_0x393c3d.success == "No sé lo qué estás diciendo. Por favor enseñame.") {
        return _0x134797.reply("" + lol);
      }
      await _0x134797.reply(_0x393c3d.success);
    } catch {
      if (_0xfa8511.includes("اهلا")) {
        _0xfa8511 = _0xfa8511.replace("اهلا", "Hello");
      }
      if (_0xfa8511.includes("اهلا")) {
        _0xfa8511 = _0xfa8511.replace("اهلا", "hello");
      }
      if (_0xfa8511.includes("هاي")) {
        _0xfa8511 = _0xfa8511.replace("هاي", "HELLO");
      }
      const _0x5f4560 = await _0x3f611b("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=en&dt=t&q=" + _0xfa8511);
      const _0x2b1f77 = await _0x5f4560.json();
      const _0x1d373d = _0x134797.pushName || "1";
      const _0x38137a = await _0x3f611b("http://api.brainshop.ai/get?bid=153868&key=rcKonOgrUFmn5usX&uid=" + _0x1d373d + "&msg=" + _0x2b1f77[0][0][0]);
      const _0x11987f = await _0x38137a.json();
      const _0x238b54 = await _0x3f611b("https://translate.googleapis.com/translate_a/single?client=gtx&sl=auto&tl=es&dt=t&q=" + _0x11987f.cnt);
      const _0x323531 = await _0x238b54.json();
      await _0x134797.reply(_0x323531[0][0][0]);
    }
    return true;
  }
  return true;
};
export default handler;
