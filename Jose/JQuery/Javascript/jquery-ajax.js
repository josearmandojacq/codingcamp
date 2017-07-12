$(document).ready(function(){
  var $body = $("body");
  $.ajax("http://127.0.0.1:8080/Javascript/data.json", {
    complete: function(jqxhr, textStatus){
        var json = jqxhr.responseJson;
        console.info("loaded json", textStatus);
    }
  });

});
