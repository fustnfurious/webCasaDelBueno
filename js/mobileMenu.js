$(document).ready(mobileMenu);

function mobileMenu(){
  var menuOpen=false;


  $(".menuIcon").click(toggleMenu);
  function toggleMenu(){
    $(".menuContainer").slideToggle();
    if(menuOpen){

      closeMenuIcon();
    } else {
      openMenuIcon();
    }
    menuOpen=!menuOpen;
  }

  function closeMenuIcon(){
    $(".line:nth-child(1)").css({
      transform: 'rotate(' + 0 + 'deg)'
    });
    $(".line:nth-child(3)").css({
      transform: 'rotate(' + 0 + 'deg)'
    });

    $(".line:nth-child(3)").animate({
      bottom: "0px"
    }, 400);
    $(".line:nth-child(1)").animate({
      top: "0px"
    }, 400, "swing", function(){
      $(".line:nth-child(2)").show();
    });


  }
  function openMenuIcon(){
    $(".line:nth-child(3)").animate({
      bottom: "9px"
    }, 400, "swing", function(){
        $(".line:nth-child(2)").hide();
        $(".line:nth-child(3)").css({
        transform: 'rotate(' + 45 + 'deg)'
      });
    });
    $(".line:nth-child(1)").animate({
      top: "9px"
    }, 400, "swing", function(){
        $(".line:nth-child(1)").css({
        transform: 'rotate(' + -45 + 'deg)'
      });
    });
  }
}
