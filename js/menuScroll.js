$(document).ready(scrollMenu);

function scrollMenu(){
  if(window.innerWidth>600){
    var menuFull=true;
    window.addEventListener("scroll", scrollMenuEvents);
    function scrollMenuEvents(){
      var pos = $(document).scrollTop();
      if(pos>151 && menuFull){
        menuFull=!menuFull;
        $("nav").animate({
          height: "75px",
          opacity: 1
        }, 300);
        $(".logoContainer>a").animate({
          width:"150px"
        }, 300);
      }
      if(pos<150 && !menuFull){
        menuFull=!menuFull;
        $("nav").animate({
          height: "100px",
          opacity: 0.7
        }, 300);
        $(".logoContainer>a").animate({
          width:"200px"
        }, 300);
      }
    }
  }




}
