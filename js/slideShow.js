$(document).ready(main);

function main(){
  var current=1;
  for(i=1; i<4; i++){
    if(i!=current){
      $(".slides img:nth-child("+i+")").hide();
      $(".slidesTextContainer div:nth-child("+i+")").hide();
    }
  }
  $("#1stCircle .circleAux").css({opacity: 1});
  var inter = setInterval(function(){
    changeSlide(current+1);
    current=current+1;
    if(current==3){
      current=0;
    }
  }, 5000);
  $(".slidesCircle").click(function(){
    id=Number(this.id.charAt(0));
    changeSlide(id);
  });
  function changeSlide(num){
    ant=num-1;
    if(ant==0){
      ant=3;
    }
    $(".slides img:nth-child("+ant+")").hide();
    $(".slidesTextContainer div:nth-child("+ant+")").hide();
    $(".slides img:nth-child("+num+")").fadeIn(800);
    $(".slidesTextContainer div:nth-child("+num+")").fadeIn(800);
    colorCurrentCircle(num, ant);
  }

}

function colorCurrentCircle(num, current){
  $(".slidesCounter div:nth-child("+num+")").children().animate({opacity: 1}, 300);
  $(".slidesCounter div:nth-child("+current+")").children().animate({opacity: 0}, 300);
}
