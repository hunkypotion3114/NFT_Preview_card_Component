$( "a" ).hover(
    function(){
      $( this ).addClass( "hover" );
    },function(){
      $( this ).removeClass( "hover" );
    }
);

$(".layer").hover(
  function(){
    $(this).addClass("layer_hover");
    $(".ethereum_img").addClass("img_hover");
    $(".eye").addClass("eye_hover");
  },
  function(){
    $(this).removeClass("layer_hover");
    $(".ethereum_img").removeClass("img_hover");
    $(".eye").removeClass("eye_hover");
  }
)
