$(document).ready(function(){
  const dialog1 = "He looked up and said \"don't do that!\" to Max.";
  const dialog2 = 'He looked up and said "don\'t do that!" to Max.';
  console.log(dialog1); // He looked up and said "don't do that!" to Max.
  console.log(dialog1===dialog2); // true
  const dialog3 = `He looked up and said "don't do that!" to Max.`;
  console.log(dialog3); // He looked up and said "don't do that!" to Max.
  console.log(dialog2===dialog3); // true
  const s = "In JavaScript, use \\ as an escape character in strings.";
  const s2 = "JavaScriptの文字列では、\\はエスケープ文字として使われる。";
  console.log(s, s2);
});
