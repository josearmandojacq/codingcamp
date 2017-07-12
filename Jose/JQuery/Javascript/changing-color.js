$(document).ready(function(){
  var $squares = $("#first div");
  var $squares1 = $("#second div");
  var $button = $("button");
  var $color = true;
  var timer;


  $(document).ready(function(){
      var $color = true;
      $('a').on('click', function(){
        if($color){
          $squares.first().addClass('red');
          $color = false;

    } else if ($('#first div').last().hasClass('red')){

      $color = true;
       $squares.last().removeClass('red');

    } else {

      $('#first .red').next().addClass('red');
      $('#first .red').prev().removeClass('red');

    }

   });
});



/*---------SECOND FUNCTION--------*/

  $button.on("click", function(){

      if($button.text() === "start"){
        $button.text("stop");
        start();

      }else{
        stop();
      }
    });

  function start(){
    timer = setInterval(function(){
      if($color){
        $squares1.first().addClass("red");
        $color = false;
      }else if($squares1.last().hasClass("red")){
        $color = true;
        $squares1.last().removeClass("red");
      }else {
        $("#second .red").next().addClass("red");
        $("#second .red").prev().removeClass("red");
      }
    }, 1000);
  };

  function stop(){
    clearInterval(timer);

    $button.text("start");
  }

});
