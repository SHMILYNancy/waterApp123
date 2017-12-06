window.onload=function () {
  var scroll=document.getElementById('scroll');
  var sWidth=scroll.clientWidth;
  var imgs=document.querySelectorAll('#scroll>a>img');
  for(var index=0;index<imgs.length;index++){
    imgs[index].style.left=index*sWidth+'px';
  }
  var page=0;
  function moveLeft() {
    page++;
    if(page>imgs.length-1){
      page=imgs.length-1;
    }
    move();
  }
  function move() {
    for(var index=0;index<imgs.length;index++){
      imgs[index].style.left=(index-page)*sWidth+'px';
      setTimeout(function () {
        if(page===imgs.length-1){
          page=0;
          for(var index=0;index<imgs.length;index++){
            imgs[index].style.transition='none';
          }
          for(var index=0;index<imgs.length;index++){
            imgs[index].style.left=(index-page)*sWidth+'px';
          }
          setTimeout(function () {
            for(var index=0;index<imgs.length;index++){
              imgs[index].style.transition='left .7s ease-in-out';
            }
          },100)
        }
      },700)
    }
  }
  var timer=setInterval(moveLeft,3000);


};
