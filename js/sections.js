
if(window.innerWidth>600){
  $(document).ready(sections);
}


function sections(){
  var current=1;
  var posSection1 = document.querySelector('#section1').getBoundingClientRect().top-400;
  var posSection2 = document.querySelector('#section2').getBoundingClientRect().top-400;
  var posSection3 = document.querySelector('#section3').getBoundingClientRect().top-400;

  function hideThings(){
    $(".sectionRight").css("opacity", "0");
    $(".sectionRight").css("left","80px");
    $(".sectionLeft").css("opacity", "0");
    $(".sectionLeft").css("right","80px");
  }

  hideThings();

  window.addEventListener("scroll", scrollEffects);
  function scrollEffects(){
    var pos = $(document).scrollTop();
    //--------sections
    if(pos>posSection1){
      displaySection(1);
    }
    if(pos>posSection2){
      displaySection(2);

    }
    if(pos>posSection3){
      displaySection(3);
    }
  }

  function displaySection(num){
    $("#section"+num+" > .sectionRight").animate({
      left:0,
      opacity: 1
    }, 800, "swing");
    $("#section"+num+" > .sectionLeft").animate({
      right:0,
      opacity: 1
    }, 800, "swing");
  }

  function switchReview(current, next){
    var nextReview = "<img id=\""+next+"review\" src=\"media/reviews/"+next+"review.png\" style=\"opacity: 0;\">";
    $(".slideshowReviewsHolder").append(nextReview);
    $("#"+current+"review").animate({
      opacity: 0
    }, 1000);
    $("#"+next+"review").animate({
      opacity: 1
    }, 1000);
    setTimeout(function(){
      $("#"+current+"review").remove();
    }, 1000);
  }

  var intReview = setInterval(function(){
    next = (current+1);
    if(next==6){
      next=1;
    }
    switchReview(current, next);
    current=next;
  }, 4000);

  $(".arrowRightHolder").click(function(){
    clearInterval(intReview);
    next = (current+1);
    if(next==6){
      next=1;
    }
    switchReview(current, next);
    current=next;
  });
  $(".arrowLeftHolder").click(function(){
    clearInterval(intReview);
    next = (current-1);
    if(next==0){
      next=5;
    }
    switchReview(current, next);
    current=next;
  });
}
