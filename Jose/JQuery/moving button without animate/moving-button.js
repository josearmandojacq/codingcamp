var button = $("#button");


$(document).ready(function(){
  button.on("click", function(){
    if(button.text() === "X"){
    button.addClass("animate");
    button.text("Y");
  }else{
    button.addClass("animate1");
    button.text("X");
  }
  });
  
});
