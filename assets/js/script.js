const _0x7680c0 = _0x147c;
!(function (t, n) {
  const r = _0x147c,
    c = _0x296d();
  for (;;)
    try {
      if (
        446256 ===
        (-parseInt(r(361)) / 1) * (parseInt(r(340)) / 2) +
          -parseInt(r(353)) / 3 +
          parseInt(r(339)) / 4 +
          (parseInt(r(346)) / 5) * (-parseInt(r(342)) / 6) +
          -parseInt(r(351)) / 7 +
          -parseInt(r(358)) / 8 +
          (-parseInt(r(343)) / 9) * (-parseInt(r(345)) / 10)
      )
        break;
      c.push(c.shift());
    } catch (t) {
      c.push(c.shift());
    }
})();
const str = _0x7680c0(350),
  rnd = [
    10, 22, 12, 23, 13, 14, 15, 11, 18, 16, 17, 19, 20, 21, 24, 25, 29, 28, 30,
  ],
  rd = [4, 5, 3, 6];
let d = [_0x7680c0(354)],
  string = "";

function g() {
  const t = _0x7680c0;
  for (let n = 1; n < 5e3; n++) d[n] = $("NULL").getword($(t(355))[t(357)]());
}

function _0x147c(t, n) {
  const r = _0x296d();
  return (_0x147c = function (t, n) {
    return r[(t -= 338)];
  })(t, n);
}

function $(t) {
  return {
    id: t,
    val: function () {
      const t = _0x147c;
      return document[t(344)](this.id)[t(348)];
    },
    randomNuml: function () {
      const t = _0x147c;
      return rd[Math[t(362)](Math[t(352)]() * rd[t(356)])];
    },
    randNum: function () {
      const t = _0x147c;
      return rnd[Math.floor(Math[t(352)]() * rnd[t(356)])];
    },
    getword: function (t) {
      const n = _0x147c;
      let r = " ";
      const c = str[n(356)];
      for (let e = 0; e < t; e++)
        r += str[n(359)](Math.floor(Math[n(352)]() * c));
      return r;
    },
    rd: function () {
      const t = _0x147c;
      return d[Math[t(362)](Math[t(352)]() * d[t(356)])];
    },
    s: function (t) {
      for (let n = 0; n < t; n++) string += this.rd() + " ";
      string += ".";
    },
    createSentence: function (t) {
      for (let n = 0; n < t; n++) this.s(8);
    },
    sp: function () {
      const t = _0x147c;
      this[t(341)](this[t(349)]()), (string += t(347));
    },
    init: function () {
      let t = this.randomNuml();
      for (let n = 0; n < t; n++) this.sp();
    },
    add: function (t) {
      const n = _0x147c;
      document[n(344)](this.id)[n(338)] = string;
    },
    regenerate: function () {
      (string = ""), this[_0x147c(360)]();
    },
  };
}

function _0x296d() {
  const t = [
    "674guHWDU",
    "createSentence",
    "116964djzDXQ",
    "412569APeXAt",
    "getElementById",
    "460qaBqTV",
    "90xHrBNO",
    "<br><br>",
    "value",
    "randNum",
    "abcdefghijklmnopqrstuvwxtz",
    "3555769lCGNlD",
    "random",
    "1830189wlckey",
    "Muhiyj",
    "NULL",
    "length",
    "randomNuml",
    "6015168wkDTpb",
    "charAt",
    "init",
    "335PgNKmX",
    "floor",
    "innerHTML",
    "2685132YINjph",
  ];
  return (_0x296d = function () {
    return t;
  })();
}
g();
