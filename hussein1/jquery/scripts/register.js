$(document).ready(function() {
    
    $('#txtEmail').change(function() {
        var sEmail = $('#txtEmail').val();
        if ($.trim(sEmail).length == 0) {
            $('#text').text('Please enter valid email address');
        }
        if (validateEmail(sEmail)) {
            $('#text').text('Valid Email').css('color','green').css('font-size', '30px');
            $('#conf-email').show();

        }
        else {
            $('#text').text('Invalid Email').css('color','red').css('font-size', '30px');
        }
        
    });
        $('#conf-email').hide();
        $('#first-sec-name').hide();
        $('#family-sec-name').hide();
    
    $('#txtEmailCon').change(function() {
         var sEmail = $('#txtEmail').val();
         var cEmail = $('#txtEmailCon').val();
         if ($.trim(cEmail) == $.trim(sEmail)) {
            $('#textCon').text('confirm Email').css('color','green').css('font-size', '30px');
            $('#first-sec-name').show();
            $('#family-sec-name').show();
        }else{
            $('#textCon').text('not the same email');
        }

    });
    $('#check-input').on('click',function(){
        
        if(this.checked){
            
            $('#submitBtn').attr("disabled",false);
        
        }else{
            
            $('#submitBtn').attr("disabled",true);
        }
    });
});

function validateEmail(sEmail) {
    var filter =  /^[\w\-\.\+]+\@[a-zA-Z0-9\.\-]+\.[a-zA-z0-9]{2,4}$/;
    if (filter.test(sEmail)) {
        return true;
    }
    else {
        return false;
    }
}

