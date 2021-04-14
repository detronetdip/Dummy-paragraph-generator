const str = "abcdefghijklmnopqrstuvwxtz";
const rnd = [
  10,
  22,
  12,
  23,
  13,
  14,
  15,
  11,
  18,
  16,
  17,
  19,
  20,
  21,
  24,
  25,
  29,
  28,
  30,
];
const rd = [4, 5, 3, 6];
let d = ["Muhiyj"];
let string = "";
function g() {
  for (let i = 1; i < 5000; i++) {
    d[i] = $("NULL").getword($("NULL").randomNuml());
  }
}
g();
function $(e) {
  let obj = {
    id: e,
    val: function () {
      let a = document.getElementById(this.id).value;
      return a;
    },
    randomNuml: function () {
      return rd[Math.floor(Math.random() * rd.length)];
    },
    randNum: function () {
      return rnd[Math.floor(Math.random() * rnd.length)];
    },
    getword: function (length) {
      let result = " ";
      const cl = str.length;
      for (let i = 0; i < length; i++) {
        result += str.charAt(Math.floor(Math.random() * cl));
      }
      return result;
    },
    rd: function () {
      return d[Math.floor(Math.random() * d.length)];
    },
    s: function (word) {
      for (let i = 0; i < word; i++) {
        string += this.rd() + " ";
      }
      string += ".";
    },
    createSentence: function (n) {
      for (let i = 0; i < n; i++) {
        this.s(8);
      }
    },
    sp: function () {
      this.createSentence(this.randNum());
      string += "<br><br>";
    },
    init: function () {
      let n=this.randomNuml();
      for (let i = 0; i < n; i++) {
        this.sp();
      }
    },
    add:function(e){
      document.getElementById(this.id).innerHTML=string
    },
    regenerate:function(){
      string='';
      this.init();
    }
  };
  return obj;
}
