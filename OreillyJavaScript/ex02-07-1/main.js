$(document).ready(function(){
  'use strict';
  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /*ここで描画*/
  paper.view.draw();
  let c;
  for(let x=25; x<400; x+=40){
    for(let y=25; y<400; y+=40){
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }
});
