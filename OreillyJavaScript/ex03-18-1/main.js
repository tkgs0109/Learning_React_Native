$(document).ready(function(){
  const a = parseInt("16 volts", 10); //"volts"は無視。16は10進数として解釈される
  console.log(a); // 16

  const b = parseInt("3a", 16); // 3aは16進数として解釈
  console.log(b); // 58

  const c = parseFloat("15.5 kph"); //" kph"は無視。parseFloatは常に10進数として解釈
  console.log(c); // 15.5

  const d = new Date(); // 現在の日時
  console.log(d); // 2016-08-08T08:45:46.332Z

  const ts = d.valueOf(); // UTCの1970年1月1日午前0時からのミリ秒数
  console.log(ts); // 1470645946332

  const e = true;
  const f = false;
  const n = e ? 1 : 0; /* bが真（に相当する値）のときは1、それ以外は0になる。5章参照 */
  console.log(n); // 1
  const m = f ? 1 : 0;
  console.log(m); // 0

  const n1 = 0;
  const b0 = !n1;
  const b1 = !!n1;
  const b2 = Boolean(n1);
  console.log(n1); // 0
  console.log(b0); // true
  console.log(b1); // false
  console.log(b2); // false
  const m1 = 1;
  const c0 = !m1;
  const c1 = !!m1;
  const c2 = Boolean(m1);
  console.log(m1); // 1
  console.log(c0); // fasle
  console.log(c1); // true
  console.log(c2); // true
});
