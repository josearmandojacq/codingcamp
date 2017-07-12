
$(document).ready(function(){
  var div = $("div");
  $("button").on("mouseover", function(){
    if(div.hasClass("animate")){
      div.removeClass("animate");

    }else{
      div.addClass("animate");
    }
  })
  .on("click", function(){
    alert("Yes you did it");
  });


});
