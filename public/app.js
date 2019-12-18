$(document).ready(function(){
    $("input[type='button']").click(function(){
        var radioValue = $("input[name='money']:checked").val();
        if(radioValue){
            alert("Your are a - " + radioValue);
        }
    });
});