$(document).ready(function(){
  const currentTemp = 13.5;
  const result1 = 3 + '30'; // 3は文字列に変換され、結果は文字列の'330'になる
  const result2 = 3 * '30'; // '30'は数値に変換され、結果は数値の90になる
  let multiline;

  multiline = "1行目\
  2行目";
  console.log(multiline); // 1行目2行目

  multiline = "1行目\n\
  2行目";
  console.log(multiline);

  multiline = `1行目
  2行目`
  console.log(multiline);

  multiline = "1行目\n" +
  "2行目\n" +
  "3行目";
  console.log(multiline);

  multiline = '現在の温度は：' +
  `${currentTemp}℃です。\n` +
  "もうじき暖かくなるはずですから少々お待ちください。";
  console.log(multiline);

  console.log(result1); // 330
  console.log(result2); // 90
});
